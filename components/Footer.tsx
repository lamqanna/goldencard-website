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
    <footer className="relative mt-auto overflow-hidden border-t border-border/40 bg-gradient-to-b from-background to-sidebar/30 py-16 text-sm" role="contentinfo">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/3 blur-3xl" />
      </div>
      
      <Container className="relative grid gap-12 md:grid-cols-[1fr_auto] md:items-start md:gap-16" aria-label={locale === "vi" ? "Chân trang" : "Footer"}>
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xl font-semibold tracking-tight text-foreground">GoldenCard</p>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {locale === "vi" 
                ? "Giải pháp toàn diện cho doanh nghiệp hiện đại" 
                : "Comprehensive solutions for modern businesses"}
            </p>
          </div>
          
          <ul className="space-y-2.5 text-sm text-foreground/70">
            {trustLines.map((item) => (
              <li key={item} className="flex items-start gap-3 leading-relaxed">
                <span 
                  aria-hidden 
                  className="mt-1.5 flex h-1 w-1 flex-shrink-0 rounded-full bg-primary/60" 
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-6 md:text-right">
          <nav aria-label={locale === "vi" ? "Điều hướng chân trang" : "Footer navigation"}>
            <ul className="flex flex-col gap-3 md:items-end">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    className="inline-block text-sm text-foreground/70 transition-colors duration-200 hover:text-primary" 
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="space-y-2 border-t border-border/40 pt-6 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} GoldenCard</p>
            <p>{locale === "vi" ? "Tất cả quyền được bảo lưu." : locale === "zh" ? "版权所有" : "All rights reserved."}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
