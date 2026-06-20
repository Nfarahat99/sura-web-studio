# 🚀 دليل النشر — سُرَى Website

موقع `sura.studio` مبني بـ Next.js 15. يعمل على أي مزوّد يدعم Node.js 22 + Docker. التوصية: **Railway** (مُعدّ بالفعل) أو **Vercel** (موصى به لـ Next.js).

---

## الخيار 1️⃣: Vercel (الأسرع — موصى به)

### الخطوات

1. **ادفع المشروع لـ GitHub:**
   ```bash
   cd C:\nashi\05-website
   git init && git add . && git commit -m "Initial: Surā website rebuild"
   gh repo create sura-website --private --source=. --push
   ```

2. **اربط Vercel بالـ repo:**
   - افتح https://vercel.com/new
   - Import `sura-website`
   - Framework: **Next.js** (يُكتشف تلقائياً)
   - Root Directory: `./` (يحتوي على `package.json`)

3. **أضف Environment Variables في Vercel:**
   | المتغيّر | القيمة | إلزامي |
   |---|---|---|
   | `NEXT_PUBLIC_WHATSAPP_NUMBER` | `+966555123456` | ⚠️ نعم |
   | `RESEND_API_KEY` | من https://resend.com/api-keys | ⚠️ نعم |
   | `CONTACT_TO_EMAIL` | `noureddin@sura.studio` | اختياري |
   | `NEXT_PUBLIC_SITE_URL` | `https://sura.studio` | للـ SEO |

4. **Deploy** — اضغط زر "Deploy"، السيرفر يبني خلال ~2 دقيقة.

5. **اربط الدومين:**
   - Project Settings → Domains → Add `sura.studio`
   - Vercel يعطيك سجلّات DNS (A + CNAME). أضفها في مزوّد الدومين.

---

## الخيار 2️⃣: Railway (Dockerfile جاهز)

### الخطوات

1. **ادفع لـ GitHub** (نفس الخطوة 1 أعلاه).

2. **اربط Railway:**
   - افتح https://railway.app/new
   - "Deploy from GitHub" → اختر `sura-website`
   - Railway يكتشف `Dockerfile` تلقائياً (`railway.json` موجود).

3. **Environment Variables** — نفس الجدول أعلاه. أضفها في Railway → Variables.

4. **اربط الدومين:**
   - Settings → Domains → Custom Domain → `sura.studio`
   - Railway يعطيك CNAME. أضفه في مزوّد الدومين.

---

## ✅ قائمة فحص قبل النشر

- [ ] جرّب `npm run build` محلياً — يجب يكتمل بدون أخطاء (✅ مختبر — يبني في 14.8 ثانية)
- [ ] جرّب `npm run start` على المنفذ 3000 — يجب يفتح الموقع بدون أخطاء
- [ ] تأكّد من `RESEND_API_KEY` يعمل (أرسل بريد اختبار من نموذج التواصل)
- [ ] تأكّد من `NEXT_PUBLIC_WHATSAPP_NUMBER` — اضغط زر واتساب وتأكّد من فتح المحادثة
- [ ] افتح الموقع على جوّال (iOS + Android) للتأكّد من parallax + tilt
- [ ] افتح في وضع reduced-motion (إعدادات النظام) للتأكّد من توقّف الحركات
- [ ] اختبر RTL — كل النصوص يمين، الأسهم تنعكس صحيحة
- [ ] favicon يظهر في تبويب المتصفّح (`public/favicons/`)

---

## 🌐 الدومين والبريد

### دومين `sura.studio`
- **سجّله من:** Namecheap / Cloudflare Registrar / Porkbun (≈ $25–35/سنة)
- **سجلّات DNS المطلوبة** (لـ Vercel):
  ```
  A     @     76.76.21.21
  CNAME www   cname.vercel-dns.com
  ```

### البريد `noureddin@sura.studio`
- **Google Workspace** ($6/شهر): الأفضل، يربط مع Gmail
- **Zoho Mail** (مجاني لـ 5 مستخدمين): البديل الاقتصادي
- بعد الإعداد، أضف سجلّات MX في DNS الدومين

---

## 🔧 ملفات النشر الموجودة

| الملف | الغرض |
|---|---|
| `Dockerfile` | Multi-stage Node 22 Alpine build — جاهز لـ Railway/Fly/أي PaaS |
| `railway.json` | إعدادات Railway (healthcheck، restart policy) |
| `next.config.mjs` | إعدادات Next.js |
| `package.json` | scripts: `dev`, `build`, `start` |
| `.env.example` | قالب متغيّرات البيئة |

---

## 🐛 إذا فشل البناء

```bash
# امسح الكاش وأعد البناء
rm -rf .next node_modules
npm install
npm run build
```

إذا استمرّ الخطأ، تحقّق من:
- إصدار Node ≥ 20 (`node --version`)
- لا توجد ملفات `.tsx` خارج `app/` و `components/` فيها أخطاء
- `tsconfig.json` صحيح

---

## 📊 بعد النشر

1. **Google Search Console** — أضف الموقع وأرسل `sitemap.xml`
2. **Google Analytics 4** — اربطه (اختياري — الموقع يستخدم Vercel Analytics بشكل افتراضي)
3. **Plausible / Vercel Analytics** — موصى به لتتبّع نظيف بدون cookies
4. **اختبار سرعة:** https://pagespeed.web.dev/ — يجب تحصل LCP < 2s

---

**🎯 الهدف:** الموقع شغّال على `https://sura.studio` خلال ساعة من اللحظة التي تبدأ فيها النشر.
