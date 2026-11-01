import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Gauge, LockKeyhole, Scale, ShieldCheck } from "lucide-react";
import { ClientLogoStrip, ProjectMedia } from "@/components/ProjectMedia";
import { EngineeringHeroVisual } from "@/components/EngineeringHeroVisual";
import { CompanySnapshot } from "@/components/CompanySnapshot";
import { QuoteTrigger } from "@/components/QuoteLauncher";
import { caseStudies, company, industries, process } from "@/lib/site";

const coreServices = [
  { number: "01", className: "home-core-web", eyebrow: "Custom website development", title: "Custom Websites Built Around Your Business.", text: "From professional business websites to sophisticated web platforms, we engineer secure, responsive and scalable digital experiences.", capabilities: ["Business & corporate websites", "E-commerce platforms", "Web applications & SaaS", "Booking systems", "Customer portals", "Admin dashboards"], href: "/services/web-development", cta: "Explore Website Development" },
  { number: "02", className: "home-core-mobile", eyebrow: "Mobile app development", title: "Mobile Applications Built for Real-World Use.", text: "We develop intuitive, reliable mobile applications designed around user experience, business workflows and long-term maintainability.", capabilities: ["Android applications", "iOS applications", "Cross-platform applications", "Business applications", "Booking applications", "API-connected mobile apps"], href: "/services/mobile-app-development", cta: "Explore Mobile App Development" },
];

const featured = ["ongole-property", "naystrip", "mozno-wealth"].map(slug => caseStudies.find(item => item.slug === slug)!);
const pillars = [
  [Gauge, "Performance", "Optimized interfaces, responsive experiences and efficient loading."],
  [ShieldCheck, "Security", "Authentication, authorization, secure APIs and responsible data handling."],
  [Scale, "Scalability", "Maintainable architecture and database-backed applications designed to evolve."],
  [LockKeyhole, "Reliability", "Testing, deployment discipline, monitoring and practical maintenance."],
] as const;

export function EditorialHomepage() {
  return <>
    <section className="corrective-hero" aria-labelledby="home-title"><div className="shell corrective-hero-grid">
      <div className="corrective-hero-copy"><p className="corrective-kicker">Web &amp; mobile product engineering</p><h1 id="home-title">Custom Websites &amp; Mobile Apps. <span>Engineered for Business Growth.</span></h1><p className="corrective-dek">We design and develop high-performance websites, scalable web applications and mobile apps for ambitious businesses worldwide.</p><div className="corrective-actions"><Link href="/contact" className="button">Discuss Your Project <ArrowUpRight /></Link><Link href="/case-studies" className="button corrective-button-outline">Explore Our Work <ArrowRight /></Link></div><a className="corrective-proof" href={company.clutch} target="_blank" rel="noreferrer"><span aria-hidden="true">★★★★★</span><strong>5.0 on Clutch</strong><small>3 verified reviews</small><em>Read reviews ↗</em></a></div>
      <EngineeringHeroVisual />
    </div></section>

    <section className="client-proof corrective-client-proof"><div className="shell"><p>Selected clients</p><ClientLogoStrip /></div></section>

    <section className="section home-core-services" aria-labelledby="core-services-title"><div className="shell">
      <div className="corrective-section-head"><p className="corrective-kicker">Core development services</p><div><h2 id="core-services-title">Focused expertise. Complete delivery.</h2><p>Strategy, interface design, engineering and launch support stay connected from the first requirement to the production release.</p></div></div>
      <div className="home-core-grid">{coreServices.map(service => <article className={service.className} key={service.number}><div className="home-core-number">{service.number}</div><p className="corrective-kicker">{service.eyebrow}</p><h3>{service.title}</h3><p>{service.text}</p><ul>{service.capabilities.map(item => <li key={item}><Check />{item}</li>)}</ul><Link href={service.href}>{service.cta} <ArrowUpRight /></Link><div className="home-core-visual" aria-hidden="true"><span /><span /><span /></div></article>)}</div>
      <div className="home-supporting-capabilities"><span>Supporting capabilities</span><Link href="/services/custom-software-development">Web Applications</Link><Link href="/services/ui-ux-design">UI/UX Design</Link><Link href="/services/api-integrations">Backend &amp; API Integrations</Link><Link href="/services/ecommerce-development">E-commerce</Link></div>
    </div></section>

    <section className="section corrective-work" aria-labelledby="featured-work-title"><div className="shell"><div className="corrective-section-head"><p className="corrective-kicker">Featured projects</p><div><h2 id="featured-work-title">Real products. Authentic project evidence.</h2><p>Explore public work across property technology, travel and financial services. Each case study is grounded in the delivered scope and approved project information.</p></div></div><div className="corrective-featured">{featured.map((study, index) => <article key={study.slug}><ProjectMedia slug={study.slug} client={study.client} priority={index === 0} /><div><span>{study.industry}</span><h3>{study.client}</h3><p>{study.solution}</p><Link href={`/case-studies/${study.slug}`}>View Case Study <ArrowUpRight /></Link></div></article>)}</div><Link className="homepage-deep-link" href="/case-studies">Explore all case studies <ArrowUpRight /></Link></div></section>

    <section className="section home-engineering" aria-labelledby="engineering-title"><div className="shell"><div className="home-engineering-intro"><p className="corrective-kicker">Engineering expertise</p><h2 id="engineering-title">Built for Performance. Engineered for Scale.</h2><p>Good product engineering connects interface quality, application logic, data and operations. We make those responsibilities visible before they become expensive constraints.</p></div><div className="home-engineering-pillars">{pillars.map(([Icon, title, text], index) => <article key={title}><span>0{index + 1}</span><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div><div className="home-system-map" aria-label="Simplified application architecture"><span>Responsive interface</span><i>→</i><span>Secure application &amp; APIs</span><i>→</i><span>Business data &amp; integrations</span></div></div></section>

    <section className="section home-process" aria-labelledby="process-title"><div className="shell"><div className="corrective-section-head"><p className="corrective-kicker">Development process</p><div><h2 id="process-title">A clear path from requirement to release.</h2><p>Decisions, review points and quality checks remain visible throughout delivery.</p></div></div><ol>{process.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

    <section className="section corrective-industries"><div className="shell"><div><p className="corrective-kicker">Industry context</p><h2>Products shaped around real operating contexts.</h2><p>Our published work spans property, travel, finance, construction and international recruitment. We adapt each product to its users, workflows and market.</p><Link href="/industries" className="homepage-deep-link">Explore industry experience <ArrowUpRight /></Link></div><div className="corrective-industry-links">{industries.slice(0, 6).map((industry, index) => <Link key={industry.title} href="/industries"><span>0{index + 1}</span><strong>{industry.title}</strong><ArrowUpRight /></Link>)}</div></div></section>

    <CompanySnapshot />

    <section className="review-evidence"><div className="shell"><p className="corrective-kicker">Independent feedback</p><div><strong>5.0 <span>on Clutch</span></strong><p>Three verified client reviews. Read the full feedback and project context at the source.</p><a href={company.clutch} target="_blank" rel="noopener noreferrer">Read verified reviews <ArrowUpRight /></a></div></div></section>

    <section className="corrective-final-cta"><div className="shell"><p className="corrective-kicker">Start with the requirement</p><h2>Let&apos;s turn your next digital product into a clear engineering plan.</h2><div className="quote-cta-row"><Link href="/contact" className="button button-white">Discuss Your Project <ArrowUpRight /></Link><QuoteTrigger className="button quote-outline-button">Get a Free Quote</QuoteTrigger></div></div></section>
  </>;
}
