import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
  title?: string;
};

export type IconName =
  | "rocket"
  | "code"
  | "palette"
  | "megaphone"
  | "search"
  | "chart"
  | "building"
  | "handshake"
  | "factory"
  | "bolt"
  | "sparkle"
  | "target"
  | "seedling"
  | "ship"
  | "globe"
  | "folder"
  | "door"
  | "whatsapp"
  | "mail"
  | "check"
  | "arrow"
  | "menu"
  | "close"
  | "plus"
  | "leaf"
  | "recycle";

/**
 * Single-source SVG icon system. All icons use currentColor and a consistent
 * 24px viewBox with 1.75px stroke for visual rhythm with body text weight.
 * No emoji as structural icons — they're font-dependent and break theming.
 */
export default function Icon({ name, size = 24, title, ...rest }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": title ? undefined : true,
    role: title ? "img" : undefined,
    focusable: false,
    ...rest,
  };

  return (
    <svg {...common}>
      {title ? <title>{title}</title> : null}
      {PATHS[name]}
    </svg>
  );
}

const PATHS: Record<IconName, React.ReactNode> = {
  rocket: (
    <>
      <path d="M14.5 3.5c2.5 0 6 0 6 0s0 3.5 0 6c0 4.5-5 9.5-7.5 11l-3.5-3.5C11 14.5 16 9.5 14.5 3.5Z" />
      <path d="M9 14l-3 3 4 1" />
      <path d="M9 14l-3-3-1 4" />
      <circle cx="15.5" cy="8.5" r="1.5" />
    </>
  ),
  code: (
    <>
      <path d="M8 6 2 12l6 6" />
      <path d="m16 6 6 6-6 6" />
      <path d="m14 4-4 16" />
    </>
  ),
  palette: (
    <>
      <path d="M12 21a9 9 0 1 1 9-9c0 2.5-2 3-4 3h-2a2 2 0 0 0-2 2 2 2 0 0 0 .5 1.3A2 2 0 0 1 12 21Z" />
      <circle cx="7.5" cy="11" r="1" fill="currentColor" />
      <circle cx="9.5" cy="6.5" r="1" fill="currentColor" />
      <circle cx="14.5" cy="6.5" r="1" fill="currentColor" />
      <circle cx="17.5" cy="11" r="1" fill="currentColor" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 11v2a2 2 0 0 0 2 2h1l3 4 1-1v-3l9 3V6L10 9H5a2 2 0 0 0-2 2Z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 3 3 5-6" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      <path d="M16 9h2a2 2 0 0 1 2 2v10" />
      <path d="M3 21h18" />
      <path d="M8 7h2M8 11h2M8 15h2" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 17 2-2 4 4" />
      <path d="M5 11 2 8l4-4 3 3" />
      <path d="m22 16-3 3-4-4" />
      <path d="m13 13-2-2-3 3 2 2" />
      <path d="M14 6 9 11" />
    </>
  ),
  factory: (
    <>
      <path d="M2 20V9l5 3V9l5 3V4h4l1 16Z" />
      <path d="M2 20h20" />
      <path d="M8 16h2M13 16h2M18 16h0" />
    </>
  ),
  bolt: (
    <>
      <path d="m13 2-8 12h6l-2 8 8-12h-6l2-8Z" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </>
  ),
  seedling: (
    <>
      <path d="M12 21V11" />
      <path d="M12 11C8 11 5 8 5 4c4 0 7 3 7 7Z" />
      <path d="M12 11c4 0 7-3 7-7-4 0-7 3-7 7Z" />
      <path d="M6 21h12" />
    </>
  ),
  ship: (
    <>
      <path d="M3 17h18l-2 4H5Z" />
      <path d="M5 17V8l7-4 7 4v9" />
      <path d="M12 8v9" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
    </>
  ),
  folder: (
    <>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    </>
  ),
  door: (
    <>
      <path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17" />
      <path d="M3 21h18" />
      <circle cx="14.5" cy="12.5" r="0.8" fill="currentColor" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20 4A11 11 0 0 0 4 19l-1 4 4-1A11 11 0 1 0 20 4Z" />
      <path d="M8.5 9.5c0 4 3 7 7 7 .8 0 1.5-.6 1.6-1.3v-.4l-2-1-1 1c-1.5-.6-2.5-1.6-3.1-3.1l1-1-1-2H11c-.8.1-1.5.8-1.5 1.6" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  check: <path d="m5 12 4 4 10-10" />,
  arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  leaf: (
    <>
      <path d="M20 4c0 9-6 16-13 16a7 7 0 0 1-3-1c0-7 5-13 12-15 1.5-.4 4 0 4 0Z" />
      <path d="M4 20c2-8 8-13 14-14" />
    </>
  ),
  recycle: (
    <>
      <path d="m4 14 2 4h4" />
      <path d="m20 14-2 4h-4" />
      <path d="M12 4 9 9h6Z" />
      <path d="M6 14 9 9" />
      <path d="m18 14-3-5" />
    </>
  ),
};
