import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { getHomeSections, getSitewide } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  // Reuse home SEO if dedicated about is not present
  return buildPageMetadata(locale, "home");
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  const sections = getHomeSections(locale);
  const sitewide = getSitewide(locale);

  return (
    <Container className="space-y-16 py-16 sm:py-20">
      <Section
        id="about-overview"
        title={locale === "vi" ? "Về GoldenCard" : "About GoldenCard"}
        description={sitewide.elevator_pitch}
      />

      <Section id="about-values" title={sections.why_goldencard.heading}>
        <div className="space-y-4 text-sm text-foreground/80 md:text-base">
          {sections.why_goldencard.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
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