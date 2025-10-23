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
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60" role="banner">
      <Container className="flex items-center justify-between gap-4 py-4 lg:py-5">
        <div className="flex items-center gap-3 min-w-0">
          <Link 
            href={`/${locale}`} 
            className="group relative inline-flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary shrink-0" 
            aria-label="Golden Energy home"
          >
            <span className="relative whitespace-nowrap">
              Golden Energy
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>
        </div>
        
        <div className="flex items-center gap-6">
          <nav aria-label={locale === "vi" ? "Điều hướng chính" : "Primary navigation"} role="navigation" className="hidden md:block">
            <ul className="flex items-center gap-1 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    className="relative rounded-lg px-3 py-2 text-foreground/70 transition-all duration-200 hover:bg-primary/5 hover:text-primary" 
                    href={item.href} 
                    aria-current={item.href.endsWith(`/${locale}`) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <LocaleSwitcher locale={locale} />
        </div>
      </Container>
    </header>
  );
}
