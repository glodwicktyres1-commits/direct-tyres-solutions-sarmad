import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import ServiceJsonLd from "@/components/services/ServiceJsonLd";
import { archivo } from "@/components/services/fonts";
import { BadgeCheck, CircleCheck } from "@/components/services/icons";
import { otherServiceLinks, type ServicePageData } from "@/lib/services-data";

const PHONE_DISPLAY = "07955 266 077";
const PHONE_TEL = "tel:07955266077";
const WHATSAPP = "https://wa.me/447955266077";

const trustItems = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: BadgeCheck, label: "Certified Technicians" },
  { icon: Clock, label: "30–45 Min Response" },
  { icon: Star, label: "4.9★ · 500+ Reviews" },
];

/**
 * Renders text; `[label](/path)` becomes an internal link. The approved design
 * shows these cross-links as plain running text, so the anchor inherits the
 * surrounding colour and has no underline.
 */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return part;
        return (
          <Link key={i} href={m[2]}>
            {m[1]}
          </Link>
        );
      })}
    </>
  );
}

export default function ServicePage({ data }: { data: ServicePageData }) {
  const others = otherServiceLinks.filter((s) => s.slug !== data.slug);

  return (
    <main className={`${archivo.variable} pt-20 bg-svc-bg text-svc-fg`}>
      <ServiceJsonLd data={data} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-svc-deep text-svc-light">
        <Image
          src="/hero-section-images-936x527.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, oklch(18% .05 265/.95) 35%, oklch(18% .05 265/.55))",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
          <p className="mb-4 text-sm opacity-80">
            <Link href="/">Home</Link> / Services /{" "}
            <span className="text-svc-yellow">{data.shortLabel}</span>
          </p>
          <span className="inline-flex items-center gap-2 rounded-full bg-svc-yellow/15 px-4 py-1.5 text-sm font-medium text-svc-yellow">
            <Clock className="h-4 w-4" />
            {data.badge}
          </span>
          <h1 className="font-svc mt-5 break-words text-[40px] font-extrabold uppercase leading-[48px] tracking-[-0.02em] lg:text-[56px] lg:font-black lg:leading-[64px]">
            {data.h1Line1}
            <br />
            <span className="text-svc-yellow">{data.h1Line2}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-[28px] opacity-85">{data.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-full bg-svc-yellow px-7 py-4 font-semibold text-svc-deep transition hover:brightness-95"
            >
              <Phone className="h-5 w-5" />
              CALL NOW: {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP}
              className="inline-flex items-center gap-2 rounded-full border-2 border-svc-yellow px-7 py-4 font-semibold text-svc-yellow transition hover:bg-svc-yellow hover:text-svc-deep"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-svc-yellow">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 text-svc-deep md:grid-cols-4">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 font-semibold">
              <Icon className="h-7 w-7" />
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="mx-auto max-w-3xl text-center text-[18px] leading-[28px]">
          <RichText text={data.topLine} />
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {data.blocks.map((block, i) => (
            <article
              key={block.heading}
              className={`rounded-[28px] border border-svc-border bg-svc-card p-8 ${
                // A lone last card sits centred under the two-column grid.
                data.blocks.length % 2 === 1 && i === data.blocks.length - 1
                  ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)]"
                  : ""
              }`}
              style={{ boxShadow: "0 20px 40px -20px oklch(18% .05 265/.25)" }}
            >
              <div className="mb-5 h-1.5 w-14 rounded-full bg-svc-yellow" />
              <h2 className="font-svc text-[20px] font-black uppercase leading-[26px]">
                {block.heading}
              </h2>
              {block.paragraphs?.map((p) => (
                <p key={p} className="mt-4 text-svc-muted">
                  <RichText text={p} />
                </p>
              ))}
              {block.list && (
                <ul className="mt-4 space-y-2">
                  {block.list.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-svc-yellow" />
                      <span>
                        <RichText text={item} />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {block.after?.map((p) => (
                <p key={p} className="mt-4 text-svc-muted">
                  <RichText text={p} />
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="bg-svc-navy text-svc-light">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-svc max-w-3xl text-[28px] font-black uppercase leading-[36px] md:text-[40px] md:leading-[48px]">
            {data.stepsHeading}
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {data.steps.map((step, i) => (
              <div key={step} className="border-t-2 border-svc-yellow pt-4">
                <span className="font-svc text-[30px] font-black leading-[38px] text-svc-yellow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 opacity-85">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas + why choose */}
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-20 lg:grid-cols-2">
        <div className="rounded-[28px] bg-svc-cream p-8">
          <MapPin className="h-10 w-10" />
          <h2 className="font-svc mt-4 text-[24px] font-black uppercase leading-[32px]">
            {data.areasHeading}
          </h2>
          {data.areasParagraphs.map((p) => (
            <p key={p} className="mt-4">
              <RichText text={p} />
            </p>
          ))}
        </div>
        <div className="rounded-[28px] bg-svc-deep p-8 text-svc-light">
          <h2 className="font-svc text-[24px] font-black uppercase leading-[32px]">
            Why Choose <span className="text-svc-yellow">Direct Tyre Solutions</span>
          </h2>
          <ul className="mt-6 space-y-3">
            {data.whyList.map((item) => (
              <li key={item} className="flex gap-3">
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-svc-yellow" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ + other services */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="font-svc text-[28px] font-black uppercase leading-[36px] md:text-[40px] md:leading-[48px]">
            <span className="bg-svc-yellow px-2">FAQs</span>
          </h2>
          <div className="mt-8 space-y-3">
            {data.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-[24px] border border-svc-border bg-svc-card p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {faq.q}
                  <ChevronDown className="h-5 w-5 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-svc-muted">
                  <RichText text={faq.a} />
                </p>
              </details>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-[28px] bg-svc-deep p-8 text-svc-light lg:sticky lg:top-24">
          <h3 className="font-svc text-[20px] font-black uppercase leading-[26px]">
            Other <span className="text-svc-yellow">Services</span>
          </h3>
          <ul className="mt-5 space-y-2">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="flex items-center justify-between rounded-[20px] bg-svc-light/5 px-4 py-3 hover:bg-svc-yellow hover:text-svc-deep"
                >
                  {s.label}
                  <span style={{ fontFamily: "sans-serif" }}>→</span>
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={PHONE_TEL}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-svc-yellow px-7 py-4 font-semibold text-svc-deep transition hover:brightness-95"
          >
            <Phone className="h-5 w-5" />
            {PHONE_DISPLAY}
          </a>
        </aside>
      </section>

      {/* CTA band */}
      <section className="bg-svc-yellow">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-16 text-center text-svc-deep">
          <h2 className="font-svc text-[28px] font-black uppercase leading-[36px] md:text-[40px] md:leading-[48px]">
            {data.ctaHeading}
          </h2>
          <p className="max-w-2xl text-lg">{data.ctaText}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-full bg-svc-deep px-7 py-4 font-semibold text-svc-light"
            >
              <Phone className="h-5 w-5" />
              CALL NOW: {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP}
              className="inline-flex items-center gap-2 rounded-full border-2 border-svc-deep px-7 py-4 font-semibold"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
