import type { Metadata } from "next";
import { company } from "@/lib/site";

export function socialMetadata(title: string, description: string, path: string): Pick<Metadata, "openGraph" | "twitter"> {
  const fullTitle = `${title} | LetsFygure`;
  const image = `${company.url}/images/letsfygure-official.png`;
  return {
    openGraph: {
      title: fullTitle,
      description,
      url: new URL(path, company.url).toString(),
      siteName: company.name,
      images: [{ url: image, width: 2113, height: 744, alt: company.name }],
      locale: "en_IN",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
  };
}

export function withSocial(metadata: { title: string; description: string; alternates: { canonical: string } }): Metadata {
  return { ...metadata, ...socialMetadata(metadata.title, metadata.description, metadata.alternates.canonical) };
}
