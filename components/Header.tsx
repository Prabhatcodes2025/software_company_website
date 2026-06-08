"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { company, navItems } from "@/lib/site";
import { Container } from "./Container";
import { clsx } from "clsx";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/72 shadow-[0_12px_50px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label={`${company.name} home`}>
          <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-cyanfire to-mint text-lg font-black text-ink shadow-glow">N</span>
          <span className="text-lg font-black tracking-normal text-white">{company.shortName}</span>
        </Link>
        <nav className="hidden items-center rounded-xl border border-white/10 bg-white/[0.035] p-1 text-sm text-slate-200 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "rounded-lg px-3.5 py-2 transition hover:bg-white/10 hover:text-cyanfire",
                pathname === item.href && "bg-cyanfire/12 text-cyanfire"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-cyanfire to-mint px-5 py-3 text-sm font-black text-ink shadow-[0_0_35px_rgba(56,213,255,0.22)] transition hover:scale-[1.02] lg:inline-flex"
        >
          Start a Project <ArrowRight size={16} />
        </Link>
        <button
          className="grid size-11 place-items-center rounded-xl border border-white/15 bg-white/[0.04] text-slate-100 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>
      {open ? (
        <div className="border-t border-white/10 bg-ink/95 backdrop-blur-2xl lg:hidden">
          <Container className="grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "rounded-xl px-3 py-3 text-sm text-slate-100 hover:bg-white/10",
                  pathname === item.href && "bg-cyanfire/12 text-cyanfire"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-gradient-to-r from-cyanfire to-mint px-4 py-3 text-center text-sm font-black text-ink"
            >
              Start a Project
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
