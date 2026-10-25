import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyHero } from "@/components/CaseStudyHero";
import { CaseStudyEvidence } from "@/components/CaseStudyEvidence";
import { caseStudies, company } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find(item => item.slug === slug);
  if (!study) return {};
  return {
    title: `${study.client} Case Study`,
    description: `${study.title}: ${study.solution}`,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: { title: `${study.title} | LetsFygure`, description: study.challenge, url: `${company.url}/case-studies/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = caseStudies.findIndex(item => item.slug === slug);
  if (index < 0) notFound();
  const study = caseStudies[index];
  const schema = { "@context": "https://schema.org", "@type": "CreativeWork", name: study.title, about: study.industry, creator: { "@type": "Organization", name: company.name }, url: `${company.url}/case-studies/${study.slug}` };

  return <>
    <CaseStudyHero study={study} index={index} />
    <CaseStudyEvidence study={study} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
