import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright-core";

const base = process.env.AUDIT_BASE_URL ?? "http://127.0.0.1:3024";
const output = path.resolve("audit/brand-polish/refinement");
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({ executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
const results = [];
const check = (name, pass, detail) => results.push({ name, pass, detail });
try {
  for (const width of [320, 390, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: width < 500 ? 844 : 900 } });
    await page.goto(base, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.locator(".editorial-header .official-wordmark").evaluate(image => image.decode());
    if (width < 760) await page.evaluate(() => window.scrollTo(0, 450));
    await page.waitForTimeout(100);
    const geometry = await page.evaluate(() => {
      const quote = document.querySelector(".floating-quote").getBoundingClientRect();
      const wa = document.querySelector(".whatsapp-float").getBoundingClientRect();
      return { overflow: document.documentElement.scrollWidth > innerWidth, quote: [quote.left, quote.right, quote.top, quote.bottom], wa: [wa.left, wa.right, wa.top, wa.bottom], featured: document.querySelectorAll(".corrective-featured article").length, logos: document.querySelectorAll('.client-logo-group:not([aria-hidden="true"]) img').length };
    });
    check(`${width} homepage geometry`, !geometry.overflow && geometry.quote[0] >= 0 && geometry.quote[1] < geometry.wa[0] && geometry.featured === 0 && geometry.logos === 6, geometry);
    if (width < 760) await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: path.join(output, `home-top-${width}.png`) });
    if (width < 760) await page.evaluate(() => window.scrollTo(0, 450));
    const quote = page.locator(".floating-quote");
    await quote.click();
    const modal = page.getByRole("dialog", { name: /Get a free quote/i });
    await modal.waitFor({ state: "visible" });
    check(`${width} floating quote opens existing modal`, await modal.isVisible());
    await page.keyboard.press("Escape");
    check(`${width} quote Escape closes`, !(await modal.isVisible()));
    if (width === 1440) {
      const services = page.getByRole("button", { name: "Services" }).first();
      await services.click();
      check("desktop services dropdown opens", await services.getAttribute("aria-expanded") === "true");
      await services.click();
      check("desktop services dropdown toggles closed", await services.getAttribute("aria-expanded") === "false");
    } else {
      await page.getByRole("button", { name: "Open navigation" }).click();
      check(`${width} mobile navigation opens`, await page.getByRole("navigation", { name: "Mobile navigation" }).isVisible());
      await page.keyboard.press("Escape");
      check(`${width} mobile navigation Escape closes`, await page.getByRole("navigation", { name: "Mobile navigation" }).count() === 0);
    }
    await page.locator(".company-snapshot").scrollIntoViewIfNeeded();
    await page.waitForTimeout(1200);
    const figures = await page.locator(".company-snapshot-figures dd span").allTextContents();
    check(`${width} approved figures finish count-up`, JSON.stringify(figures) === JSON.stringify(["3+", "50+", "40+", "3+", "5+"]), figures);
    if (width === 390 || width === 1440) await page.locator(".company-snapshot").screenshot({ path: path.join(output, `snapshot-${width}.png`) });
    await page.close();
  }
  const reduced = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
  await reduced.goto(base, { waitUntil: "domcontentloaded" });
  await reduced.locator(".company-snapshot").scrollIntoViewIfNeeded();
  check("reduced motion figures stay readable", JSON.stringify(await reduced.locator(".company-snapshot-figures dd span").allTextContents()) === JSON.stringify(["3+", "50+", "40+", "3+", "5+"]));
  await reduced.close();
  for (const width of [390, 1440]) {
    for (const route of ["/services", "/industries", "/case-studies", "/insights", "/about", "/career", "/contact"]) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      const response = await page.goto(new URL(route, base).href, { waitUntil: "networkidle" });
      const state = await page.evaluate(() => ({ overflow: document.documentElement.scrollWidth > innerWidth, broken: [...document.images].filter(image => image.complete && image.naturalWidth === 0).length, h1: Boolean(document.querySelector("h1")) }));
      check(`${width} ${route}`, response?.status() === 200 && !state.overflow && state.broken === 0 && state.h1, state);
      await page.close();
    }
  }
} finally { await browser.close(); }
await fs.writeFile(path.join(output, "results.json"), JSON.stringify(results, null, 2));
for (const result of results) console.log(result.pass ? "PASS" : "FAIL", result.name, result.pass ? "" : JSON.stringify(result.detail));
if (results.some(result => !result.pass)) process.exitCode = 1;
