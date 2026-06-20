type Props = {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Section eyebrow with a leading green dot (the "guiding star" reminder).
 * Use above every H2. `dark` = green-ink for cream/mist/white backgrounds;
 * `light` = green-light for navy backgrounds.
 */
export default function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: Props) {
  const color = tone === "light" ? "text-green-light" : "text-green-ink";
  const dotColor = tone === "light" ? "bg-green-light" : "bg-green";
  return (
    <span
      className={`inline-flex items-center gap-2 text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em] ${color} ${className}`}
    >
      <span
        aria-hidden
        className={`block h-1.5 w-1.5 rounded-full ${dotColor}`}
      />
      {children}
    </span>
  );
}
