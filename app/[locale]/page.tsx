import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { PremiumHero, PremiumStats } from "@/components/premium-ui";
import { CompanyStrategy } from "@/components/CompanyStrategy";
import { PartnerGrid } from "@/components/PartnerGrid";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import {
  getHomeHero,
  getHomeSections,
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
  const sitewide = getSitewide(locale);

  return (
    <>
      <PremiumHero
        locale={locale}
        headline={hero.headline}
        subheadline={hero.subheadline}
        ctaPrimary={hero.cta_variants?.primary_recommended || (locale === "vi" ? "Liên hệ" : "Contact")}
        ctaSecondary={hero.cta_variants?.secondary_recommended || (locale === "vi" ? "Tìm hiểu thêm" : "Learn more")}
        ctaPrimaryLink={`/${locale}/contact`}
        ctaSecondaryLink={`/${locale}/services`}
        trustBullets={hero.trust_bullets || sitewide.trust_lines}
      />

      {/* Premium Stats Section */}
      <div className="relative -mt-20 z-10">
        <Container>
          <PremiumStats
            stats={[
              {
                value: 20,
                suffix: "+",
                label: locale === "vi" ? "Năm kinh nghiệm" : locale === "zh" ? "年经验" : "Years Experience",
              },
              {
                value: 20000,
                suffix: "+",
                label: locale === "vi" ? "Đối tác" : locale === "zh" ? "合作伙伴" : "Partners",
              },
              {
                value: 200,
                suffix: "+",
                label: locale === "vi" ? "Khách hàng" : locale === "zh" ? "客户" : "Customers",
              },
              {
                value: 20,
                suffix: locale === "vi" ? " Tỷ VND" : locale === "zh" ? " 亿越南盾" : "B VND",
                label: locale === "vi" ? "Doanh thu/năm" : locale === "zh" ? "年收入" : "Annual Revenue",
              },
            ]}
          />
        </Container>
      </div>

      <Container className="space-y-20 py-20 sm:py-24 lg:py-28">
        <Section
          id="services-overview"
          title={sections.services_overview?.headline}
          description={sections.services_overview?.description}
        >
          <ul className="mt-8 grid gap-4 text-sm sm:grid-cols-2 md:text-base">
            {sections.services_overview?.key_benefits?.map((benefit: string) => (
              <li key={benefit} className="group flex items-start gap-3 rounded-xl border border-border/40 bg-card/50 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-md hover:shadow-primary/5">
                <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-primary/60 shadow-sm shadow-primary/50 transition-transform duration-300 group-hover:scale-110" />
                <span className="leading-relaxed text-foreground/80">{benefit}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="why" title={sections.why_choose?.headline}>
          <ul className="mt-8 grid gap-4 text-sm sm:grid-cols-2 md:text-base">
            {sections.why_choose?.trust_points?.map((point: string) => (
              <li key={point} className="group flex items-start gap-3 rounded-xl border border-border/40 bg-card/50 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-card hover:shadow-md hover:shadow-accent/5">
                <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-br from-accent to-accent/60 shadow-sm shadow-accent/50 transition-transform duration-300 group-hover:scale-110" />
                <span className="leading-relaxed text-foreground/80">{point}</span>
              </li>
            ))}
          </ul>
        </Section>
      </Container>

      {/* Company Strategy Section */}
      <CompanyStrategy locale={locale} />

      {/* Partners Section - Cards */}
      <PartnerGrid locale={locale} category="cards" />

      <Container className="space-y-20 py-20 sm:py-24 lg:py-28">
        <Section
          id="contact"
          title={
            locale === "vi" 
              ? "Liên hệ với chúng tôi" 
              : locale === "zh" 
              ? "联系我们" 
              : "Contact Us"
          }
          description={
            locale === "vi" 
              ? "Hãy để chúng tôi giúp bạn tìm giải pháp phù hợp" 
              : locale === "zh"
              ? "让我们帮助您找到合适的解决方案"
              : "Let us help you find the right solution"
          }
        >
          <ContactForm
            locale={locale}
            placeholders={{
              form_placeholder_name: locale === "vi" ? "Họ và tên" : locale === "zh" ? "全名" : "Full name",
              form_placeholder_email: "Email",
              form_placeholder_phone: locale === "vi" ? "Số điện thoại" : locale === "zh" ? "电话号码" : "Phone",
              form_placeholder_company: locale === "vi" ? "Công ty" : locale === "zh" ? "公司名称" : "Company",
              form_placeholder_message: locale === "vi" ? "Tin nhắn" : locale === "zh" ? "留言" : "Message",
              button_submit_form: locale === "vi" ? "Gửi" : locale === "zh" ? "提交" : "Send",
              form_success_message: 
                locale === "vi" 
                  ? "Cảm ơn! Chúng tôi sẽ liên hệ sớm." 
                  : locale === "zh"
                  ? "谢谢！我们会尽快联系您。"
                  : "Thank you! We'll contact you soon.",
              form_error_message: 
                locale === "vi" 
                  ? "Đã xảy ra lỗi. Vui lòng thử lại." 
                  : locale === "zh"
                  ? "发生错误。请重试。"
                  : "An error occurred. Please try again.",
            }}
          />
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
