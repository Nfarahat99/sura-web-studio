type Props = {
  size?: number;
  opacity?: number;
  showDot?: boolean;
  className?: string;
};

/**
 * The two-wave + green-dot mark, without wordmark. Reusable as inline SVG.
 * Used as a decorative watermark in CTAs, the /work empty-state card, and
 * the hero horizon. Carries aria-hidden — decoration only.
 */
export default function WaveGlyph({
  size = 96,
  opacity = 1,
  showDot = true,
  className = "",
}: Props) {
  const ratio = 320 / 160;
  return (
    <svg
      width={size * ratio}
      height={size}
      viewBox="0 0 320 160"
      fill="none"
      aria-hidden
      focusable={false}
      className={className}
      style={{ opacity }}
    >
      {/* Upper wave reaches up toward the star */}
      <path
        d="M0 92 C 56 60, 112 60, 160 78 C 208 96, 264 96, 320 80"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
      />
      {/* Lower wave anchors the horizon */}
      <path
        d="M0 122 C 56 110, 112 110, 160 118 C 208 126, 264 126, 320 118"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        opacity={0.55}
      />
      {showDot && (
        <circle cx={160} cy={48} r={6.5} fill="var(--color-green)" />
      )}
    </svg>
  );
}
