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
    <Container className="space-y-20 py-20 sm:py-24 lg:py-28">
      <Section
        id="about-overview"
        title={hero?.headline ?? (locale === "vi" ? "Về GoldenCard" : "About GoldenCard")}
        description={hero?.subheadline}
      >
        {hero?.trust_bullets ? (
          <ul className="mt-8 grid gap-4 text-sm sm:grid-cols-2 md:text-base">
            {hero.trust_bullets.map((bullet) => (
              <li key={bullet} className="group flex items-start gap-3 rounded-xl border border-border/40 bg-card/50 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-md hover:shadow-primary/5">
                <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-primary/60 shadow-sm shadow-primary/50 transition-transform duration-300 group-hover:scale-110" />
                <span className="leading-relaxed text-foreground/80">{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </Section>

      <Section id="about-values" title={values?.headline}>
        {values?.key_values ? (
          <ul className="mt-8 grid gap-4 text-sm sm:grid-cols-2 md:text-base">
            {values.key_values.map((value) => (
              <li key={value} className="group flex items-start gap-3 rounded-xl border border-border/40 bg-card/50 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-card hover:shadow-md hover:shadow-accent/5">
                <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-br from-accent to-accent/60 shadow-sm shadow-accent/50 transition-transform duration-300 group-hover:scale-110" />
                <span className="leading-relaxed text-foreground/80">{value}</span>
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