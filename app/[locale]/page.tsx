import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudy } from "@/components/CaseStudy";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { ProductHighlights } from "@/components/ProductHighlights";
import { Section } from "@/components/Section";
import {
  getContactSection,
  getHomeHero,
  getHomeSections,
  getMicrocopy,
  getSitewide,
} from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  return buildPageMetadata(locale, "home");
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  const hero = getHomeHero(locale);
  const sections = getHomeSections(locale);
  const contactSection = getContactSection(locale);
  const microcopy = getMicrocopy(locale);
  const sitewide = getSitewide(locale);

  return (
    <>
      <Hero
        locale={locale}
        headline={hero.headline}
        subheadline={hero.subheadline}
        primaryCta={hero.cta_primary}
        secondaryCta={hero.cta_secondary}
        trustLines={sitewide.trust_lines}
      />
      <Container className="space-y-16 py-16 sm:py-20">
        <Section
          id="services-overview"
          title={sections.services_overview.heading}
          description={sections.services_overview.paragraphs[0]}
        >
          <div className="space-y-4 text-sm text-foreground/80 md:text-base">
            {sections.services_overview.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="why" title={sections.why_goldencard.heading}>
          <div className="space-y-4 text-sm text-foreground/80 md:text-base">
            {sections.why_goldencard.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="products" title={sections.products.heading}>
          <ProductHighlights items={sections.products.paragraphs} />
        </Section>

        <Section id="case-studies" title={sections.case_studies.heading}>
          <CaseStudy paragraphs={sections.case_studies.paragraphs} />
        </Section>

        <Section
          id="contact"
          title={contactSection.heading}
          description={contactSection.paragraphs[0]}
        >
          <div className="grid gap-10 lg:grid-cols-[0.7fr_0.3fr]">
            <ContactForm
              locale={locale}
              placeholders={{
                form_placeholder_name: microcopy.form_placeholder_name,
                form_placeholder_email: microcopy.form_placeholder_email,
                form_placeholder_phone: microcopy.form_placeholder_phone,
                form_placeholder_company: microcopy.form_placeholder_company,
                form_placeholder_message: microcopy.form_placeholder_message,
                button_submit_form: microcopy.button_submit_form,
                form_success_message: microcopy.form_success_message,
                form_error_message: microcopy.form_error_message,
              }}
            />
            <div className="space-y-4 text-sm text-foreground/80 md:text-base">
              {contactSection.paragraphs.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Section>
      </Container>
    </>
  );
}

function normalizeLocale(candidate: string): Locale {
  if (!isLocale(candidate)) {
    notFound();
  }

  return candidate;
}
