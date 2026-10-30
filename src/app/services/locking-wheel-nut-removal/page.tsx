import ServicePage from "@/components/services/ServicePage";
import { serviceMetadata } from "@/lib/service-metadata";
import { servicePages } from "@/lib/services-data";

export const metadata = serviceMetadata("locking-wheel-nut-removal");

export default function Page() {
  return <ServicePage data={servicePages["locking-wheel-nut-removal"]} />;
}
