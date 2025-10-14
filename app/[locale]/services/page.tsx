import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { getServices } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  return buildPageMetadata(locale, "services");
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  const services = getServices(locale);
  const hero = services?.hero;
  const highlights = services?.service_highlights ?? {};

  const cards = [
    {
      key: "magnetic_cards",
      title: highlights.magnetic_cards?.headline ?? (locale === "vi" ? "Thẻ từ" : "Magnetic Cards"),
      benefits: highlights.magnetic_cards?.short_benefits ?? [],
      benefitsLabel: locale === "vi" ? "Lợi ích nổi bật" : "Key benefits",
    },
    {
      key: "bank_cards",
      title: highlights.bank_cards?.headline ?? (locale === "vi" ? "Thẻ ngân hàng" : "Bank Cards"),
      benefits: highlights.bank_cards?.short_benefits ?? [],
      benefitsLabel: locale === "vi" ? "Lợi ích nổi bật" : "Key benefits",
    },
    {
      key: "it_services",
      title: highlights.it_services?.headline ?? (locale === "vi" ? "Giải pháp CNTT" : "IT Services"),
      benefits: highlights.it_services?.short_benefits ?? [],
      benefitsLabel: locale === "vi" ? "Lợi ích nổi bật" : "Key benefits",
    },
    {
      key: "solar_solutions",
      title: highlights.solar_solutions?.headline ?? (locale === "vi" ? "Giải pháp năng lượng mặt trời" : "Solar Solutions"),
      benefits: highlights.solar_solutions?.short_benefits ?? [],
      benefitsLabel: locale === "vi" ? "Lợi ích nổi bật" : "Key benefits",
    },
  ];

  return (
    <Container className="space-y-16 py-16 sm:py-20">
      <Section
        title={hero?.headline ?? (locale === "vi" ? "Dịch vụ chiến lược" : "Strategic Services")}
        description={hero?.subheadline}
        className="border-b-0 pb-0"
      >
        {hero?.trust_bullets ? (
          <ul className="mt-6 space-y-3 text-sm text-foreground/80 md:text-base">
            {hero.trust_bullets.map((bullet: string) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </Section>
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <ServiceCard
            key={card.key}
            title={card.title}
            benefits={card.benefits}
            benefitsLabel={card.benefitsLabel}
          />
        ))}
      </div>
    </Container>
  );
}

function normalizeLocale(candidate: string): Locale {
  if (!isLocale(candidate)) {
    notFound();
  }

  return candidate;
}
