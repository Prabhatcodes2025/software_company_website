import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PageHero({ eyebrow, title, text, cta = true }: { eyebrow: string; title: string; text: string; cta?: boolean }) {
  return <section className="page-hero section-dark"><div className="hero-grid" aria-hidden /><div className="page-hero-orb" aria-hidden /><div className="shell page-hero-layout"><div><p className="eyebrow"><span />{eyebrow}</p><h1>{title}</h1><p>{text}</p>{cta && <Link className="button lf-button-sweep" href="/contact">Start a Project <ArrowRight size={18} /></Link>}</div><div className="page-hero-system" aria-hidden><span>PRODUCT SYSTEM</span><div><i /><i /><i /></div><b>LF / {eyebrow.toUpperCase()}</b><svg viewBox="0 0 260 80"><path d="M0 68 C50 65 58 31 103 42 S169 57 205 20 S238 16 260 4" fill="none" stroke="currentColor" strokeWidth="2" /></svg><small>Strategy → System → Scale</small></div></div></section>;
}
