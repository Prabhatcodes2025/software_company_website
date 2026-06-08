"use client";

import { useMemo, useState } from "react";
import { countries } from "@/data/countries";
import { company } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";

export function ContactForm() {
  const { t } = useLanguage();
  const [country, setCountry] = useState(countries[0]);
  const [query, setQuery] = useState("");
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState(false);

  const filteredCountries = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return countries;
    return countries.filter((item) => `${item.name} ${item.code}`.toLowerCase().includes(normalized));
  }, [query]);

  const digits = phone.replace(/\D/g, "");
  const isValidPhone = digits.length >= 7 && digits.length <= 15;
  const fullPhone = `${country.code} ${phone}`.trim();
  const selectedCountryLabel = `${country.flag} ${country.name} (${country.code})`;

  return (
    <form className="glass grid max-w-full gap-5 overflow-hidden rounded-2xl p-5 sm:p-6" action={`mailto:${company.email}`} method="post" encType="text/plain">
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        {t.contact.name}
        <input name="name" required className="min-w-0 rounded-lg border border-white/10 bg-ink/70 px-4 py-3 text-white outline-none focus:border-cyanfire" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        {t.contact.email}
        <input name="email" type="email" required className="min-w-0 rounded-lg border border-white/10 bg-ink/70 px-4 py-3 text-white outline-none focus:border-cyanfire" />
      </label>
      <div className="grid gap-2 text-sm font-semibold text-slate-200">
        {t.contact.phone}
        <div className="grid gap-3 sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="grid gap-2 rounded-lg border border-white/10 bg-ink/70 p-2 focus-within:border-cyanfire">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.contact.countrySearch}
              className="min-w-0 rounded-md bg-slate-950/60 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500"
            />
            <select
              value={`${country.name}-${country.code}`}
              onChange={(event) => {
                const selected = countries.find((item) => `${item.name}-${item.code}` === event.target.value);
                if (selected) setCountry(selected);
              }}
              className="min-w-0 rounded-md bg-slate-950/60 px-3 py-2 text-white outline-none"
            >
              {filteredCountries.map((item) => (
                <option key={`${item.name}-${item.code}`} value={`${item.name}-${item.code}`} className="bg-slate-950 text-white">
                  {item.flag} {item.name} ({item.code})
                </option>
              ))}
            </select>
          </div>
          <label className="grid gap-2">
            <span className="sr-only">{t.contact.phone}</span>
            <div className="flex min-w-0 items-center overflow-hidden rounded-lg border border-white/10 bg-ink/70 focus-within:border-cyanfire">
              <span className="max-w-[52%] shrink-0 truncate border-r border-white/10 px-3 py-3 text-sm font-black text-cyanfire sm:max-w-[48%]">{selectedCountryLabel}</span>
              <input
                name="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                onBlur={() => setTouched(true)}
                inputMode="tel"
                required
                aria-invalid={touched && !isValidPhone}
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-white outline-none"
              />
            </div>
            {touched && !isValidPhone ? <span className="text-xs font-bold text-red-300">{t.contact.phoneError}</span> : null}
          </label>
        </div>
        <input type="hidden" name="fullPhone" value={fullPhone} />
      </div>
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        {t.contact.projectType}
        <select name="projectType" className="min-w-0 rounded-lg border border-white/10 bg-ink/70 px-4 py-3 text-white outline-none focus:border-cyanfire">
          {t.projectTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        {t.contact.message}
        <textarea name="message" required rows={6} className="min-w-0 resize-none rounded-lg border border-white/10 bg-ink/70 px-4 py-3 text-white outline-none focus:border-cyanfire" />
      </label>
      <button disabled={touched && !isValidPhone} className="rounded-lg bg-cyanfire px-6 py-4 font-bold text-ink transition hover:bg-mint disabled:cursor-not-allowed disabled:opacity-60" type="submit">
        {t.contact.submit}
      </button>
    </form>
  );
}
