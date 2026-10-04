import Link from "next/link";
import { ArrowRight, ArrowUpRight, Braces, Check, Database, Sparkles, Star } from "lucide-react";
import { company } from "@/lib/site";

export function Hero() {
  return <section className="hero section-dark"><div className="hero-grid" aria-hidden /><div className="hero-noise" aria-hidden />
    <div className="shell hero-layout"><div className="hero-copy lf-fade-up">
      <p className="eyebrow"><span /> DIGITAL PRODUCT ENGINEERING · AI · AUTOMATION</p>
      <h1>Engineering digital products built for <em>what comes next.</em></h1>
      <p className="hero-text">LetsFygure brings product strategy, design, engineering and AI together to build digital systems that perform beyond launch.</p>
      <div className="hero-actions"><Link href="/contact" className="button lf-button-sweep">Start your project <ArrowUpRight /></Link><Link href="/case-studies" className="button button-secondary">Explore our work <ArrowRight /></Link></div>
      <a href={company.clutch} target="_blank" rel="noreferrer" className="hero-proof"><span className="stars" aria-hidden>★★★★★</span><strong>5.0 on Clutch</strong><span>15 verified reviews</span><ArrowUpRight /></a>
    </div>
    <div className="hero-product" aria-label="A connected digital product ecosystem">
      <div className="hero-product-orbit orbit-one" aria-hidden /><div className="hero-product-orbit orbit-two" aria-hidden />
      <div className="product-window"><div className="product-toolbar"><i /><i /><i /><span>Product command center</span><b>LIVE</b></div><div className="product-app"><aside><strong>LF</strong><i className="active" /><i /><i /><i /><i /></aside><div className="product-dashboard"><div className="dashboard-head"><span><small>Workspace</small><strong>System overview</strong></span><button aria-hidden>New flow +</button></div><div className="dashboard-metrics"><div><small>Active flows</small><strong>24</strong><i /></div><div><small>System health</small><strong>99.9%</strong><i /></div><div><small>Human review</small><strong>07</strong><i /></div></div><div className="dashboard-chart"><div><span>Activity</span><small>Last 7 days</small></div><svg viewBox="0 0 420 120" role="img" aria-label="Rising product activity chart"><defs><linearGradient id="heroChart" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#13d9e8" stopOpacity=".42"/><stop offset="1" stopColor="#13d9e8" stopOpacity="0"/></linearGradient></defs><path d="M0 100 C55 94,68 52,119 64 S197 102,240 48 S316 30,420 8 L420 120 L0 120Z" fill="url(#heroChart)"/><path d="M0 100 C55 94,68 52,119 64 S197 102,240 48 S316 30,420 8" fill="none" stroke="#19dbea" strokeWidth="3"/></svg></div></div></div></div>
      <div className="product-mobile"><div className="mobile-speaker" /><small>Today</small><strong>Operations</strong><div className="mobile-score"><Sparkles /><span><b>AI brief ready</b><small>Review before release</small></span></div><div className="mobile-row"><i /><span /><b /></div><div className="mobile-row"><i /><span /><b /></div><button aria-hidden>Approve</button></div>
      <div className="product-node node-api"><Braces /><span><small>API</small><strong>Connected</strong></span><Check /></div>
      <div className="product-node node-data"><Database /><span><small>DATA</small><strong>Synced</strong></span><i /></div>
      <div className="product-node node-ai"><Sparkles /><span><small>AI ACTIVITY</small><strong>Human in the loop</strong></span></div>
    </div></div>
    <div className="shell trust-strip"><div><Star /><strong>5.0</strong><span>Clutch rating</span></div><div><strong>15</strong><span>Verified reviews</span></div><div><strong>Product · Interface · Systems</strong><span>Connected delivery</span></div><a href={company.clutch} target="_blank" rel="noreferrer">Inspect client proof <ArrowUpRight /></a></div>
  </section>;
}
