import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import "./globals.css";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-latin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AiQo — أول نظام صحي ذكي بالعربي",
  description:
    "تطبيق AiQo هو أول نظام صحي ذكي بالعربي. كابتن حمودي يدربك، يحفزك، ويرافقك بكل خطوة. مصمم في الإمارات.",
  openGraph: {
    title: "AiQo — أول نظام صحي ذكي بالعربي",
    description:
      "كابتن حمودي يدربك، يحفزك، ويرافقك بكل خطوة. مصمم في الإمارات.",
    url: "https://aiqo.app",
    siteName: "AiQo",
    locale: "ar_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AiQo — أول نظام صحي ذكي بالعربي",
    description:
      "كابتن حمودي يدربك، يحفزك، ويرافقك بكل خطوة. مصمم في الإمارات.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${ibmPlexArabic.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
