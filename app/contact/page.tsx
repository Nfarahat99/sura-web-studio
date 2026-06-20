import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import Eyebrow from "@/components/Eyebrow";
import { CONTACT } from "@/lib/data";

export const metadata = {
  title: "تواصل معنا · سُرَى",
  description:
    "احجز مكالمة استكشاف مجانية، أو راسلنا عبر النموذج أو واتساب.",
};

export default function ContactPage() {
  return (
    <>
      <section className="dawn-glow bg-cream pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Eyebrow>تواصل معنا</Eyebrow>
          <h1 className="mt-4 text-[32px] font-display font-bold leading-[1.15] text-navy tracking-[-0.01em] md:text-[56px] md:leading-[1.08]">
            خلّينا نسمع منك.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.75] text-navy/85 md:text-[18px]">
            مكالمة استكشاف مجانية، 30 دقيقة. نسمع منك، نفهم وضعك، ونرجع لك
            بمقترح خلال 24 ساعة.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-20 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-12 md:gap-10 md:px-8">
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-6 md:col-span-5">
            <div className="card-soft p-6">
              <h3 className="text-xl font-bold text-navy">تواصل مباشر</h3>
              <ul className="mt-5 flex flex-col gap-3">
                <li>
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-ash/50 p-4 transition-all duration-200 hover:border-green hover:bg-green/5"
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
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="group flex items-center gap-4 rounded-xl border border-ash/50 p-4 transition-all duration-200 hover:border-green hover:bg-green/5"
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

            <div className="card-anchor p-6">
              <h3 className="text-xl font-bold">أوقات الاستجابة</h3>
              <ul className="mt-4 flex flex-col gap-2.5 text-cream/90">
                <li className="flex items-center gap-2">
                  <Icon name="whatsapp" size={16} className="text-green-light" aria-hidden />
                  <span>واتساب: خلال 4 ساعات</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="mail" size={16} className="text-green-light" aria-hidden />
                  <span>البريد: خلال 24 ساعة</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" size={16} className="text-green-light" aria-hidden />
                  <span>النموذج: خلال 12 ساعة</span>
                </li>
              </ul>
              <p className="mt-4 border-t border-cream/40 pt-4 text-sm text-cream/85">
                ساعات العمل: {CONTACT.workingHours}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
