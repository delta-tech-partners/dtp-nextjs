import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { getIndustryConfig, industries } from "@/data/industries";

type IndustryRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryConfig(slug);

  if (!industry) {
    return {};
  }

  return industry.metadata;
}

export default async function IndustryPage({ params }: IndustryRouteProps) {
  const { slug } = await params;
  const industry = getIndustryConfig(slug);

  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}