import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { company, contactReasons } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Nexora Technologies to discuss web, mobile, AI, blockchain, SaaS, or UI/UX product development."
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Tell us what you want to build."
              text="Share your goals, constraints, and timeline. We will respond with practical next steps and a clear path to discovery."
            />
            <div className="mt-8 grid gap-4 text-slate-300">
              <a className="flex items-center gap-3 hover:text-cyanfire" href={`mailto:${company.email}`}><Mail size={19} /> {company.email}</a>
              <a className="flex items-center gap-3 hover:text-cyanfire" href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}><Phone size={19} /> {company.phone}</a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactReasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <Icon className="text-mint" size={22} />
                    <p className="mt-3 font-semibold text-white">{reason.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <form className="glass grid gap-5 rounded-2xl p-6" action={`mailto:${company.email}`} method="post" encType="text/plain">
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Name
              <input name="name" required className="rounded-lg border border-white/10 bg-ink/70 px-4 py-3 text-white outline-none focus:border-cyanfire" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Email
              <input name="email" type="email" required className="rounded-lg border border-white/10 bg-ink/70 px-4 py-3 text-white outline-none focus:border-cyanfire" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Project type
              <select name="projectType" className="rounded-lg border border-white/10 bg-ink/70 px-4 py-3 text-white outline-none focus:border-cyanfire">
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>AI/ML</option>
                <option>Blockchain</option>
                <option>SaaS</option>
                <option>UI/UX</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Message
              <textarea name="message" required rows={6} className="resize-none rounded-lg border border-white/10 bg-ink/70 px-4 py-3 text-white outline-none focus:border-cyanfire" />
            </label>
            <button className="rounded-lg bg-cyanfire px-6 py-4 font-bold text-ink transition hover:bg-mint" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
