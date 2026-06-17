import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { CONTACT } from "@/lib/data";

export const metadata = {
  title: "تواصل معنا — سُرَى",
  description: "احجز مكالمة استكشاف مجانية أو راسلنا عبر النموذج أو واتساب.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
            تواصل معنا
          </p>
          <h1 className="mt-4 text-[2.5rem] font-black leading-[1.15] text-navy sm:text-5xl md:text-6xl">
            خلّينا نسمع منك.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.85] text-navy/80 sm:text-lg">
            مكالمة استكشاف مجانية مدّتها 30 دقيقة. نسمع، نفهم، ونرجع لك بمقترح خلال 24 ساعة.
          </p>
        </div>
      </section>

      <section className="border-y border-ash/40 bg-mist py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-5 md:gap-10">
          <div className="md:col-span-3">
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-6 md:col-span-2">
            <div className="rounded-2xl border border-ash/50 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-bold text-navy">طرق التواصل المباشر</h3>
              <ul className="mt-5 flex flex-col gap-3">
                <li>
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-ash/40 p-4 transition-all duration-200 hover:border-green hover:bg-green/5"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green/10 text-green-ink transition-colors duration-200 group-hover:bg-green/20">
                      <Icon name="whatsapp" size={22} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-bold text-navy">واتساب · WhatsApp</p>
                      <p className="tabular text-sm text-stone" dir="ltr">
                        {CONTACT.whatsapp}
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="group flex items-center gap-4 rounded-xl border border-ash/40 p-4 transition-all duration-200 hover:border-green hover:bg-green/5"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green/10 text-green-ink transition-colors duration-200 group-hover:bg-green/20">
                      <Icon name="mail" size={22} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-bold text-navy">بريد إلكتروني</p>
                      <p className="truncate text-sm text-stone" dir="ltr">
                        {CONTACT.email}
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-navy p-6 text-cream shadow-soft">
              <h3 className="text-xl font-bold">أوقات الاستجابة</h3>
              <ul className="mt-4 flex flex-col gap-2.5 text-cream/85">
                <li className="flex items-center gap-2">
                  <Icon name="mail" size={16} className="text-green-light" aria-hidden />
                  <span>البريد: خلال 24 ساعة</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="whatsapp" size={16} className="text-green-light" aria-hidden />
                  <span>واتساب: خلال 4 ساعات</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" size={16} className="text-green-light" aria-hidden />
                  <span>النموذج: خلال 12 ساعة</span>
                </li>
              </ul>
              <p className="mt-4 border-t border-cream/15 pt-4 text-sm text-cream/85">
                ساعات العمل: السبت - الخميس · 9 صباحاً - 6 مساءً (السعودية)
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
