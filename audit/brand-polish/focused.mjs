import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright-core";

const base = process.env.AUDIT_BASE_URL ?? "http://127.0.0.1:3021";
const out = path.resolve("audit/brand-polish/rendered/focused");
await fs.mkdir(out, { recursive: true });
const browser = await chromium.launch({ executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
const results = [];
try {
  for (const width of [320, 390, 768, 1024, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
    await page.goto(base, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const initial = await page.evaluate(() => {
      const header = document.querySelector(".editorial-header .official-wordmark");
      const footer = document.querySelector(".editorial-footer .official-wordmark");
      const wa = document.querySelector(".whatsapp-float");
      const rect = wa.getBoundingClientRect();
      return {
        overflow: document.documentElement.scrollWidth > innerWidth,
        headerLogo: header?.complete && header.naturalWidth > 0,
        footerLogoPresent: Boolean(footer),
        logos: document.querySelectorAll('.client-logo-group:not([aria-hidden="true"]) img').length,
        duplicateHidden: document.querySelector('.client-logo-group[aria-hidden="true"]') !== null,
        waSize: [rect.width, rect.height],
        waInside: rect.left >= 0 && rect.right <= innerWidth,
        fontPreload: Boolean(document.querySelector('link[rel="preload"][href="/fonts/Manrope-Latin.woff2"]')),
        tawkScript: Boolean(document.querySelector('script[src*="embed.tawk.to/6ae0b1611e2fa534748c915a/1k5ur9q5s"]')),
      };
    });
    await page.screenshot({ path: path.join(out, `home-top-${width}.png`) });
    await page.locator(".editorial-footer .official-wordmark").scrollIntoViewIfNeeded();
    const footerLogoLoaded = await page.locator(".editorial-footer .official-wordmark").evaluate(async image => { await image.decode().catch(() => undefined); return image.complete && image.naturalWidth > 0; });
    if (width === 390 || width === 1440) await page.locator(".editorial-footer .brand").screenshot({ path: path.join(out, `footer-brand-${width}.png`) });
    initial.footerLogo = footerLogoLoaded;
    await page.locator(".client-logo-marquee").scrollIntoViewIfNeeded();
    await page.locator(".client-logo-marquee").screenshot({ path: path.join(out, `marquee-${width}.png`) });
    await page.evaluate(() => scrollTo(0, 600));
    const back = await page.locator(".back-to-top").isVisible();
    results.push({ width, ...initial, back });
    await page.close();
  }
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
  await page.goto(base, { waitUntil: "domcontentloaded" });
  const reduced = await page.locator(".client-logo-track").evaluate(node => ({ animation: getComputedStyle(node).animationName, overflow: getComputedStyle(node.parentElement).overflowX }));
  results.push({ reducedMotion: reduced });
  await page.close();
} finally { await browser.close(); }
await fs.writeFile(path.join(out, "results.json"), JSON.stringify(results, null, 2));
for (const result of results) console.log(JSON.stringify(result));
if (results.some(r => r.width && (r.overflow || !r.headerLogo || !r.footerLogo || r.logos !== 6 || !r.duplicateHidden || r.waSize[0] !== 60 || !r.waInside || !r.fontPreload || !r.tawkScript || !r.back))) process.exitCode = 1;
