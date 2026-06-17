import Link from "next/link";
import Icon from "./Icon";

type Tier = {
  key: string;
  name: string;
  nameEn: string;
  badge: string | null;
  description: string;
  priceMain: string;
  currency: string;
  note: string;
  features: string[];
  cta: string;
  highlight: boolean;
};

export default function PricingCard({ tier }: { tier: Tier }) {
  const isHighlight = tier.highlight;
  return (
    <article
      className={`relative hover-lift flex h-full flex-col rounded-2xl p-7 shadow-soft hover:-translate-y-1 hover:shadow-lift ${
        isHighlight
          ? "border-2 border-green bg-navy text-cream ring-1 ring-green/40 ring-offset-2 ring-offset-cream"
          : "border border-ash/60 bg-white"
      }`}
    >
      {isHighlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green px-3 py-1 text-xs font-bold text-cream shadow-soft">
          الأكثر طلباً
        </span>
      )}

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3
            className={`text-2xl font-bold ${
              isHighlight ? "text-cream" : "text-navy"
            }`}
          >
            {tier.name}
          </h3>
          <p
            className={`text-xs font-medium uppercase tracking-wider ${
              isHighlight ? "text-cream/80" : "text-stone"
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
                ? "bg-green text-cream"
                : "bg-green/12 text-green-ink"
            }`}
          >
            <Icon name="seedling" size={12} aria-hidden />
            {tier.badge}
          </span>
        )}
      </div>

      <p className={`mt-3 text-sm leading-relaxed ${isHighlight ? "text-cream/85" : "text-navy/75"}`}>
        {tier.description}
      </p>

      <div className={`mt-6 border-t pt-6 ${isHighlight ? "border-cream/15" : "border-ash/50"}`}>
        <p
          className={`tabular text-3xl font-bold ${
            isHighlight ? "text-cream" : "text-navy"
          }`}
          dir="ltr"
          style={{ textAlign: "right" }}
        >
          {tier.priceMain}
        </p>
        <p
          className={`mt-1 text-sm ${
            isHighlight ? "text-cream/85" : "text-navy/65"
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
              className={`mt-0.5 shrink-0 ${isHighlight ? "text-green-light" : "text-green"}`}
              aria-hidden
            />
            <span className={isHighlight ? "text-cream/90" : "text-navy/85"}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        aria-label={`${tier.cta} — باقة ${tier.name}`}
        className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 font-medium transition-all duration-200 active:scale-[0.98] ${
          isHighlight
            ? "bg-green text-cream hover:bg-green-light"
            : "border-2 border-navy/25 bg-white text-navy hover:border-green hover:bg-green hover:text-cream"
        }`}
      >
        {tier.cta}
      </Link>
    </article>
  );
}
