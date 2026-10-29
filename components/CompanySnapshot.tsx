const figures = [
  { count: 3, suffix: "+", label: "Years in business" },
  { count: 50, suffix: "+", label: "Projects delivered" },
  { count: 40, suffix: "+", label: "Clients served" },
  { count: 3, suffix: "+", label: "Countries served" },
  { count: 5, suffix: "+", label: "Team members" },
];

export function CompanySnapshot() {
  return <section className="company-snapshot" aria-labelledby="snapshot-title">
    <div className="shell company-snapshot-layout">
      <div className="company-snapshot-intro"><p className="corrective-kicker">Company snapshot</p><h2 id="snapshot-title">Experience with a team that stays close to the work.</h2><p>Owner-approved company figures. Each project still gets its own scope, team and delivery plan.</p></div>
      <dl className="company-snapshot-figures">{figures.map((figure) => <div key={figure.label}><dt>{figure.label}</dt><dd>{figure.count}{figure.suffix}</dd></div>)}</dl>
    </div>
  </section>;
}
