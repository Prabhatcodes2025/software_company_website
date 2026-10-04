"use client";
import { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { company, services } from "@/lib/site";

export function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const data = new FormData(event.currentTarget);
    const message = [`Hi LetsFygure, I'd like to discuss a project.`, `Name: ${data.get("name")}`, `Company: ${data.get("company") || "Not provided"}`, `Email: ${data.get("email")}`, `Phone: ${data.get("phone") || "Not provided"}`, `Service: ${data.get("service")}`, `Budget: ${data.get("budget")}`, `Timeline: ${data.get("timeline")}`, `Project: ${data.get("project")}`].join("\n");
    window.open(`${company.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }
  return <form className="contact-form" onSubmit={submit}><div className="form-intro"><span>Project brief</span><strong>A few useful details are enough to begin.</strong></div><div className="form-grid"><label><span>Name *</span><input name="name" required autoComplete="name" /></label><label><span>Company</span><input name="company" autoComplete="organization" /></label><label><span>Email *</span><input name="email" type="email" required autoComplete="email" /></label><label><span>Phone / WhatsApp</span><input name="phone" type="tel" autoComplete="tel" /></label><label><span>Service required *</span><select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(item => <option key={item.slug}>{item.title}</option>)}</select></label><label><span>Estimated budget</span><select name="budget" defaultValue="Not decided"><option>Not decided</option><option>Under ₹1 lakh</option><option>₹1–5 lakh</option><option>₹5–15 lakh</option><option>₹15 lakh+</option></select></label><label className="form-wide"><span>Ideal timeline</span><select name="timeline" defaultValue="Flexible"><option>Flexible</option><option>Within 1 month</option><option>1–3 months</option><option>3–6 months</option><option>6 months+</option></select></label></div><label><span>Project summary *</span><textarea name="project" required rows={5} placeholder="What are you building or improving? What outcome matters most?" /></label><p>Submitting opens WhatsApp with your project brief. Your details are not stored on this website.</p><button className="button lf-button-sweep" type="submit">Discuss your idea <ArrowRight size={18} /></button></form>;
}
