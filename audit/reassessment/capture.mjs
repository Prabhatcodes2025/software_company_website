import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright-core";

const baseUrl = "http://localhost:3013";
const chromePath = process.env.CHROME_PATH ?? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const output = path.resolve("audit/reassessment");
const sitemap = await (await fetch(`${baseUrl}/sitemap.xml`)).text();
const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]).pathname);
const browser = await chromium.launch({ executablePath: chromePath, headless: true });
const results = [];

try {
  for (const [device, viewport] of [["desktop", { width: 1440, height: 900 }], ["mobile", { width: 390, height: 844 }]]) {
    const context = await browser.newContext({ viewport, deviceScaleFactor: 1 });
    const page = await context.newPage();
    await fs.mkdir(path.join(output, "screenshots", device), { recursive: true });
    for (const route of routes) {
      const errors = [];
      const onError = error => errors.push(error.message);
      page.on("pageerror", onError);
      const response = await page.goto(new URL(route, baseUrl).toString(), { waitUntil: "networkidle" });
      await page.evaluate(async () => {
        const height = document.documentElement.scrollHeight;
        for (let y = 0; y < height; y += 700) {
          window.scrollTo(0, y);
          await new Promise(resolve => setTimeout(resolve, 60));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(350);
      const file = route === "/" ? "home" : route.slice(1).replaceAll("/", "--");
      const screenshot = path.join(output, "screenshots", device, `${file}.jpg`);
      await page.screenshot({ path: screenshot, type: "jpeg", quality: 65, fullPage: true, animations: "disabled" });
      const data = await page.evaluate(() => ({
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.getAttribute("content"),
        canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href"),
        h1: [...document.querySelectorAll("h1")].map(node => node.textContent.trim()),
        headings: [...document.querySelectorAll("main h2, main h3")].map(node => node.textContent.trim()),
        mainText: document.querySelector("main")?.innerText ?? "",
        mainLinks: [...document.querySelectorAll("main a")].map(node => ({ text: node.textContent.trim(), href: node.getAttribute("href") })),
        images: [...document.querySelectorAll("main img")].map(node => ({ alt: node.alt, src: node.getAttribute("src"), naturalWidth: node.naturalWidth, naturalHeight: node.naturalHeight, renderedWidth: Math.round(node.getBoundingClientRect().width), renderedHeight: Math.round(node.getBoundingClientRect().height) })),
        bodyFont: getComputedStyle(document.querySelector("main p") ?? document.body).fontFamily,
        bodyFontSize: getComputedStyle(document.querySelector("main p") ?? document.body).fontSize,
        h1FontSize: getComputedStyle(document.querySelector("h1") ?? document.body).fontSize,
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        scrollHeight: document.documentElement.scrollHeight,
      }));
      results.push({ device, route, status: response?.status(), screenshot, pageErrors: errors, ...data });
      page.off("pageerror", onError);
      console.log(`${device} ${route} ${response?.status()} ${data.scrollHeight}px`);
    }
    await context.close();
  }
} finally {
  await browser.close();
}

await fs.writeFile(path.join(output, "capture-data.json"), JSON.stringify({ capturedAt: new Date().toISOString(), baseUrl, results }, null, 2));
console.log(`Captured ${results.length} route/device states.`);
