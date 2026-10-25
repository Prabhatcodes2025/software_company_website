import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Quote } from "lucide-react";
import { ClientLogoStrip, ProjectMedia } from "@/components/ProjectMedia";
import { caseStudies, company, companyStats, industries, process, services } from "@/lib/site";

export function EditorialHomepage() {
  const featured = caseStudies.slice(0, 4);
  const featuredServices = [services[0], services[2], services[3], services[5]];
  const featuredIndustries = industries.slice(0, 4);
  const featuredProcess = [process[0], process[2], process[3], process[5]];
  return <>
    <section className="editorial-hero">
      <div className="shell editorial-hero-grid">
        <div className="editorial-hero-copy">
          <p className="eyebrow dark">Technology , Figured Out</p>
          <h1>Digital products built for <em>real business.</em></h1>
          <p>We design and engineer web platforms, mobile products and software systems that make complex work feel clear.</p>
          <div className="hero-actions"><Link href="/contact" className="button">Let&apos;s Talk <ArrowUpRight /></Link><Link href="/case-studies" className="text-button">See our work <ArrowRight /></Link></div>
          <a className="editorial-clutch" href={company.clutch} target="_blank" rel="noreferrer"><span>★★★★★</span><strong>5.0 on Clutch</strong><small>3 verified reviews</small></a>
        </div>
        <div className="editorial-hero-media"><ProjectMedia slug="ongole-property" client="Ongole Property" priority /><p><span>Featured project</span> A role-aware property marketplace built for discovery and managed enquiries.</p></div>
      </div>
    </section>

    <section className="client-proof"><div className="shell"><p>Selected client platforms</p><ClientLogoStrip /></div></section>

    <section className="section editorial-intro"><div className="shell split-statement"><p className="eyebrow dark">Evidence over theatre</p><div><h2>Good technology should make the business easier to understand, use and grow.</h2><p>Our work connects product strategy, experience design and dependable engineering. Every project shown here is a real, public client platform.</p></div></div><div className="shell owner-stats" aria-label="Owner supplied company figures">{companyStats.slice(0,5).map(stat => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></section>

    <section className="section featured-work"><div className="shell">
      <div className="editorial-heading"><div><p className="eyebrow">Selected work</p><h2>Built in the open.<br />Shown as delivered.</h2></div><Link href="/case-studies" className="text-button light">View all six projects <ArrowUpRight /></Link></div>
      <div className="featured-projects">{featured.map((study, index) => <article key={study.slug} className={`featured-project project-${index + 1}`}>
        <ProjectMedia slug={study.slug} client={study.client} />
        <div className="featured-project-copy"><span>0{index + 1} / {study.industry}</span><h3>{study.client}</h3><p>{study.solution}</p><div>{study.services.map(item => <small key={item}>{item}</small>)}</div><Link href={`/case-studies/${study.slug}`}>Read the case study <ArrowUpRight /></Link></div>
      </article>)}</div>
    </div></section>

    <section className="section editorial-services"><div className="shell">
      <div className="split-statement"><p className="eyebrow dark">Capabilities</p><div><h2>One product partner from first question to live system.</h2><p>Use us for a focused workstream or connect strategy, design, engineering and growth as one engagement.</p></div></div>
      <div className="service-lines">{featuredServices.map((service, index) => <Link href={`/services/${service.slug}`} key={service.slug}><span>{String(index + 1).padStart(2, "0")}</span><strong>{service.title}</strong><p>{service.short}</p><ArrowUpRight /></Link>)}</div><Link href="/services" className="homepage-deep-link">Explore all ten services <ArrowUpRight /></Link>
    </div></section>

    <section className="section editorial-industries"><div className="shell"><div className="editorial-heading dark-heading"><div><p className="eyebrow dark">Industry context</p><h2>The workflow changes.<br />Our curiosity doesn&apos;t.</h2></div><p>We study how your market buys, operates and makes decisions before shaping the product.</p></div><div className="industry-list">{featuredIndustries.map((industry, index) => { const Icon = industry.icon; return <Link href="/industries" key={industry.title}><span>0{index + 1}</span><Icon /><div><h3>{industry.title}</h3><p>{industry.text}</p></div><ArrowUpRight /></Link>; })}</div><Link href="/industries" className="homepage-deep-link">Explore all industry narratives <ArrowUpRight /></Link></div></section>

    <section className="section process-editorial"><div className="shell"><div className="split-statement"><p className="eyebrow dark">How we work</p><div><h2>Decisions stay visible from discovery to launch.</h2></div></div><ol>{featuredProcess.map(([number,title,text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol><Link href="/about" className="homepage-deep-link">See how we deliver <ArrowUpRight /></Link></div></section>

    <section className="section review-editorial"><div className="shell review-layout"><div><Quote /><blockquote>Clients highlight professional delivery, clear communication, flexibility and reliable project management.</blockquote><a href={company.clutch} target="_blank" rel="noreferrer">Read all 3 verified reviews <ArrowUpRight /></a></div><div><span className="review-score">5.0</span><p className="stars">★★★★★</p><strong>Clutch rating</strong><div className="review-tags">{["Professional", "Communicative", "Flexible", "Timely", "Reliable"].map(item => <span key={item}><Check />{item}</span>)}</div></div></div></section>

    <section className="editorial-cta"><div className="shell"><p className="eyebrow">A clear next step</p><h2>Bring us the problem.<br /><em>We&apos;ll figure out the technology.</em></h2><Link href="/contact" className="button button-white">Start a conversation <ArrowUpRight /></Link></div></section>
  </>;
}
