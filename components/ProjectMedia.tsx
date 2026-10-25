import Image from "next/image";

const projectAssets: Record<string, { desktop: string; mobile: string; logo: string }> = {
  "ongole-property": { desktop: "/images/projects/project-ongole-property-desktop.jpg", mobile: "/images/projects/project-ongole-property-mobile.jpg", logo: "/images/clients/ongole-property.png" },
  naystrip: { desktop: "/images/projects/project-naystrip-desktop.jpg", mobile: "/images/projects/project-naystrip-mobile.jpg", logo: "/images/clients/naystrip.png" },
  "mozno-wealth": { desktop: "/images/projects/project-mozno-wealth-desktop.jpg", mobile: "/images/projects/project-mozno-wealth-mobile.jpg", logo: "/images/clients/mozno-wealth.png" },
  "snow-feather-adventure": { desktop: "/images/projects/project-snow-feather-desktop.jpg", mobile: "/images/projects/project-snow-feather-mobile.jpg", logo: "/images/clients/snow-feather.png" },
  "rs-constructions": { desktop: "/images/projects/project-rs-constructions-desktop.jpg", mobile: "/images/projects/project-rs-constructions-mobile.jpg", logo: "/images/clients/rs-constructions.png" },
  "continental-mercantile": { desktop: "/images/projects/project-continental-mercantile-desktop.jpg", mobile: "/images/projects/project-continental-mercantile-mobile.jpg", logo: "/images/clients/continental-mercantile.png" },
};

export function ProjectMedia({ slug, client, priority = false, compact = false }: { slug: string; client: string; priority?: boolean; compact?: boolean }) {
  const asset = projectAssets[slug];
  if (!asset) return null;
  return <figure className={`project-media${compact ? " project-media-compact" : ""}`}>
    <div className="project-browser">
      <div className="project-browser-bar"><i /><i /><i /><span>{client}</span></div>
      <Image src={asset.desktop} alt={`${client} public website on desktop`} width={1440} height={900} sizes="(max-width: 800px) 92vw, 60vw" priority={priority} />
    </div>
    <div className="project-phone">
      <span />
      <Image src={asset.mobile} alt={`${client} public website on mobile`} width={390} height={844} sizes="(max-width: 800px) 30vw, 14vw" priority={priority} />
    </div>
  </figure>;
}

export function ClientLogoStrip() {
  return <div className="client-logo-strip" aria-label="Selected clients">
    {Object.entries(projectAssets).map(([slug, asset]) => <div key={slug}>
      <Image src={asset.logo} alt={clientName(slug)} width={260} height={110} sizes="150px" />
    </div>)}
  </div>;
}

function clientName(slug: string) {
  return ({
    "ongole-property": "Ongole Property",
    naystrip: "Naystrip",
    "mozno-wealth": "Mozno Wealth",
    "snow-feather-adventure": "Snow Feather Adventure",
    "rs-constructions": "RS Constructions Company",
    "continental-mercantile": "Continental Mercantile Corporation",
  } as Record<string, string>)[slug];
}
