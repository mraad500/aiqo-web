// Asset manifest for AiQo site.
// Generated from scripts/optimize-assets.mjs — filenames are the contract.
// All screens are 3 responsive widths (1290w / 860w / 430w) in AVIF + WebP.
// `watch-hero` is an exception: source is 591×1280, so only 591w + 430w are emitted.

export type ResponsiveWidth = {
  w: number;
  avif: string;
  webp: string;
};

export type ScreenAsset = {
  alt: string;
  width: number;
  height: number;
  // Widths sorted smallest → largest for srcset.
  sources: ResponsiveWidth[];
  // Convenience pointers for callers that want a single url.
  defaultAvif: string;
  defaultWebp: string;
};

export type PortraitAsset = {
  alt: string;
  width: number;
  height: number;
  avif: string;
  webp: string;
};

const src = (slug: string, w: number) => ({
  w,
  avif: `/screens/${slug}-${w}w.avif`,
  webp: `/screens/${slug}-${w}w.webp`,
});

const standardSources = (slug: string): ResponsiveWidth[] => [
  src(slug, 430),
  src(slug, 860),
  src(slug, 1290),
];

const standardScreen = (slug: string, alt: string): ScreenAsset => ({
  alt,
  width: 1290,
  height: 2796,
  sources: standardSources(slug),
  defaultAvif: `/screens/${slug}-1290w.avif`,
  defaultWebp: `/screens/${slug}-1290w.webp`,
});

export const SCREENS = {
  home: standardScreen("home", "الشاشة الرئيسية في AiQo"),
  captainChat: standardScreen("captain-chat", "محادثة كابتن حمودي"),
  sleepHero: standardScreen("sleep-hero", "تحليل النوم في AiQo"),
  kitchenScan: standardScreen("kitchen-scan", "مسح مكونات المطبخ"),
  kitchenPlan: standardScreen("kitchen-plan", "خطة وجبات من AiQo"),
  peaksTest: standardScreen("peaks-test", "اختبار محرك الجسم — قِمَم"),
  peaksPlan: standardScreen("peaks-plan", "الخطة الديناميكية — قِمَم"),
  peaksReview: standardScreen("peaks-review", "المراجعة الأسبوعية — قِمَم"),
  dailyQuest: standardScreen("daily-quest", "التحدي اليومي"),
  workout: standardScreen("workout", "شاشة التمرين في AiQo"),
  myVibe: standardScreen("my-vibe", "My Vibe — موسيقى تتكيف مع نبضك"),
  profile: standardScreen("profile", "الملف الشخصي في AiQo"),
  // Low-res source (591×1280). No 860w/1290w variants — render ≤ 400px wide.
  watchHero: {
    alt: "AiQo على Apple Watch",
    width: 591,
    height: 1280,
    sources: [src("watch-hero", 430), src("watch-hero", 591)],
    defaultAvif: "/screens/watch-hero-591w.avif",
    defaultWebp: "/screens/watch-hero-591w.webp",
  },
} as const satisfies Record<string, ScreenAsset>;

export const BRAND = {
  captainPortrait: {
    alt: "كابتن حمودي",
    width: 1366,
    height: 2048,
    avif: "/brand/captain-portrait.avif",
    webp: "/brand/captain-portrait.webp",
  },
  captainPortraitNatural: {
    alt: "كابتن حمودي",
    width: 1366,
    height: 2048,
    avif: "/brand/captain-portrait-natural.avif",
    webp: "/brand/captain-portrait-natural.webp",
  },
} as const satisfies Record<string, PortraitAsset>;

export const ICON = {
  favicon: "/favicon.ico",
  appleTouch: "/apple-touch-icon.png",
  png: {
    16: "/brand/icon/16.png",
    32: "/brand/icon/32.png",
    180: "/brand/icon/180.png",
    192: "/brand/icon/192.png",
    256: "/brand/icon/256.png",
    512: "/brand/icon/512.png",
  },
} as const;

export type ScreenKey = keyof typeof SCREENS;
export type BrandKey = keyof typeof BRAND;

// Helper: build a sizes-aware srcset string for <source>.
export function buildSrcSet(
  sources: readonly ResponsiveWidth[],
  kind: "avif" | "webp",
): string {
  return sources.map((s) => `${s[kind]} ${s.w}w`).join(", ");
}
