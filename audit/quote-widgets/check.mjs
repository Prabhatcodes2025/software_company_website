import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright-core";

const base = process.env.AUDIT_BASE_URL ?? "http://127.0.0.1:3014";
const output = path.resolve("audit/quote-widgets");
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({ executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
const results = [];
function check(width, name, passed, detail) { results.push({ width, name, passed, detail }); console.log(passed ? "PASS" : "FAIL", width, name, detail ?? ""); }

try {
  for (const width of [320, 390, 768, 1024, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: width < 500 ? 760 : 900 }, reducedMotion: "reduce" });
    await page.goto(base, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const whatsapp = page.getByRole("link", { name: "Chat on WhatsApp" });
    const href = await whatsapp.getAttribute("href");
    check(width, "WhatsApp number and message", href?.startsWith("https://wa.me/917869251729?text=") && decodeURIComponent(href).includes("discuss a project"), href);
    check(width, "one WhatsApp button", await whatsapp.count() === 1 && await whatsapp.locator("svg").count() === 1);
    check(width, "back to top initially hidden", await page.getByRole("button", { name: "Back to top" }).count() === 0);
    await page.evaluate(() => window.scrollTo(0, 550));
    await page.getByRole("button", { name: "Back to top" }).waitFor();
    const topButton = page.getByRole("button", { name: "Back to top" });
    const topRect = await topButton.boundingBox();
    const waRect = await whatsapp.boundingBox();
    check(width, "floating controls inside viewport", Boolean(topRect && waRect && topRect.x >= 0 && topRect.y >= 0 && waRect.x + waRect.width <= width));
    await page.screenshot({ path: path.join(output, `widgets-${width}.png`) });
    await topButton.click();
    await page.waitForFunction(() => window.scrollY < 10);
    check(width, "back to top works", await page.evaluate(() => window.scrollY < 10));

    const quote = page.getByRole("button", { name: "Get a Free Quote" }).first();
    await quote.scrollIntoViewIfNeeded();
    await page.screenshot({ path: path.join(output, `quote-trigger-${width}.png`) });
    await quote.click();
    const dialog = page.getByRole("dialog", { name: /Get a free quote/i });
    await dialog.waitFor();
    check(width, "quote modal opens", await dialog.isVisible());
    check(width, "focus starts in form", await page.locator(":focus").getAttribute("name") === "fullName");
    await page.keyboard.press("Shift+Tab");
    check(width, "focus stays in modal", await page.locator(":focus").evaluate((node) => Boolean(node.closest("dialog.quote-dialog"))));
    await dialog.locator('input[name="fullName"]').focus();
    check(width, "background scroll locked", await page.evaluate(() => document.body.style.overflow === "hidden"));
    const overflow = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth, dialog: document.querySelector(".quote-dialog")?.getBoundingClientRect().width }));
    check(width, "no modal horizontal overflow", overflow.document <= overflow.viewport && (overflow.dialog ?? 0) <= overflow.viewport, overflow);
    await dialog.screenshot({ path: path.join(output, `quote-${width}.png`) });
    await page.keyboard.press("Escape");
    check(width, "Escape closes modal", !(await dialog.isVisible()));
    check(width, "focus restored", await quote.evaluate((button) => document.activeElement === button));
    await quote.click();
    await dialog.getByRole("button", { name: "Close quote request" }).click();
    check(width, "close button works", !(await dialog.isVisible()));
    await quote.click();
    await page.mouse.click(2, 2);
    check(width, "backdrop closes modal", !(await dialog.isVisible()));
    await page.close();
  }

  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(base + "/services/web-development", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Get a Free Quote" }).click();
  const dialog = page.getByRole("dialog");
  check(390, "service preselected", await dialog.locator('select[name="service"]').inputValue() === "Web Development");
  await dialog.getByRole("button", { name: "Send Enquiry" }).click();
  check(390, "required fields validated", await dialog.locator(":invalid").count() > 0);
  await dialog.locator('input[name="fullName"]').fill("Test Enquirer");
  await dialog.locator('input[name="email"]').fill("test@example.com");
  await dialog.locator('input[name="phone"]').fill("+91 98765 43210");
  await dialog.locator('input[name="company"]').fill("Test Company");
  await dialog.locator('input[name="country"]').fill("India");
  await dialog.locator('textarea[name="requirements"]').fill("A test website project with a clear user journey and reliable enquiry flow.");
  await dialog.locator('input[name="privacyConsent"]').check();
  const responsePromise = page.waitForResponse((response) => response.url().endsWith("/api/contact"));
  await dialog.getByRole("button", { name: "Send Enquiry" }).click();
  const response = await responsePromise;
  check(390, "local production origin safely rejected", response.status() === 403 && await dialog.getByRole("alert").isVisible(), response.status());
  check(390, "no false success", await dialog.getByText("Your quote request is recorded.").count() === 0);
  await dialog.getByRole("button", { name: "Close quote request" }).click();

  await page.route("**/api/contact", async (route) => route.fulfill({ status: 201, contentType: "application/json", body: JSON.stringify({ ok: true, saved: false, emailDelivered: true }) }));
  await page.getByRole("button", { name: "Get a Free Quote" }).click();
  await dialog.locator('input[name="fullName"]').fill("Test Enquirer");
  await dialog.locator('input[name="email"]').fill("test@example.com");
  await dialog.locator('input[name="phone"]').fill("+91 98765 43210");
  await dialog.locator('input[name="company"]').fill("Test Company");
  await dialog.locator('input[name="country"]').fill("India");
  await dialog.locator('textarea[name="requirements"]').fill("A test website project with a clear user journey and reliable enquiry flow.");
  await dialog.locator('input[name="privacyConsent"]').check();
  await dialog.getByRole("button", { name: "Send Enquiry" }).click();
  await dialog.getByRole("alert").waitFor();
  check(390, "requires saved confirmation", await dialog.getByRole("alert").isVisible() && await dialog.getByText("Your quote request is recorded.").count() === 0);
  await dialog.getByRole("button", { name: "Close quote request" }).click();
  await page.unroute("**/api/contact");

  await page.route("**/api/contact", async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 450));
    await route.fulfill({ status: 201, contentType: "application/json", body: JSON.stringify({ ok: true, saved: true, emailDelivered: false }) });
  });
  await page.getByRole("button", { name: "Get a Free Quote" }).click();
  await dialog.locator('input[name="fullName"]').fill("Test Enquirer");
  await dialog.locator('input[name="email"]').fill("test@example.com");
  await dialog.locator('input[name="phone"]').fill("+91 98765 43210");
  await dialog.locator('input[name="company"]').fill("Test Company");
  await dialog.locator('input[name="country"]').fill("India");
  await dialog.locator('textarea[name="requirements"]').fill("A test website project with a clear user journey and reliable enquiry flow.");
  await dialog.locator('input[name="privacyConsent"]').check();
  await dialog.getByRole("button", { name: "Send Enquiry" }).click();
  check(390, "loading state blocks repeat submit", await dialog.getByRole("button", { name: /Saving securely/ }).isDisabled());
  await dialog.getByText("Your quote request is recorded.").waitFor();
  check(390, "saved without email is explained", await dialog.getByText(/email notification was not delivered/i).isVisible());
  await dialog.getByRole("button", { name: "Close quote request" }).click();
  await page.unroute("**/api/contact");

  await page.goto(base + "/contact", { waitUntil: "networkidle" });
  check(390, "existing contact form retained", await page.locator("form.contact-form").count() === 1 && await page.locator('form.contact-form [name="privacyConsent"]').count() === 1);
  const tawk = await page.evaluate(() => ({ script: Boolean(document.querySelector('script[src*="embed.tawk.to"]')), iframes: [...document.querySelectorAll('iframe[src*="tawk.to"]')].map((frame) => ({ src: frame.src, rect: frame.getBoundingClientRect().toJSON() })), api: Boolean(window.Tawk_API) }));
  check(390, "tawk script retained", tawk.script, tawk);
  await page.evaluate(() => window.Tawk_API?.onChatMaximized?.());
  check(390, "WhatsApp hides for expanded chat event", await page.locator(".floating-controls").getAttribute("data-chat-expanded") === "true");
  await page.evaluate(() => window.Tawk_API?.onChatMinimized?.());
  check(390, "WhatsApp returns for minimized chat event", await page.locator(".floating-controls").getAttribute("data-chat-expanded") === "false");
  await page.close();
} finally { await browser.close(); }

await fs.writeFile(path.join(output, "results.json"), JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2));
if (results.some((result) => !result.passed)) process.exitCode = 1;
