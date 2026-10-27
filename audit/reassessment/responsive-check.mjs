import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright-core";

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
const results = [];
try {
  for (const width of [320, 360, 390, 430]) {
    const page = await browser.newPage({ viewport: { width, height: 844 } });
    for (const route of ["/", "/services/web-development", "/industries", "/case-studies/ongole-property", "/contact"]) {
      await page.goto(`http://localhost:3013${route}`, { waitUntil: "networkidle" });
      results.push(await page.evaluate(({ width, route }) => {
        const paragraphs = [...document.querySelectorAll("main p:not(.eyebrow)")].filter(node => node.textContent.trim().length > 30);
        const fontSizes = paragraphs.map(node => parseFloat(getComputedStyle(node).fontSize));
        return { width, route, overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth, h1Size: getComputedStyle(document.querySelector("h1")).fontSize, minBodyFont: Math.min(...fontSizes), pageHeight: document.documentElement.scrollHeight };
      }, { width, route }));
    }
    await page.close();
  }
} finally { await browser.close(); }
await fs.writeFile(path.resolve("audit/reassessment/responsive-check.json"), JSON.stringify(results, null, 2));
console.log(JSON.stringify({ checks: results.length, overflow: results.filter(item => item.overflow), smallBody: results.filter(item => item.minBodyFont < 16) }, null, 2));
