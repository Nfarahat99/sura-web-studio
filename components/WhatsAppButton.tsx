import { CONTACT } from "@/lib/data";
import Icon from "./Icon";

export default function WhatsAppButton() {
  const number = CONTACT.whatsapp.replace(/[^0-9]/g, "");
  return (
    <a
      href={`https://wa.me/${number}?text=${encodeURIComponent("السلام عليكم، أبغى أعرف أكثر عن خدمات سُرَى.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب (يفتح في نافذة جديدة)"
      className="group fixed bottom-5 left-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green text-cream shadow-lift transition-all duration-200 hover:scale-105 hover:bg-green-light active:scale-95"
      style={{
        bottom: "calc(1.25rem + env(safe-area-inset-bottom))",
        left: "calc(1.25rem + env(safe-area-inset-left))",
      }}
    >
      <Icon name="whatsapp" size={26} title="واتساب" />
      <span className="sr-only">واتساب</span>
    </a>
  );
}
