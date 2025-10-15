"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <div className="relative overflow-hidden bg-gradient-to-br from-sidebar via-sidebar/50 to-background pb-20 pt-16 sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-28">
      {/* Subtle gradient orbs for depth */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>
      
      <Container className="relative grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            GoldenCard & GoldenEnergy
          </motion.p>
          
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            {headline}
          </h1>
          
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {subheadline}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href={`/${locale}/contact#form`}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-100"
            >
              {primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href={`/${locale}/services`}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/80 px-8 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
            >
              {secondaryCta}
              <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="rounded-3xl border border-border/60 bg-card/80 p-8 shadow-xl shadow-primary/10 backdrop-blur-sm">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" aria-hidden="true" />
            
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {locale === "vi" ? "Được tin dùng bởi" : "Trusted by"}
            </p>
            
            <ul className="mt-6 space-y-4 text-sm text-foreground/80">
              {trustLines.map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span 
                    aria-hidden 
                    className="mt-1 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-primary/60 shadow-sm shadow-primary/50" 
                  />
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
