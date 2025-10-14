"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { locales, type Locale } from "@/lib/i18n";

interface LocaleSwitcherProps {
  locale: Locale;
}

export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const pathname = usePathname() ?? "/";

  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
      {locales.map((candidate) => {
        const isActive = candidate === locale;
        const target = buildSwitchPath(pathname, locale, candidate);

        return isActive ? (
          <span key={candidate} className="text-primary">
            {candidate}
          </span>
        ) : (
          <Link key={candidate} href={target} className="transition hover:text-primary">
            {candidate}
          </Link>
        );
      })}
    </div>
  );
}

function buildSwitchPath(pathname: string, current: Locale, target: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${target}`;
  }

  if (segments[0] === current) {
    segments[0] = target;
  } else if (locales.includes(segments[0] as Locale)) {
    segments[0] = target;
  } else {
    segments.unshift(target);
  }

  return `/${segments.join("/")}`;
}
