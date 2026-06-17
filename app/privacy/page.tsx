export const metadata = {
  title: "سياسة الخصوصية — سُرَى",
  description: "كيف نتعامل مع بياناتك في سُرَى.",
};

export default function PrivacyPage() {
  return (
    <article className="bg-cream py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
          الخصوصية
        </p>
        <h1 className="mt-3 text-4xl font-black text-navy md:text-5xl">
          سياسة الخصوصية
        </h1>
        <p className="mt-3 text-sm text-navy/75">آخر تحديث: 2026-06-12</p>

        <div className="mt-10 flex flex-col gap-7 leading-[1.85] text-navy/85">
          <section>
            <h2 className="mb-3 text-2xl font-bold text-navy">باختصار</h2>
            <p>
              في سُرَى، نجمع أقلّ قدر من البيانات الذي يسمح لنا بخدمتك. لا نبيع بياناتك،
              لا نشاركها مع جهات خارجية لأغراض تسويقية، ولا نتتبّعك عبر المواقع الأخرى.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-navy">ما الذي نجمعه</h2>
            <ul className="ms-5 list-disc space-y-2">
              <li>
                <strong>نموذج التواصل:</strong> الاسم، البريد الإلكتروني، الواتساب (اختياري)،
                الباقة المهتم بها، رسالتك. نستخدمها فقط للتواصل معك ومتابعة طلبك.
              </li>
              <li>
                <strong>تحليلات الموقع:</strong> أعداد زوّار مجهولة الهوية (لا نتتبّع
                الأشخاص). نستخدم Vercel Analytics بدون cookies.
              </li>
              <li>
                <strong>سجلّات الخادم:</strong> عنوان IP وUser-Agent لمدّة 30 يوم —
                لأغراض الأمان والحماية من البريد المزعج.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-navy">ما الذي لا نجمعه</h2>
            <ul className="ms-5 list-disc space-y-2">
              <li>لا cookies للتتبّع</li>
              <li>لا facebook pixel، لا Google Analytics التقليدي</li>
              <li>لا remarketing، لا profiling تسويقي</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-navy">من نشاركه معه بياناتك</h2>
            <p>
              لا أحد إلا مزوّدي الخدمة الذين نحتاجهم لتشغيل الموقع: Vercel (استضافة)،
              Resend (إرسال البريد). كلهم ملتزمون بأنظمة حماية البيانات الأوروبية (GDPR)
              ولا يستخدمون بياناتك لأغراضهم.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-navy">حقوقك</h2>
            <ul className="ms-5 list-disc space-y-2">
              <li>طلب نسخة من بياناتك التي عندنا</li>
              <li>طلب تصحيح أو حذف بياناتك</li>
              <li>الانسحاب من أي قائمة بريدية تشترك فيها</li>
            </ul>
            <p className="mt-4">
              للتواصل بخصوص بياناتك:{" "}
              <a className="text-green-ink underline" href="mailto:noureddin@sura.studio">
                noureddin@sura.studio
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-navy">تحديثات</h2>
            <p>
              قد نُحدّث هذه السياسة من وقت لآخر. التحديثات الجوهرية سنُعلمها عبر إشعار
              ظاهر على الموقع. آخر تحديث مذكور أعلاه.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
