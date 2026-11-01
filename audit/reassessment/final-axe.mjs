import fs from "node:fs/promises";
import path from "node:path";
import AxeBuilder from "@axe-core/playwright";
import { chromium } from "playwright-core";

const base = "http://127.0.0.1:3013";
const browser = await chromium.launch({ executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
const findings = [];
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
try {
  for (const [device, width, height] of [["desktop", 1440, 900], ["mobile", 390, 844]]) {
    const context = await browser.newContext({ viewport: { width, height } });
    const page = await context.newPage();
    for (const route of routes) {
      await page.goto(base + route, { waitUntil: "networkidle" });
      const states = ["default"];
      if (route === "/") {
        if (device === "desktop") {
          await page.getByRole("button", { name: "Services", exact: true }).click();
          states.push("services-menu");
        } else {
          await page.getByRole("button", { name: "Open navigation" }).click();
          states.push("mobile-menu");
        }
      }
      for (const state of states) {
        if (state === "default" && states.length > 1) {
          if (device === "desktop") await page.getByRole("button", { name: "Services", exact: true }).click();
          else await page.getByRole("button", { name: "Close navigation" }).click();
        } else if (state !== "default") {
          if (device === "desktop") await page.getByRole("button", { name: "Services", exact: true }).click();
          else await page.getByRole("button", { name: "Open navigation" }).click();
        }
        const result = await new AxeBuilder({ page }).analyze();
        findings.push({ device, route, state, violations: result.violations.map((item) => ({ id: item.id, impact: item.impact, help: item.help, nodes: item.nodes.map((node) => ({ target: node.target, failureSummary: node.failureSummary })) })), incomplete: result.incomplete.map((item) => ({ id: item.id, nodes: item.nodes.length })), passes: result.passes.length });
        console.log(device, route, state, result.violations.map((item) => `${item.id}:${item.nodes.length}`).join(",") || "no violations");
      }
    }
    await context.close();
  }
} finally { await browser.close(); }
await fs.mkdir(path.resolve("audit/corrective/final"), { recursive: true });
await fs.writeFile(path.resolve("audit/corrective/final/axe-results.json"), JSON.stringify({ generatedAt: new Date().toISOString(), findings }, null, 2));
