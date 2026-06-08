"use client";

import { Globe2 } from "lucide-react";
import { languages } from "@/data/translations";
import { useLanguage } from "./LanguageProvider";
import { clsx } from "clsx";

export function LanguageSwitcher({ compact = false, className }: { compact?: boolean; className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <label
      className={clsx(
        "group flex min-w-0 items-center gap-2 rounded-lg border border-white/12 bg-slate-950/70 px-2.5 py-1.5 text-xs font-black text-white shadow-[0_12px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl transition hover:border-cyanfire/35",
        className
      )}
    >
      <Globe2 size={16} className="shrink-0 text-cyanfire" />
      <select
        aria-label="Select language"
        value={language}
        onChange={(event) => setLanguage(event.target.value as typeof language)}
        className={clsx("min-w-0 cursor-pointer bg-transparent font-black text-slate-200 outline-none", compact ? "w-20" : "w-24")}
      >
        {languages.map((item) => (
          <option key={item.code} value={item.code} className="bg-slate-950 text-white">
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}
