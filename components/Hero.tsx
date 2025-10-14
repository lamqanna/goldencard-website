"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Container } from "@/components/Container";
import type { Locale } from "@/lib/i18n";

interface HeroProps {
  locale: Locale;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  trustLines: string[];
}

export function Hero({
  locale,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  trustLines,
}: HeroProps) {
  return (
    <div className="bg-sidebar pb-16 pt-12 sm:pt-20">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary/80">
            GoldenCard & GoldenEnergy
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            {subheadline}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`/${locale}/contact#form`}
              className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              {primaryCta}
            </Link>
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
            >
              {secondaryCta}
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="rounded-3xl border border-border/60 bg-card p-6 shadow-lg shadow-primary/10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {locale === "vi" ? "Được tin dùng bởi" : "Trusted by"}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            {trustLines.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </div>
  );
}
