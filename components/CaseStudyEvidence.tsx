import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { ProjectGallery } from "@/components/ProjectMedia";

type Study = {
  slug: string;
  client: string;
  url: string;
  challenge: string;
  solution: string;
  outcome: string;
  features: string[];
  technology: string[];
  source: string;
};

export function CaseStudyEvidence({ study }: { study: Study }) {
  return <>
    <section className="case-story section section-light">
      <div className="shell case-story-grid">
        <div><p className="eyebrow dark">The challenge</p><h2>{study.challenge}</h2></div>
        <div><p className="eyebrow dark">Delivered solution</p><p className="case-story-solution">{study.solution}</p><div className="case-feature-list">{study.features.map(feature => <span key={feature}><Check />{feature}</span>)}</div>{study.technology.length > 0 && <div className="case-tech"><small>Verified technology</small>{study.technology.map(item => <strong key={item}>{item}</strong>)}</div>}</div>
      </div>
    </section>
    <section className="case-interface-section section">
      <div className="shell"><div className="case-interface-heading"><div><p className="eyebrow dark">Real interface evidence</p><h2>Designed to work across the screens customers actually use.</h2></div><p>These captures come from the public client platform. They are not concept mockups or reconstructed dashboards.</p></div><ProjectGallery slug={study.slug} client={study.client} /></div>
    </section>
    <section className="case-value-cta">
      <div className="shell"><div><p className="eyebrow">Business value</p><h2>{study.outcome}</h2><small>{study.source}. No unverified commercial or performance metrics are claimed.</small></div><div><Link href="/contact" className="button button-white">Discuss a similar project <ArrowUpRight /></Link><a href={study.url} target="_blank" rel="noreferrer">Visit the live project <ArrowUpRight /></a></div></div>
    </section>
  </>;
}
