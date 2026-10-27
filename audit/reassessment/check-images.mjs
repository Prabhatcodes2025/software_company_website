import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright-core";

const baseUrl = "http://localhost:3013";
const routes = ["/", "/industries", "/case-studies", "/case-studies/ongole-property", "/case-studies/naystrip", "/case-studies/mozno-wealth", "/case-studies/snow-feather-adventure", "/case-studies/rs-constructions", "/case-studies/continental-mercantile"];
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
const results = [];
try {
  for (const [device, viewport] of [["desktop", { width: 1440, height: 900 }], ["mobile", { width: 390, height: 844 }]]) {
    const page = await browser.newPage({ viewport });
    for (const route of routes) {
      await page.goto(new URL(route, baseUrl).toString(), { waitUntil: "networkidle" });
      const images = page.locator("main img");
      for (let i = 0; i < await images.count(); i++) {
        const img = images.nth(i);
        await img.scrollIntoViewIfNeeded();
        await img.evaluate(async element => {
          try { await Promise.race([element.decode(), new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), 5000))]); } catch { /* status recorded below */ }
        });
      }
      const data = await images.evaluateAll(nodes => nodes.map(node => ({ alt: node.alt, complete: node.complete, naturalWidth: node.naturalWidth, currentSrc: node.currentSrc, renderedWidth: Math.round(node.getBoundingClientRect().width), renderedHeight: Math.round(node.getBoundingClientRect().height) })));
      results.push({ device, route, images: data });
      console.log(`${device} ${route}: ${data.filter(image => image.naturalWidth === 0).length}/${data.length} unresolved`);
    }
    await page.close();
  }
} finally { await browser.close(); }
await fs.writeFile(path.resolve("audit/reassessment/image-check.json"), JSON.stringify(results, null, 2));
