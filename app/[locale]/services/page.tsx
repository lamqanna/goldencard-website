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

  const cards = [
    {
      key: "magnetic_card",
      title: locale === "vi" ? "Thẻ từ" : "Magnetic Cards",
      ...services.magnetic_card,
      benefitsLabel: locale === "vi" ? "Lợi ích" : "Key benefits",
      technicalLabel: locale === "vi" ? "Đặc điểm kỹ thuật" : "Technical focus",
    },
    {
      key: "bank_card",
      title: locale === "vi" ? "Thẻ ngân hàng" : "Bank Cards",
      ...services.bank_card,
      benefitsLabel: locale === "vi" ? "Lợi ích" : "Key benefits",
      technicalLabel: locale === "vi" ? "Đặc điểm kỹ thuật" : "Technical focus",
    },
    {
      key: "it_services",
      title: locale === "vi" ? "Giải pháp CNTT" : "IT Services",
      ...services.it_services,
      benefitsLabel: locale === "vi" ? "Lợi ích" : "Key benefits",
      technicalLabel: locale === "vi" ? "Đặc điểm kỹ thuật" : "Technical focus",
    },
    {
      key: "solar_solutions",
      title: locale === "vi" ? "Giải pháp năng lượng mặt trời" : "Solar Solutions",
      ...services.solar_solutions,
      benefitsLabel: locale === "vi" ? "Lợi ích" : "Key benefits",
      technicalLabel: locale === "vi" ? "Đặc điểm kỹ thuật" : "Technical focus",
    },
  ];

  return (
    <Container className="space-y-16 py-16 sm:py-20">
      <Section
        title={locale === "vi" ? "Dịch vụ chiến lược" : "Strategic Services"}
        description={
          locale === "vi"
            ? "GoldenCard cung cấp giải pháp trọn gói từ sản xuất thẻ đến triển khai hệ thống CNTT và vận hành điện mặt trời."
            : "GoldenCard delivers end-to-end services—from secure card production to bespoke IT platforms and solar deployment."
        }
        className="border-b-0 pb-0"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <ServiceCard
            key={card.key}
            title={card.title}
            summary={card.summary}
            benefits={card.benefits}
            technicalPoints={card.technical_points}
            benefitsLabel={card.benefitsLabel}
            technicalLabel={card.technicalLabel}
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
