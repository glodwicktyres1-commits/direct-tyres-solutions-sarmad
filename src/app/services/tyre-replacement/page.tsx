import ServicePage from "@/components/services/ServicePage";
import { serviceMetadata } from "@/lib/service-metadata";
import { servicePages } from "@/lib/services-data";

export const metadata = serviceMetadata("tyre-replacement");

export default function Page() {
  return <ServicePage data={servicePages["tyre-replacement"]} />;
}
