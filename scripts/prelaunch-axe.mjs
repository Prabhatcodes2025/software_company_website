import fs from "node:fs/promises";
import path from "node:path";
import AxeBuilder from "@axe-core/playwright";
import { chromium } from "playwright-core";

const baseUrl = process.env.AUDIT_BASE_URL ?? "http://localhost:3000";
const chromePath = process.env.CHROME_PATH ?? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const outputDirectory = path.resolve("audit/prelaunch");
const routes = [
  ["home", "/"],
  ["service-web-development", "/services/web-development"],
  ["industries", "/industries"],
  ["case-ongole-property", "/case-studies/ongole-property"],
  ["contact", "/contact"],
];
const devices = [
  ["desktop", { width: 1440, height: 900 }],
  ["mobile", { width: 390, height: 844 }],
];

await fs.mkdir(outputDirectory, { recursive: true });
const browser = await chromium.launch({ executablePath: chromePath, headless: true });
const audits = [];
const interactions = [];

async function analyze(page, device, routeName, state = "default") {
  const result = await new AxeBuilder({ page }).analyze();
  audits.push({
    device,
    route: routeName,
    state,
    violations: result.violations.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      help: violation.help,
      helpUrl: violation.helpUrl,
      nodes: violation.nodes.map((node) => ({ target: node.target, html: node.html, failureSummary: node.failureSummary })),
    })),
    passes: result.passes.length,
    incomplete: result.incomplete.map((item) => ({ id: item.id, impact: item.impact, nodes: item.nodes.length })),
  });
}

try {
  for (const [device, viewport] of devices) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();

    for (const [routeName, route] of routes) {
      const consoleMessages = [];
      const onConsole = (message) => {
        if (["warning", "error"].includes(message.type())) consoleMessages.push({ type: message.type(), text: message.text() });
      };
      page.on("console", onConsole);
      await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });

      if (routeName === "case-ongole-property") {
        await page.locator(".project-gallery").scrollIntoViewIfNeeded();
        await page.waitForFunction(() => [...document.querySelectorAll(".project-gallery img")].every((image) => image.complete && image.naturalWidth > 0));
      }

      await analyze(page, device, routeName);

      if (routeName === "home" && device === "desktop") {
        const services = page.getByRole("button", { name: "Services", exact: true });
        await services.click();
        await analyze(page, device, routeName, "services-menu-open");
        const servicesOpen = await services.getAttribute("aria-expanded");
        await page.getByRole("heading", { name: /Digital products built/i }).click();
        const servicesOutsideClosed = await services.getAttribute("aria-expanded");

        const insights = page.getByRole("button", { name: "Insights", exact: true });
        await insights.click();
        await analyze(page, device, routeName, "insights-menu-open");
        const insightsOpen = await insights.getAttribute("aria-expanded");
        await page.keyboard.press("Escape");
        const insightsEscapeClosed = await insights.getAttribute("aria-expanded");

        await page.reload({ waitUntil: "networkidle" });
        await page.keyboard.press("Tab");
        await page.keyboard.press("Tab");
        await page.keyboard.press("Tab");
        const focused = await page.locator(":focus").evaluate((element) => {
          const style = getComputedStyle(element);
          return { text: element.textContent?.trim(), outlineStyle: style.outlineStyle, outlineWidth: style.outlineWidth };
        });
        await page.getByRole("button", { name: "Services", exact: true }).press("Enter");
        const keyboardOpen = await page.getByRole("button", { name: "Services", exact: true }).getAttribute("aria-expanded");
        await page.keyboard.press("Escape");
        const keyboardClosed = await page.getByRole("button", { name: "Services", exact: true }).getAttribute("aria-expanded");
        const focusAfterEscape = await page.locator(":focus").textContent();
        interactions.push({ device, servicesOpen, servicesOutsideClosed, insightsOpen, insightsEscapeClosed, focused, keyboardOpen, keyboardClosed, focusAfterEscape: focusAfterEscape?.trim() });
      }

      if (routeName === "home" && device === "mobile") {
        const menu = page.getByRole("button", { name: "Open navigation" });
        await menu.click();
        await analyze(page, device, routeName, "mobile-navigation-open");
        const menuOpen = await page.locator(".menu-toggle").getAttribute("aria-expanded");
        const focusedLink = await page.locator(":focus").getAttribute("href");
        await page.keyboard.press("Escape");
        const menuClosed = await page.locator(".menu-toggle").getAttribute("aria-expanded");
        const focusAfterEscape = await page.locator(":focus").getAttribute("aria-label");
        interactions.push({ device, menuOpen, focusedLink, menuClosed, focusAfterEscape });
      }

      interactions.push({ device, route: routeName, consoleMessages });
      page.off("console", onConsole);
    }
    await context.close();
  }
} finally {
  await browser.close();
}

const violationCount = audits.reduce((total, audit) => total + audit.violations.reduce((count, violation) => count + violation.nodes.length, 0), 0);
const result = { generatedAt: new Date().toISOString(), baseUrl, violationCount, audits, interactions };
await fs.writeFile(path.join(outputDirectory, "axe-results.json"), JSON.stringify(result, null, 2));
console.log(JSON.stringify({ violationCount, audits: audits.map(({ device, route, state, violations, incomplete }) => ({ device, route, state, violations: violations.map((item) => `${item.id}:${item.nodes.length}`), incomplete: incomplete.map((item) => `${item.id}:${item.nodes}`) })), interactions }, null, 2));
