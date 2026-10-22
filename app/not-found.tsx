import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return <section className="not-found section-dark"><div className="hero-grid" aria-hidden /><div className="shell not-found-inner"><p className="eyebrow"><span />404 / Route not found</p><h1>This path hasn’t been figured out.</h1><p>The page may have moved, or the address may be incomplete. The main site and project team are one step away.</p><div><Link href="/" className="button"><ArrowLeft />Return home</Link><Link href="/contact" className="button button-secondary">Discuss Your Project <ArrowUpRight /></Link></div></div></section>;
}
