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
    "كابتن حمودي يقرأ يومك، يتذكّر رحلتك، ويكون معك في كل خطوة — بلهجتك. تطبيق صحي عربي أولاً، مُصمَّم في الإمارات.",
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
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AiQo",
    operatingSystem: "iOS",
    applicationCategory: "HealthApplication",
    inLanguage: ["ar", "en"],
    offers: [
      { "@type": "Offer", price: "9.99", priceCurrency: "USD", name: "AiQo Max" },
      { "@type": "Offer", price: "19.99", priceCurrency: "USD", name: "AiQo Intelligence Pro" },
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
