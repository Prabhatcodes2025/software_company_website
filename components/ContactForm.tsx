"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle, MessageCircle, TriangleAlert } from "lucide-react";
import { company, services } from "@/lib/site";

type Status = { kind: "idle" | "loading" | "error" | "success"; message?: string; whatsapp?: string; emailDelivered?: boolean };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      submissionId: crypto.randomUUID(), fullName: data.get("fullName"), email: data.get("email"), company: data.get("company"), country: data.get("country"), service: data.get("service"), budget: data.get("budget"), timeline: data.get("timeline"), requirements: data.get("requirements"), privacyConsent: data.get("privacyConsent") === "on", website: data.get("website"),
    };
    setStatus({ kind: "loading" });
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json() as { ok?: boolean; message?: string; emailDelivered?: boolean };
      if (!response.ok || !result.ok) { setStatus({ kind: "error", message: result.message || "The enquiry could not be submitted. Nothing was saved." }); return; }
      const whatsappMessage = [`Hi LetsFygure, I submitted a project enquiry.`, `Company: ${payload.company}`, `Service: ${payload.service}`, `Project: ${String(payload.requirements).slice(0, 500)}`].join("\n");
      setStatus({ kind: "success", emailDelivered: result.emailDelivered, whatsapp: `${company.whatsapp}?text=${encodeURIComponent(whatsappMessage)}` });
      form.reset();
    } catch {
      setStatus({ kind: "error", message: "The secure enquiry service is unavailable. Nothing was submitted. Please use email or WhatsApp." });
    }
  }

  if (status.kind === "success") return <div className="contact-success" role="status"><CheckCircle2 /><p className="eyebrow dark">Enquiry saved</p><h2>Thank you. Your project brief is safely recorded.</h2><p>{status.emailDelivered ? "A notification was sent to the LetsFygure team." : "The email notification could not be delivered, but your saved enquiry is retained for follow-up."}</p><div><a className="button" href={status.whatsapp} target="_blank" rel="noreferrer"><MessageCircle />Continue on WhatsApp</a><button type="button" className="text-button" onClick={() => setStatus({ kind: "idle" })}>Send another enquiry</button></div></div>;

  return <form className="contact-form" onSubmit={submit}><div className="form-intro"><span>Secure project brief</span><strong>Saved before success is shown.</strong></div><div className="form-grid">
    <label><span>Full name *</span><input name="fullName" required minLength={2} maxLength={100} autoComplete="name" /></label>
    <label><span>Business email *</span><input name="email" type="email" required maxLength={160} autoComplete="email" /></label>
    <label><span>Company name *</span><input name="company" required maxLength={140} autoComplete="organization" /></label>
    <label><span>Country *</span><input name="country" required maxLength={100} autoComplete="country-name" /></label>
    <label><span>Service required *</span><select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(item => <option key={item.slug} value={item.title}>{item.title}</option>)}</select></label>
    <label><span>Estimated budget</span><select name="budget" defaultValue=""><option value="">Prefer not to say</option><option>Under ₹1 lakh</option><option>₹1–5 lakh</option><option>₹5–15 lakh</option><option>₹15 lakh+</option></select></label>
    <label className="form-wide"><span>Ideal timeline</span><select name="timeline" defaultValue=""><option value="">Flexible / not decided</option><option>Within 1 month</option><option>1–3 months</option><option>3–6 months</option><option>6 months+</option></select></label>
    <label className="form-honeypot" aria-hidden="true"><span>Website</span><input name="website" tabIndex={-1} autoComplete="off" /></label>
  </div><label><span>Project requirements *</span><textarea name="requirements" required minLength={20} maxLength={4000} rows={6} placeholder="What are you building or improving? Who uses it, what exists today and what outcome matters most?" /></label>
  <label className="consent-field"><input type="checkbox" name="privacyConsent" required /><span>I agree that LetsFygure may store and use these details to respond to this enquiry. See the <Link href="/privacy">Privacy Policy</Link>.</span></label>
  <div className="form-security-note"><CheckCircle2 /><span>Server validation · database-first persistence · rate limiting · no browser-exposed credentials</span></div>
  <div className="form-feedback" aria-live="polite">{status.kind === "error" && <p><TriangleAlert />{status.message}</p>}</div>
  <button className="button lf-button-sweep" type="submit" disabled={status.kind === "loading"}>{status.kind === "loading" ? <><LoaderCircle className="spin" />Saving securely…</> : <>Submit project brief <ArrowRight /></>}</button>
  <p className="form-fallback">If secure submission is not configured, email <a href={`mailto:${company.email}`}>{company.email}</a> or use WhatsApp. The form will never display success without a database save.</p>
  </form>;
}
