import fs from "node:fs/promises";
import path from "node:path";
import AxeBuilder from "@axe-core/playwright";
import { chromium } from "playwright-core";

const browser = await chromium.launch({ executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
const base = process.env.AUDIT_BASE_URL ?? "http://127.0.0.1:3014";
const results = [];
try {
  for (const width of [320, 390, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: width < 500 ? 760 : 900 } });
    const page = await context.newPage();
    await page.goto(base, { waitUntil: "domcontentloaded" });
    await page.getByRole("button", { name: "Get a Free Quote" }).first().click();
    await page.getByRole("dialog").waitFor();
    const audit = await new AxeBuilder({ page }).analyze();
    results.push({ width, violations: audit.violations.map((item) => ({ id: item.id, impact: item.impact, nodes: item.nodes.map((node) => ({ target: node.target, failureSummary: node.failureSummary })) })), incomplete: audit.incomplete.map((item) => ({ id: item.id, nodes: item.nodes.length })) });
    console.log(width, audit.violations.map((item) => `${item.id}:${item.nodes.length}`).join(",") || "no violations");
    await context.close();
  }
} finally { await browser.close(); }
await fs.writeFile(path.resolve("audit/quote-widgets/axe-results.json"), JSON.stringify(results, null, 2));
if (results.some((item) => item.violations.length)) process.exitCode = 1;
