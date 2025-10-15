"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"
import { motionVariants } from "@/lib/motion-variants"

interface StatItemProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  index?: number
}

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`
      }
    })
  }, [springValue, prefix, suffix])

  return <span ref={ref} />
}

export function PremiumStats({ stats }: { stats: StatItemProps[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={motionVariants.staggerContainer}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={motionVariants.fadeUp}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative inline-block mb-4"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-teal-500 
                           rounded-full blur-xl opacity-20" />
            
            {/* Number */}
            <div className="relative text-4xl md:text-5xl font-display font-bold 
                           text-gradient-brand">
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </div>
          </motion.div>

          {/* Label */}
          <p className="text-sm md:text-base text-neutral-600 font-medium">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}
