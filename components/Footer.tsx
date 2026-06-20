import Image from "next/image";
import Link from "next/link";
import { CONTACT, NAV_LINKS } from "@/lib/data";
import Icon from "./Icon";
import WaveGlyph from "./WaveGlyph";

export default function Footer() {
  return (
    <footer className="night-mesh noise relative overflow-hidden text-cream">
      {/* Decorative oversize brand word in background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 left-0 right-0 flex justify-center opacity-[0.04]"
      >
        <span className="display-hero text-[36vw] leading-none md:text-[20vw]">
          سُرَى
        </span>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-10 text-green-glow"
        style={{ opacity: 0.18 }}
      >
        <WaveGlyph size={220} showDot={false} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-20 md:px-8 md:pt-24">
        {/* Top — large tagline reminder */}
        <div className="border-b border-cream/20 pb-14 md:pb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-green-glow">
            تواصل معنا
          </p>
          <h3 className="display-hero mt-3 max-w-3xl text-[36px] leading-[1.05] text-cream md:text-[56px]">
            رحلة موقعك تبدأ <span className="accent">بمكالمة</span> صغيرة.
          </h3>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn btn-accent">
              احجز مكالمة استكشاف
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
            <a
              href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[3.25rem] items-center gap-2 rounded-full border border-cream/30 px-7 text-cream transition hover:border-green-glow hover:text-green-glow"
            >
              <Icon name="whatsapp" size={18} aria-hidden />
              راسلنا على واتساب
            </a>
          </div>
        </div>

        {/* Mid — columns */}
        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/logos/sura-logo.png"
              alt="سُرَى"
              width={140}
              height={48}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-md leading-relaxed text-cream/80">
              استوديو متخصّص في تصميم وبرمجة المواقع وتطبيقات الويب —
              للشركات الصغيرة والجمعيات والمصانع التي تخطو خطوتها الأولى
              على الويب.
            </p>
            <p
              className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/65"
              dir="ltr"
            >
              Web Design &amp; Web Application Studio · SMEs · Charities · Manufacturers
            </p>
          </div>

          <nav aria-label="روابط الموقع" className="md:col-span-3">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-green-glow">
              تنقّل
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-cream/85 transition-colors duration-200 hover:text-green-glow"
                  >
                    <span className="block h-px w-3 bg-cream/40 transition-all duration-200 group-hover:w-6 group-hover:bg-green-glow" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-green-glow">
              تواصل
            </h4>
            <ul className="flex flex-col gap-4 text-cream/85">
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`}
                  className="inline-flex items-center gap-3 transition-colors duration-200 hover:text-green-glow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/20">
                    <Icon name="whatsapp" size={16} aria-hidden />
                  </span>
                  <span>واتساب · WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-3 transition-colors duration-200 hover:text-green-glow"
                  dir="ltr"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/20">
                    <Icon name="mail" size={16} aria-hidden />
                  </span>
                  <span>{CONTACT.email}</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-cream/75" dir="ltr">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/20">
                  <Icon name="globe" size={16} aria-hidden />
                </span>
                <span>{CONTACT.domain}</span>
              </li>
              <li className="mt-2 text-sm text-cream/70" dir="rtl">
                {CONTACT.workingHours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom — copyright */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-6 text-sm text-cream/75 md:flex-row">
          <p>
            © <span className="tabular">2026</span> سُرَى · Surā — جميع الحقوق محفوظة
          </p>
          <p className="inline-flex items-center gap-1.5">
            صُنع في الرياض بكلّ فخر
            <Icon name="leaf" size={14} className="text-green-glow" aria-hidden />
          </p>
        </div>
      </div>
    </footer>
  );
}
