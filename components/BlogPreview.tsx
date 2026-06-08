"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/site";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { HoverLift } from "./Motion";
import { useLanguage } from "./LanguageProvider";

export function BlogPreview() {
  const { t } = useLanguage();
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow={t.sections.blog.eyebrow}
          title={t.sections.blog.title}
          text={t.sections.blog.text}
        />
        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <HoverLift key={post.title} delay={index * 0.04} className="h-full max-w-full">
              <article className="premium-card group flex h-full max-w-full flex-col overflow-hidden rounded-2xl bg-slate-950/35 p-5 transition hover:border-cyanfire/35 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="break-words text-xs font-black uppercase tracking-[0.22em] text-cyanfire">{post.category}</p>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.14em] text-slate-500">Advisory note</span>
                </div>
                <h3 className="mt-5 flex-1 break-words text-2xl font-black leading-tight text-white">{post.title}</h3>
                <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <span className="text-sm text-slate-400">{post.read}</span>
                  <Link href="/about" className="inline-flex shrink-0 items-center gap-2 text-sm font-black text-cyanfire transition group-hover:gap-3">
                    Read <ArrowRight size={15} className="shrink-0" />
                  </Link>
                </div>
              </article>
            </HoverLift>
          ))}
        </div>
      </Container>
    </section>
  );
}
