import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { KpiGrid } from "@/components/KpiGrid";
import { Section } from "@/components/Section";
import { getGoldenEnergy } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

interface GoldenEnergyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: GoldenEnergyPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  return buildPageMetadata(locale, "goldenenergy");
}

export default async function GoldenEnergyPage({ params }: GoldenEnergyPageProps) {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  const goldenEnergy = getGoldenEnergy(locale);

  return (
    <Container className="space-y-16 py-16 sm:py-20">
      <Section
        title={locale === "vi" ? "GoldenEnergy" : "GoldenEnergy"}
        description={goldenEnergy.mission_short}
      >
        <div className="space-y-4 text-sm text-foreground/80 md:text-base">
          {goldenEnergy.mission_long.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section
        title={locale === "vi" ? "Các dự án tiêu biểu" : "Flagship Projects"}
        className="space-y-6"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {goldenEnergy.project_variants.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              <p className="mt-3 text-sm text-foreground/80 md:text-base">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title={goldenEnergy.kpi_list.project_name}
        description={
          locale === "vi"
            ? "Các chỉ số vận hành nổi bật của giải pháp GoldenEnergy."
            : "Operational highlights from GoldenEnergy deployments."
        }
      >
        <KpiGrid items={goldenEnergy.kpi_list.kpis} />
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
