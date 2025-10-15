"use client"

import { motion } from "framer-motion"
import { ArrowRight, LucideIcon } from "lucide-react"
import Link from "next/link"
import { motionVariants, springConfig } from "@/lib/motion-variants"

interface PremiumServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  link: string
  index?: number
  features?: string[]
}

export function PremiumServiceCard({
  icon: Icon,
  title,
  description,
  link,
  index = 0,
  features = [],
}: PremiumServiceCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={motionVariants.fadeUp}
      transition={{ delay: index * 0.1 }}
      whileHover="hover"
      className="group relative h-full"
    >
      {/* Gradient Glow Effect */}
      <motion.div
        variants={{
          hover: { opacity: 1, scale: 1.05 },
        }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-teal-500 
                   rounded-2xl blur-lg opacity-0"
      />

      {/* Card Content */}
      <motion.div
        variants={{
          hover: { y: -8, scale: 1.02 },
        }}
        transition={springConfig.bouncy}
        className="relative h-full p-8 bg-white rounded-2xl border border-neutral-200
                   shadow-lg hover:shadow-float transition-smooth flex flex-col"
      >
        {/* Icon Container with Gradient Background */}
        <motion.div
          variants={{
            hover: { scale: 1.1, rotate: 5 },
          }}
          transition={springConfig.snappy}
          className="inline-flex p-4 rounded-xl bg-gradient-to-br from-gold-100 to-teal-100 
                     mb-6 w-fit relative overflow-hidden"
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          <Icon className="w-8 h-8 text-gold-600 relative z-10" />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-display font-semibold text-neutral-900 mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Features List (if provided) */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-2 text-sm text-neutral-600"
              >
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 flex-shrink-0" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        )}

        {/* Link with Arrow */}
        <Link
          href={link}
          className="inline-flex items-center gap-2 text-gold-600 font-medium
                     group-hover:gap-3 transition-all duration-300 mt-auto"
        >
          <span>Tìm hiểu thêm</span>
          <motion.div
            variants={{
              hover: { x: 5 },
            }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </Link>

        {/* Decorative Corner Gradient */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl 
                        from-gold-100/50 via-transparent to-transparent rounded-2xl 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </motion.div>
  )
}
