import Eyebrow from "@/components/Eyebrow";

export const metadata = {
  title: "سياسة الخصوصية · سُرَى",
  description: "كيف نتعامل مع بياناتك في سُرَى.",
};

export default function PrivacyPage() {
  return (
    <article className="dawn-glow bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Eyebrow>الخصوصية</Eyebrow>
        <h1 className="mt-3 text-[32px] font-display font-bold leading-[1.15] text-navy md:text-[48px]">
          سياسة الخصوصية
        </h1>
        <p className="mt-3 text-sm text-navy/70">آخر تحديث: 2026-06-19</p>

        <div className="mt-10 flex flex-col gap-7 leading-[1.85] text-navy/90">
          <section>
            <h2 className="mb-3 text-2xl font-bold text-navy">باختصار</h2>
            <p>
              في سُرَى، نجمع أقلّ قدر من البيانات يلزمنا لخدمتك. لا نبيع
              بياناتك، ولا نشاركها مع جهات خارجية لأغراض تسويقية، ولا
              نتتبّعك عبر مواقع أخرى.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-navy">ما نجمعه</h2>
            <ul className="ms-5 list-disc space-y-2">
              <li>
                <strong>نموذج التواصل:</strong> الاسم، البريد الإلكتروني،
                الواتساب (اختياري)، الباقة التي تهمّك، ورسالتك. نستخدمها
                فقط للتواصل معك ومتابعة طلبك.
              </li>
              <li>
                <strong>تحليلات الموقع:</strong> أعداد زوّار مجهولة الهوية
                (لا نتتبّع الأشخاص). نستخدم Vercel Analytics بدون ملفات
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
            <h2 className="mb-3 text-2xl font-bold text-navy">ما لا نجمعه</h2>
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
            <h2 className="mb-3 text-2xl font-bold text-navy">
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
            <h2 className="mb-3 text-2xl font-bold text-navy">حقوقك</h2>
            <ul className="ms-5 list-disc space-y-2">
              <li>طلب نسخة من بياناتك التي عندنا</li>
              <li>طلب تصحيح أو حذف بياناتك</li>
              <li>إلغاء الاشتراك من أي قائمة بريدية اشتركتَ فيها</li>
            </ul>
            <p className="mt-4">
              للتواصل بخصوص بياناتك، راسلنا على:{" "}
              <a
                className="text-green-ink underline"
                href="mailto:noureddin@sura.studio"
              >
                noureddin@sura.studio
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-navy">
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
    </article>
  );
}
