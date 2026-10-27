import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright-core";

const base = "http://127.0.0.1:3013";
const out = path.resolve("audit/corrective/sections");
const targets = [
  ["/", [["hero", ".corrective-hero"], ["services", ".corrective-services"], ["solutions", ".corrective-solutions"], ["work", ".corrective-work"]]],
  ["/services/web-development", [["hero", ".service-editorial-hero"], ["delivery", ".service-delivery"]]],
  ["/services/mobile-app-development", [["hero", ".service-editorial-hero"], ["delivery", ".service-delivery"]]],
  ["/services/ai-development", [["hero", ".service-editorial-hero"]]],
  ["/industries", [["spotlight", ".industry-spotlight:first-child"], ["markets", ".industry-other-markets"]]],
  ...["ongole-property", "naystrip", "mozno-wealth", "snow-feather-adventure", "rs-constructions", "continental-mercantile"].map(slug => ["/case-studies/" + slug, [["hero", ".case-redesign-hero"], ["mobile-evidence", ".case-redesign-media"]]]),
];
const browser = await chromium.launch({ executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
try {
  for (const [device, viewport] of [["desktop", { width: 1440, height: 900 }], ["mobile", { width: 390, height: 844 }]]) {
    const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
    const dir = path.join(out, device);
    await fs.mkdir(dir, { recursive: true });
    for (const [route, selectors] of targets) {
      await page.goto(base + route, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.evaluate(() => document.fonts.ready);
      const name = route === "/" ? "home" : route.slice(1).replaceAll("/", "-");
      for (const [label, selector] of selectors) {
        await page.locator(selector).scrollIntoViewIfNeeded();
        await page.locator(selector).evaluate(async element => {
          for (const img of element.querySelectorAll("img")) {
            img.loading = "eager";
            await Promise.race([img.decode().catch(() => undefined), new Promise(resolve => setTimeout(resolve, 5000))]);
          }
        });
        await page.locator(selector).screenshot({ path: path.join(dir, name + "-" + label + ".png") });
      }
      console.log(device, route);
    }
    await page.close();
  }
} finally { await browser.close(); }
