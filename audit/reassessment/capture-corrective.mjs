import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright-core";

const base = "http://127.0.0.1:3013";
const out = path.resolve("audit/corrective");
const routeList = ["/", "/services/web-development", "/services/mobile-app-development", "/services/ai-development", "/industries", "/case-studies/ongole-property", "/case-studies/continental-mercantile", "/contact"];
const browser = await chromium.launch({ executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
const results = [];
try {
  for (const [device, viewport] of [["desktop", { width: 1440, height: 900 }], ["mobile", { width: 390, height: 844 }]]) {
    const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
    await fs.mkdir(path.join(out, device), { recursive: true });
    for (const route of routeList) {
      const response = await page.goto(base + route, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.evaluate(async () => { await document.fonts.ready; for (const image of document.images) { image.scrollIntoView(); await image.decode().catch(() => undefined); } scrollTo(0, 0); });
      const name = route === "/" ? "home" : route.slice(1).replaceAll("/", "-");
      await page.screenshot({ path: path.join(out, device, name + ".jpg"), fullPage: true, type: "jpeg", quality: 82 });
      const data = await page.evaluate(() => ({ title: document.title, h1: document.querySelector("h1")?.textContent?.trim(), width: innerWidth, scrollWidth: document.documentElement.scrollWidth, images: [...document.images].map(img => ({ src: img.currentSrc, loaded: img.complete && img.naturalWidth > 0, width: Math.round(img.getBoundingClientRect().width) })) }));
      results.push({ route, device, status: response?.status(), ...data });
      console.log(device, route, response?.status(), data.scrollWidth > data.width ? "OVERFLOW" : "OK");
    }
    await page.close();
  }
} finally { await browser.close(); }
await fs.writeFile(path.join(out, "capture-data.json"), JSON.stringify(results, null, 2));
