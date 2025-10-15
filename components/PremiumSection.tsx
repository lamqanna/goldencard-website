"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { motionVariants } from "@/lib/motion-variants"

interface PremiumSectionProps {
  children: ReactNode
  variant?: "light" | "white" | "gradient" | "dark"
  className?: string
  withOrbs?: boolean
  eyebrow?: string
  title?: string
  description?: string
}

export function PremiumSection({
  children,
  variant = "white",
  className = "",
  withOrbs = false,
  eyebrow,
  title,
  description,
}: PremiumSectionProps) {
  const backgrounds = {
    light: "bg-gradient-to-b from-white to-neutral-50",
    white: "bg-white",
    gradient: "bg-gradient-to-br from-gold-50 via-white to-teal-50",
    dark: "bg-neutral-900",
  }

  const textColors = {
    light: "text-neutral-900",
    white: "text-neutral-900",
    gradient: "text-neutral-900",
    dark: "text-white",
  }

  return (
    <section className={`relative py-20 md:py-32 ${backgrounds[variant]} ${className} overflow-hidden`}>
      {/* Decorative Orbs */}
      {(withOrbs || variant === "gradient") && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="glow-orb glow-orb-gold absolute top-0 right-0 w-96 h-96"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            className="glow-orb glow-orb-teal absolute bottom-0 left-0 w-96 h-96"
          />
        </>
      )}

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        {(eyebrow || title || description) && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={motionVariants.staggerContainer}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            {eyebrow && (
              <motion.div
                variants={motionVariants.fadeUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                           bg-gold-100/80 backdrop-blur-sm border border-gold-200/50
                           text-sm font-medium text-gold-700 mb-4"
              >
                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                {eyebrow}
              </motion.div>
            )}

            {title && (
              <motion.h2
                variants={motionVariants.fadeUp}
                className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold 
                           tracking-tight mb-6 ${textColors[variant]}`}
              >
                {title}
              </motion.h2>
            )}

            {description && (
              <motion.p
                variants={motionVariants.fadeUp}
                className={`text-lg md:text-xl leading-relaxed ${
                  variant === "dark" ? "text-neutral-300" : "text-neutral-600"
                }`}
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        )}

        {/* Section Content */}
        {children}
      </div>
    </section>
  )
}
