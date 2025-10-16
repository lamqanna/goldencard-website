"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n"
import { motionVariants } from "@/lib/motion-variants"

interface PremiumHeroProps {
  locale: Locale
  headline: string
  subheadline: string
  trustBullets: string[]
  ctaPrimary: string
  ctaSecondary: string
  ctaPrimaryLink?: string
  ctaSecondaryLink?: string
}

export function PremiumHero({
  locale,
  headline,
  subheadline,
  trustBullets,
  ctaPrimary,
  ctaSecondary,
  ctaPrimaryLink = `/${locale}/contact`,
  ctaSecondaryLink = `/${locale}/services`,
}: PremiumHeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-gold-50">
      {/* Animated Background Orbs */}
      <motion.div
        className="glow-orb glow-orb-gold absolute top-20 right-20 w-96 h-96"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="glow-orb glow-orb-teal absolute bottom-20 left-20 w-96 h-96"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-mesh" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={motionVariants.staggerContainer}
          className="max-w-4xl mx-auto lg:mx-0"
        >
          {/* Badge */}
          <motion.div
            variants={motionVariants.fadeUpScale}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                       glass shadow-lux mb-6 border border-gold-200/50"
          >
            <Sparkles className="w-4 h-4 text-gold-600" />
            <span className="text-sm font-medium text-neutral-700">
              ISO 9001:2015 Certified
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-teal-500 rounded-full"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={motionVariants.fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold 
                       tracking-tight text-neutral-900 mb-6 text-balance"
          >
            <span className="text-gradient-elegant">{headline}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={motionVariants.fadeUp}
            className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed 
                       max-w-3xl text-pretty"
          >
            {subheadline}
          </motion.p>

          {/* Trust Bullets */}
          <motion.div
            variants={motionVariants.fadeUp}
            className="flex flex-wrap gap-3 mb-10"
          >
            {trustBullets.slice(0, 3).map((bullet, i) => (
              <motion.div
                key={i}
                variants={motionVariants.scaleIn}
                className="flex items-center gap-2 px-4 py-2 rounded-lg
                           glass border border-neutral-200/50 hover:shadow-glow-gold
                           transition-smooth"
              >
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0" />
                <span className="text-sm text-neutral-700">{bullet}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={motionVariants.fadeUp}
            className="flex flex-wrap gap-4"
          >
            {/* Primary CTA */}
            <Link href={ctaPrimaryLink}>
              <motion.button
                variants={motionVariants.magneticButton}
                whileHover="hover"
                whileTap="tap"
                className="group relative px-8 py-4 rounded-xl overflow-hidden
                           bg-gradient-to-r from-gold-500 to-gold-600
                           text-white font-medium shadow-lux hover:shadow-float
                           transition-smooth flex items-center gap-2"
              >
                <span className="relative z-10">{ctaPrimary}</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>

            {/* Secondary CTA */}
            <Link href={ctaSecondaryLink}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-xl glass text-neutral-900 font-medium 
                           border-2 border-neutral-200 hover:border-gold-300 
                           hover:bg-gold-50/50 transition-smooth"
              >
                {ctaSecondary}
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
