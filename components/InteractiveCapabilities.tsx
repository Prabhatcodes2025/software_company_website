"use client";

import Link from "next/link";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { services } from "@/lib/site";

const featured = services.slice(0, 6);

function CapabilityVisual({ index }: { index: number }) {
  return <div className={`capability-visual capability-visual-${index + 1}`} aria-hidden="true">
    <div className="cap-visual-toolbar"><i /><i /><i /><span>letsfygure / product-system</span></div>
    <div className="cap-visual-canvas">
      <div className="cap-sidebar"><i /><i /><i /><i /></div>
      <div className="cap-screen">
        <div className="cap-kicker" />
        <div className="cap-title" />
        <div className="cap-title cap-title-short" />
        <div className="cap-metrics"><span /><span /><span /></div>
        <div className="cap-chart"><i /><i /><i /><i /><i /></div>
      </div>
      <div className="cap-mobile"><span /><strong /><i /><i /><i /></div>
    </div>
    <span className="cap-status"><b /> System active</span>
  </div>;
}

export function InteractiveCapabilities() {
  const [active, setActive] = useState(0);
  const service = featured[active];

  return <div className="capability-explorer">
    <div className="capability-tabs" role="tablist" aria-label="Core capabilities">
      {featured.map((item, index) => {
        const Icon = item.icon;
        return <button key={item.slug} type="button" role="tab" aria-selected={active === index} aria-controls={`capability-panel-${index}`} id={`capability-tab-${index}`} onClick={() => setActive(index)} onFocus={() => setActive(index)}>
          <span className="capability-tab-number">0{index + 1}</span><Icon /><strong>{item.title}</strong><ChevronDown />
        </button>;
      })}
    </div>
    <div className="capability-panel" role="tabpanel" id={`capability-panel-${active}`} aria-labelledby={`capability-tab-${active}`}>
      <div className="capability-panel-copy">
        <p className="eyebrow dark">{service.category}</p>
        <h3>{service.short}</h3>
        <p>{service.intro}</p>
        <ul>{service.capabilities.slice(0, 3).map(item => <li key={item}><Check />{item}</li>)}</ul>
        <Link className="lf-link-arrow" href={`/services/${service.slug}`}>Explore {service.title}<ArrowUpRight /></Link>
      </div>
      <CapabilityVisual index={active} />
    </div>
  </div>;
}
