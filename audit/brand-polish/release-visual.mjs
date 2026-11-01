import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright-core";

const base = "http://127.0.0.1:3022";
const out = path.resolve("audit/brand-polish/release-visual");
const routes = ["/", "/services/web-development", "/services/ai-development", "/industries", "/case-studies/continental-mercantile", "/insights", "/insights/ai-automation-human-approval", "/about", "/career", "/contact"];
const full = new Set(["/insights", "/insights/ai-automation-human-approval", "/about", "/career", "/contact"]);
await fs.mkdir(out, { recursive: true });
const browser = await chromium.launch({ executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
const results = [];
try {
  for (const width of [390, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
    for (const route of routes) {
      const response = await page.goto(base + route, { waitUntil: "domcontentloaded" });
      await page.evaluate(() => document.fonts.ready);
      const data = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        h1: document.querySelector("h1")?.textContent.trim(),
        bodyFont: getComputedStyle(document.body).fontFamily,
        brokenImages: [...document.images].filter(image => image.complete && image.naturalWidth === 0).length,
      }));
      const name = route === "/" ? "home" : route.slice(1).replaceAll("/", "-");
      await page.screenshot({ path: path.join(out, `${width}-${name}.png`), fullPage: full.has(route) });
      results.push({ width, route, status: response?.status(), ...data });
    }
    await page.close();
  }
} finally { await browser.close(); }
await fs.writeFile(path.join(out, "results.json"), JSON.stringify(results, null, 2));
for (const result of results) console.log(result.width, result.route, result.status, result.overflow ? "OVERFLOW" : "OK", result.brokenImages, "broken");
if (results.some(result => result.status !== 200 || result.overflow || result.brokenImages)) process.exitCode = 1;
