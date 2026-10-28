import { createHmac } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { company, services } from "@/lib/site";

type ContactPayload = {
  submissionId?: string; fullName?: string; email?: string; company?: string; country?: string;
  service?: string; budget?: string; timeline?: string; requirements?: string; privacyConsent?: boolean; website?: string;
  phone?: string; source?: string;
};

const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const LIMIT = 5;

function clean(value: unknown, max: number) { return typeof value === "string" ? value.trim().slice(0, max) : ""; }
function escapeHtml(value: string) { return value.replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]!)); }
function jsonError(message: string, status: number, code: string) { return NextResponse.json({ ok: false, message, code }, { status }); }

function isAllowedOrigin(origin: string, requestHost: string) {
  let originUrl: URL;
  try { originUrl = new URL(origin); } catch { return false; }
  if (originUrl.origin !== origin || originUrl.host !== requestHost) return false;
  const configuredOrigins = (process.env.CONTACT_ALLOWED_ORIGINS ?? "").split(",").map(value => value.trim()).filter(Boolean);
  const allowedOrigins = [company.url, "https://www.letsfygure.com", ...configuredOrigins];
  if (allowedOrigins.includes(origin)) return true;
  if (process.env.NODE_ENV !== "production") {
    return originUrl.protocol === "http:" && ["localhost", "127.0.0.1"].includes(originUrl.hostname);
  }
  return false;
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const fetchSite = request.headers.get("sec-fetch-site");
  if (!origin || !isAllowedOrigin(origin, request.headers.get("host") ?? request.nextUrl.host) || (fetchSite && fetchSite !== "same-origin" && fetchSite !== "none")) return jsonError("This request origin is not allowed.", 403, "origin_rejected");

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL;
  const rateSecret = process.env.CONTACT_RATE_LIMIT_SECRET;
  if (!supabaseUrl || !supabaseKey || !resendKey || !notificationEmail || !rateSecret) return jsonError("Secure enquiry handling is not configured yet. Please use email or WhatsApp.", 503, "configuration_required");

  let body: ContactPayload;
  try { body = await request.json() as ContactPayload; } catch { return jsonError("The request could not be read.", 400, "invalid_json"); }
  if (clean(body.website, 200)) return NextResponse.json({ ok: true }, { status: 202 });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const rateKey = createHmac("sha256", rateSecret).update(ip).digest("hex");
  const now = Date.now();
  const current = attempts.get(rateKey);
  if (current && current.resetAt > now && current.count >= LIMIT) return jsonError("Too many enquiries were sent from this connection. Please try again later.", 429, "rate_limited");
  attempts.set(rateKey, !current || current.resetAt <= now ? { count: 1, resetAt: now + WINDOW_MS } : { ...current, count: current.count + 1 });

  const submissionId = clean(body.submissionId, 80);
  const fullName = clean(body.fullName, 100);
  const email = clean(body.email, 160).toLowerCase();
  const company = clean(body.company, 140);
  const country = clean(body.country, 100);
  const service = clean(body.service, 100);
  const budget = clean(body.budget, 80);
  const timeline = clean(body.timeline, 80);
  const requirements = clean(body.requirements, 4000);
  const phone = clean(body.phone, 32);
  const isQuote = body.source === "quote_popup";
  const phoneDigits = phone.replace(/\D/g, "");
  if (!submissionId || !/^[a-zA-Z0-9-]{16,80}$/.test(submissionId)) return jsonError("Please refresh the page and try again.", 400, "invalid_submission");
  if (fullName.length < 2 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !company || !country || !services.some(item => item.title === service) || requirements.length < 20 || body.privacyConsent !== true) return jsonError("Please complete every required field and accept the privacy notice.", 422, "validation_failed");
  if ((isQuote && !phone) || (phone && (!/^[+()\d\s.-]+$/.test(phone) || phoneDigits.length < 7 || phoneDigits.length > 15))) return jsonError("Please enter a valid phone or WhatsApp number.", 422, "invalid_phone");

  const row = { submission_id: submissionId, full_name: fullName, business_email: email, company_name: company, country, service_required: service, estimated_budget: budget || null, timeline: timeline || null, requirements, privacy_consent: true, email_status: "pending", source: isQuote ? "quote_popup" : "website", ...(phone ? { phone_whatsapp: phone } : {}) };
  let databaseResponse: Response;
  try { databaseResponse = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/contact_enquiries`, { method: "POST", headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}`, "Content-Type": "application/json", Prefer: "return=representation" }, body: JSON.stringify(row), cache: "no-store" }); }
  catch { return jsonError("The secure enquiry store is unavailable. Nothing was submitted. Please try again or contact us directly.", 502, "persistence_unavailable"); }
  if (!databaseResponse.ok) {
    if (databaseResponse.status === 409) return jsonError("This enquiry identifier was already processed. Please refresh the page before trying again.", 409, "duplicate_submission");
    console.error("Contact persistence failed", databaseResponse.status);
    return jsonError("Your enquiry could not be saved. Nothing was submitted. Please try again or contact us directly.", 502, "persistence_failed");
  }

  const html = `<h2>New LetsFygure project enquiry</h2><p><strong>Name:</strong> ${escapeHtml(fullName)}</p><p><strong>Business email:</strong> ${escapeHtml(email)}</p><p><strong>Phone / WhatsApp:</strong> ${escapeHtml(phone || "Not provided")}</p><p><strong>Company:</strong> ${escapeHtml(company)}</p><p><strong>Country:</strong> ${escapeHtml(country)}</p><p><strong>Service:</strong> ${escapeHtml(service)}</p><p><strong>Budget:</strong> ${escapeHtml(budget || "Not provided")}</p><p><strong>Timeline:</strong> ${escapeHtml(timeline || "Not provided")}</p><h3>Requirements</h3><p>${escapeHtml(requirements).replace(/\n/g, "<br>")}</p><p><small>Submission ID: ${escapeHtml(submissionId)}</small></p>`;
  let emailDelivered = false;
  let emailStatus = "Resend unavailable";
  try { const emailResponse = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: "LetsFygure Website <enquiries@letsfygure.com>", to: [notificationEmail], reply_to: email, subject: `Project enquiry: ${service} — ${company}`, html }), cache: "no-store" }); emailDelivered = emailResponse.ok; emailStatus = `Resend status ${emailResponse.status}`; }
  catch { emailDelivered = false; }
  try { const updateResponse = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/contact_enquiries?submission_id=eq.${encodeURIComponent(submissionId)}`, { method: "PATCH", headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ email_status: emailDelivered ? "sent" : "failed", email_error: emailDelivered ? null : emailStatus }), cache: "no-store" }); if (!updateResponse.ok) console.error("Contact email status update failed", updateResponse.status); }
  catch { console.error("Contact email status update unavailable"); }
  return NextResponse.json({ ok: true, saved: true, emailDelivered }, { status: 201 });
}
