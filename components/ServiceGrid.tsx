import { services } from "@/lib/site";

export function ServiceGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <article key={service.title} className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-cyanfire/50">
            <div className="grid size-12 place-items-center rounded-lg bg-cyanfire/15 text-cyanfire">
              <Icon size={24} />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{service.summary}</p>
            <ul className="mt-5 grid gap-2 text-sm text-slate-400">
              {service.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mint" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}
