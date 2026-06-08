import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site";
import { HoverLift } from "./Motion";

export function ServiceGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <HoverLift key={service.title} delay={index * 0.04}>
            <article className="premium-card group flex h-full flex-col rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="grid size-12 place-items-center rounded-xl border border-cyanfire/25 bg-cyanfire/12 text-cyanfire shadow-[0_0_30px_rgba(56,213,255,0.14)] transition group-hover:scale-110">
                  <Icon size={25} />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white/25">0{index + 1}</span>
              </div>
              <h3 className="mt-7 text-2xl font-black text-white">{service.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-slate-300">{service.summary}</p>
              <ul className="mt-6 grid gap-2.5 text-sm text-slate-400">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mint shadow-[0_0_14px_rgba(67,243,182,0.75)]" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-cyanfire transition group-hover:gap-3">
                {service.cta} <ArrowRight size={16} />
              </Link>
            </article>
          </HoverLift>
        );
      })}
    </div>
  );
}
