import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { caseStudies, company, industries, process, services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug }=await params; const service=services.find(item=>item.slug===slug); if(!service) return {}; return { title: service.title, description: `${service.short} ${service.intro}`, alternates:{canonical:`/services/${slug}`}, openGraph:{title:`${service.title} | LetsFygure`,description:service.short,url:`${company.url}/services/${slug}`} }; }

export default async function ServicePage({ params }: Props) {
  const { slug }=await params; const service=services.find(item=>item.slug===slug); if(!service) notFound(); const Icon=service.icon;
  const schema={"@context":"https://schema.org","@type":"Service",name:service.title,description:service.intro,provider:{"@type":"Organization",name:company.name,url:company.url},url:`${company.url}/services/${service.slug}`};
  return <><PageHero eyebrow={service.category} title={service.title} text={service.intro} /><section className="section section-light"><div className="shell service-detail-intro"><div><Icon /><p className="eyebrow dark">The business problem</p><h2>{service.problem}</h2></div><div><p className="lead">Our approach connects the experience people see with the systems and decisions behind it.</p>{service.benefits.map(item=><p className="check-line" key={item}><Check />{item}</p>)}</div></div></section>
  <section className="section section-paper"><div className="shell"><div className="section-heading"><div><p className="eyebrow dark">Capabilities</p><h2>What this engagement can include.</h2></div></div><div className="capability-grid">{service.capabilities.map((item,index)=><article key={item}><span>0{index+1}</span><h3>{item}</h3><p>Defined around your users, current systems and the outcome the business needs.</p></article>)}</div></div></section>
  <section className="section section-dark"><div className="shell"><div className="section-heading light"><div><p className="eyebrow">Delivery process</p><h2>From a clear brief to a dependable release.</h2></div></div><ol className="process-grid dark-process">{process.map(([n,t,x])=><li key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></li>)}</ol></div></section>
  <section className="section section-light"><div className="shell split-section"><div><p className="eyebrow dark">Technology</p><h2>Tools selected for fit, longevity and maintainability.</h2><p>Technology choices are validated against your product, integration needs, internal skills and expected operating model.</p></div><div className="stack-list">{service.stack.map(item=><span key={item}>{item}</span>)}</div></div></section>
  <section className="section section-paper"><div className="shell related-grid"><div><p className="eyebrow dark">Relevant industries</p><h2>Experience shaped to the market.</h2>{industries.slice(0,4).map(item=><p className="check-line" key={item.title}><Check />{item.title}</p>)}</div><div><p className="eyebrow dark">Related work</p><h2>{caseStudies[0].title}</h2><p>{caseStudies[0].outcome}</p><Link className="text-link" href="/case-studies">Explore our work <ArrowRight size={16}/></Link></div></div></section>
  <section className="section section-light"><div className="shell faq-layout"><div><p className="eyebrow dark">Frequently asked</p><h2>Planning the right next step.</h2></div><FAQ /></div></section>
  <section className="final-cta"><div className="shell"><div><p className="eyebrow">Ready to begin?</p><h2>Let’s scope your {service.title.toLowerCase()} project.</h2></div><Link href="/contact" className="button button-white">Start a Project <ArrowRight size={18}/></Link></div></section><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /></>;
}
