type Logo = {
  name: string;
  /** Optional inline SVG path or text wordmark */
  wordmark?: string;
  /** Optional category label */
  kind?: "client" | "tech" | "partner";
};

type Props = {
  logos: Logo[];
  reverse?: boolean;
  className?: string;
};

/**
 * Infinite horizontal marquee of client/tech wordmarks. Pure CSS animation.
 * Logos are rendered as styled text wordmarks (no external image deps).
 * Visitors on touch see the same animation; hover (desktop) pauses.
 */
export default function ClientMarquee({ logos, reverse, className = "" }: Props) {
  // Double the list so the CSS -50% translate creates seamless loop.
  const doubled = [...logos, ...logos];

  return (
    <div className={`marquee-wrap ${className}`} aria-hidden>
      <div className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}>
        {doubled.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex shrink-0 items-center gap-2 px-2"
          >
            <span
              className="font-display text-2xl font-bold tracking-tight md:text-3xl"
              style={{ color: "color-mix(in oklab, currentColor 65%, transparent)" }}
            >
              {logo.wordmark ?? logo.name}
            </span>
            {logo.kind ? (
              <span
                className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] opacity-50 md:inline"
              >
                · {logo.kind}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
