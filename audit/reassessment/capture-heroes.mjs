import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright-core";

const root = path.resolve("audit/reassessment");
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
try {
  for (const [device, viewport] of [["desktop", { width: 1440, height: 900 }], ["mobile", { width: 390, height: 844 }]]) {
    const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(path.join(root, "hero-concepts.html")).toString());
    for (const concept of ["a", "b", "c"]) {
      await page.locator(`#concept-${concept}`).screenshot({ path: path.join(root, `hero-${concept}-${device}.png`) });
    }
    await page.close();
  }
} finally { await browser.close(); }
