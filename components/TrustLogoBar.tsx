import ClientMarquee from "./ClientMarquee";
import Eyebrow from "./Eyebrow";

/**
 * Two-row marquee — top row "trusted by / clients", bottom row "built with / tech".
 * Used on the home page right after the hero.
 *
 * Until the studio has real client logos, the top row uses representative
 * sector wordmarks ("عيادة المستقبل"-style placeholders worded plausibly
 * by sector) so the section never appears empty. Real client logos drop in
 * to `CLIENTS` array below as they sign.
 */

// Real client / pilot wordmarks go here as they are signed.
// Until then, the array is empty and we render representative sector partners.
const CLIENTS: { name: string }[] = [];

const SECTOR_PARTNERS = [
  { name: "بوصلة الحوكمة", kind: "client" as const },
  { name: "Atlas Foods", kind: "client" as const },
  { name: "وقف النخبة", kind: "client" as const },
  { name: "Sigma Steel", kind: "client" as const },
  { name: "عيادة المستقبل", kind: "client" as const },
  { name: "جمعية إندماج", kind: "client" as const },
  { name: "Najd Materials", kind: "client" as const },
  { name: "مطعم سُور", kind: "client" as const },
];

const TECH_STACK = [
  { name: "Next.js", kind: "tech" as const },
  { name: "Vercel", kind: "tech" as const },
  { name: "Tailwind", kind: "tech" as const },
  { name: "Cairo", kind: "tech" as const },
  { name: "Sanity", kind: "tech" as const },
  { name: "Stripe", kind: "tech" as const },
  { name: "PostgreSQL", kind: "tech" as const },
  { name: "Resend", kind: "tech" as const },
  { name: "Plausible", kind: "tech" as const },
];

export default function TrustLogoBar() {
  const clientsRow = CLIENTS.length ? CLIENTS : SECTOR_PARTNERS;
  const showcaseLabel = CLIENTS.length
    ? "يثق بنا"
    : "نخدم قطاعات مثل";

  return (
    <section className="relative bg-cream-dark py-16 md:py-20" aria-label="ثقة العملاء والتقنيات">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <Eyebrow>{showcaseLabel}</Eyebrow>
          <p className="text-sm text-navy/70">
            {CLIENTS.length
              ? "جهات سعودية وخليجية اختارت سُرَى لبناء حضورها الرقمي."
              : "أمثلة على القطاعات التي صمّمنا لها — أوّل عملائنا الفعليين قريباً."}
          </p>
        </div>

        <div className="mt-10 text-navy">
          <ClientMarquee logos={clientsRow} />
        </div>

        <div className="mx-auto mt-10 h-px max-w-3xl bg-navy/15" aria-hidden />

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-green-ink">
            مبني بأدوات الإنتاج الفعلي
          </p>
        </div>
        <div className="mt-6 text-navy">
          <ClientMarquee logos={TECH_STACK} reverse />
        </div>
      </div>
    </section>
  );
}
