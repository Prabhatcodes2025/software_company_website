import type { ServiceEditorial } from "@/lib/service-editorial";

export function ServiceVisual({ editorial }: { editorial: ServiceEditorial }) {
  const kind = editorial.visualKind;
  return <div className={"service-art service-art-" + kind} role="img" aria-label={editorial.visualLabel}>
    <div className="service-art-top"><span>{editorial.eyebrow}</span><span>Illustrative study</span></div>
    {kind === "web" && <div className="art-web"><div className="art-browser-bar">● ● ● <span>Content / experience / performance</span></div><div><small>WEB EXPERIENCE</small><strong>Find what matters. Take the next step.</strong><p>Clear content hierarchy</p><i /></div></div>}
    {kind === "mobile" && <div className="art-mobile"><div><small>01 / DISCOVER</small><strong>One task at a time.</strong><span /></div><div><small>02 / ACT</small><strong>Ready when it matters.</strong><span /></div></div>}
    {kind === "software" && <div className="art-software"><strong className="art-software-title">Work follows a rule.</strong><div><span>Role</span><b>Can see</b><b>Can act</b></div><div><span>Customer</span><b>Own record</b><b>Request</b></div><div><span>Operator</span><b>Assigned work</b><b>Review</b></div><div><span>Admin</span><b>System scope</b><b>Approve</b></div></div>}
    {kind === "ai" && <div className="art-ai"><div><small>01 / TASK</small><strong>Define the answer needed.</strong></div><div><small>02 / CONTEXT</small><strong>Use approved sources.</strong></div><div><small>03 / REVIEW</small><strong>Check before action.</strong></div></div>}
    {kind === "automation" && <div className="art-automation"><span>Trigger</span><span>Validate</span><span>Review exception</span><span>Update system</span></div>}
    {kind === "design" && <div className="art-design"><div className="art-design-wire"><span /><span /><span /><span /></div><div className="art-design-type"><small>INTERFACE SYSTEM</small><strong>Hierarchy makes the task easier.</strong><p>Type / spacing / states</p></div></div>}
    {kind === "commerce" && <div className="art-commerce"><div><small>DISCOVER</small><strong>Useful product detail</strong><span /></div><div><small>DECIDE</small><strong>Clear checkout</strong><span /></div><div><small>OPERATE</small><strong>Visible order state</strong><span /></div></div>}
    {kind === "seo" && <div className="art-seo"><div className="art-searchbar">A real customer question <span>↗</span></div><div><small>PAGE PURPOSE</small><strong>One useful answer, clearly structured.</strong><span /><span /></div></div>}
    {kind === "marketing" && <div className="art-marketing"><div><small>AUDIENCE + MESSAGE</small><strong>One focused offer.</strong></div><div><small>LANDING EXPERIENCE</small><strong>A clear next step.</strong></div><div><small>MEASUREMENT</small><strong>Learn what happened.</strong></div></div>}
    {kind === "integrations" && <div className="art-integrations"><div><small>SOURCE</small><strong>Owned data</strong></div><div><small>CONTRACT</small><strong>Validate · retry · observe</strong></div><div><small>DESTINATION</small><strong>Reliable update</strong></div></div>}
  </div>;
}

