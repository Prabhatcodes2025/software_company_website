"use client";

import { technologies } from "@/lib/site";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { HoverLift } from "./Motion";
import { useLanguage } from "./LanguageProvider";

export function TechStack() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#061426]/80 py-20 sm:py-24">
      <div className="absolute left-1/2 top-0 h-80 w-[80rem] -translate-x-1/2 rounded-full bg-cyanfire/10 blur-3xl" />
      <Container className="relative">
        <SectionHeader
          eyebrow={t.sections.tech.eyebrow}
          title={t.sections.tech.title}
          text={t.sections.tech.text}
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 items-stretch gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {technologies.map((tech, index) => (
            <HoverLift key={tech} delay={index * 0.025} className="h-full max-w-full">
              <div className="group relative flex h-full max-w-full flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-center shadow-[0_18px_56px_rgba(0,0,0,0.22)] transition duration-300 hover:border-cyanfire/40 hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
                <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-cyanfire/25 to-mint/10 text-lg font-black text-white ring-1 ring-white/10">
                  {tech.slice(0, 2).replace(".", "")}
                </div>
                <p className="mt-4 break-words text-sm font-black text-slate-200">{tech}</p>
                <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyanfire to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            </HoverLift>
          ))}
        </div>
      </Container>
    </section>
  );
}
