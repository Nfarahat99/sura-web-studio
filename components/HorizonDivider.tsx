type Props = {
  flip?: boolean;
  opacity?: number;
  className?: string;
};

/**
 * Thin single-wave SVG used between sections. Brand-specific divider —
 * replaces every <hr> and standalone border. Alternates direction with `flip`.
 */
export default function HorizonDivider({
  flip = false,
  opacity = 0.12,
  className = "",
}: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none w-full ${className}`}
      style={{ height: 80 }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        fill="none"
        focusable={false}
      >
        <path
          d={
            flip
              ? "M0 50 C 240 20, 480 20, 720 40 C 960 60, 1200 60, 1440 30"
              : "M0 30 C 240 60, 480 60, 720 40 C 960 20, 1200 20, 1440 50"
          }
          stroke="var(--color-navy)"
          strokeOpacity={opacity}
          strokeWidth={1}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
