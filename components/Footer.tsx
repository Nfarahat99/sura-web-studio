import Image from "next/image";
import Link from "next/link";
import { CONTACT, NAV_LINKS } from "@/lib/data";
import Icon from "./Icon";
import WaveGlyph from "./WaveGlyph";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ash/70 bg-navy text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -bottom-20 text-cream"
        style={{ opacity: 0.04 }}
      >
        <WaveGlyph size={220} showDot={false} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src="/logos/sura-logo.png"
              alt="سُرَى"
              width={140}
              height={48}
              className="h-12 w-auto"
            />
            <p className="mt-5 max-w-md leading-relaxed text-cream/85">
              استوديو متخصّص في تصميم وبرمجة المواقع وتطبيقات الويب —
              للشركات الصغيرة والجمعيات والمصانع التي تخطو خطوتها الأولى
              على الويب.
            </p>
            <p
              className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-cream/80"
              dir="ltr"
            >
              Web Design &amp; Web Application Studio · SMEs · Charities · Manufacturers
            </p>
          </div>

          <nav aria-label="روابط الموقع">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-green-light">
              تنقّل
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/85 transition-colors duration-200 hover:text-green-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-green-light">
              تواصل
            </h3>
            <ul className="flex flex-col gap-3 text-cream/85">
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`}
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-green-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" size={18} aria-hidden />
                  <span>واتساب · WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-green-light"
                  dir="ltr"
                >
                  <Icon name="mail" size={18} aria-hidden />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-cream/80" dir="ltr">
                <Icon name="globe" size={18} aria-hidden />
                <span>{CONTACT.domain}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/40 pt-6 text-sm text-cream/80 md:flex-row">
          <p>
            © <span className="tabular">2026</span> سُرَى · Surā — جميع الحقوق محفوظة
          </p>
          <p className="inline-flex items-center gap-1.5">
            صُنع في الرياض بكلّ فخر
            <Icon name="leaf" size={14} className="text-green-light" aria-hidden />
          </p>
        </div>
      </div>
    </footer>
  );
}
