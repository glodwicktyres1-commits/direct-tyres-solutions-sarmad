import ServicePage from "@/components/services/ServicePage";
import { serviceMetadata } from "@/lib/service-metadata";
import { servicePages } from "@/lib/services-data";

export const metadata = serviceMetadata("emergency-tyre-fitting");

export default function Page() {
  return <ServicePage data={servicePages["emergency-tyre-fitting"]} />;
}
