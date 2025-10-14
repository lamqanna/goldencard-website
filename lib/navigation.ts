import type { Locale } from "@/lib/i18n";

const navLabels: Record<Locale, Record<"home" | "services" | "goldenenergy" | "about" | "contact", string>> = {
  vi: {
    home: "Trang chủ",
    services: "Dịch vụ",
    goldenenergy: "Giải pháp năng lượng",
    about: "Về chúng tôi",
    contact: "Liên hệ",
  },
  en: {
    home: "Home",
    services: "Services",
    goldenenergy: "GoldenEnergy",
    about: "About",
    contact: "Contact",
  },
};

export interface NavItem {
  label: string;
  href: string;
}

export function getPrimaryNavigation(locale: Locale): NavItem[] {
  const labels = navLabels[locale];

  return [
    { label: labels.home, href: `/${locale}` },
    { label: labels.services, href: `/${locale}/services` },
    { label: labels.about, href: `/${locale}/about` },
    { label: labels.goldenenergy, href: `/${locale}/services/goldenenergy` },
    { label: labels.contact, href: `/${locale}/contact` },
  ];
}
