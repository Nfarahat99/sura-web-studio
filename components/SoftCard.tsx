import Link from "next/link";

type Tone = "green" | "warning" | "info" | "none";

type BaseProps = {
  children: React.ReactNode;
  hover?: boolean;
  accent?: Tone;
  className?: string;
};

type Props =
  | (BaseProps & { as?: "div" | "article"; href?: undefined })
  | (BaseProps & { as: "a"; href: string });

const accentMap: Record<Tone, string> = {
  green: "[--accent-color:var(--color-green)]",
  warning: "[--accent-color:var(--color-warning)]",
  info: "[--accent-color:var(--color-info)]",
  none: "",
};

/**
 * Standard white-on-cream card. Use everywhere a soft surface is needed:
 * services, value pillars, FAQ panels, address cards, etc.
 */
export default function SoftCard(props: Props) {
  const {
    children,
    hover = true,
    accent = "none",
    className = "",
  } = props;

  const base =
    "card-soft flex h-full flex-col p-7 md:p-9 " +
    (hover ? "is-hoverable " : "") +
    accentMap[accent] +
    " " +
    className;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={`group ${base}`}>
        {children}
      </Link>
    );
  }

  const Tag = props.as ?? "div";
  return <Tag className={base}>{children}</Tag>;
}
