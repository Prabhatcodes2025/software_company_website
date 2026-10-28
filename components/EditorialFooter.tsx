import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, MessageCircle, Star } from "lucide-react";
import { company, services } from "@/lib/site";

export function EditorialFooter() {
  return <footer className="editorial-footer">
    <div className="shell editorial-footer-grid">
      <div className="footer-brand"><Link href="/" className="brand" aria-label="LetsFygure home"><Image src="/images/letsfygure-official.png" alt="" width={2113} height={744} className="official-wordmark" /></Link><p>Product strategy, design and software engineering for businesses building, modernizing and automating digital systems.</p></div>
      <div><h2>Explore</h2><Link href="/case-studies">Case Studies</Link><Link href="/insights">Insights</Link><Link href="/about">About</Link><Link href="/career">Careers</Link></div>
      <div><h2>Services</h2>{services.slice(0,5).map(service => <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}<Link href="/services">All services <ArrowUpRight size={14} /></Link></div>
      <div className="footer-contact"><h2>Contact</h2><a href={`mailto:${company.email}`}><Mail />{company.email}</a><a href={`tel:${company.phone.replace(/\s/g, "")}`}><MessageCircle />{company.phone}</a><p><MapPin />{company.address}</p><a href={company.linkedin} target="_blank" rel="noreferrer"><Linkedin />LinkedIn <ArrowUpRight /></a><a href={company.instagram} target="_blank" rel="noreferrer"><Instagram />Instagram <ArrowUpRight /></a><a href={company.clutch} target="_blank" rel="noreferrer"><Star />5.0 on Clutch <ArrowUpRight /></a></div>
    </div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} LetsFygure. All rights reserved.</span><div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms</Link></div></div>
  </footer>;
}
