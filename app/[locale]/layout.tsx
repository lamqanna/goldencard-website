import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { LocaleLangSetter } from "@/components/locale-lang-setter";
import { Navbar } from "@/components/Navbar";
import { getSitewide } from "@/lib/content";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";
import { getPrimaryNavigation } from "@/lib/navigation";
import { playfairDisplay, montserrat } from "@/app/fonts";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams(): Array<{ locale: Locale }> {
  return locales.map((locale) => ({ locale })) as Array<{ locale: Locale }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;
  const candidate = localeParam ?? defaultLocale;
  if (!locales.includes(candidate as Locale)) {
    notFound();
  }

  const locale = candidate as Locale;
  const sitewide = getSitewide(locale);
  const navItems = getPrimaryNavigation(locale);

  // Choose font based on locale
  const fontClass = locale === "vi" ? playfairDisplay.className : montserrat.className;
  const fontWeight = locale === "vi" ? 400 : 500; // Regular 400 for Vietnamese, Medium 500 for English

  return (
    <>
      <LocaleLangSetter locale={locale} />
      <div className={`flex min-h-screen flex-col bg-background text-foreground ${fontClass}`}
           style={{ fontWeight }}>
        <Navbar locale={locale} navItems={navItems} tagline={sitewide.tagline} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} navItems={navItems} trustLines={sitewide.trust_lines} />
      </div>
    </>
  );
}
