"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, LoaderCircle, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { company, services } from "@/lib/site";
import "@/app/quote-modal.css";

type QuoteState = { kind: "idle" | "loading" | "error" | "success"; message?: string; emailDelivered?: boolean; whatsapp?: string };
export function QuoteDialog({ trigger, service, onClose }: { trigger: HTMLButtonElement; service?: string; onClose: () => void }) {
  const [selectedService, setSelectedService] = useState(service && services.some((item) => item.title === service) ? service : "");
  const [status, setStatus] = useState<QuoteState>({ kind: "idle" });
  const dialogRef = useRef<HTMLDialogElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    if (dialog && !dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => firstFieldRef.current?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog?.open) dialog.close();
      requestAnimationFrame(() => trigger.focus());
    };
  }, [trigger]);

  useEffect(() => { if (status.kind === "success") successRef.current?.focus(); }, [status.kind]);

  function closeQuote() { if (status.kind !== "loading") onClose(); }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      submissionId: crypto.randomUUID(),
      source: "quote_popup",
      fullName: data.get("fullName"),
      email: data.get("email"),
      phone: data.get("phone"),
      company: data.get("company"),
      country: data.get("country"),
      service: selectedService,
      requirements: data.get("requirements"),
      privacyConsent: data.get("privacyConsent") === "on",
      website: data.get("website"),
    };
    setStatus({ kind: "loading" });
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json() as { ok?: boolean; saved?: boolean; emailDelivered?: boolean; message?: string };
      if (!response.ok || !result.ok || !result.saved) {
        setStatus({ kind: "error", message: result.message || "Your enquiry could not be saved. Nothing was submitted." });
        return;
      }
      const whatsappMessage = ["Hi LetsFygure, I submitted a quote enquiry.", `Service: ${selectedService}`, `Project: ${String(payload.requirements).slice(0, 500)}`].join("\n");
      setStatus({ kind: "success", emailDelivered: result.emailDelivered === true, whatsapp: `${company.whatsapp}?text=${encodeURIComponent(whatsappMessage)}` });
      formRef.current?.reset();
    } catch {
      setStatus({ kind: "error", message: "The secure enquiry service is unavailable. Nothing was submitted. Please contact us directly." });
    }
  }

  return <dialog ref={dialogRef} className="quote-dialog" aria-labelledby="quote-title" aria-describedby={status.kind === "success" ? undefined : "quote-intro"} onCancel={(event) => { event.preventDefault(); closeQuote(); }} onClick={(event) => { if (event.target === dialogRef.current) closeQuote(); }}>
      <div className="quote-dialog-panel">
        <div className="quote-brand-panel" aria-hidden="true">
          <Image src="/icon.png" alt="" width={76} height={76} />
          <div className="quote-brand-mark"><span>LET&apos;S</span><strong>FIGURE<br />IT OUT.</strong></div>
          <p>Clear questions. Useful scope. A practical next step.</p>
          <div className="quote-brand-lines"><span>Web</span><span>Software</span><span>Mobile</span><span>AI</span></div>
        </div>
        <div className="quote-form-panel">
          <button type="button" className="quote-close" onClick={closeQuote} aria-label="Close quote request" disabled={status.kind === "loading"}><X aria-hidden="true" /></button>
          {status.kind === "success" ? <div className="quote-success" role="status">
            <CheckCircle2 aria-hidden="true" />
            <p className="quote-eyebrow">Enquiry saved</p>
            <h2 id="quote-title" ref={successRef} tabIndex={-1}>Your quote request is recorded.</h2>
            <p>{status.emailDelivered ? "A notification was sent to the LetsFygure team." : "The email notification was not delivered, but your enquiry is saved for follow-up."}</p>
            <div><a className="button" href={status.whatsapp} target="_blank" rel="noopener noreferrer">Continue on WhatsApp <ArrowUpRight aria-hidden="true" /></a><button type="button" className="quote-text-button" onClick={closeQuote}>Close</button></div>
          </div> : <>
            <p className="quote-eyebrow">Project enquiry</p>
            <h2 id="quote-title">Get a free quote.</h2>
            <p id="quote-intro" className="quote-intro">Tell us what you need. We&apos;ll review the scope and suggest a useful next step.</p>
            <form ref={formRef} className="quote-form" onSubmit={submit} onInvalid={() => setStatus({ kind: "error", message: "Please complete the highlighted required fields." })}>
              <div className="quote-field-grid">
                <label>Full name <span>*</span><input ref={firstFieldRef} name="fullName" required minLength={2} maxLength={100} autoComplete="name" /></label>
                <label>Email <span>*</span><input name="email" type="email" required maxLength={160} autoComplete="email" /></label>
                <label>Phone / WhatsApp <span>*</span><input name="phone" type="tel" required pattern="[+0-9(). -]{7,32}" maxLength={32} inputMode="tel" autoComplete="tel" aria-describedby="quote-phone-hint" /><small id="quote-phone-hint">Include your country code if outside India.</small></label>
                <label>Company / organisation <span>*</span><input name="company" required maxLength={140} autoComplete="organization" /></label>
                <label>Country <span>*</span><input name="country" required maxLength={100} autoComplete="country-name" /></label>
                <label>Service / subject <span>*</span><select name="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)} required><option value="" disabled>Select a service</option>{services.map((item) => <option key={item.slug} value={item.title}>{item.title}</option>)}</select></label>
              </div>
              <label className="quote-details">Project details <span>*</span><textarea name="requirements" required minLength={20} maxLength={4000} rows={4} placeholder="What are you building or improving? What needs to work better?" /></label>
              <p className="quote-attachment-note">Have files to share? We&apos;ll arrange secure file sharing after your initial enquiry.</p>
              <label className="quote-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
              <label className="quote-consent"><input type="checkbox" name="privacyConsent" required /><span>I agree that LetsFygure may store these details to respond to my enquiry. Read the <Link href="/privacy" onClick={closeQuote}>Privacy Policy</Link>.</span></label>
              {status.kind === "error" && <p className="quote-error" role="alert">{status.message} <a href={`mailto:${company.email}`}>Email us</a> if you prefer.</p>}
              <button className="button quote-submit" type="submit" disabled={status.kind === "loading"}>{status.kind === "loading" ? <><LoaderCircle className="spin" aria-hidden="true" />Saving securely…</> : <>Send Enquiry <ArrowUpRight aria-hidden="true" /></>}</button>
            </form>
          </>}
        </div>
      </div>
    </dialog>;
}
