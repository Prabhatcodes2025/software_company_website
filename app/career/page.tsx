import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/site";
import { withSocial } from "@/lib/social-metadata";

export const metadata: Metadata = withSocial({ title: "Careers", description: "Careers and future collaboration opportunities at LetsFygure.", alternates: { canonical: "/career" } });

const qualities = [
  ["Outcome ownership", "Understand why the work matters and follow decisions through to the finished experience."],
  ["Technical curiosity", "Ask how systems behave beyond the happy path and keep learning across disciplines."],
  ["Clear communication", "Explain progress, uncertainty and trade-offs without hiding behind process or jargon."],
  ["Quality judgment", "Know when detail protects the product and when simplicity is the more responsible choice."],
];

export default function CareerPage() {
  return <><PageHero eyebrow="Careers" title="Thoughtful work needs people who care about the whole system." text="LetsFygure values curiosity, ownership, clear communication and the patience to understand a problem before reaching for a solution." cta={false} /><section className="section section-light"><div className="shell careers-layout"><div className="careers-principles"><p className="eyebrow dark">How we work together</p><h2>Craft with context.</h2><p className="lead">The interface, code, customer journey and operating workflow are connected. We look for people who can do their discipline well while staying curious about the neighboring decisions.</p><div>{qualities.map(([title, text]) => <article key={title}><Check /><span><h3>{title}</h3><p>{text}</p></span></article>)}</div></div><aside className="career-status"><span>CURRENT HIRING STATUS</span><strong>No advertised openings</strong><p>We do not publish placeholder roles or collect large amounts of candidate data without a real vacancy.</p><hr /><small>Future introductions</small><p>If your work in product design, software engineering, AI systems or digital growth is unusually relevant, send a concise introduction and a portfolio link.</p><a className="button" href={`mailto:${company.email}?subject=${encodeURIComponent("Future careers introduction")}`}>Email an introduction <ArrowUpRight /></a><p className="career-privacy">Do not email identity documents, financial information or confidential employer material.</p></aside></div></section></>;
}
