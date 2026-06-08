"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { company, navItems } from "@/lib/site";
import { Container } from "./Container";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label={`${company.name} home`}>
          <span className="grid size-11 place-items-center rounded-lg bg-cyanfire text-lg font-black text-ink shadow-glow">N</span>
          <span className="text-lg font-semibold tracking-normal">{company.shortName}</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-slate-200 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-cyanfire">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-lg bg-cyanfire px-5 py-3 text-sm font-bold text-ink transition hover:bg-mint lg:inline-flex"
        >
          Start a Project
        </Link>
        <button
          className="grid size-11 place-items-center rounded-lg border border-white/15 text-slate-100 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>
      {open ? (
        <div className="border-t border-white/10 bg-ink lg:hidden">
          <Container className="grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-slate-100 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
