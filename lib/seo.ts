import type { Metadata } from "next";

import { getSeoSection } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type PageKey = "home" | "services" | "goldenenergy" | "contact" | "about";

const pageTitles = {
  vi: {
    home: "GoldenCard",
    services: "GoldenCard — Dịch vụ",
    goldenenergy: "GoldenEnergy",
    contact: "GoldenCard — Liên hệ",
    about: "GoldenCard — Về chúng tôi",
  },
  en: {
    home: "GoldenCard",
    services: "GoldenCard — Services",
    goldenenergy: "GoldenEnergy",
    contact: "GoldenCard — Contact",
    about: "GoldenCard — About",
  },
  zh: {
    home: "GoldenCard",
    services: "GoldenCard — 服务",
    goldenenergy: "GoldenEnergy",
    contact: "GoldenCard — 联系我们",
    about: "GoldenCard — 关于我们",
  },
} satisfies Record<Locale, Record<PageKey, string>>;

export function buildPageMetadata(locale: Locale, key: PageKey): Metadata {
  const seo = getSeoSection(locale, key);
  const langTitle = pageTitles[locale][key];
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goldencard.vn";
  const path = key === "home" ? `/${locale}` : `/${locale}/${slugFor(key)}`.replace(/\/$/, "");
  const url = new URL(path, baseUrl).toString();
  const ogImage = `/images/og/${key}.png`;

  return {
    title: seo.title ?? langTitle,
    description: seo.meta_description,
    openGraph: {
      title: seo.title ?? langTitle,
      description: seo.og_description ?? seo.meta_description,
      type: "website",
      locale,
      url,
      siteName: "GoldenCard",
      images: [{ url: ogImage, alt: seo.image_alt ?? langTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title ?? langTitle,
      description: seo.og_description ?? seo.meta_description,
      images: [ogImage],
    },
    alternates: {
      languages: {
        vi: key === "home" ? "/vi" : `/vi/${slugFor(key)}`.replace(/\/$/, ""),
        en: key === "home" ? "/en" : `/en/${slugFor(key)}`.replace(/\/$/, ""),
        zh: key === "home" ? "/zh" : `/zh/${slugFor(key)}`.replace(/\/$/, ""),
      },
      canonical: url,
    },
  } satisfies Metadata;
}

function slugFor(key: PageKey) {
  switch (key) {
    case "services":
      return "services";
    case "goldenenergy":
      return "services/goldenenergy";
    case "contact":
      return "contact";
    case "about":
      return "about";
    default:
      return "";
  }
}
