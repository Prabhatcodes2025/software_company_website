import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, companyStats } from "@/lib/site";

export function TrustMarquee() {
  const clients = caseStudies.map(({ client }) => client);
  return <>
    <section className="client-rail" aria-labelledby="client-rail-title">
      <div className="shell client-rail-heading"><p id="client-rail-title">Selected work</p><span>Six live platforms across property, travel, finance, construction and recruitment</span></div>
      <div className="client-marquee" tabIndex={0} aria-label="Selected LetsFygure projects; animation pauses while focused">
        <div>{[...clients, ...clients].map((client, index) => <span key={`${client}-${index}`} aria-hidden={index >= clients.length}>{client}</span>)}</div>
      </div>
    </section>
    <section className="impact-strip" aria-labelledby="impact-heading"><div className="shell"><div className="impact-intro"><p className="eyebrow dark">Company snapshot</p><h2 id="impact-heading">Small enough to stay close. Proven enough to move with confidence.</h2><p>Public-facing company figures supplied by the owner. The current Clutch rating and three-year business history were independently checked in October 2026.</p><Link href="/about" className="lf-link-arrow">How we work <ArrowUpRight /></Link></div><dl className="impact-stats">{companyStats.map(stat => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}</dl></div></section>
  </>;
}
