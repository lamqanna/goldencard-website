import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { getAboutContent } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  return buildPageMetadata(locale, "about");
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  const about = getAboutContent(locale);
  const hero = about.hero;
  const values = about.values;

  return (
    <Container className="space-y-16 py-16 sm:py-20">
      <Section
        id="about-overview"
        title={hero?.headline ?? (locale === "vi" ? "Về GoldenCard" : "About GoldenCard")}
        description={hero?.subheadline}
      >
        {hero?.trust_bullets ? (
          <ul className="space-y-3 text-sm text-foreground/80 md:text-base">
            {hero.trust_bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </Section>

      <Section id="about-values" title={values?.headline}>
        {values?.key_values ? (
          <ul className="space-y-3 text-sm text-foreground/80 md:text-base">
            {values.key_values.map((value) => (
              <li key={value} className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </Section>
    </Container>
  );
}

function normalizeLocale(candidate: string): Locale {
  if (!isLocale(candidate)) {
    notFound();
  }

  return candidate;
}