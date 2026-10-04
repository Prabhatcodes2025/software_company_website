import { ArrowDown, Check, Cloud, Database, GitBranch, Sparkles, UserRoundCheck } from "lucide-react";
import { technologies } from "@/lib/site";

export function ProjectVisual({ index, label }: { index: number; label: string }) {
  return <div className={`project-visual project-visual-${index + 1}`} aria-label={`${label} interface visualization`}>
    <div className="project-glow" aria-hidden />
    <div className="project-browser">
      <div className="project-bar"><i /><i /><i /><span>Product workspace</span></div>
      <div className="project-ui">
        <aside><b>LF</b><i /><i /><i /><i /></aside>
        <div className="project-main"><small>{label}</small><strong>Overview</strong><div className="project-stats"><span /><span /><span /></div><div className="project-data"><div /><div /><div /></div></div>
      </div>
    </div>
    <div className="project-phone"><div /><small>Live view</small><strong>{index === 0 ? "Connected" : index === 1 ? "In progress" : "Ready"}</strong><span><i /><i /><i /></span></div>
    <div className="project-float"><Sparkles /><span><small>System signal</small><strong>{index === 0 ? "Enquiry routed" : index === 1 ? "Workflow synced" : "Journey optimized"}</strong></span></div>
  </div>;
}

const stack = [
  ["PRODUCT", "Intent, scope, outcomes"], ["INTERFACE", "Journeys, systems, interaction"],
  ["APPLICATION", "Web, mobile, operational tools"], ["API", "Services and integrations"],
  ["DATA", "Models, access, observability"], ["AUTOMATION / AI", "Decisions, orchestration, assistance"],
  ["CLOUD", "Delivery, performance, resilience"],
];

export function EngineeringStack() {
  return <div className="engineering-stack" aria-label="Product engineering stack">{stack.map(([title, text], index) => <div key={title} style={{ "--stack-index": index } as React.CSSProperties}><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><small>{text}</small>{index < stack.length - 1 && <ArrowDown aria-hidden />}</div>)}</div>;
}

const aiSteps = [
  ["Input", GitBranch], ["Context", Database], ["AI", Sparkles], ["Human approval", UserRoundCheck], ["Business system", Cloud], ["Action", Check],
] as const;

export function AIWorkflow() {
  return <div className="ai-workflow" aria-label="Accountable AI workflow">{aiSteps.map(([label, Icon], index) => <div className={index === 2 ? "is-ai" : index === 3 ? "is-human" : ""} key={label}><span>0{index + 1}</span><Icon /><strong>{label}</strong>{index < aiSteps.length - 1 && <i aria-hidden />}</div>)}</div>;
}

export function TechRail() {
  const all = Object.values(technologies).flat();
  return <div className="tech-rail" aria-label="Technology ecosystem"><div>{[...all, ...all].map((item, index) => <span key={`${item}-${index}`}><i />{item}</span>)}</div></div>;
}
