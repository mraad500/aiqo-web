import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية — AiQo",
  description:
    "سياسة خصوصية AiQo — ما الذي يُرسل، ومن يستلمه، وكيف تتحكم بذلك.",
  alternates: { canonical: "/privacy" },
};

const EMAIL = "support@aiqo.app";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-ink mb-4">
          سياسة الخصوصية / Privacy Policy
        </h1>

        <p className="text-sm text-ink/60 mb-10">
          آخر تحديث: 18 أبريل 2026 · Last updated: April 18, 2026
        </p>

        <div className="space-y-10 text-ink/70 leading-relaxed">
          <section>
            <p>
              تطبيق AiQo هو تطبيق مختص بالعافية واللياقة البدنية. تشرح هذه
              السياسة بدقة ما الذي يُرسل من بياناتك خارج جهازك، ومن يستلمه،
              وكيف يمكنك التحكم بذلك.
            </p>
            <p className="mt-2" dir="ltr">
              AiQo is a wellness and fitness app. This policy explains exactly
              what data leaves your device, who receives it, and how you
              control it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">
              بيانات تُعالج على جهازك فقط / Data Processed On-Device Only
            </h2>
            <p>
              البيانات التالية تبقى على جهازك ولا تُرسل إلى أي خدمة خارجية:
            </p>
            <ul className="list-disc pr-6 mt-3 space-y-2">
              <li>
                عيّنات Apple HealthKit (الخطوات، معدل ضربات القلب، مراحل
                النوم، التمارين، وغيرها)
              </li>
              <li>تحليل النوم بواسطة نماذج Apple Foundation على الجهاز</li>
              <li>صور التقدم (مخزّنة محلياً ولا تُرفع أبداً)</li>
              <li>
                محادثات الكابتن (قاعدة بيانات SwiftData محلية، نافذة متدحرجة
                مدتها 7 أيام)
              </li>
              <li>
                جميع البيانات المعروضة في شاشات الرئيسية والنوم والتقرير
                الأسبوعي
              </li>
            </ul>
            <p className="mt-4" dir="ltr">
              The following data stays on your device and is never sent to any
              external service:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2" dir="ltr">
              <li>
                HealthKit samples (steps, heart rate, sleep stages, workouts,
                etc.)
              </li>
              <li>Sleep analysis via Apple Foundation Models on-device</li>
              <li>Progress photos (stored locally, never uploaded)</li>
              <li>
                Captain conversation history (local SwiftData, 7-day rolling
                window)
              </li>
              <li>
                All data shown on the Home, Sleep, and Weekly Report screens
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">
              بيانات تُرسل إلى خدمات الذكاء الاصطناعي الخارجية / Data Sent to
              Third-Party AI Services
            </h2>
            <p>
              عندما تختار تفعيل ميزات الذكاء الاصطناعي السحابية، تُرسَل
              البيانات الموصوفة أدناه إلى الخدمات المحددة فقط:
            </p>
            <p className="mt-2" dir="ltr">
              When you opt in to cloud AI features, the data described below
              is sent to the following services only:
            </p>

            <h3 className="text-lg font-semibold text-ink mt-6 mb-3" dir="ltr">
              Google Gemini (generativelanguage.googleapis.com)
            </h3>

            <p className="font-semibold text-ink/85">ما الذي يُرسل:</p>
            <ul className="list-disc pr-6 mt-2 space-y-2">
              <li>
                نصوص الدردشة المُطهَّرة (رسائلك المكتوبة بعد حذف المعرّفات
                الشخصية)
              </li>
              <li>
                أعداد الخطوات المُقرَّبة (بفئات من 50) وأعداد السعرات
                الحرارية المُقرَّبة (بفئات من 10)
              </li>
              <li>
                صور مسح الثلاجة (بعد إزالة بيانات EXIF وتقليص الحجم إلى 1280
                بكسل وإعادة الترميز بصيغة JPEG)
              </li>
              <li>آخر 4 رسائل فقط من سياق المحادثة</li>
            </ul>
            <p className="font-semibold text-ink/85 mt-4">ما لا يُرسل:</p>
            <p>
              لا تُرسَل عيّنات HealthKit الخام، ولا اسمك، ولا بريدك
              الإلكتروني، ولا رقم هاتفك، ولا موقعك، ولا جهات اتصالك، ولا
              معرّفات جهازك، ولا قياسات اللياقة الدقيقة.
            </p>

            <p className="font-semibold text-ink/85 mt-4" dir="ltr">
              What is sent:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2" dir="ltr">
              <li>
                Sanitized chat text (your typed messages with personal
                identifiers redacted)
              </li>
              <li>
                Bucketed step counts (rounded to the nearest 50) and calorie
                counts (rounded to the nearest 10)
              </li>
              <li>
                Fridge scan images (EXIF stripped, resized to 1280px,
                re-encoded as JPEG)
              </li>
              <li>Only the last 4 messages of conversation context</li>
            </ul>
            <p className="font-semibold text-ink/85 mt-4" dir="ltr">
              What is NOT sent:
            </p>
            <p dir="ltr">
              Raw HealthKit samples, your name, email, phone, location,
              contacts, device identifiers, and precise fitness metrics are
              NOT sent.
            </p>

            <p className="mt-4">
              شروط Google للمطورين:{" "}
              <a
                href="https://ai.google.dev/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mint-deep underline"
                dir="ltr"
              >
                ai.google.dev/terms
              </a>
              .
            </p>
            <p className="mt-2">
              لا تستخدم Google بياناتك لتدريب نماذج Gemini، وفقاً لشروط واجهة
              برمجة Google.
            </p>
            <p className="mt-2" dir="ltr">
              Google&apos;s developer terms:{" "}
              <a
                href="https://ai.google.dev/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mint-deep underline"
              >
                ai.google.dev/terms
              </a>
              . Your data is not used by Google to train Gemini models, per
              Google&apos;s API terms.
            </p>

            <h3 className="text-lg font-semibold text-ink mt-8 mb-3" dir="ltr">
              ElevenLabs (api.elevenlabs.io)
            </h3>

            <p className="font-semibold text-ink/85">ما الذي يُرسل:</p>
            <p>
              نص ردّ الكابتن حمودي المُنشأ بالذكاء الاصطناعي لتحويله إلى صوت،
              مع استبدال اسمك الأول بنداء محايد («صديقي» بالعربية أو «friend»
              بالإنكليزية) قبل الإرسال.
            </p>
            <p className="font-semibold text-ink/85 mt-4">ما لا يُرسل:</p>
            <p>
              لا يُرسَل اسمك، ولا بيانات HealthKit، ولا سجل المحادثة، ولا أي
              معرّفات شخصية.
            </p>

            <p className="font-semibold text-ink/85 mt-4" dir="ltr">
              What is sent:
            </p>
            <p dir="ltr">
              Captain Hamoudi&apos;s AI-generated reply text for voice
              synthesis, with your first name replaced by a neutral vocative
              (&ldquo;صديقي&rdquo; in Arabic, &ldquo;friend&rdquo; in English)
              before transmission.
            </p>
            <p className="font-semibold text-ink/85 mt-4" dir="ltr">
              What is NOT sent:
            </p>
            <p dir="ltr">
              Your name, HealthKit data, conversation history, and personal
              identifiers are NOT sent.
            </p>

            <p className="mt-4">
              سياسة خصوصية ElevenLabs:{" "}
              <a
                href="https://elevenlabs.io/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mint-deep underline"
                dir="ltr"
              >
                elevenlabs.io/privacy
              </a>
              .
            </p>
            <p className="mt-2" dir="ltr">
              ElevenLabs privacy policy:{" "}
              <a
                href="https://elevenlabs.io/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mint-deep underline"
              >
                elevenlabs.io/privacy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">
              كيف نُطهّر بياناتك قبل إرسالها / How We Sanitize Your Data Before
              Sending
            </h2>
            <p>
              قبل أن تغادر أي بيانات جهازك، يقوم PrivacySanitizer (مُطهّر
              الخصوصية المضمّن في التطبيق) بالعمليات التالية:
            </p>
            <ul className="list-disc pr-6 mt-3 space-y-2">
              <li>
                حذف عناوين البريد الإلكتروني، وأرقام الهواتف، وروابط
                الإنترنت، ومعرّفات UUID، وعناوين IP، والإشارات (@)،
                والتسلسلات الرقمية الطويلة
              </li>
              <li>استبدال اسمك بالعبارة العامة «User»</li>
              <li>
                تقريب أعداد الخطوات إلى أقرب 50، وأعداد السعرات إلى أقرب 10
              </li>
              <li>تقييد سياق المحادثة بآخر 4 رسائل فقط</li>
              <li>
                إزالة بيانات EXIF و GPS من جميع الصور، وتقليص الحجم إلى 1280
                بكسل كحد أقصى، وإعادة الترميز بصيغة JPEG
              </li>
              <li>
                بالنسبة لتوليد الصوت، استبدال اسمك الأول بنداء محايد
              </li>
            </ul>
            <p className="mt-4" dir="ltr">
              Before any data leaves your device, our built-in PrivacySanitizer
              performs the following steps:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2" dir="ltr">
              <li>
                Redacts emails, phone numbers, URLs, UUIDs, IP addresses,
                @mentions, and long numeric sequences
              </li>
              <li>
                Replaces your name with the placeholder &ldquo;User&rdquo;
              </li>
              <li>
                Rounds step counts to the nearest 50 and calorie counts to the
                nearest 10
              </li>
              <li>Limits conversation context to the last 4 messages</li>
              <li>
                Strips EXIF and GPS metadata from all images, resizes to max
                1280px, re-encodes as JPEG
              </li>
              <li>
                For voice synthesis, replaces your first name with a neutral
                vocative
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">
              موافقتك وخياراتك / Your Consent and Controls
            </h2>
            <ul className="list-disc pr-6 mt-2 space-y-2">
              <li>
                لا يُرسل أي شيء إلى خدمات الذكاء الاصطناعي السحابية ما لم
                تضغط «أوافق» في شاشة موافقة استخدام بيانات الذكاء الاصطناعي
                أثناء الإعداد الأولي.
              </li>
              <li>
                يمكنك رفض الذكاء الاصطناعي السحابي في أي وقت واستخدام AiQo في
                وضع بدون مشاركة بيانات. يبقى التطبيق يعمل بالكامل باستخدام
                الميزات المحلية (نماذج Apple Foundation، و HealthKit، وذاكرة
                الكابتن المحلية).
              </li>
              <li>
                يمكنك سحب موافقتك في أي وقت من: الإعدادات {">"} الخصوصية
                والذكاء الاصطناعي {">"} سحب الموافقة.
              </li>
            </ul>
            <ul className="list-disc pl-6 mt-4 space-y-2" dir="ltr">
              <li>
                Nothing is sent to cloud AI services unless you tap &ldquo;I
                Agree&rdquo; on the AI Data Consent screen during onboarding.
              </li>
              <li>
                You can decline cloud AI at any time and use AiQo in
                offline-only mode. The app remains fully functional using
                on-device features (Apple Foundation Models, HealthKit, local
                Captain memory).
              </li>
              <li>
                You can revoke consent anytime in Settings &gt; Privacy &amp;
                AI &gt; Revoke Consent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">
              المصادقة والخوادم / Authentication and Backend
            </h2>
            <ul className="list-disc pr-6 mt-2 space-y-2">
              <li>نستخدم Sign in with Apple للمصادقة.</li>
              <li>
                يُخزَّن ملفّك الشخصي (الاسم المعروض، اسم المستخدم، حالة
                الاشتراك) في Supabase (منطقة الاتحاد الأوروبي).
              </li>
              <li>
                يتم التحقق من إيصالات الاشتراك على الخادم عبر وظائف Supabase
                Edge.
              </li>
              <li>
                لا نخزّن أي بيانات من HealthKit، أو سجل المحادثات، أو أي
                بيانات شخصية حساسة في Supabase.
              </li>
            </ul>
            <ul className="list-disc pl-6 mt-4 space-y-2" dir="ltr">
              <li>We use Sign in with Apple for authentication.</li>
              <li>
                Your profile (display name, username, subscription status) is
                stored in Supabase (EU region).
              </li>
              <li>
                Subscription receipts are validated server-side via Supabase
                Edge Functions.
              </li>
              <li>
                We do NOT store HealthKit data, conversation history, or any
                sensitive personal data in Supabase.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">
              مدة الاحتفاظ بالبيانات / Data Retention
            </h2>
            <ul className="list-disc pr-6 mt-2 space-y-2">
              <li>
                سياق المحادثة على الجهاز: نافذة متدحرجة مدتها 7 أيام، ثم
                تُحذف تلقائياً.
              </li>
              <li>
                بيانات الملفّ الشخصي في Supabase: تُحتفظ بها طوال فعالية
                حسابك، وتُحذف خلال 30 يوماً من حذف الحساب.
              </li>
              <li>
                مزوّدو الذكاء الاصطناعي السحابي (Google، ElevenLabs): مدة
                الاحتفاظ تخضع لشروطهم الخاصة.
              </li>
            </ul>
            <ul className="list-disc pl-6 mt-4 space-y-2" dir="ltr">
              <li>
                On-device conversation context: 7-day rolling window, then
                auto-pruned.
              </li>
              <li>
                Supabase profile data: retained while your account is active;
                deleted within 30 days of account deletion.
              </li>
              <li>
                Cloud AI providers (Google, ElevenLabs): retention governed by
                their respective terms.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">
              حقوقك / Your Rights
            </h2>
            <ul className="list-disc pr-6 mt-2 space-y-2">
              <li>حق الاطلاع: يمكنك عرض البيانات المخزّنة من الإعدادات.</li>
              <li>حق الحذف: الإعدادات {">"} الحساب {">"} حذف الحساب.</li>
              <li>حق التصدير: مُخطَّط له في تحديث مستقبلي.</li>
              <li>
                حق سحب موافقة الذكاء الاصطناعي: الإعدادات {">"} الخصوصية
                والذكاء الاصطناعي {">"} سحب الموافقة.
              </li>
            </ul>
            <ul className="list-disc pl-6 mt-4 space-y-2" dir="ltr">
              <li>Right to access: view your stored data in Settings.</li>
              <li>
                Right to delete: Settings &gt; Account &gt; Delete Account.
              </li>
              <li>Right to export: planned for a future update.</li>
              <li>
                Right to revoke AI consent: Settings &gt; Privacy &amp; AI &gt;
                Revoke Consent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">
              الأطفال / Children
            </h2>
            <p>
              تطبيق AiQo غير مُوجَّه للمستخدمين دون سن الثالثة عشرة. نحن لا
              نجمع عن عِلم أي بيانات من الأطفال دون هذا السن.
            </p>
            <p className="mt-2">
              الجمهور المُستهدَف عند الإطلاق هو طلاب الجامعة (18 عاماً فأكثر)
              في الجامعة الأمريكية في الإمارات.
            </p>
            <p className="mt-3" dir="ltr">
              AiQo is not intended for users under 13. We do not knowingly
              collect data from children under 13.
            </p>
            <p className="mt-2" dir="ltr">
              Our launch audience is university students (18+) at the American
              University of the Emirates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">
              التحديثات على هذه السياسة / Changes to This Policy
            </h2>
            <p>
              سنُحدّث هذه الصفحة ونعرض إشعاراً داخل التطبيق عند إجراء أي
              تغيير جوهري.
            </p>
            <p className="mt-2">
              استمرار استخدامك لـ AiQo بعد أي تغيير جوهري يُعد قبولاً منك
              للسياسة المُحدَّثة.
            </p>
            <p className="mt-3" dir="ltr">
              We will update this page and show an in-app notice when material
              changes occur.
            </p>
            <p className="mt-2" dir="ltr">
              Continued use of AiQo after a material change constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-4">
              تواصل معنا / Contact Us
            </h2>
            <p>
              للاستفسارات العامة:{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-mint-deep underline"
                dir="ltr"
              >
                {EMAIL}
              </a>
              . للاستفسارات المتعلقة بالخصوصية، يُرجى إضافة كلمة «Privacy» في
              عنوان الرسالة.
            </p>
            <p className="mt-2" dir="ltr">
              General inquiries:{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-mint-deep underline"
              >
                {EMAIL}
              </a>
              . For privacy-specific inquiries, include &ldquo;Privacy&rdquo;
              in the subject line.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-ink/5">
          <a href="/" className="text-sm text-mint-deep hover:underline">
            العودة للرئيسية
          </a>
        </div>
      </div>
    </main>
  );
}
