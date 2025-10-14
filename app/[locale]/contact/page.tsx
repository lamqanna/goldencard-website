import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { getContactSection } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  return buildPageMetadata(locale, "contact");
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  const contactContent = getContactSection(locale);
  const hero = contactContent?.hero;
  const formCopy = contactContent?.form_microcopy;
  const contactInfo = contactContent?.contact_info;

  return (
    <Container className="space-y-12 py-16 sm:py-20">
      <Section
        title={hero?.headline ?? (locale === "vi" ? "Liên hệ GoldenCard" : "Contact GoldenCard")}
        description={hero?.subheadline}
      >
        {hero?.trust_bullets ? (
          <ul className="mb-8 space-y-3 text-sm text-foreground/80 md:text-base">
            {hero.trust_bullets.map((bullet: string) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="grid gap-10 lg:grid-cols-[0.65fr_0.35fr]">
          <div className="space-y-4">
            {formCopy?.description ? (
              <p className="text-sm text-muted-foreground md:text-base">{formCopy.description}</p>
            ) : null}
            <ContactForm
              locale={locale}
              placeholders={{
                form_placeholder_name: formCopy?.field_labels?.name ?? (locale === "vi" ? "Họ và tên" : "Full Name"),
                form_placeholder_email: formCopy?.field_labels?.email ?? "Email",
                form_placeholder_phone: formCopy?.field_labels?.phone ?? (locale === "vi" ? "Số điện thoại" : "Phone"),
                form_placeholder_company: formCopy?.field_labels?.company ?? (locale === "vi" ? "Công ty" : "Company"),
                form_placeholder_message: formCopy?.field_labels?.message ?? (locale === "vi" ? "Nhu cầu của bạn" : "Your request"),
                button_submit_form: formCopy?.button_submit ?? (locale === "vi" ? "Gửi yêu cầu" : "Submit"),
                form_success_message:
                  formCopy?.success_message ?? (locale === "vi" ? "Cảm ơn! Chúng tôi sẽ liên hệ sớm." : "Thank you! We'll be in touch soon."),
                form_error_message:
                  formCopy?.error_message ?? (locale === "vi" ? "Có lỗi xảy ra. Vui lòng thử lại." : "Something went wrong. Please try again."),
              }}
            />
            {formCopy?.privacy_note ? (
              <p className="text-xs text-muted-foreground">{formCopy.privacy_note}</p>
            ) : null}
          </div>
          <aside className="space-y-4 text-sm text-foreground/80 md:text-base">
            {contactInfo ? (
              <div className="rounded-2xl border border-border/60 bg-card/70 p-4">
                <p className="text-sm font-semibold text-primary">{contactInfo.heading}</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {contactInfo.hotline ? <li>{locale === "vi" ? "Hotline" : "Hotline"}: {contactInfo.hotline}</li> : null}
                  {contactInfo.email ? <li>Email: {contactInfo.email}</li> : null}
                  {contactInfo.address ? <li>{locale === "vi" ? "Địa chỉ" : "Address"}: {contactInfo.address}</li> : null}
                  {contactInfo.hours ? <li>{contactInfo.hours}</li> : null}
                </ul>
              </div>
            ) : null}
          </aside>
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
