import { siteConfig3 } from "@/lib/site-data3";
import { SITE_EMAIL, SITE_PHONE_TEL, SITE_URL } from "@/lib/seo";
import { serviceUrl } from "@/lib/service-metadata";
import type { ServicePageData } from "@/lib/services-data";

/** Strips `[label](/path)` link markup down to the label for structured data. */
const plain = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

export default function ServiceJsonLd({ data }: { data: ServicePageData }) {
  const pageUrl = serviceUrl(data.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.metaTitle.split("|")[0].trim(),
    serviceType: data.shortLabel,
    url: pageUrl,
    provider: {
      "@type": "AutoRepair",
      name: siteConfig3.name,
      telephone: SITE_PHONE_TEL,
      email: SITE_EMAIL,
      url: SITE_URL,
      image: `${SITE_URL}${siteConfig3.logo}`,
    },
    areaServed: {
      "@type": "City",
      name: "Manchester",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      { "@type": "ListItem", position: 3, name: data.shortLabel, item: pageUrl },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: plain(faq.a) },
    })),
  };

  return (
    <>
      {[serviceJsonLd, breadcrumbJsonLd, faqJsonLd].map((json) => (
        <script
          key={json["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
        />
      ))}
    </>
  );
}
