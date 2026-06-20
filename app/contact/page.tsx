import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import Eyebrow from "@/components/Eyebrow";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import { CONTACT } from "@/lib/data";

export const metadata = {
  title: "تواصل معنا",
  description:
    "احجز مكالمة استكشاف مجانية، أو راسلنا عبر النموذج أو واتساب.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero — cinematic dark */}
      <section className="night-mesh noise relative isolate overflow-hidden pt-28 pb-20 text-cream md:pt-36 md:pb-24">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <ScrollReveal>
            <Eyebrow tone="light">تواصل معنا</Eyebrow>
            <h1 className="display-hero mt-5 text-[44px] leading-[1.05] text-cream md:text-[80px]">
              خلّينا{" "}
              <span className="text-gold">نسمع</span>{" "}
              منك.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-[1.85] text-cream/85 md:text-xl">
              مكالمة استكشاف مجانية، 30 دقيقة. نسمع منك، نفهم وضعك، ونرجع
              لك بمقترح خلال 24 ساعة.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              {!CONTACT.whatsappIsPlaceholder && (
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-cream/30 px-6 text-sm text-cream transition hover:border-green-glow hover:text-green-glow"
                >
                  <Icon name="whatsapp" size={16} aria-hidden />
                  واتساب
                </a>
              )}
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-cream/30 px-6 text-sm text-cream transition hover:border-green-glow hover:text-green-glow"
                dir="ltr"
              >
                <Icon name="mail" size={16} aria-hidden />
                {CONTACT.email}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-12 md:gap-10 md:px-8">
          <ScrollReveal className="md:col-span-7">
            <div className="card-premium relative p-8 md:p-10">
              <div className="relative z-10">
                <Eyebrow>نموذج التواصل</Eyebrow>
                <h2 className="display-hero mt-3 text-[28px] leading-[1.1] text-navy md:text-[36px]">
                  احكي لنا عن{" "}
                  <span className="accent">مشروعك</span>.
                </h2>
                <p className="mt-3 text-navy/75">
                  كلّما وضحت التفاصيل، طلع مقترحنا أدقّ.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <aside className="flex flex-col gap-6 md:col-span-5">
            <ScrollReveal delay={2}>
              <div className="card-soft is-hoverable p-7">
                <Eyebrow>تواصل مباشر</Eyebrow>
                <h3 className="mt-3 text-xl font-bold text-navy">قنوات سريعة</h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {!CONTACT.whatsappIsPlaceholder && (
                    <li>
                      <a
                        href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-xl border border-ash/60 p-4 transition-all duration-200 hover:border-green hover:bg-green/5"
                      >
                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green/10 text-green-ink transition-colors duration-200 group-hover:bg-green/20">
                          <Icon name="whatsapp" size={22} />
                        </span>
                        <div className="min-w-0">
                          <p className="font-bold text-navy">واتساب · WhatsApp</p>
                          <p className="tabular text-sm text-navy/70" dir="ltr">
                            {CONTACT.whatsapp}
                          </p>
                        </div>
                      </a>
                    </li>
                  )}
                  <li>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="group flex items-center gap-4 rounded-xl border border-ash/60 p-4 transition-all duration-200 hover:border-green hover:bg-green/5"
                    >
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green/10 text-green-ink transition-colors duration-200 group-hover:bg-green/20">
                        <Icon name="mail" size={22} />
                      </span>
                      <div className="min-w-0">
                        <p className="font-bold text-navy">بريد إلكتروني</p>
                        <p className="truncate text-sm text-navy/70" dir="ltr">
                          {CONTACT.email}
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="tilt-wrap">
                <TiltCard className="card-anchor p-7" shine={false}>
                  <Eyebrow tone="light">أوقات الاستجابة</Eyebrow>
                  <h3 className="mt-3 text-xl font-bold text-cream">نرجع لك بسرعة.</h3>
                  <ul className="mt-5 flex flex-col gap-3 text-cream/90">
                    <li className="flex items-center gap-3 rounded-xl bg-cream/5 p-3">
                      <Icon name="whatsapp" size={18} className="shrink-0 text-green-glow" aria-hidden />
                      <span>واتساب: خلال <strong>4 ساعات</strong></span>
                    </li>
                    <li className="flex items-center gap-3 rounded-xl bg-cream/5 p-3">
                      <Icon name="mail" size={18} className="shrink-0 text-green-glow" aria-hidden />
                      <span>البريد: خلال <strong>24 ساعة</strong></span>
                    </li>
                    <li className="flex items-center gap-3 rounded-xl bg-cream/5 p-3">
                      <Icon name="check" size={18} className="shrink-0 text-green-glow" aria-hidden />
                      <span>النموذج: خلال <strong>12 ساعة</strong></span>
                    </li>
                  </ul>
                  <p className="mt-5 border-t border-cream/20 pt-4 text-sm text-cream/80">
                    ساعات العمل: {CONTACT.workingHours}
                  </p>
                </TiltCard>
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </section>
    </>
  );
}
