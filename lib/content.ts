import marketingContent from "@/marketing-content.json";

import type { Locale } from "@/lib/i18n";

type MarketingContent = typeof marketingContent;

type LocaleContent = MarketingContent[Locale];

type SeoSection = LocaleContent["seo_metadata"];

type HeroVariant = LocaleContent["home"]["hero_variants"][number];

type SectionContent = LocaleContent["home"]["sections"][keyof LocaleContent["home"]["sections"]];

type ServiceContent = LocaleContent["services"][keyof LocaleContent["services"]];

type GoldenEnergyContent = LocaleContent["goldenenergy"];

type Microcopy = LocaleContent["tone_style_guide"]["microcopy_samples"];

type ContactSection = LocaleContent["home"]["sections"]["contact_quote"];

type SitewideContent = LocaleContent["sitewide"];

export function getLocaleContent(locale: Locale): LocaleContent {
  return marketingContent[locale];
}

function withFallback<T>(viValue: T | undefined, enValue: T): T {
  return (viValue ?? enValue) as T;
}

export function getSitewide(locale: Locale): SitewideContent {
  if (locale === "vi") {
    return withFallback(getLocaleContent("vi").sitewide, getLocaleContent("en").sitewide);
  }
  return getLocaleContent("en").sitewide;
}

export function getHomeHero(locale: Locale): HeroVariant {
  const heroVi = getLocaleContent("vi").home.hero_variants?.[0];
  const heroEn = getLocaleContent("en").home.hero_variants?.[0];
  return locale === "vi" ? withFallback(heroVi, heroEn) : (heroEn as HeroVariant);
}

export function getHomeSections(locale: Locale): Record<string, SectionContent> {
  const viSections = getLocaleContent("vi").home.sections as Record<string, SectionContent>;
  const enSections = getLocaleContent("en").home.sections as Record<string, SectionContent>;
  if (locale === "en") return enSections;
  // merge VI-first with EN fallback paragraph-wise where needed
  const merged: Record<string, SectionContent> = {};
  for (const key of Object.keys({ ...enSections, ...viSections })) {
    const vi = viSections[key];
    const en = enSections[key];
    merged[key] = (vi ?? en) as SectionContent;
  }
  return merged;
}

export function getServices(locale: Locale): Record<string, ServiceContent> {
  const vi = getLocaleContent("vi").services as Record<string, ServiceContent>;
  const en = getLocaleContent("en").services as Record<string, ServiceContent>;
  if (locale === "en") return en;
  const merged: Record<string, ServiceContent> = {};
  for (const key of Object.keys({ ...en, ...vi })) {
    merged[key] = (vi[key] ?? en[key]) as ServiceContent;
  }
  return merged;
}

export function getGoldenEnergy(locale: Locale): GoldenEnergyContent {
  const vi = getLocaleContent("vi").goldenenergy;
  const en = getLocaleContent("en").goldenenergy;
  return locale === "vi" ? withFallback(vi, en) : en;
}

export function getSeoSection(locale: Locale, key: keyof SeoSection) {
  const vi = getLocaleContent("vi").seo_metadata[key];
  const en = getLocaleContent("en").seo_metadata[key];
  return locale === "vi" ? withFallback(vi, en) : en;
}

export function getMicrocopy(locale: Locale): Microcopy {
  const vi = getLocaleContent("vi").tone_style_guide.microcopy_samples;
  const en = getLocaleContent("en").tone_style_guide.microcopy_samples;
  return locale === "vi" ? withFallback(vi, en) : en;
}

export function getContactSection(locale: Locale): ContactSection {
  const sectionsVi = getLocaleContent("vi").home.sections;
  const sectionsEn = getLocaleContent("en").home.sections;
  const vi = sectionsVi.contact_quote as ContactSection | undefined;
  const en = sectionsEn.contact_quote as ContactSection;
  return locale === "vi" ? withFallback(vi, en) : en;
}
