type Props = {
  children: React.ReactNode;
  badge?: string;
  className?: string;
};

/**
 * Premium navy card. Used for highlighted pricing tier, "الأكثر شيوعاً"
 * bundle, recommended audience bundle. Static — no hover lift.
 */
export default function AnchorCard({ children, badge, className = "" }: Props) {
  return (
    <article
      className={`card-anchor relative flex h-full flex-col p-7 md:p-9 ${className}`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green px-3 py-1 text-xs font-semibold text-cream shadow-soft">
          {badge}
        </span>
      )}
      {children}
    </article>
  );
}
