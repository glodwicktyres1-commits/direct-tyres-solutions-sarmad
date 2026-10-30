import type { Metadata } from "next";
import { servicePages, type ServiceSlug } from "@/lib/services-data";
import { SITE_URL } from "@/lib/seo";

export function serviceUrl(slug: ServiceSlug) {
  return `${SITE_URL}/services/${slug}`;
}

export function serviceMetadata(slug: ServiceSlug): Metadata {
  const { metaTitle, metaDescription } = servicePages[slug];
  const url = serviceUrl(slug);

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url,
    },
    twitter: {
      title: metaTitle,
      description: metaDescription,
    },
  };
}
