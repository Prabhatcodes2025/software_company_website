import fs from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.AUDIT_BASE_URL ?? "http://localhost:3000";
const canonicalOrigin = "https://letsfygure.com";
const oldHost = "clickmyze-three.vercel.app";
const failures = [];

function readTag(html, tag, attribute, value) {
  const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`<${tag}\\b(?=[^>]*\\b${attribute}="${escaped}")[^>]*\\b(?:content|href)="([^"]+)"[^>]*>`, "i");
  return html.match(pattern)?.[1] ?? null;
}

const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
const sitemap = await sitemapResponse.text();
if (!sitemapResponse.ok) failures.push(`sitemap HTTP ${sitemapResponse.status}`);
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
if (locations.length === 0) failures.push("sitemap has no URLs");
for (const location of locations) {
  if (!location.startsWith(`${canonicalOrigin}/`) && location !== canonicalOrigin) failures.push(`non-canonical sitemap URL: ${location}`);
}

const robotsResponse = await fetch(`${baseUrl}/robots.txt`);
const robots = await robotsResponse.text();
if (!robotsResponse.ok || !robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`)) failures.push("robots.txt sitemap does not use the primary domain");

for (const location of locations) {
  const route = new URL(location).pathname;
  const response = await fetch(new URL(route, baseUrl));
  const html = await response.text();
  if (!response.ok) failures.push(`${route}: HTTP ${response.status}`);
  if (html.includes(oldHost)) failures.push(`${route}: old deployment host in HTML`);
  const canonical = readTag(html, "link", "rel", "canonical");
  const ogUrl = readTag(html, "meta", "property", "og:url");
  const ogImage = readTag(html, "meta", "property", "og:image");
  const twitterImage = readTag(html, "meta", "name", "twitter:image");
  if (canonical !== location) failures.push(`${route}: canonical ${canonical ?? "missing"} != ${location}`);
  if (ogUrl !== location) failures.push(`${route}: og:url ${ogUrl ?? "missing"} != ${location}`);
  if (!ogImage?.startsWith(`${canonicalOrigin}/`)) failures.push(`${route}: og:image missing or non-canonical`);
  if (!twitterImage?.startsWith(`${canonicalOrigin}/`)) failures.push(`${route}: twitter:image missing or non-canonical`);
  const schema = [...html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g)].map(match => match[1]);
  if (schema.length === 0) failures.push(`${route}: no JSON-LD`);
  for (const item of schema) {
    if (item.includes(oldHost)) failures.push(`${route}: old deployment host in JSON-LD`);
  }
}

const result = { checkedAt: new Date().toISOString(), baseUrl, canonicalOrigin, routeCount: locations.length, failures };
await fs.mkdir(path.resolve("audit/domain"), { recursive: true });
await fs.writeFile(path.resolve("audit/domain/metadata-results.json"), JSON.stringify(result, null, 2));
console.log(JSON.stringify(result, null, 2));
if (failures.length > 0) process.exitCode = 1;
