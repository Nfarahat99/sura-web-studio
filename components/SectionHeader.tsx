import Eyebrow from "./Eyebrow";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "start" | "center";
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Eyebrow + H2 + optional lede composition. Replaces the repeated
 * <p class="text-sm">…</p><h2>…</h2> pattern across every page.
 */
export default function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "center",
  tone = "dark",
  className = "",
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-start";
  const titleColor = tone === "light" ? "text-cream" : "text-navy";
  const ledeColor = tone === "light" ? "text-cream/90" : "text-navy/85";
  return (
    <div className={`${alignment} max-w-2xl ${className}`}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-3 text-[26px] leading-[1.2] md:text-[40px] md:leading-[1.15] font-display font-bold tracking-tight ${titleColor}`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-4 md:mt-5 text-[16px] md:text-[18px] leading-[1.75] ${ledeColor}`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
