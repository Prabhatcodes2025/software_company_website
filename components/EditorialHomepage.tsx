import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ClientLogoStrip, ProjectMedia } from "@/components/ProjectMedia";
import { EngineeringHeroVisual } from "@/components/EngineeringHeroVisual";
import { caseStudies, company, industries, services } from "@/lib/site";

const leadSlugs = ["web-development", "custom-software-development", "mobile-app-development", "ai-development", "ai-automation"];
const extraSlugs = ["ui-ux-design", "ecommerce-development", "api-integrations", "seo", "digital-marketing"];
const featuredSlugs = ["ongole-property", "continental-mercantile"];
const solutions = [
  { label: "Experience", title: "Build a customer platform", text: "Bring content, service journeys and enquiries into one fast, accessible web or mobile experience.", slugs: ["web-development", "mobile-app-development"] },
  { label: "Operations", title: "Replace a manual workflow", text: "Turn scattered handoffs, permissions and records into software your team can operate and improve.", slugs: ["custom-software-development", "api-integrations"] },
  { label: "Automation", title: "Introduce useful automation", text: "Identify repeatable decisions, connect existing systems and keep people in control of exceptions.", slugs: ["ai-automation", "ai-development"] },
];
const getService = (slug: string) => services.find(item => item.slug === slug)!;

export function EditorialHomepage() {
  return <>
    <section className="corrective-hero" aria-labelledby="home-title"><div className="shell corrective-hero-grid">
      <div className="corrective-hero-copy"><p className="corrective-kicker">IT &amp; software development</p><h1 id="home-title">Websites, software, mobile and AI. <span>Engineered together.</span></h1><p className="corrective-dek">LetsFygure builds digital products and the systems behind them—from customer websites and mobile apps to custom software and practical automation.</p><div className="corrective-actions"><Link href="/contact" className="button">Discuss Your Project <ArrowUpRight /></Link><Link href="/services" className="button corrective-button-outline">Explore Services <ArrowRight /></Link></div><a className="corrective-proof" href={company.clutch} target="_blank" rel="noreferrer"><span aria-hidden="true">★★★★★</span><strong>5.0 on Clutch</strong><small>3 verified reviews</small><em>Read reviews ↗</em></a></div>
      <EngineeringHeroVisual />
    </div></section>

    <section className="client-proof corrective-client-proof"><div className="shell"><p>Selected clients</p><ClientLogoStrip /></div></section>

    <section className="section corrective-services"><div className="shell"><div className="corrective-section-head"><p className="corrective-kicker">What we build</p><div><h2>One partner for the interface and the work behind it.</h2><p>Start with one need or bring us a connected programme. Design, engineering and delivery stay in the same conversation.</p></div></div><div className="corrective-service-spine">{leadSlugs.map((slug, index) => { const service = getService(slug); return <Link key={slug} href={"/services/" + slug}><span>0{index + 1}</span><strong>{service.title}</strong><p>{service.short}</p><ArrowUpRight /></Link>; })}</div><div className="corrective-more-services"><span>Also in the practice</span><div>{extraSlugs.map(slug => { const service = getService(slug); return <Link key={slug} href={"/services/" + slug}>{service.title} <ArrowUpRight /></Link>; })}</div></div><Link className="homepage-deep-link" href="/services">Compare all ten services <ArrowUpRight /></Link></div></section>

    <section className="section corrective-solutions"><div className="shell"><div className="corrective-section-head"><p className="corrective-kicker">Business situations</p><div><h2>Tell us what needs to change.</h2><p>A useful scope begins with the people, process and decision involved.</p></div></div><div className="corrective-solution-grid">{solutions.map((item, index) => <article key={item.label} className={"corrective-solution corrective-solution-" + (index + 1)}><span>0{index + 1} / {item.label}</span><h3>{item.title}</h3><p>{item.text}</p><div>{item.slugs.map(slug => <Link key={slug} href={"/services/" + slug}>{getService(slug).title} <ArrowUpRight /></Link>)}</div></article>)}</div></div></section>

    <section className="section corrective-work"><div className="shell"><div className="corrective-section-head"><p className="corrective-kicker">Selected work</p><div><h2>Real projects, with the decisions visible.</h2><p>Two different operating contexts. Explore the complete portfolio when you want to inspect more.</p></div></div><div className="corrective-featured">{featuredSlugs.map((slug, index) => { const study = caseStudies.find(item => item.slug === slug)!; return <article key={slug} className={"corrective-featured-" + (index + 1)}><ProjectMedia slug={slug} client={study.client} /><div><span>{study.industry}</span><h3>{study.client}</h3><p>{study.solution}</p><Link href={"/case-studies/" + slug}>See the project <ArrowUpRight /></Link></div></article>; })}</div><Link className="homepage-deep-link" href="/case-studies">Explore all six case studies <ArrowUpRight /></Link></div></section>

    <section className="section corrective-industries"><div className="shell"><div><p className="corrective-kicker">Industry context</p><h2>Different markets bring different workflows.</h2><p>Our published work spans property, travel, finance, construction and international recruitment. We adapt the product to its users and operating context.</p><Link href="/industries" className="homepage-deep-link">Explore industry experience <ArrowUpRight /></Link></div><div className="corrective-industry-links">{industries.slice(0, 5).map((industry, index) => <Link key={industry.title} href="/industries"><span>0{index + 1}</span><strong>{industry.title}</strong><ArrowUpRight /></Link>)}</div></div></section>

    <section className="section corrective-method"><div className="shell"><p className="corrective-kicker">How we work</p><div><h2>See the decisions before you pay for the build.</h2><p>We clarify users, scope and technical constraints early. Working software, review points and release checks make progress visible through delivery.</p><Link href="/about" className="homepage-deep-link">How we deliver projects <ArrowUpRight /></Link></div></div></section>

    <section className="corrective-final-cta"><div className="shell"><p className="corrective-kicker">Start with the problem</p><h2>Let&apos;s decide what to build—and what can wait.</h2><Link href="/contact" className="button button-white">Discuss Your Project <ArrowUpRight /></Link></div></section>
  </>;
}

