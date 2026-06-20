import Link from "next/link";
import Icon from "./Icon";
import type { PricingTier } from "@/lib/data";

export default function PricingCard({ tier }: { tier: PricingTier }) {
  const isHighlight = tier.highlight;
  const base = isHighlight ? "card-anchor" : "card-soft is-hoverable";
  return (
    <article
      className={`${base} relative flex h-full flex-col p-7 md:p-9`}
    >
      {isHighlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green px-3 py-1 text-xs font-semibold text-cream shadow-soft">
          الأكثر طلباً
        </span>
      )}

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3
            className={`text-[22px] font-bold leading-tight md:text-[26px] ${
              isHighlight ? "text-cream" : "text-navy"
            }`}
          >
            {tier.name}
          </h3>
          <p
            className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
              isHighlight ? "text-cream/80" : "text-navy/65"
            }`}
            dir="ltr"
          >
            {tier.nameEn}
          </p>
        </div>
        {tier.badge && (
          <span
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
              isHighlight
                ? "bg-green-light/15 text-green-light"
                : "bg-green/12 text-green-ink"
            }`}
          >
            <Icon name="seedling" size={12} aria-hidden />
            {tier.badge}
          </span>
        )}
      </div>

      <p
        className={`mt-3 text-sm leading-relaxed ${
          isHighlight ? "text-cream/90" : "text-navy/80"
        }`}
      >
        {tier.description}
      </p>

      <div
        className={`mt-6 border-t pt-6 ${
          isHighlight ? "border-cream/40" : "border-ash/50"
        }`}
      >
        <p
          className={`tabular text-[44px] font-black leading-none md:text-[52px] ${
            isHighlight ? "text-cream" : "text-navy"
          }`}
          dir="ltr"
          style={{ textAlign: "right" }}
        >
          {tier.priceMain}
        </p>
        <p
          className={`mt-2 text-sm ${
            isHighlight ? "text-cream/85" : "text-navy/70"
          }`}
        >
          {tier.currency}
        </p>
        <p
          className={`mt-2 inline-flex items-center gap-1.5 text-sm font-medium ${
            isHighlight ? "text-green-light" : "text-green-ink"
          }`}
        >
          <Icon name="bolt" size={14} aria-hidden />
          {tier.note}
        </p>
      </div>

      <ul className="mt-6 flex flex-1 flex-col gap-2.5">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Icon
              name="check"
              size={16}
              className={`mt-0.5 shrink-0 ${
                isHighlight ? "text-green-light" : "text-green"
              }`}
              aria-hidden
            />
            <span className={isHighlight ? "text-cream/95" : "text-navy/90"}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        aria-label={`${tier.cta} — باقة ${tier.name}`}
        className={`btn mt-7 ${
          isHighlight ? "btn-on-navy" : "btn-secondary"
        }`}
      >
        {tier.cta}
      </Link>
    </article>
  );
}
