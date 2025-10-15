"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { motionVariants } from "@/lib/motion-variants"

interface PremiumCTABannerProps {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export function PremiumCTABanner({
  title,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: PremiumCTABannerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={motionVariants.fadeUp}
      className="relative overflow-hidden rounded-3xl"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-500 via-gold-600 to-teal-600" />
      
      {/* Animated Mesh Pattern */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)`,
          backgroundSize: "200% 200%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-12 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            variants={motionVariants.scaleIn}
            className="inline-flex p-3 rounded-full bg-white/20 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-6 h-6 text-white" />
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={motionVariants.fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold 
                       text-white mb-4 text-balance"
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={motionVariants.fadeUp}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={motionVariants.fadeUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <Link href={ctaLink}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-xl bg-white text-gold-600 font-medium
                           shadow-lux hover:shadow-float transition-smooth
                           flex items-center gap-2"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            {/* Secondary CTA */}
            {secondaryCtaText && secondaryCtaLink && (
              <Link href={secondaryCtaLink}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm 
                             text-white font-medium border-2 border-white/30
                             hover:bg-white/20 transition-smooth"
                >
                  {secondaryCtaText}
                </motion.button>
              </Link>
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-white/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/20 rounded-full blur-3xl"
      />
    </motion.div>
  )
}
