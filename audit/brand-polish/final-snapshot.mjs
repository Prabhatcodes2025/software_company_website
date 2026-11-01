import { chromium } from "playwright-core";
const browser = await chromium.launch({ executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
  await page.goto("http://127.0.0.1:3025", { waitUntil: "networkidle" });
  await page.locator(".company-snapshot").scrollIntoViewIfNeeded();
  const state = await page.evaluate(() => {
    const grid = document.querySelector(".company-snapshot-figures").getBoundingClientRect();
    const last = document.querySelector(".company-snapshot-figures > div:last-child").getBoundingClientRect();
    return { overflow: document.documentElement.scrollWidth > innerWidth, fullWidthLastCard: Math.abs(grid.width - last.width) < 2 };
  });
  await page.locator(".company-snapshot").screenshot({ path: "audit/brand-polish/refinement/final-snapshot-390.png" });
  console.log(JSON.stringify(state));
  if (state.overflow || !state.fullWidthLastCard) process.exitCode = 1;
  await page.close();
} finally { await browser.close(); }
