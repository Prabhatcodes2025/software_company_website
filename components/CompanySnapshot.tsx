"use client";

import { useEffect, useRef, useState } from "react";

const figures = [
  { count: 3, suffix: "+", label: "Years in business" },
  { count: 50, suffix: "+", label: "Projects delivered" },
  { count: 40, suffix: "+", label: "Clients served" },
  { count: 3, suffix: "+", label: "Countries served" },
  { count: 5, suffix: "+", label: "Team members" },
];

export function CompanySnapshot() {
  const sectionRef = useRef<HTMLElement>(null);
  const started = useRef(false);
  const [values, setValues] = useState(figures.map(({ count }) => count));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !('IntersectionObserver' in window)) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      observer.disconnect();
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / 1050, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValues(figures.map(({ count }) => Math.min(count, Math.floor(count * eased))));
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }, { threshold: 0.35 });
    observer.observe(section);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, []);

  return <section ref={sectionRef} className="company-snapshot" aria-labelledby="snapshot-title">
    <div className="shell company-snapshot-layout">
      <div className="company-snapshot-intro"><p className="corrective-kicker">Company snapshot</p><h2 id="snapshot-title">Experience with a team that stays close to the work.</h2><p>Owner-approved company figures. Each project still gets its own scope, team and delivery plan.</p></div>
      <dl className="company-snapshot-figures">{figures.map((figure, index) => <div key={figure.label}><dt>{figure.label}</dt><dd aria-label={`${figure.count}${figure.suffix} ${figure.label}`}><span aria-hidden="true">{values[index]}{figure.suffix}</span></dd></div>)}</dl>
    </div>
  </section>;
}
