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
  
  const hero = locale === "vi" ? withFallback(viHero, enHero) : enHero;
  
  return {
    company_name: "GoldenCard",
    tagline: locale === "vi" 
      ? "Giải pháp thẻ thông minh và năng lượng xanh"
      : "Smart Card and Green Energy Solutions",
    trust_lines: hero?.trust_bullets || []
  };
}

export function getHomeHero(locale: Locale) {
  const home = marketingContent.home;
  const viHero = home.vi?.hero;
  const enHero = home.en?.hero;
  return locale === "vi" ? withFallback(viHero, enHero) : enHero;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getHomeSections(locale: Locale): any {
  const home = marketingContent.home;
  const viSections = home.vi?.sections ?? {};
  const enSections = home.en?.sections ?? {};

  if (locale === "en") {
    return enSections;
  }

  return { ...enSections, ...viSections };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getServices(locale: Locale): any {
  const services = marketingContent.services;
  const viServices = services?.vi ?? {};
  const enServices = services?.en ?? {};

  if (locale === "en") {
    return enServices;
  }

  return { ...enServices, ...viServices };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getGoldenEnergy(locale: Locale): any {
  const ge = marketingContent.goldenenergy;
  const vi = ge?.vi;
  const en = ge?.en;
  return locale === "vi" ? withFallback(vi, en) : en;
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
  };
  const pageLabels: Record<string, Record<Locale, string>> = {
    home: { vi: "GoldenCard", en: "GoldenCard" },
    services: { vi: "GoldenCard — Dịch vụ", en: "GoldenCard — Services" },
    goldenenergy: { vi: "GoldenEnergy", en: "GoldenEnergy" },
    contact: { vi: "GoldenCard — Liên hệ", en: "GoldenCard — Contact" },
    about: { vi: "GoldenCard — Về chúng tôi", en: "GoldenCard — About" },
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
  return locale === "vi" ? withFallback(vi, en) : en;
}

export function getAboutContent(locale: Locale) {
  const about = marketingContent.about;
  const vi = about?.vi;
  const en = about?.en;

  const hero = locale === "vi" ? (vi?.hero ?? en?.hero) : (en?.hero ?? vi?.hero);
  const values = locale === "vi" ? (vi?.values ?? en?.values) : (en?.values ?? vi?.values);
  const imageAlts = locale === "vi" ? (vi?.image_alts ?? en?.image_alts) : (en?.image_alts ?? vi?.image_alts);

  return { hero, values, imageAlts };
}
