import path from "node:path";
import { chromium } from "playwright-core";

const output = path.resolve("audit/reassessment");
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
try {
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktop.goto("http://localhost:3013/", { waitUntil: "networkidle" });
  for (const name of ["Services", "Industries", "Insights"]) {
    await desktop.getByRole("button", { name, exact: true }).click();
    await desktop.screenshot({ path: path.join(output, `nav-${name.toLowerCase()}-desktop.png`) });
  }
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto("http://localhost:3013/", { waitUntil: "networkidle" });
  await mobile.getByRole("button", { name: "Open navigation" }).click();
  await mobile.screenshot({ path: path.join(output, "nav-mobile.png") });
} finally { await browser.close(); }
