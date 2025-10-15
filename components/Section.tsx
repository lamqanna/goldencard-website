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
  
  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };
  
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-b border-border/40 py-20 last:border-b-0 sm:py-24 lg:py-28",
        className,
      )}
      aria-labelledby={title ? `${id ?? title}-heading` : undefined}
    >
      {animate && !prefersReducedMotion ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-8"
        >
          {eyebrow ? (
            <motion.p 
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary"
            >
              {eyebrow}
            </motion.p>
          ) : null}
          
          {title ? (
            <motion.h2 
              variants={itemVariants}
              id={id ? `${id}-heading` : undefined} 
              className="text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              {title}
            </motion.h2>
          ) : null}
          
          {description ? (
            <motion.p 
              variants={itemVariants}
              className="max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {description}
            </motion.p>
          ) : null}
          
          {children ? (
            <motion.div variants={itemVariants}>
              {children}
            </motion.div>
          ) : null}
        </motion.div>
      ) : (
        <div className="space-y-8">
          {eyebrow ? (
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          
          {title ? (
            <h2 id={id ? `${id}-heading` : undefined} className="text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          ) : null}
          
          {description ? (
            <p className="max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
          
          {children}
        </div>
      )}
    </section>
  );
}
