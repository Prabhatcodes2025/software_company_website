import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { EngineeringStack } from "@/components/ProductVisuals";
import { company, companyStats, process } from "@/lib/site";

export const metadata: Metadata = { title: "About LetsFygure", description: "Meet LetsFygure, an engineering-led digital product company combining strategy, product design, software development and accountable automation.", alternates: { canonical: "/about" } };

const principles = [
  ["Understand the work", "We map the customer, operating workflow and decision before selecting the interface or stack."],
  ["Expose trade-offs", "Scope, risk and technical choices stay visible so the team can make informed decisions."],
  ["Connect the layers", "Product, design, application logic, data and delivery are treated as one system."],
  ["Leave a maintainable path", "Reusable code, documentation and a staged roadmap matter after the release goes live."],
];

export default function AboutPage() {
  return <>
    <PageHero eyebrow="About LetsFygure" title="Engineering clarity into ambitious digital work." text="LetsFygure is a product and software engineering company in Bhopal, working with businesses in India and international markets." />
    <section className="section section-light"><div className="shell about-manifesto"><div><p className="eyebrow dark">Our position</p><h2>Technology should make the business easier to understand and operate.</h2></div><div><p className="lead">We work where product experience and operating reality meet: the customer-facing journey, the roles behind it, the data they depend on and the systems that keep work moving.</p><p>Engagements can begin with a focused website, product design or integration and grow into a longer engineering partnership. We do not invent scale, team history or capabilities that have not been demonstrated.</p><a href={company.clutch} className="lf-link-arrow" target="_blank" rel="noreferrer">Inspect verified client reviews <ExternalLink /></a></div></div></section>
    <section className="about-numbers"><div className="shell"><p>Owner-approved company snapshot</p><dl>{companyStats.map(stat => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}</dl></div></section>
    <section className="section about-stack-section"><div className="shell engineering-grid"><div><p className="eyebrow dark">How the work connects</p><h2>From product intent to operating infrastructure.</h2><p className="lead">A shared system view keeps experience, data, permissions and delivery decisions aligned.</p><div className="engineering-notes"><span><Check /> Business rules stay explicit</span><span><Check /> Access follows real roles</span><span><Check /> Quality continues after launch</span></div></div><EngineeringStack /></div></section>
    <section className="section section-light"><div className="shell about-operating-model"><header><p className="eyebrow dark">Working philosophy</p><h2>Four habits that shape the engagement.</h2></header><div>{principles.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section section-dark"><div className="shell"><div className="section-heading light"><div><p className="eyebrow">From idea to evolution</p><h2>A delivery path with visible decisions.</h2></div><p>Each stage produces an artifact, decision or working increment—not a hidden handoff.</p></div><ol className="methodology-line">{process.map(([n,t,x]) => <li key={n}><span>{n}</span><div><h3>{t}</h3><p>{x}</p></div></li>)}</ol><Link href="/contact" className="button lf-button-sweep">Start a Conversation <ArrowRight /></Link></div></section>
  </>;
}
