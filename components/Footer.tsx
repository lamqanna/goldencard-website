import Link from "next/link";

import { Container } from "@/components/Container";
import type { NavItem } from "@/lib/navigation";
import type { Locale } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
  navItems: NavItem[];
  trustLines: string[];
}

export function Footer({ locale, navItems, trustLines }: FooterProps) {
  return (
    <footer className="mt-auto border-t border-border/60 bg-card/70 py-10 text-sm" role="contentinfo">
      <Container className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start" aria-label={locale === "vi" ? "Chân trang" : "Footer"}>
        <div className="space-y-4">
          <p className="text-base font-semibold text-primary">GoldenCard</p>
          <ul className="space-y-2 text-muted-foreground">
            {trustLines.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 text-right">
          <nav aria-label={locale === "vi" ? "Điều hướng chân trang" : "Footer navigation"}>
            <ul className="flex flex-col gap-2 md:items-end">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-primary" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GoldenCard. {locale === "vi" ? "Tất cả quyền được bảo lưu." : "All rights reserved."}
          </p>
        </div>
      </Container>
    </footer>
  );
}
