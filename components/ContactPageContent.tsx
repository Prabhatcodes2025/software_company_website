"use client";

import { Mail, Phone } from "lucide-react";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { ContactForm } from "./ContactForm";
import { company, contactReasons } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";

export function ContactPageContent() {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <Container>
        <div className="grid min-w-0 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader eyebrow={t.contact.eyebrow} title={t.contact.title} text={t.contact.text} />
            <div className="mt-8 grid gap-4 text-slate-300">
              <a className="flex min-w-0 items-center gap-3 break-words hover:text-cyanfire" href={`mailto:${company.email}`}><Mail size={19} className="shrink-0" /> <span className="min-w-0 break-words">{company.email}</span></a>
              <a className="flex min-w-0 items-center gap-3 break-words hover:text-cyanfire" href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}><Phone size={19} className="shrink-0" /> <span className="min-w-0 break-words">{company.phone}</span></a>
            </div>
            <div className="mt-10 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
              {contactReasons.map((reason, index) => {
                const Icon = reason.icon;
                const label = t.contactReasons[index] ?? reason.title;
                return (
                  <div key={label} className="flex h-full max-w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <Icon className="text-mint" size={22} />
                    <p className="mt-3 break-words font-semibold text-white">{label}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
