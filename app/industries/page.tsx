import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { industryProfiles } from "@/lib/content";
import { caseStudies } from "@/lib/site";
import { withSocial } from "@/lib/social-metadata";

export const metadata: Metadata = withSocial({
  title: "Industries & Digital Product Experience",
  description: "Explore how LetsFygure approaches software, websites and digital workflows for property, travel, recruitment, finance, construction, commerce and operations.",
  alternates: { canonical: "/industries" },
});
const findCase = (slug: string) => caseStudies.find(study => study.slug === slug);
const spotlightCopy = [
  "Visitors need to compare listings and enquire. Owners and operators need to publish, review and route the work that follows.",
  "Travellers compare destinations and itineraries, while the team manages enquiries and partner requests behind the scenes.",
  "Candidates need a clear application path. Employers need to understand services and submit requirements without following the same journey.",
];

export default function IndustriesPage() {
  const spotlights = industryProfiles.slice(0, 3);
  const otherMarkets = industryProfiles.slice(3);
  return <>
    <PageHero eyebrow="Industries" title="Start with how your market works." text="A property marketplace, travel platform and recruitment service do not share the same users or decisions. We shape the product around that context." />
    <section className="industry-redesign-nav"><div className="shell"><p>Explore a market</p><nav aria-label="Industry sections">{industryProfiles.map(item => <a href={"#" + item.slug} key={item.slug}>{item.title}</a>)}</nav></div></section>
    <div className="industry-spotlights">{spotlights.map((profile, index) => <section className={"industry-spotlight industry-spotlight-" + (index + 1)} id={profile.slug} key={profile.slug}><div className="shell industry-spotlight-grid"><div><p className="corrective-kicker">{profile.number} / {profile.title}</p><h2>{profile.thesis}</h2><p>{spotlightCopy[index]}</p></div><div><h3>What the product needs to support</h3><ul>{profile.solutions.map(item => <li key={item}>{item}</li>)}</ul>{profile.caseSlugs.map(slug => { const study = findCase(slug); return study ? <Link href={"/case-studies/" + slug} key={slug}><span>Related public work</span><strong>{study.client}</strong><ArrowUpRight /></Link> : null; })}</div></div></section>)}</div>
    <section className="section industry-other-markets"><div className="shell"><div className="corrective-section-head"><p className="corrective-kicker">More operating contexts</p><div><h2>Match the system to the decision.</h2><p>These are capabilities and working contexts. A named project appears only where we have genuine published work.</p></div></div><div className="industry-market-grid">{otherMarkets.map(profile => <article id={profile.slug} key={profile.slug}><span>{profile.number} / {profile.title}</span><h3>{profile.thesis}</h3><p>{profile.solutions.slice(0, 2).join(" · ")}</p>{profile.caseSlugs.length > 0 ? profile.caseSlugs.map(slug => { const study = findCase(slug); return study ? <Link href={"/case-studies/" + slug} key={slug}>See {study.client} <ArrowUpRight /></Link> : null; }) : <small>Offered capability · no published client case for this market</small>}</article>)}</div></div></section>
    <section className="section section-dark compact-cta"><div className="shell"><div><p className="eyebrow">Your operating context</p><h2>Show us where the customer journey and the workflow disconnect.</h2></div><Link className="button" href="/contact">Discuss Your Project <ArrowRight /></Link></div></section>
  </>;
}

