import fs from "node:fs/promises";
import path from "node:path";
import AxeBuilder from "@axe-core/playwright";
import { chromium } from "playwright-core";

const label = process.argv[2] ?? "before";
const base = "http://127.0.0.1:3013";
const output = path.resolve("audit/homepage-deep-audit", label);
const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const viewports = [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "tablet-1024", width: 1024, height: 900 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "mobile-320", width: 320, height: 760 },
];

await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({ executablePath: chrome, headless: true });
const results = [];

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    await page.addInitScript(() => {
      window.__layoutShiftScore = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) window.__layoutShiftScore += entry.value;
        }
      }).observe({ type: "layout-shift", buffered: true });
    });
    const response = await page.goto(base, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.locator(".corrective-hero").waitFor({ state: "visible" });
    await page.evaluate(async () => {
      await document.fonts.ready;
      for (const image of document.images) {
        image.scrollIntoView({ block: "center" });
        await Promise.race([image.decode().catch(() => undefined), new Promise(resolve => setTimeout(resolve, 800))]);
      }
      scrollTo(0, 0);
    });
    await page.locator(".client-logo-marquee").scrollIntoViewIfNeeded();
    await page.waitForFunction(() => [...document.querySelectorAll(".client-logo-group:first-child img")].every(image => image.complete && image.naturalWidth > 0), null, { timeout: 10000 }).catch(() => undefined);
    await page.evaluate(() => scrollTo(0, 0));
    await page.locator('.floating-controls[data-scrolled="false"]').waitFor({ state: "attached", timeout: 3000 }).catch(() => undefined);

    const metrics = await page.evaluate(() => {
      const rect = (node) => {
        const value = node?.getBoundingClientRect();
        return value ? { x: value.x, y: value.y, width: value.width, height: value.height, right: value.right, bottom: value.bottom } : null;
      };
      const style = (node) => {
        if (!node) return null;
        const value = getComputedStyle(node);
        return { fontFamily: value.fontFamily, fontSize: value.fontSize, fontWeight: value.fontWeight, lineHeight: value.lineHeight, color: value.color, textAlign: value.textAlign };
      };
      const visible = (node) => Boolean(node && rect(node).width && rect(node).height && getComputedStyle(node).visibility !== "hidden");
      const floating = [...document.querySelectorAll(".floating-quote, .whatsapp-float, .back-to-top, iframe")]
        .filter(visible)
        .map(node => ({ name: node.className || node.tagName, rect: rect(node) }));
      const overlaps = [];
      for (let i = 0; i < floating.length; i += 1) for (let j = i + 1; j < floating.length; j += 1) {
        const a = floating[i].rect; const b = floating[j].rect;
        if (a.x < b.right && a.right > b.x && a.y < b.bottom && a.bottom > b.y) overlaps.push([floating[i].name, floating[j].name]);
      }
      return {
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        h1: [...document.querySelectorAll("h1")].map(node => node.textContent.trim()),
        headings: [...document.querySelectorAll("h1,h2,h3")].map(node => ({ tag: node.tagName, text: node.textContent.trim() })),
        bodyStyle: style(document.body),
        heroHeadingStyle: style(document.querySelector(".corrective-hero h1")),
        heroParagraphStyle: style(document.querySelector(".corrective-dek")),
        heroHeadingRect: rect(document.querySelector(".corrective-hero h1")),
        heroParagraphRect: rect(document.querySelector(".corrective-dek")),
        heroCtaInFirstViewport: rect(document.querySelector(".corrective-actions"))?.bottom <= innerHeight,
        viewport: { width: innerWidth, height: innerHeight },
        document: { width: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight },
        horizontalOverflow: document.documentElement.scrollWidth > innerWidth,
        brokenImages: [...document.images].filter(image => !image.closest('[aria-hidden="true"]') && (!image.complete || image.naturalWidth === 0)).map(image => image.src),
        missingImageAlts: [...document.images].filter(image => !image.hasAttribute("alt")).map(image => image.src),
        floating,
        floatingOverlaps: overlaps,
        cls: window.__layoutShiftScore ?? null,
        landmarks: { main: document.querySelectorAll("main").length, nav: document.querySelectorAll("nav").length, footer: document.querySelectorAll("footer").length },
      };
    });

    const axe = await new AxeBuilder({ page }).analyze();
    await page.screenshot({ path: path.join(output, `${viewport.name}-full.jpg`), fullPage: true, type: "jpeg", quality: 82 });
    await page.locator(".corrective-hero").screenshot({ path: path.join(output, `${viewport.name}-hero.png`) });

    const interactions = {};
    if (viewport.width >= 1024) {
      const services = page.getByRole("button", { name: "Services", exact: true });
      await services.click();
      interactions.servicesMenuOpens = await services.getAttribute("aria-expanded") === "true";
      await page.keyboard.press("Escape");
      interactions.escapeClosesMenu = await services.getAttribute("aria-expanded") === "false";
    } else {
      const menu = page.locator(".menu-toggle");
      await menu.click();
      interactions.mobileMenuOpens = await menu.getAttribute("aria-expanded") === "true";
      interactions.firstLinkFocused = await page.locator(":focus").getAttribute("href") === "/services";
      await page.keyboard.press("Escape");
      interactions.escapeClosesMenu = await menu.getAttribute("aria-expanded") === "false";
    }
    const quoteButton = page.getByRole("button", { name: /Get a Free Quote/i }).first();
    await quoteButton.scrollIntoViewIfNeeded();
    await quoteButton.click();
    const dialog = page.getByRole("dialog");
    await dialog.waitFor({ state: "visible", timeout: 5000 }).catch(() => undefined);
    interactions.quoteModalOpens = await dialog.isVisible();
    interactions.quoteModalOpenAttribute = await dialog.getAttribute("open") !== null;
    interactions.quoteModalNamed = Boolean(await dialog.getAttribute("aria-labelledby"));
    await page.keyboard.press("Escape");
    interactions.quoteModalCloses = !(await dialog.isVisible().catch(() => false));

    results.push({
      ...viewport,
      status: response?.status(),
      metrics,
      axe: { violations: axe.violations.map(item => ({ id: item.id, impact: item.impact, nodes: item.nodes.map(node => ({ target: node.target, html: node.html, failureSummary: node.failureSummary })), help: item.help })) },
      interactions,
    });
    await context.close();
  }
} finally {
  await browser.close();
}

await fs.writeFile(path.join(output, "results.json"), JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2));
console.log(JSON.stringify(results.map(item => ({
  viewport: item.name,
  status: item.status,
  overflow: item.metrics.horizontalOverflow,
  h1Count: item.metrics.h1.length,
  brokenImages: item.metrics.brokenImages.length,
  axeViolations: item.axe.violations,
  interactions: item.interactions,
})), null, 2));
