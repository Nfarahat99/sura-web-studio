import Eyebrow from "@/components/Eyebrow";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "سياسة الخصوصية · سُرَى",
  description: "كيف نتعامل مع بياناتك في سُرَى.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Compact dark hero */}
      <section className="night-mesh noise relative isolate overflow-hidden pt-28 pb-16 text-cream md:pt-32 md:pb-20">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 md:px-8">
          <ScrollReveal>
            <Eyebrow tone="light">الخصوصية</Eyebrow>
            <h1 className="display-hero mt-4 text-[36px] leading-[1.05] text-cream md:text-[56px]">
              سياسة الخصوصية.
            </h1>
            <p className="mt-3 text-sm text-cream/70">آخر تحديث: 2026-06-19</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <article className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="card-premium p-8 md:p-12">
            <div className="relative z-10 flex flex-col gap-8 leading-[1.95] text-navy/90">
              <section>
                <h2 className="mb-4 text-2xl font-bold text-navy md:text-3xl">
                  باختصار
                </h2>
                <p>
                  في سُرَى، نجمع أقلّ قدر من البيانات يلزمنا لخدمتك. لا نبيع
                  بياناتك، ولا نشاركها مع جهات خارجية لأغراض تسويقية، ولا
                  نتتبّعك عبر مواقع أخرى.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-navy md:text-3xl">ما نجمعه</h2>
                <ul className="ms-5 list-disc space-y-3">
                  <li>
                    <strong>نموذج التواصل:</strong> الاسم، البريد الإلكتروني،
                    الواتساب (اختياري)، الباقة التي تهمّك، ورسالتك. نستخدمها
                    فقط للتواصل معك ومتابعة طلبك.
                  </li>
                  <li>
                    <strong>تحليلات الموقع:</strong> أعداد زوّار مجهولة الهوية
                    (لا نتتبّع الأشخاص). نستخدم Vercel Analytics بلا ملفات
                    تعريف ارتباط (cookies).
                  </li>
                  <li>
                    <strong>سجلّات الخادم:</strong> عنوان IP ومتصفّح الزائر
                    (User-Agent) لمدّة 30 يوماً — للأمان والحماية من البريد
                    المزعج.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-navy md:text-3xl">ما لا نجمعه</h2>
                <ul className="ms-5 list-disc space-y-2">
                  <li>لا ملفات تعريف ارتباط (cookies) للتتبّع</li>
                  <li>لا Facebook Pixel، ولا Google Analytics التقليدي</li>
                  <li>
                    لا إعادة استهداف إعلاني (remarketing)، ولا تصنيف تسويقي
                    (profiling)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-navy md:text-3xl">
                  مع من نشارك بياناتك
                </h2>
                <p>
                  لا أحد، باستثناء مزوّدي الخدمة الذين نحتاجهم لتشغيل الموقع:
                  Vercel (الاستضافة)، وResend (إرسال البريد). الاثنان ملتزمان
                  بنظام حماية البيانات الأوروبي (GDPR)، ولا يستخدمان بياناتك
                  لأغراضهما.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-navy md:text-3xl">حقوقك</h2>
                <ul className="ms-5 list-disc space-y-2">
                  <li>طلب نسخة من بياناتك التي عندنا</li>
                  <li>طلب تصحيح أو حذف بياناتك</li>
                  <li>إلغاء الاشتراك من أي قائمة بريدية اشتركتَ فيها</li>
                </ul>
                <p className="mt-4">
                  للتواصل بخصوص بياناتك، راسلنا على:{" "}
                  <a
                    className="text-green-ink underline decoration-2 underline-offset-4 hover:text-green-dark"
                    href="mailto:noureddin@sura.studio"
                  >
                    noureddin@sura.studio
                  </a>
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-navy md:text-3xl">
                  تحديث هذه السياسة
                </h2>
                <p>
                  قد نُحدّث هذه السياسة من وقت لآخر. التحديثات الجوهرية سنُعلن
                  عنها بإشعار ظاهر على الموقع، وتاريخ آخر تحديث مذكور في أعلى
                  الصفحة.
                </p>
              </section>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
