import type { Metadata } from "next";
import ServicesIndexPage from "@/components/services/ServicesIndexPage";
import { SITE_URL } from "@/lib/seo";

const title = "Our Services | Direct Tyre Solutions";
const description =
  "Mobile tyre fitting, puncture repairs, tyre replacement and 24/7 emergency call-outs — we bring the workshop to you, wherever you are.";
const url = `${SITE_URL}/services`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
  },
  twitter: {
    title,
    description,
  },
};

export default function Page() {
  return <ServicesIndexPage />;
}
