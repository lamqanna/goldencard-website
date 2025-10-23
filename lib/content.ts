import marketingContent from "@/marketing-content.json";

import type { Locale } from "@/lib/i18n";

function withFallback<T>(viValue: T | undefined, enValue: T): T {
  return (viValue ?? enValue) as T;
}

export function getSitewide(locale: Locale) {
  // Extract trust lines from hero section as sitewide trust points
  const home = marketingContent.home;
  const viHero = home.vi?.hero;
  const enHero = home.en?.hero;
  const zhHero = home.zh?.hero;
  
  let hero;
  if (locale === "vi") {
    hero = withFallback(viHero, enHero);
  } else if (locale === "zh") {
    hero = withFallback(zhHero, enHero);
  } else {
    hero = enHero;
  }
  
  const taglines: Record<Locale, string> = {
    vi: "Giải pháp điện mặt trời hàng đầu Việt Nam",
    en: "Leading Solar Energy Solutions in Vietnam",
    zh: "越南领先的太阳能解决方案",
  };
  
  return {
    company_name: "Golden Energy Vietnam",
    tagline: taglines[locale],
    trust_lines: hero?.trust_bullets || []
  };
}

export function getHomeHero(locale: Locale) {
  const home = marketingContent.home;
  const viHero = home.vi?.hero;
  const enHero = home.en?.hero;
  const zhHero = home.zh?.hero;
  
  if (locale === "vi") {
    return withFallback(viHero, enHero);
  } else if (locale === "zh") {
    return withFallback(zhHero, enHero);
  }
  return enHero;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getHomeSections(locale: Locale): any {
  const home = marketingContent.home;
  const viSections = home.vi?.sections ?? {};
  const enSections = home.en?.sections ?? {};
  const zhSections = home.zh?.sections ?? {};

  if (locale === "en") {
    return enSections;
  } else if (locale === "zh") {
    return zhSections;
  }

  return viSections;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getServices(locale: Locale): any {
  const services = marketingContent.services;
  const viServices = services?.vi ?? {};
  const enServices = services?.en ?? {};
  const zhServices = services?.zh ?? {};

  if (locale === "en") {
    return enServices;
  } else if (locale === "zh") {
    return zhServices;
  }

  return viServices;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getGoldenEnergy(locale: Locale): any {
  const ge = marketingContent.goldenenergy;
  const vi = ge?.vi;
  const en = ge?.en;
  const zh = ge?.zh;
  
  if (locale === "vi") {
    return withFallback(vi, en);
  } else if (locale === "zh") {
    return withFallback(zh, en);
  }
  return en;
}

type BasicSeo = {
  title?: string;
  meta_description?: string;
  og_description?: string;
  image_alt?: string;
};

export function getSeoSection(locale: Locale, page: string): BasicSeo {
  const baseTitle = "GoldenCard";
  const descriptions: Record<Locale, string> = {
    vi: "Giải pháp thẻ thông minh, dịch vụ CNTT và năng lượng mặt trời cho doanh nghiệp Việt.",
    en: "Smart card manufacturing, IT services, and solar energy solutions for modern enterprises.",
    zh: "为现代企业提供智能卡制造、IT 服务和太阳能解决方案。",
  };
  const pageLabels: Record<string, Record<Locale, string>> = {
    home: { vi: "GoldenCard", en: "GoldenCard", zh: "GoldenCard" },
    services: { vi: "GoldenCard — Dịch vụ", en: "GoldenCard — Services", zh: "GoldenCard — 服务" },
    goldenenergy: { vi: "GoldenEnergy", en: "GoldenEnergy", zh: "GoldenEnergy" },
    contact: { vi: "GoldenCard — Liên hệ", en: "GoldenCard — Contact", zh: "GoldenCard — 联系我们" },
    about: { vi: "GoldenCard — Về chúng tôi", en: "GoldenCard — About", zh: "GoldenCard — 关于我们" },
  };

  const label = pageLabels[page]?.[locale] ?? baseTitle;

  return {
    title: label,
    meta_description: descriptions[locale],
    og_description: descriptions[locale],
    image_alt: label,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getContactSection(locale: Locale): any {
  const contact = marketingContent.contact;
  const vi = contact?.vi;
  const en = contact?.en;
  const zh = contact?.zh;
  
  if (locale === "vi") {
    return withFallback(vi, en);
  } else if (locale === "zh") {
    return withFallback(zh, en);
  }
  return en;
}

export function getAboutContent(locale: Locale) {
  const about = marketingContent.about;
  const vi = about?.vi;
  const en = about?.en;
  const zh = about?.zh;

  let hero, values, imageAlts;
  
  if (locale === "vi") {
    hero = vi?.hero ?? en?.hero;
    values = vi?.values ?? en?.values;
    imageAlts = vi?.image_alts ?? en?.image_alts;
  } else if (locale === "zh") {
    hero = zh?.hero ?? en?.hero;
    values = zh?.values ?? en?.values;
    imageAlts = zh?.image_alts ?? en?.image_alts;
  } else {
    hero = en?.hero ?? vi?.hero;
    values = en?.values ?? vi?.values;
    imageAlts = en?.image_alts ?? vi?.image_alts;
  }

  return { hero, values, imageAlts };
}
