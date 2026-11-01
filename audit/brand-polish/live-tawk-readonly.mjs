import { chromium } from "playwright-core";

const browser = await chromium.launch({ executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
try {
  for (const width of [390, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: width === 390 ? 844 : 900 } });
    const errors = [];
    page.on("requestfailed", request => { if (request.url().includes("tawk")) errors.push(request.failure()?.errorText); });
    await page.goto("https://letsfygure.com/", { waitUntil: "domcontentloaded", timeout: 30000 });
    await page.waitForTimeout(12000);
    const state = await page.evaluate(() => ({
      title: document.title,
      tawkFrames: [...document.querySelectorAll("iframe")].filter(frame => /tawk/i.test(frame.src)).map(frame => ({ srcHost: new URL(frame.src).host, rect: frame.getBoundingClientRect().toJSON() })),
      tawkApiLoaded: typeof window.Tawk_API?.isChatMaximized === "function",
    }));
    console.log(JSON.stringify({ width, state, errors }));
    await page.close();
  }
} finally { await browser.close(); }
