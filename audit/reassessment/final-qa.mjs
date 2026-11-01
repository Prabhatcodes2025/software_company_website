import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright-core";

const base = "http://127.0.0.1:3013";
const output = path.resolve("audit/corrective/final");
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
const browser = await chromium.launch({ executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
const results = [];
await fs.mkdir(output, { recursive: true });

try {
  for (const [device, width, height] of [["desktop", 1440, 900], ["mobile", 390, 844]]) {
    await fs.mkdir(path.join(output, device), { recursive: true });
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
    for (const route of routes) {
      const response = await page.goto(base + route, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.evaluate(() => document.fonts.ready);
      if (route === "/" || route === "/case-studies" || route.startsWith("/case-studies/") || route.startsWith("/services/")) {
        await page.evaluate(async () => {
          for (const image of document.images) {
            image.scrollIntoView();
            await Promise.race([image.decode().catch(() => undefined), new Promise((resolve) => setTimeout(resolve, 1500))]);
          }
          scrollTo(0, 0);
        });
      }
      const data = await page.evaluate(() => ({
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.getAttribute("content"),
        h1: [...document.querySelectorAll("h1")].map((node) => node.textContent.trim()),
        h2: [...document.querySelectorAll("h2")].map((node) => node.textContent.trim()),
        scrollWidth: document.documentElement.scrollWidth,
        viewportWidth: innerWidth,
        images: [...document.images].map((image) => ({ src: image.currentSrc || image.src, alt: image.alt, loaded: image.complete && image.naturalWidth > 0, visibleWidth: Math.round(image.getBoundingClientRect().width) })),
        liveLinks: [...document.querySelectorAll('a[target="_blank"]')].map((link) => ({ text: link.textContent.trim(), href: link.href })),
      }));
      const name = route === "/" ? "home" : route.slice(1).replaceAll("/", "-");
      if (["/", "/services", "/case-studies", "/industries", "/contact"].includes(route)) {
        await page.screenshot({ path: path.join(output, device, `${name}.jpg`), fullPage: true, type: "jpeg", quality: 84 });
      }
      if (route === "/") {
        await page.locator(".corrective-hero").screenshot({ path: path.join(output, device, "home-hero.png") });
      }
      if (route.startsWith("/case-studies/") || route.startsWith("/services/")) {
        const hero = page.locator(".case-redesign-hero, .service-editorial-hero").first();
        if (await hero.count()) await hero.screenshot({ path: path.join(output, device, `${name}-hero.png`) });
      }
      const item = { device, route, status: response?.status(), ...data };
      results.push(item);
      console.log(device, route, item.status, item.scrollWidth > item.viewportWidth ? "OVERFLOW" : "OK", item.images.filter((image) => !image.loaded).length, "broken images");
    }
    await page.close();
  }

  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  for (const width of [320, 360, 430]) {
    await page.setViewportSize({ width, height: 844 });
    for (const route of ["/", "/services/web-development", "/services/mobile-app-development", "/services/ai-development", "/industries", "/case-studies/ongole-property", "/case-studies/continental-mercantile", "/contact"]) {
      const response = await page.goto(base + route, { waitUntil: "domcontentloaded" });
      const data = await page.evaluate(() => ({ scrollWidth: document.documentElement.scrollWidth, viewportWidth: innerWidth }));
      results.push({ device: `mobile-${width}`, route, status: response?.status(), ...data });
      console.log(width, route, response?.status(), data.scrollWidth > data.viewportWidth ? "OVERFLOW" : "OK");
    }
  }
  await page.close();
} finally {
  await browser.close();
}

await fs.writeFile(path.join(output, "qa-results.json"), JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2));
