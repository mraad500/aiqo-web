// TODO: legal review

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شروط الاستخدام — AiQo",
  description: "شروط الاستخدام لتطبيق AiQo",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-ink mb-8">شروط الاستخدام / Terms of Service</h1>

        <div className="space-y-8 text-ink/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">القبول / Acceptance</h2>
            <p>
              باستخدامك لتطبيق AiQo، فإنك توافق على الالتزام بهذه الشروط والأحكام.
            </p>
            <p className="mt-2">
              By using AiQo, you agree to be bound by these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">استخدام التطبيق / Use of Application</h2>
            <p>
              تطبيق AiQo مصمم للأغراض الصحية واللياقية العامة فقط ولا يُعد بديلاً عن
              الاستشارة الطبية المتخصصة.
            </p>
            <p className="mt-2">
              AiQo is designed for general health and fitness purposes only and is not a
              substitute for professional medical advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">الاشتراكات / Subscriptions</h2>
            <p>
              تتم إدارة الاشتراكات من خلال Apple App Store. يمكنك إلغاء اشتراكك في أي وقت
              من إعدادات حسابك في App Store.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">تواصل معنا / Contact</h2>
            <p>
              <a href="mailto:legal@aiqo.app" className="text-mint-deep underline">legal@aiqo.app</a>
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
