import { ArrowDown, Check, Cloud, Database, GitBranch, Sparkles, UserRoundCheck } from "lucide-react";
import { technologies } from "@/lib/site";
import { ProjectMedia } from "@/components/ProjectMedia";

const projectMedia = [
  ["ongole-property", "Ongole Property"],
  ["naystrip", "Naystrip"],
  ["mozno-wealth", "Mozno Wealth"],
  ["snow-feather-adventure", "Snow Feather Adventure"],
  ["rs-constructions", "RS Constructions Company"],
  ["continental-mercantile", "Continental Mercantile Corporation"],
] as const;

export function ProjectVisual({ index }: { index: number; label: string }) {
  const project = projectMedia[index % projectMedia.length];
  return <ProjectMedia slug={project[0]} client={project[1]} priority={index === 0} />;
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
