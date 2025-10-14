import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { getContactSection, getMicrocopy } from "@/lib/content";
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
  const contactSection = getContactSection(locale);
  const microcopy = getMicrocopy(locale);

  return (
    <Container className="space-y-12 py-16 sm:py-20">
      <Section title={contactSection.heading} description={contactSection.paragraphs[0]}>
        <div className="grid gap-10 lg:grid-cols-[0.65fr_0.35fr]">
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
            <div className="rounded-2xl border border-border/60 bg-card/70 p-4">
              <p className="text-sm font-semibold text-primary">
                {locale === "vi" ? "Liên hệ trực tiếp" : "Direct contact"}
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>Hotline: +84 28 1234 5678</li>
                <li>Email: hello@goldencard.vn</li>
                <li>{locale === "vi" ? "Địa chỉ: TP. Hồ Chí Minh" : "Address: Ho Chi Minh City"}</li>
              </ul>
            </div>
          </div>
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
