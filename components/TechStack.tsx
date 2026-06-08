import { technologies } from "@/lib/site";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Motion";

export function TechStack() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#061426]/70 py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyanfire/60 to-transparent" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeader
            eyebrow="Technology stack"
            title="Modern tools for resilient digital products."
            text="We choose proven platforms that help teams ship fast, scale cleanly, and maintain software with confidence."
          />
          <Reveal className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] px-4 py-4 text-center text-sm font-bold text-slate-100 shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition hover:border-cyanfire/60 hover:text-cyanfire"
              >
                <span className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyanfire/70 to-transparent opacity-0 transition group-hover:opacity-100" />
                {tech}
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
