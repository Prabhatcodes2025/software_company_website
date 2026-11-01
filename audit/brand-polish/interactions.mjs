import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright-core";

const base = "http://127.0.0.1:3020";
const browser = await chromium.launch({ executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
const checks = [];
function record(name, passed, detail) { checks.push({ name, passed, detail }); console.log(passed ? "PASS" : "FAIL", name, detail ?? ""); }
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(base, { waitUntil: "networkidle" });
  const services = page.getByRole("button", { name: "Services", exact: true });
  await services.click();
  record("desktop Services opens", await services.getAttribute("aria-expanded") === "true");
  await page.mouse.click(1400, 700);
  record("desktop outside click closes", await services.getAttribute("aria-expanded") === "false");
  const insights = page.getByRole("button", { name: "Insights", exact: true });
  await insights.click();
  record("desktop Insights opens", await insights.getAttribute("aria-expanded") === "true");
  await page.keyboard.press("Escape");
  record("desktop Escape closes", await insights.getAttribute("aria-expanded") === "false");
  await services.focus();
  await page.keyboard.press("Enter");
  record("keyboard Enter opens Services", await services.getAttribute("aria-expanded") === "true");
  const focus = await services.evaluate((button) => ({ outline: getComputedStyle(button).outlineStyle, width: getComputedStyle(button).outlineWidth }));
  record("keyboard focus visible", focus.outline !== "none" && focus.width !== "0px", JSON.stringify(focus));
  await page.keyboard.press("Escape");
  await page.goto(base + "/services/web-development");
  record("service active state", await services.getAttribute("class") === "active");
  await page.goto(base);
  const cta = page.getByRole("link", { name: /Discuss Your Project/i }).first();
  record("hero CTA destination", new URL(await cta.getAttribute("href"), base).pathname === "/contact");
  await context.close();

  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mobile = await mobileContext.newPage();
  await mobile.goto(base, { waitUntil: "networkidle" });
  const menu = mobile.getByRole("button", { name: "Open navigation" });
  await menu.click();
  record("mobile navigation opens", await mobile.locator(".menu-toggle").getAttribute("aria-expanded") === "true");
  record("mobile first link receives focus", await mobile.locator(":focus").getAttribute("href") === "/services");
  await mobile.keyboard.press("Escape");
  record("mobile Escape closes", await mobile.locator(".menu-toggle").getAttribute("aria-expanded") === "false");
  record("mobile Escape restores focus", await mobile.locator(":focus").getAttribute("aria-label") === "Open navigation");
  await mobile.getByRole("button", { name: "Open navigation" }).click();
  await mobile.locator("#mobile-navigation").getByRole("link", { name: /Case Studies/ }).click();
  await mobile.waitForURL("**/case-studies");
  await mobile.locator(".menu-toggle[aria-expanded='false']").waitFor();
  record("mobile route navigation", new URL(mobile.url()).pathname === "/case-studies");
  record("mobile menu closes on route", await mobile.locator(".menu-toggle").getAttribute("aria-expanded") === "false");
  await mobileContext.close();

  const siteMap = await (await fetch(base + "/sitemap.xml")).text();
  const caseRoutes = [...siteMap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname).filter((route) => route.startsWith("/case-studies/"));
  for (const route of caseRoutes) {
    const response = await fetch(base + route);
    const html = await response.text();
    const live = html.match(/href="(https?:\/\/[^\"]+)"[^>]*target="_blank"[^>]*>Visit the live website/);
    record(`${route} live-site link`, response.ok && Boolean(live), live?.[1] ?? "missing");
  }
} finally { await browser.close(); }
await fs.mkdir(path.resolve("audit/brand-polish/rendered"), { recursive: true });
await fs.writeFile(path.resolve("audit/brand-polish/rendered/interactions.json"), JSON.stringify({ generatedAt: new Date().toISOString(), checks }, null, 2));
if (checks.some((check) => !check.passed)) process.exitCode = 1;
