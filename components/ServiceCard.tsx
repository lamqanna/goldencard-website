"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  summary?: string;
  benefits?: string[];
  technicalPoints?: string[];
  icon?: ReactNode;
  className?: string;
  benefitsLabel?: string;
  technicalLabel?: string;
}

export function ServiceCard({
  title,
  summary = "",
  benefits = [],
  technicalPoints = [],
  icon,
  className,
  benefitsLabel = "Key benefits",
  technicalLabel = "Technical focus",
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "group relative flex h-full flex-col gap-6 overflow-hidden rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10",
        className,
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="relative flex items-start gap-4">
        {icon ? (
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
            {icon}
          </span>
        ) : null}
        <div className="flex-1">
          <h3 className="text-xl font-semibold leading-tight text-foreground">{title}</h3>
          {summary ? (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{summary}</p>
          ) : null}
        </div>
      </div>
      
      <div className="relative space-y-5 text-sm">
        {benefits.length > 0 ? (
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-primary/70">
              {benefitsLabel}
            </p>
            <ul className="space-y-2.5 text-foreground/80">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 leading-relaxed">
                  <span 
                    aria-hidden 
                    className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-primary/60" 
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        
        {technicalPoints.length > 0 ? (
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent/70">
              {technicalLabel}
            </p>
            <ul className="space-y-2.5 text-foreground/80">
              {technicalPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 leading-relaxed">
                  <span 
                    aria-hidden 
                    className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br from-accent to-accent/60" 
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
