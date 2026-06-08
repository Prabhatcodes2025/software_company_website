import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./Container";

export function CTA() {
  return (
    <section className="py-16">
      <Container>
        <div className="glass grid gap-8 rounded-2xl p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyanfire">Launch with confidence</p>
            <h2 className="mt-3 text-3xl font-black text-white">Have an idea, roadmap, or messy legacy system?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Get a practical delivery plan, technical direction, and a senior team ready to ship.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyanfire px-6 py-4 font-bold text-ink transition hover:bg-mint">
            Book a Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
