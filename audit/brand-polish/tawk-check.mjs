import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright-core";

const browser = await chromium.launch({ executablePath: process.env.BROWSER_PATH ?? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
const output = path.resolve("audit/brand-polish/rendered");
const records = [];
try {
  for (const width of [390, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: width === 390 ? 844 : 900 } });
    const events = [];
    page.on("requestfailed", (request) => { if (request.url().includes("tawk")) events.push({ type: "failed", url: request.url(), error: request.failure()?.errorText }); });
    page.on("response", (response) => { if (response.url().includes("tawk")) events.push({ type: "response", url: response.url(), status: response.status() }); });
    await page.goto("http://127.0.0.1:3021", { waitUntil: "load" });
    await page.waitForTimeout(15000);
    const state = await page.evaluate(() => ({
      script: [...document.scripts].filter((script) => script.src.includes("embed.tawk.to")).map((script) => ({ src: script.src, async: script.async })),
      frames: [...document.querySelectorAll("iframe")].filter((frame) => frame.src.includes("tawk")).map((frame) => ({ src: frame.src, rect: frame.getBoundingClientRect().toJSON() })),
      api: { onLoad: typeof window.Tawk_API?.onLoad, isChatMaximized: typeof window.Tawk_API?.isChatMaximized },
      whatsapp: document.querySelector(".whatsapp-float")?.getBoundingClientRect().toJSON(),
    }));
    await page.screenshot({ path: path.join(output, `tawk-${width}.png`) });
    records.push({ width, events, state });
    console.log(width, JSON.stringify({ events, state }));
    await page.close();
  }
} finally { await browser.close(); }
await fs.writeFile(path.join(output, "tawk-results.json"), JSON.stringify(records, null, 2));
