import type { Metadata, Viewport } from "next";
import { Cairo, IBM_Plex_Sans_Arabic } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-plex",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sura.studio";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "سُرَى · Surā — نُرافقك في الرحلة",
    template: "%s · سُرَى · Surā",
  },
  description:
    "استوديو متخصّص في تصميم وبرمجة المواقع وتطبيقات الويب — للشركات الصغيرة والجمعيات والمصانع. نُسلّم خلال أسابيع، بالعربية والإنجليزية.",
  keywords: [
    "تصميم مواقع",
    "برمجة مواقع",
    "تطبيقات ويب",
    "Next.js",
    "سُرَى",
    "Surā",
    "استوديو ويب",
    "مواقع الجمعيات",
    "مواقع الشركات الصغيرة",
    "مواقع المصانع",
    "هوية بصرية",
    "بوّابة B2B",
    "حملات Google",
    "SEO",
  ],
  authors: [{ name: "نور الدين فرحات", url: SITE_URL }],
  creator: "نور الدين فرحات · Noureddin Farahat",
  publisher: "سُرَى · Surā",
  icons: {
    icon: [
      { url: "/favicons/favicon.ico", sizes: "any" },
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
      { url: "/favicons/sura-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicons/sura-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: { url: "/favicons/apple-touch-icon.png", sizes: "180x180" },
    shortcut: "/favicons/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "سُرَى · Surā — نُرافقك في الرحلة",
    description:
      "مواقع وتطبيقات ويب للشركات والجمعيات والمصانع — من الفكرة إلى الإطلاق.",
    locale: "ar_SA",
    type: "website",
    siteName: "سُرَى · Surā",
    url: SITE_URL,
    images: [
      {
        url: "/favicons/og-image.png",
        width: 1200,
        height: 630,
        alt: "سُرَى — Surā",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "سُرَى · Surā — نُرافقك في الرحلة",
    description:
      "مواقع وتطبيقات ويب — من الفكرة إلى الإطلاق. نُسلّم خلال أسابيع.",
    images: ["/favicons/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1E2940",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${plex.variable}`}>
      <body>
        <Header />
        <main id="main" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
