import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright-core";

const root = path.resolve("audit/reassessment");
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
try {
  for (const [name, viewport] of [
    ["desktop", { width: 1440, height: 900 }],
    ["mobile", { width: 390, height: 844 }],
    ["mobile-320", { width: 320, height: 750 }],
  ]) {
    const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(path.join(root, "hero-hybrid.html")).toString());
    await page.evaluate(() => document.fonts.ready);
    await page.locator(".hero").screenshot({ path: path.join(root, `hero-hybrid-${name}.png`) });
    await page.locator(".preview-note").evaluate((node) => { node.style.display = "none"; });
    await page.screenshot({ path: path.join(root, `hero-hybrid-${name}-with-header.png`), fullPage: true });
    const metrics = await page.evaluate(() => ({
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      font: getComputedStyle(document.querySelector("h1")).fontFamily,
      h1: document.querySelector("h1").getBoundingClientRect().toJSON(),
      visual: document.querySelector(".composition").getBoundingClientRect().toJSON(),
    }));
    console.log(name, JSON.stringify(metrics));
    await page.close();
  }
} finally { await browser.close(); }
