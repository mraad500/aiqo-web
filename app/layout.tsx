import type { Metadata } from "next";
import { Readex_Pro, Inter } from "next/font/google";
import "./globals.css";

const readexPro = Readex_Pro({
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
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
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
      className={`${readexPro.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
