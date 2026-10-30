import Link from "next/link";
import { archivo } from "@/components/services/fonts";
import { otherServiceLinks, servicePages } from "@/lib/services-data";

/** /services — the four service cards, laid out exactly as in the approved Lovable design. */
export default function ServicesIndexPage() {
  return (
    <div className={`${archivo.variable} pt-20 bg-svc-bg text-svc-fg`}>
      <main className="mx-auto max-w-4xl px-5 py-20">
        <h1 className="font-svc text-[40px] font-black uppercase leading-[48px] tracking-[-0.02em]">
          Our <span className="bg-svc-yellow px-2">Services</span>
        </h1>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {otherServiceLinks.map(({ slug }) => {
            const page = servicePages[slug];
            return (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="rounded-[24px] bg-svc-navy p-8 text-svc-light transition hover:-translate-y-1"
              >
                <h2 className="font-svc text-2xl font-black uppercase">
                  {page.h1Line1} <span className="text-svc-yellow">{page.h1Line2}</span>
                </h2>
                <p className="mt-2 opacity-75">{page.badge}</p>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
