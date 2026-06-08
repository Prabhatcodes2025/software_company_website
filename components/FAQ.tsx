import { faqs } from "@/lib/site";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Motion";

export function FAQ() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions leaders ask before they invest."
            text="Clear answers on delivery, architecture, AI, design, and long-term support."
          />
          <Reveal className="grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-white/10 bg-ink/60 p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-white">
                  {faq.question}
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-cyanfire/12 text-cyanfire transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
