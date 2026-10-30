import ServicePage from "@/components/services/ServicePage";
import { serviceMetadata } from "@/lib/service-metadata";
import { servicePages } from "@/lib/services-data";

export const metadata = serviceMetadata("tyre-puncture-repair");

export default function Page() {
  return <ServicePage data={servicePages["tyre-puncture-repair"]} />;
}
