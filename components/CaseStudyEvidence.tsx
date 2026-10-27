import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { ProjectMobile } from "@/components/ProjectMedia";
import { caseEditorial } from "@/lib/case-editorial";
import { caseStudies } from "@/lib/site";

type Study = {
  slug: string; client: string; url: string; challenge: string; solution: string; outcome: string;
  features: string[]; technology: string[]; source: string;
};
const relatedMap: Record<string, string[]> = {
  "ongole-property": ["continental-mercantile", "naystrip"],
  naystrip: ["snow-feather-adventure"],
  "mozno-wealth": ["continental-mercantile"],
  "snow-feather-adventure": ["naystrip"],
  "rs-constructions": ["mozno-wealth"],
  "continental-mercantile": ["ongole-property"],
};

export function CaseStudyEvidence({ study }: { study: Study }) {
  const editorial = caseEditorial[study.slug];
  const related = (relatedMap[study.slug] ?? []).map(slug => caseStudies.find(item => item.slug === slug)).filter((item): item is (typeof caseStudies)[number] => Boolean(item));
  const story = <section className="section case-redesign-story"><div className="shell case-redesign-story-grid"><div><p className="corrective-kicker">The work</p><h2>{editorial.storyTitle}</h2><p className="case-story-lead">{editorial.storyText}</p><p className="case-story-source">{study.source}. No unverified commercial or performance metrics are claimed.</p></div><div><h3>Delivered scope</h3><p>{study.solution}</p><ul>{study.features.map(feature => <li key={feature}><Check />{feature}</li>)}</ul>{study.technology.length > 0 && <div className="case-verified-tech"><strong>Verified technology</strong><p>{study.technology.join(" · ")}</p></div>}</div></div></section>;
  const media = <section className="section case-redesign-media"><div className="shell case-redesign-media-grid"><div><p className="corrective-kicker">Real interface evidence</p><h2>{editorial.mediaTitle}</h2><p>{editorial.mediaText}</p><div className="case-media-note"><strong>Desktop</strong><span>{editorial.desktopNote}. The larger desktop capture is shown in the hero.</span></div><div className="case-media-note"><strong>Mobile</strong><span>{editorial.mobileNote}. This is an actual responsive capture, not a mockup.</span></div></div><div className="case-mobile-showcase"><ProjectMobile slug={study.slug} client={study.client} /><p>Public mobile website · authentic screenshot</p></div></div></section>;
  const mediaFirst = ["naystrip", "snow-feather-adventure", "continental-mercantile"].includes(study.slug);
  return <>
    {mediaFirst ? <>{media}{story}</> : <>{story}{media}</>}
    <section className="case-redesign-outcome"><div className="shell"><p className="corrective-kicker">What the work enables</p><h2>{study.outcome}</h2><p>{editorial.outcomeIntro}</p><div><Link href="/contact" className="button button-white">{editorial.cta} <ArrowUpRight /></Link><a href={study.url} target="_blank" rel="noreferrer">Visit the live website <ArrowUpRight /></a></div></div></section>
    <section className="case-related"><div className="shell"><h2>Related work</h2><div>{related.map(item => <Link href={"/case-studies/" + item.slug} key={item.slug}><span>{item.industry}</span><strong>{item.client}</strong><ArrowUpRight /></Link>)}</div></div></section>
  </>;
}

