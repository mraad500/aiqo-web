import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Cursor } from "@/components/Cursor";

const arabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#F7F8F6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "AiQo — بُعدٌ جديد للصحة",
  description:
    "AiQo تطبيق صحي عربي أولاً من تطوير محمد رعد (عراقي 🇮🇶، يبني من الإمارات 🇦🇪)، محوره كابتن حمودي — مدرّب ذكاء اصطناعي يحجي بلهجتك ويتذكّر رحلتك. أبرز ميزاته: شرارة التعلم، My Vibe، تحليل النوم، المطبخ، قِمَم، ومعركة.",
  metadataBase: new URL("https://aiqo.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "AiQo — بُعدٌ جديد للصحة",
    description:
      "كابتن حمودي، مدرّبك الشخصي بالذكاء الاصطناعي. تطبيق صحي عربي أولاً يحمي خصوصيتك.",
    url: "https://aiqo.app",
    siteName: "AiQo",
    locale: "ar_AE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AiQo — بُعدٌ جديد للصحة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AiQo — بُعدٌ جديد للصحة",
    description: "كابتن حمودي، مدرّبك الشخصي بالذكاء الاصطناعي.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/brand/icon/32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/icon/192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AiQo",
    url: "https://aiqo.app",
    logo: "https://aiqo.app/brand/icon/512.png",
    sameAs: ["https://instagram.com/aiqoapp"],
    founder: {
      "@type": "Person",
      name: "Mohammed Raad",
      jobTitle: "Founder & CEO",
      nationality: "Iraqi",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AiQo",
    description:
      "تطبيق صحي عربي أولاً مبني حول كابتن حمودي — مدرّب ذكاء اصطناعي يحجي بلهجتك، يتذكّر رحلتك، ويقرأ بياناتك الصحية. AiQo is an Arabic-first, AI-native health companion built around Captain Hamoudi.",
    operatingSystem: "iOS",
    applicationCategory: "HealthApplication",
    author: {
      "@type": "Person",
      name: "Mohammed Raad",
      nationality: "Iraqi",
      jobTitle: "Founder & CEO of AiQo",
    },
    creator: { "@type": "Person", name: "Mohammed Raad" },
    inLanguage: ["ar", "en"],
    url: "https://aiqo.app",
    downloadUrl: "https://apps.apple.com/ae/app/aiqo/id6755132504",
    offers: [
      { "@type": "Offer", price: "9.99", priceCurrency: "USD", name: "AiQo Max" },
      { "@type": "Offer", price: "19.99", priceCurrency: "USD", name: "AiQo Intelligence Pro" },
    ],
    featureList: [
      "كابتن حمودي: مدرّب صحي بالذكاء الاصطناعي يحجي بلهجتك ويتذكّر رحلتك — Captain Hamoudi, an AI health coach who speaks your dialect",
      "شرارة التعلم: أكمل كورساً مجانياً مختاراً (إدراك أو Coursera) وتحقّق من شهادتك على الجهاز لتكسب +1000 نقطة — Learning Spark, with on-device certificate verification",
      "My Vibe (DJ Hamoudi): موسيقى من Spotify تتكيّف مع حالتك الحيوية ووقت يومك — adaptive music for your biometric state",
      "تحليل النوم والاستيقاظ الذكي على الجهاز — Sleep analysis & Smart Wake",
      "المطبخ: خطة وجبات من صورة ثلاجتك — Kitchen, meal plans from a fridge photo",
      "قِمَم: تحديات أسطورية مُبرمَجة من 4 إلى 16 أسبوعاً — Peaks / Legendary Challenges",
      "معركة: تحديات وتقدّم بنقاط الخبرة — Battle quests & XP leveling",
      "تمارين مع تدريب صوتي في منطقة النبض الثانية — Workouts with Zone-2 voice coaching",
      "تكامل Apple Health و Apple Watch — Apple Health & Apple Watch integration",
      "خصوصية أولاً: معالجة على الجهاز وتجريد الهوية قبل أي طلب سحابي — privacy-first, on-device processing",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AiQo",
    url: "https://aiqo.app",
    inLanguage: ["ar", "en"],
    publisher: { "@type": "Organization", name: "AiQo" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "هل التطبيق متوفّر الآن؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، AiQo متوفّر الآن على App Store. حمّله مجاناً وابدأ تجربتك — وتصدر تحديثات جديدة باستمرار.",
        },
      },
      {
        "@type": "Question",
        name: "هل يشتغل بدون إنترنت؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "أغلب الميزات تعمل بدون إنترنت: تتبّع الصحة، التمارين، النوم، والتحديات. كابتن حمودي يحتاج إنترنت للمحادثات العميقة، لكن بعض التوجيه الأساسي متاح على الجهاز عبر Apple Intelligence.",
        },
      },
      {
        "@type": "Question",
        name: "هل أحتاج Apple Watch؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "لا. AiQo يعمل بكامل قدرته من iPhone فقط. Apple Watch يضيف دقة أعلى في قياس النبض، النوم، والتمارين — لكنه اختياري.",
        },
      },
      {
        "@type": "Question",
        name: "كيف تحمون بياناتي الصحية؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "بياناتك الصحية تبقى على جهازك. أي طلب يذهب للسحابة يُجرَّد من هويتك أولاً. لا نبيع بياناتك. لا إعلانات. أبداً.",
        },
      },
      {
        "@type": "Question",
        name: "ما الفرق بين AiQo Max و Intelligence Pro؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Max ($9.99/شهر) هو التطبيق الكامل بأساسياته اليومية — الكابتن، الصحة، النادي، والواتش. Intelligence Pro ($19.99/شهر) يضيف فوقه ذكاءً أعلى: ذاكرة موسّعة، نموذج أقوى، صوت Premium، خطط متكيفة، وPeaks الكامل.",
        },
      },
    ],
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${arabic.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative">
        <a href="#main" className="skip-link">
          تخطَّ إلى المحتوى
        </a>
        <div className="grain" aria-hidden />
        <LenisProvider />
        <ScrollProgress />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
