import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SolarGallery } from "@/components/SolarGallery";
import { PartnerGrid } from "@/components/PartnerGrid";
import { SolarProjectShowcase } from "@/components/SolarProjectShowcase";
import { getGoldenEnergy } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  return buildPageMetadata(locale, "goldenenergy");
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  const goldenEnergy = getGoldenEnergy(locale);
  const hero = goldenEnergy?.hero;
  const mission = goldenEnergy?.mission;
  const featured = goldenEnergy?.featured_projects;

  return (
    <>
      <Container className="space-y-16 py-16 sm:py-20">
        <Section
          title={hero?.headline ?? "GoldenEnergy"}
          description={hero?.subheadline}
        >
          {hero?.trust_bullets ? (
          <ul className="space-y-3 text-sm text-foreground/80 md:text-base">
            {hero.trust_bullets.map((bullet: string) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </Section>

      {mission ? (
        <Section id="mission" title={mission.headline}>
          <ul className="space-y-3 text-sm text-foreground/80 md:text-base">
            {mission.key_points?.map((point: string) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {featured ? (
        <Section id="featured-projects" title={featured.headline}>
          <div className="grid gap-6 md:grid-cols-3">
            {[featured.project_1, featured.project_2, featured.project_3]
              .filter(Boolean)
              .map((project, index) => (
                <article
                  key={project?.title ?? index}
                  className="h-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-foreground">{project?.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-foreground/80 md:text-base">
                    {project?.kpis?.map((item: string) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
          </div>
        </Section>
      ) : null}
      </Container>

      {/* Solar Gallery Section - Full Width */}
      <SolarGallery locale={locale} />

      {/* Partners Section - Solar Energy */}
      <PartnerGrid locale={locale} category="solar" />

      {/* Featured Solar Projects */}
      <SolarProjectShowcase locale={locale} />
    </>
  );
}

function normalizeLocale(candidate: string): Locale {
  if (!isLocale(candidate)) {
    notFound();
  }

  return candidate;
}
