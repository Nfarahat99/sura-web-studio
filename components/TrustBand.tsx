import Icon from "./Icon";

/**
 * Thin "trust" strip on the homepage: tech stack on one side, founder
 * personal-build promise on the other. Replaces missing social proof.
 */
export default function TrustBand({
  techLabel,
  techStack,
  founderLine,
}: {
  techLabel: string;
  techStack: string[];
  founderLine: string;
}) {
  return (
    <section className="border-y border-ash/40 bg-cream-dark py-12 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-5">
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy/65">
            {techLabel}
          </span>
          <ul className="flex flex-wrap items-center justify-center gap-2.5">
            {techStack.map((t) => (
              <li
                key={t}
                className="tabular rounded-full border border-ash/70 bg-white/60 px-3 py-1 text-[13px] font-medium text-navy/75"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <p className="inline-flex items-center gap-2 text-sm text-navy/80">
          <Icon name="seedling" size={16} className="text-green-ink" aria-hidden />
          {founderLine}
        </p>
      </div>
    </section>
  );
}
