import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";
import { company } from "@/lib/site";

export function Hero() {
  return <section className="hero section-dark"><div className="hero-grid" aria-hidden /><div className="hero-orb hero-orb-one" aria-hidden /><div className="hero-orb hero-orb-two" aria-hidden />
    <div className="shell hero-layout"><div className="hero-copy lf-fade-up">
      <p className="eyebrow"><span /> WEB · MOBILE · SOFTWARE · AI</p>
      <h1>We engineer digital products that <em>move businesses forward.</em></h1>
      <p className="hero-text">LetsFygure Technology designs and develops high-performance websites, mobile apps, custom software and AI-powered solutions that help businesses launch faster, operate smarter and scale confidently.</p>
      <div className="hero-actions"><Link href="/contact" className="button">Start Your Project <ArrowRight size={18} /></Link><Link href="/case-studies" className="button button-ghost">Explore Our Work</Link></div>
      <a href={company.clutch} target="_blank" rel="noreferrer" className="hero-proof"><span className="stars" aria-hidden>★★★★★</span><strong>5.0 on Clutch</strong><span>15 verified reviews</span><ArrowRight size={15} /></a>
    </div>
    <div className="hero-visual" aria-label="Connected digital product ecosystem">
      <div className="visual-core"><div className="logo-aura" /><Image src="/images/letsfygure-logo.png" alt="LetsFygure symbol" width={1280} height={1280} priority /></div>
      <div className="orbit orbit-a" aria-hidden /><div className="orbit orbit-b" aria-hidden />
      <div className="signal-card signal-one"><small>PRODUCT SYSTEM</small><strong>Design → Build → Scale</strong><div className="signal-bars"><i /><i /><i /><i /></div></div>
      <div className="signal-card signal-two"><span className="live-dot" /><small>CONNECTED DELIVERY</small><strong>Web · Mobile · AI</strong></div>
      <div className="signal-card signal-three"><small>ENGINEERED FOR</small><strong><Check size={16} /> Performance</strong><strong><Check size={16} /> Clarity</strong><strong><Check size={16} /> Growth</strong></div>
    </div></div>
    <div className="shell trust-strip"><div><Star size={18} /><strong>5.0</strong><span>Clutch rating</span></div><div><strong>15</strong><span>Verified reviews</span></div><div><strong>Web · App · Software · AI</strong><span>Connected capabilities</span></div><a href={company.clutch} target="_blank" rel="noreferrer">View our Clutch profile <ArrowRight size={15} /></a></div>
  </section>;
}
