type Props = {
  words: string[];
  /** "outline" → stroked, hollow text. "solid" → filled. */
  variant?: "outline" | "solid";
  tone?: "navy" | "cream";
  /** Separator glyph between words */
  separator?: string;
};

/**
 * Oversized brand-keyword marquee — used as a section divider.
 * Renders as a single decorative line; safe to hide from screen readers.
 */
export default function MarqueeText({
  words,
  variant = "outline",
  tone = "navy",
  separator = "✦",
}: Props) {
  const items = [...words, ...words, ...words];
  const baseClass =
    variant === "outline"
      ? tone === "cream"
        ? "text-outline-cream"
        : "text-outline-navy"
      : tone === "cream"
      ? "text-cream"
      : "text-navy";

  return (
    <div className="overflow-hidden py-2" aria-hidden>
      <div className="text-marquee">
        {items.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className={`display-hero whitespace-nowrap text-[15vw] leading-none md:text-[9vw] ${baseClass}`}
          >
            <span className="px-8">{w}</span>
            <span className="px-4 opacity-60">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
