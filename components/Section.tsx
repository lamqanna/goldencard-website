"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  animate?: boolean;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  animate = true,
}: SectionProps) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-b border-border/60 py-16 sm:py-20 last:border-b-0",
        className,
      )}
      aria-labelledby={title ? `${id ?? title}-heading` : undefined}
    >
      {animate ? (
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6"
        >
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 id={id ? `${id}-heading` : undefined} className="text-3xl font-semibold md:text-4xl">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
              {description}
            </p>
          ) : null}
          {children}
        </motion.div>
      ) : (
        <div className="space-y-6">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 id={id ? `${id}-heading` : undefined} className="text-3xl font-semibold md:text-4xl">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
              {description}
            </p>
          ) : null}
          {children}
        </div>
      )}
    </section>
  );
}
