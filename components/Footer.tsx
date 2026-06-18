"use client";

import Link from "next/link";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter } from "lucide-react";
import { company, navItems, services } from "@/lib/site";
import { Container } from "./Container";
import { languages } from "@/data/translations";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t, setLanguage } = useLanguage();
  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
    { label: "X / Twitter", href: "https://x.com", icon: Twitter },
    { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
    { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
    { label: "WhatsApp", href: "https://wa.me/919685761187", icon: MessageCircle }
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030a17]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyanfire/60 to-transparent" />
      <div className="absolute -right-32 top-20 size-96 rounded-full bg-cyanfire/10 blur-3xl" />
      <Container className="relative grid gap-10 py-14 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1fr]">
        <div className="max-w-md">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-cyanfire to-mint text-lg font-black text-ink">C</span>
            <span className="text-lg font-black text-white">{company.name}</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            {t.footer.description}
          </p>
          <div className="mt-6 flex max-w-sm flex-wrap gap-2.5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid size-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyanfire/45 hover:bg-cyanfire/[0.08] hover:text-cyanfire hover:shadow-[0_0_24px_rgba(56,213,255,0.18)]"
                  aria-label={social.label}
                >
                  <Icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
                </Link>
              );
            })}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
            <span className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2">NDA-ready</span>
            <span className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2">Global delivery</span>
          </div>
        </div>
        <div>
          <p className="font-black text-white">Company</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-black text-white">{t.footer.globalServices}</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            {services.map((service) => (
              <Link key={service.title} href="/services" className="footer-link">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-black text-white">{t.footer.newsletterTitle}</p>
          <p className="mt-4 text-sm leading-6 text-slate-400">{t.footer.newsletterText}</p>
          <form className="mt-5 flex rounded-xl border border-white/10 bg-white/[0.04] p-1">
            <input
              type="email"
              aria-label="Email address"
              placeholder={t.footer.emailPlaceholder}
              className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-500"
            />
            <button type="submit" className="grid size-10 place-items-center rounded-lg bg-cyanfire text-ink" aria-label="Subscribe">
              <ArrowRight size={18} />
            </button>
          </form>
          <p className="mt-8 font-black text-white">{t.footer.contact}</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <span className="flex items-center gap-2"><Mail size={16} /> {company.email}</span>
            <a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 transition hover:text-cyanfire"><Phone size={16} /> Sales: {company.phone}</a>
            <a href={`tel:${company.hrPhone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 transition hover:text-cyanfire"><Phone size={16} /> HR: {company.hrPhone}</a>
            <span className="flex items-center gap-2"><MapPin size={16} /> India, USA, UK, UAE</span>
          </div>
        </div>
      </Container>
      <Container className="relative grid gap-6 border-t border-white/10 py-8 md:grid-cols-2">
        <div>
          <p className="font-black text-white">{t.footer.regions}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-400">
            {t.global.regions.map((region) => (
              <span key={region} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5">{region}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="font-black text-white">{t.footer.languages}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-400">
            {languages.map((language) => (
              <button key={language.code} type="button" onClick={() => setLanguage(language.code)} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 transition hover:border-cyanfire/40 hover:text-cyanfire">
                {language.nativeLabel}
              </button>
            ))}
          </div>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>(c) 2026 {company.name}. {t.footer.rights}</p>
        <p>{t.footer.bottom}</p>
      </Container>
    </footer>
  );
}
