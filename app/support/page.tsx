// TODO: legal review

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الدعم — AiQo",
  description: "تواصل مع فريق دعم AiQo",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-ink mb-8">الدعم / Support</h1>

        <div className="space-y-8 text-ink/70 leading-relaxed">
          <section id="contact">
            <h2 className="text-xl font-semibold text-ink mb-4">تواصل معنا</h2>
            <p className="mb-4">
              نحن هنا لمساعدتك. تواصل معنا عبر البريد الإلكتروني وسنرد عليك في أقرب وقت.
            </p>
            <a
              href="mailto:support@aiqo.app"
              className="inline-flex items-center gap-2 bg-ink text-white px-6 py-3 rounded-[14px] text-sm font-medium hover:bg-ink/90 transition-colors"
            >
              أرسل لنا رسالة
            </a>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">أسئلة شائعة</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-ink mb-1">كيف أحذف حسابي؟</h3>
                <p className="text-sm">أرسل طلب حذف إلى support@aiqo.app وسنتعامل معه خلال 48 ساعة.</p>
              </div>
              <div>
                <h3 className="font-medium text-ink mb-1">كيف ألغي اشتراكي؟</h3>
                <p className="text-sm">من إعدادات حسابك في App Store، اختر الاشتراكات ثم AiQo.</p>
              </div>
              <div>
                <h3 className="font-medium text-ink mb-1">How to contact us in English?</h3>
                <p className="text-sm">Email us at support@aiqo.app — we respond in both Arabic and English.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-ink/5">
          <a href="/" className="text-sm text-mint-deep hover:underline">العودة للرئيسية</a>
        </div>
      </div>
    </main>
  );
}
