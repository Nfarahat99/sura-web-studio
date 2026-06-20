/**
 * Wrapper that paints a soft cream-to-green-light radial glow at the top
 * of the page. Use as the root of <main>. Server component — no JS.
 */
export default function DawnGlow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`dawn-glow ${className}`}>{children}</div>;
}
