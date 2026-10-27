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
    ["mobile-430", { width: 430, height: 932 }],
  ]) {
    const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(path.join(root, "hero-hybrid-refined.html")).toString());
    await page.evaluate(() => document.fonts.ready);
    await page.locator(".hero").screenshot({ path: path.join(root, `hero-hybrid-refined-${name}.png`) });
    const metrics = await page.evaluate(() => ({
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      heroHeight: Math.round(document.querySelector(".hero").getBoundingClientRect().height),
      h1Height: Math.round(document.querySelector("h1").getBoundingClientRect().height),
      ctaHeights: [...document.querySelectorAll(".actions a")].map((a) => Math.round(a.getBoundingClientRect().height)),
      fontLoaded: document.fonts.check('16px Manrope'),
    }));
    console.log(name, JSON.stringify(metrics));
    await page.close();
  }
} finally { await browser.close(); }
