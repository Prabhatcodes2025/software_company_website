import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PageHero({ eyebrow, title, text, cta = true }: { eyebrow: string; title: string; text: string; cta?: boolean }) {
  return <section className="page-hero section-dark"><div className="hero-grid" aria-hidden /><div className="shell"><p className="eyebrow"><span />{eyebrow}</p><h1>{title}</h1><p>{text}</p>{cta && <Link className="button" href="/contact">Start a Project <ArrowRight size={18} /></Link>}</div></section>;
}
