import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { HoverLift } from "./Motion";

export function Testimonials() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Client reviews"
          title="Trusted by founders, product leaders, and operations teams."
          text="Clients choose Nexora when they need senior product thinking, polished engineering, and dependable execution."
          align="center"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((review, index) => (
            <HoverLift key={review.name} delay={index * 0.05}>
              <article className="premium-card h-full rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <Quote className="text-cyanfire" size={30} />
                  <div className="flex gap-1 text-amberline">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} size={15} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="mt-6 text-lg leading-8 text-slate-200">
                  <span aria-hidden="true">&quot;</span>
                  {review.quote}
                  <span aria-hidden="true">&quot;</span>
                </p>
                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="font-black text-white">{review.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{review.role}</p>
                </div>
              </article>
            </HoverLift>
          ))}
        </div>
      </Container>
    </section>
  );
}
