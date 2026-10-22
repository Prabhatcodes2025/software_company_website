import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, MessageCircle, Star } from "lucide-react";
import { company, industries, services } from "@/lib/site";

const companyLinks = [
  ["Work", "/case-studies"], ["About", "/about"], ["Insights", "/insights"], ["Careers", "/career"], ["Contact", "/contact"],
] as const;

export function Footer() {
  return <footer className="footer">
    <div className="shell footer-lead"><p className="eyebrow">Build with clarity</p><div><h2>Have a serious digital challenge?</h2><Link href="/contact" className="button button-white">Discuss Your Project <ArrowUpRight /></Link></div></div>
    <div className="shell footer-grid">
      <div className="footer-brand"><Link href="/" className="brand"><Image src="/images/letsfygure-logo.png" alt="" width={1280} height={1280} className="brand-mark" /><span><strong>LetsFygure</strong><small>TECHNOLOGY</small></span></Link><p>Product strategy, design and software engineering for businesses building, modernizing and automating digital systems.</p><strong className="footer-line">Technology <span>, Figured Out</span></strong></div>
      <div><h2>Services</h2>{services.slice(0, 6).map(service => <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}<Link href="/services">All services <ArrowUpRight size={14} /></Link></div>
      <div><h2>Industries</h2>{industries.slice(0, 5).map(item => <Link key={item.title} href="/industries">{item.title}</Link>)}</div>
      <div><h2>Company</h2>{companyLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
      <div className="footer-contact"><h2>Contact</h2><a href={`mailto:${company.email}`}><Mail size={15} />{company.email}</a><a href={`tel:${company.phone.replace(/\s/g, "")}`}><MessageCircle size={15} />{company.phone}</a><p><MapPin size={15} />{company.address}</p><a href={company.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} />LinkedIn <ArrowUpRight size={14} /></a><a href={company.instagram} target="_blank" rel="noreferrer"><Instagram size={15} />Instagram <ArrowUpRight size={14} /></a><a href={company.clutch} target="_blank" rel="noreferrer"><Star size={15} />5.0 on Clutch <ArrowUpRight size={14} /></a></div>
    </div>
    <div className="shell footer-bottom"><span>© 2026 LetsFygure. All rights reserved.</span><div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms</Link></div></div>
  </footer>;
}
