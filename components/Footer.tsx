import Link from "next/link";
import { ArrowRight, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { company, navItems, services } from "@/lib/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030a17]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyanfire/60 to-transparent" />
      <div className="absolute -right-32 top-20 size-96 rounded-full bg-cyanfire/10 blur-3xl" />
      <Container className="relative grid gap-10 py-14 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1fr]">
        <div className="max-w-md">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-cyanfire to-mint text-lg font-black text-ink">N</span>
            <span className="text-lg font-black text-white">{company.name}</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Premium software engineering for web, mobile, AI, blockchain, SaaS, and enterprise modernization.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="https://www.linkedin.com" className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 hover:text-cyanfire" aria-label="LinkedIn">
              <Linkedin size={18} />
            </Link>
            <Link href="https://twitter.com" className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 hover:text-cyanfire" aria-label="Twitter">
              <Twitter size={18} />
            </Link>
          </div>
        </div>
        <div>
          <p className="font-black text-white">Company</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-cyanfire">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-black text-white">Services</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            {services.map((service) => (
              <Link key={service.title} href="/services" className="hover:text-cyanfire">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-black text-white">Newsletter</p>
          <p className="mt-4 text-sm leading-6 text-slate-400">Get product engineering notes, AI ideas, and launch lessons.</p>
          <form className="mt-5 flex rounded-xl border border-white/10 bg-white/[0.04] p-1">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-500"
            />
            <button type="submit" className="grid size-10 place-items-center rounded-lg bg-cyanfire text-ink" aria-label="Subscribe">
              <ArrowRight size={18} />
            </button>
          </form>
          <p className="mt-8 font-black text-white">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <span className="flex items-center gap-2"><Mail size={16} /> {company.email}</span>
            <span className="flex items-center gap-2"><Phone size={16} /> {company.phone}</span>
            <span className="flex items-center gap-2"><MapPin size={16} /> San Francisco, USA</span>
          </div>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>(c) 2026 {company.name}. All rights reserved.</p>
        <p>Built for speed, accessibility, and search visibility.</p>
      </Container>
    </footer>
  );
}
