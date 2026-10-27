import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright-core";

const references = [
  ["infograins", "https://infograins.com/"],
  ["thoughtworks", "https://www.thoughtworks.com/"],
  ["netguru", "https://www.netguru.com/"],
  ["epam", "https://www.epam.com/"],
];
const output = path.resolve("audit/reassessment/references");
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
const results = [];
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  for (const [name, url] of references) {
    try {
      const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
      await page.waitForTimeout(2500);
      await page.screenshot({ path: path.join(output, `${name}.jpg`), type: "jpeg", quality: 70 });
      results.push({ name, url, status: response?.status(), title: await page.title(), h1: await page.locator("h1").allTextContents() });
    } catch (error) { results.push({ name, url, error: String(error) }); }
    console.log(JSON.stringify(results.at(-1)));
  }
} finally { await browser.close(); }
await fs.writeFile(path.join(output, "results.json"), JSON.stringify(results, null, 2));
