import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const browser = await chromium.launch({ executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true, acceptDownloads: true });
try {
  const page = await browser.newPage({ acceptDownloads: true });
  const url = "https://raw.githubusercontent.com/google/fonts/main/ofl/manrope/Manrope%5Bwght%5D.ttf";
  const [download] = await Promise.all([page.waitForEvent("download", { timeout: 30000 }), page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 }).catch(() => undefined)]);
  const destination = path.resolve("public/fonts/manrope-variable.ttf");
  await mkdir(path.dirname(destination), { recursive: true });
  await download.saveAs(destination);
  console.log(destination);
} finally { await browser.close(); }
