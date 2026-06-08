import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navItems, services } from "@/lib/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04101f]">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-lg bg-cyanfire text-lg font-black text-ink">N</span>
            <span className="text-lg font-semibold">{company.name}</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Premium software engineering for web, mobile, AI, blockchain, SaaS, and enterprise modernization.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Company</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-cyanfire">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Services</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            {services.slice(0, 5).map((service) => (
              <Link key={service.title} href="/services" className="hover:text-cyanfire">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <span className="flex items-center gap-2"><Mail size={16} /> {company.email}</span>
            <span className="flex items-center gap-2"><Phone size={16} /> {company.phone}</span>
            <span className="flex items-center gap-2"><MapPin size={16} /> San Francisco, USA</span>
          </div>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {company.name}. All rights reserved.</p>
        <p>Built for speed, accessibility, and search visibility.</p>
      </Container>
    </footer>
  );
}
