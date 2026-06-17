import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  package?: string;
  message?: string;
  company_website?: string;
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const recentRequests = new Map<string, number[]>();

function tooManyRequests(ip: string): boolean {
  const now = Date.now();
  const recent = recentRequests.get(ip) || [];
  const fresh = recent.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  fresh.push(now);
  recentRequests.set(ip, fresh);
  return fresh.length > RATE_LIMIT_MAX;
}

function validEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (tooManyRequests(ip)) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      { status: 429 }
    );
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  if (body.company_website) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 400 }
    );
  }
  if (!validEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "invalid_email" },
      { status: 400 }
    );
  }
  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { ok: false, error: "bad_message_length" },
      { status: 400 }
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "noureddin@sura.studio";

  if (resendKey) {
    try {
      const html = `
<div style="font-family: system-ui, sans-serif; max-width: 600px;">
  <h2 style="color: #1E2940;">طلب جديد من موقع سُرَى</h2>
  <table style="border-collapse: collapse;">
    <tr><td style="padding: 6px 12px; color: #6B7280;">الاسم</td><td style="padding: 6px 12px;"><strong>${escapeHtml(name)}</strong></td></tr>
    <tr><td style="padding: 6px 12px; color: #6B7280;">البريد</td><td style="padding: 6px 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
    ${body.phone ? `<tr><td style="padding: 6px 12px; color: #6B7280;">الواتساب</td><td style="padding: 6px 12px;">${escapeHtml(body.phone)}</td></tr>` : ""}
    ${body.package ? `<tr><td style="padding: 6px 12px; color: #6B7280;">الباقة</td><td style="padding: 6px 12px;">${escapeHtml(body.package)}</td></tr>` : ""}
  </table>
  <h3 style="color: #1E2940; margin-top: 24px;">الرسالة</h3>
  <p style="white-space: pre-wrap; line-height: 1.7;">${escapeHtml(message)}</p>
</div>`.trim();

      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Surā Contact <noreply@sura.studio>",
          to: [toEmail],
          reply_to: email,
          subject: `طلب جديد من ${name}${body.package ? ` (${body.package})` : ""}`,
          html,
        }),
      });

      if (!r.ok) {
        const errText = await r.text();
        console.error("Resend failed:", errText);
        return NextResponse.json(
          { ok: false, error: "send_failed" },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error("Contact form send error:", err);
      return NextResponse.json(
        { ok: false, error: "send_error" },
        { status: 500 }
      );
    }
  }

  console.log("\n=== Contact form submission (no RESEND_API_KEY set) ===");
  console.log({ name, email, phone: body.phone, package: body.package, message });
  console.log("=== End submission ===\n");

  return NextResponse.json({ ok: true, warning: "dev_mode_logged_only" });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
