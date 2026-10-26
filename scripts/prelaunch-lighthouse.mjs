import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const baseUrl = process.env.AUDIT_BASE_URL ?? "http://localhost:3000";
const chromePath = process.env.CHROME_PATH ?? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const outputDirectory = path.resolve("audit/prelaunch/lighthouse");
const lighthouseCli = fileURLToPath(new URL("../node_modules/lighthouse/cli/index.js", import.meta.url));
const routes = [
  ["home", "/"],
  ["service-web-development", "/services/web-development"],
  ["industries", "/industries"],
  ["case-ongole-property", "/case-studies/ongole-property"],
  ["contact", "/contact"],
];

await fs.mkdir(outputDirectory, { recursive: true });

function runLighthouse(url, outputPath, desktop) {
  const args = [
    lighthouseCli,
    url,
    "--quiet",
    "--output=json",
    `--output-path=${outputPath}`,
    "--only-categories=performance,accessibility,best-practices,seo",
    `--chrome-path=${chromePath}`,
    "--chrome-flags=--headless=new --disable-gpu --no-sandbox",
  ];
  if (desktop) args.push("--preset=desktop");
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, args, { stdio: ["ignore", "pipe", "pipe"] });
    let stderr = "";
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.on("error", reject);
    child.on("exit", (code) => code === 0 ? resolve() : reject(new Error(`Lighthouse exited ${code}: ${stderr}`)));
  });
}

const summary = [];
for (const [device, desktop] of [["mobile", false], ["desktop", true]]) {
  for (const [name, route] of routes) {
    const reportPath = path.join(outputDirectory, `${device}-${name}.json`);
    await runLighthouse(`${baseUrl}${route}`, reportPath, desktop);
    const report = JSON.parse(await fs.readFile(reportPath, "utf8"));
    const categories = Object.fromEntries(Object.entries(report.categories).map(([key, value]) => [key, Math.round(value.score * 100)]));
    const failures = Object.values(report.audits)
      .filter((audit) => audit.score !== null && audit.score < 1 && ["binary", "numeric"].includes(audit.scoreDisplayMode))
      .map((audit) => ({ id: audit.id, title: audit.title, score: audit.score, displayValue: audit.displayValue }))
      .filter((audit) => audit.id !== "performance-budget");
    summary.push({ device, route: name, url: `${baseUrl}${route}`, categories, failures });
    console.log(`${device} ${name}: ${JSON.stringify(categories)}`);
  }
}

const result = { generatedAt: new Date().toISOString(), summary };
await fs.writeFile(path.resolve("audit/prelaunch/lighthouse-summary.json"), JSON.stringify(result, null, 2));
console.log(`Saved ${summary.length} Lighthouse reports to ${outputDirectory}`);
