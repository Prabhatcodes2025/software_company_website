import { whyChooseUs } from "@/lib/site";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { HoverLift } from "./Motion";

export function WhyChooseUs() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Why choose us"
          title="The discipline of an enterprise partner with the speed of a product studio."
          text="Nexora combines senior judgment, reliable delivery rituals, and polished execution across strategy, design, engineering, cloud, and launch."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <HoverLift key={item.title} delay={index * 0.04}>
                <article className="premium-card h-full rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid size-12 place-items-center rounded-xl border border-cyanfire/25 bg-cyanfire/12 text-cyanfire shadow-[0_0_35px_rgba(56,213,255,0.16)]">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-white/25">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                </article>
              </HoverLift>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
