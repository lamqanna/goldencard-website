"use client"

import { motion } from "framer-motion"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"
import { useState } from "react"
import { motionVariants } from "@/lib/motion-variants"

interface PremiumContactFormProps {
  heading: string
  description: string
  labels: {
    name: string
    email: string
    phone: string
    company?: string
    message: string
  }
  placeholders: {
    name: string
    email: string
    phone: string
    company?: string
    message: string
  }
  buttonText: string
  successMessage: string
  errorMessage: string
  privacyNote: string
}

export function PremiumContactForm({
  heading,
  description,
  labels,
  placeholders,
  buttonText,
  successMessage,
  errorMessage,
  privacyNote,
}: PremiumContactFormProps) {
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")
      setTimeout(() => setStatus("idle"), 3000)
    }, 2000)
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={motionVariants.fadeUp}
      className="relative"
    >
      {/* Background Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="glow-orb glow-orb-gold absolute -top-20 -right-20 w-96 h-96"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="glow-orb glow-orb-teal absolute -bottom-20 -left-20 w-96 h-96"
      />

      {/* Form Container */}
      <div className="relative p-8 md:p-12 glass rounded-3xl 
                      border border-neutral-200/50 shadow-lux">
        {/* Header */}
        <motion.div variants={motionVariants.fadeUp} className="mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-2">
            {heading}
          </h2>
          <p className="text-neutral-600 text-lg">{description}</p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <motion.div variants={motionVariants.fadeUp} className="relative">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              {labels.name}
            </label>
            <motion.input
              type="text"
              required
              placeholder={placeholders.name}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              animate={{
                boxShadow:
                  focusedField === "name"
                    ? "0 0 0 3px rgba(212, 175, 55, 0.1), 0 0 20px rgba(212, 175, 55, 0.2)"
                    : "0 0 0 0px rgba(212, 175, 55, 0)",
              }}
              transition={{ duration: 0.3 }}
              className="w-full px-6 py-4 rounded-xl bg-white border-2 border-neutral-200
                         focus:border-gold-400 focus:outline-none transition-smooth
                         text-neutral-900 placeholder:text-neutral-400"
            />
          </motion.div>

          {/* Email & Phone Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={motionVariants.fadeUp}>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                {labels.email}
              </label>
              <motion.input
                type="email"
                required
                placeholder={placeholders.email}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                animate={{
                  boxShadow:
                    focusedField === "email"
                      ? "0 0 0 3px rgba(212, 175, 55, 0.1), 0 0 20px rgba(212, 175, 55, 0.2)"
                      : "0 0 0 0px rgba(212, 175, 55, 0)",
                }}
                transition={{ duration: 0.3 }}
                className="w-full px-6 py-4 rounded-xl bg-white border-2 border-neutral-200
                           focus:border-gold-400 focus:outline-none transition-smooth
                           text-neutral-900 placeholder:text-neutral-400"
              />
            </motion.div>

            <motion.div variants={motionVariants.fadeUp}>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                {labels.phone}
              </label>
              <motion.input
                type="tel"
                required
                placeholder={placeholders.phone}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                animate={{
                  boxShadow:
                    focusedField === "phone"
                      ? "0 0 0 3px rgba(212, 175, 55, 0.1), 0 0 20px rgba(212, 175, 55, 0.2)"
                      : "0 0 0 0px rgba(212, 175, 55, 0)",
                }}
                transition={{ duration: 0.3 }}
                className="w-full px-6 py-4 rounded-xl bg-white border-2 border-neutral-200
                           focus:border-gold-400 focus:outline-none transition-smooth
                           text-neutral-900 placeholder:text-neutral-400"
              />
            </motion.div>
          </div>

          {/* Company Field (optional) */}
          {labels.company && (
            <motion.div variants={motionVariants.fadeUp}>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                {labels.company}
              </label>
              <motion.input
                type="text"
                placeholder={placeholders.company}
                onFocus={() => setFocusedField("company")}
                onBlur={() => setFocusedField(null)}
                animate={{
                  boxShadow:
                    focusedField === "company"
                      ? "0 0 0 3px rgba(212, 175, 55, 0.1), 0 0 20px rgba(212, 175, 55, 0.2)"
                      : "0 0 0 0px rgba(212, 175, 55, 0)",
                }}
                transition={{ duration: 0.3 }}
                className="w-full px-6 py-4 rounded-xl bg-white border-2 border-neutral-200
                           focus:border-gold-400 focus:outline-none transition-smooth
                           text-neutral-900 placeholder:text-neutral-400"
              />
            </motion.div>
          )}

          {/* Message Field */}
          <motion.div variants={motionVariants.fadeUp}>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              {labels.message}
            </label>
            <motion.textarea
              rows={5}
              required
              placeholder={placeholders.message}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              animate={{
                boxShadow:
                  focusedField === "message"
                    ? "0 0 0 3px rgba(212, 175, 55, 0.1), 0 0 20px rgba(212, 175, 55, 0.2)"
                    : "0 0 0 0px rgba(212, 175, 55, 0)",
              }}
              transition={{ duration: 0.3 }}
              className="w-full px-6 py-4 rounded-xl bg-white border-2 border-neutral-200
                         focus:border-gold-400 focus:outline-none transition-smooth resize-none
                         text-neutral-900 placeholder:text-neutral-400"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            variants={motionVariants.fadeUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={status === "sending"}
            className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600
                       text-white font-medium shadow-lux hover:shadow-glow-gold-lg
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-smooth flex items-center justify-center gap-3"
          >
            {status === "idle" && (
              <>
                {buttonText}
                <Send className="w-5 h-5" />
              </>
            )}
            {status === "sending" && (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Đang gửi...
              </>
            )}
            {status === "success" && (
              <>
                <CheckCircle2 className="w-5 h-5" />
                {successMessage}
              </>
            )}
            {status === "error" && (
              <>
                <AlertCircle className="w-5 h-5" />
                {errorMessage}
              </>
            )}
          </motion.button>

          {/* Privacy Note */}
          <motion.p
            variants={motionVariants.fadeUp}
            className="text-sm text-neutral-500 text-center"
          >
            {privacyNote}
          </motion.p>
        </form>
      </div>
    </motion.div>
  )
}
