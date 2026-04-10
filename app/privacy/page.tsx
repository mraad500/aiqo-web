// TODO: legal review

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية — AiQo",
  description: "سياسة الخصوصية لتطبيق AiQo",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-ink mb-8">سياسة الخصوصية / Privacy Policy</h1>

        <div className="space-y-8 text-ink/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">مقدمة</h2>
            <p>
              تحترم AiQo خصوصيتك وتلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيف نجمع
              معلوماتك ونستخدمها ونحميها عند استخدامك لتطبيقنا.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">Introduction</h2>
            <p>
              AiQo respects your privacy and is committed to protecting your personal data.
              This policy explains how we collect, use, and protect your information when you
              use our application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">البيانات التي نجمعها / Data We Collect</h2>
            <p>
              يستخدم تطبيق AiQo بيانات Apple HealthKit للتتبع الصحي. تبقى هذه البيانات على
              جهازك ولا يتم بيعها أو مشاركتها مع أطراف ثالثة.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">تواصل معنا / Contact Us</h2>
            <p>
              للاستفسارات حول الخصوصية: <a href="mailto:privacy@aiqo.app" className="text-mint-deep underline">privacy@aiqo.app</a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-ink/5">
          <a href="/" className="text-sm text-mint-deep hover:underline">العودة للرئيسية</a>
        </div>
      </div>
    </main>
  );
}
