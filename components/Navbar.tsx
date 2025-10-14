import Link from "next/link";

import type { NavItem } from "@/lib/navigation";
import type { Locale } from "@/lib/i18n";
import { Container } from "@/components/Container";
import { LocaleSwitcher } from "@/components/locale-switcher";

interface NavbarProps {
  locale: Locale;
  navItems: NavItem[];
  tagline: string;
}

export function Navbar({ locale, navItems, tagline }: NavbarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/90 backdrop-blur" role="banner">
      <Container className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href={`/${locale}`} className="text-lg font-semibold tracking-tight text-primary" aria-label="GoldenCard home">
            GoldenCard
          </Link>
          <p className="text-sm text-muted-foreground">{tagline}</p>
        </div>
        <nav aria-label={locale === "vi" ? "Điều hướng chính" : "Primary navigation"} role="navigation">
          <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-foreground/80">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-primary" href={item.href} aria-current={item.href.endsWith(`/${locale}`) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <LocaleSwitcher locale={locale} />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
