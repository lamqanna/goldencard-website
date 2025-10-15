"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import type { NavItem } from "@/lib/navigation"
import type { Locale } from "@/lib/i18n"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { Menu, X } from "lucide-react"

interface PremiumNavbarProps {
  locale: Locale
  navItems: NavItem[]
  tagline: string
}

export function PremiumNavbar({ locale, navItems, tagline }: PremiumNavbarProps) {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
  }, [scrollY])

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]
  )

  const borderOpacity = useTransform(scrollY, [0, 50], [0, 0.5])

  return (
    <motion.header
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                  ${isScrolled ? "shadow-lux backdrop-blur-xl" : ""}`}
    >
      <motion.div
        style={{
          borderBottomColor: useTransform(
            borderOpacity,
            (value) => `rgba(228, 228, 231, ${value})`
          ),
        }}
        className="border-b"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <Link href={`/${locale}`} className="relative group">
                <span className="text-2xl font-display font-bold text-gradient-brand">
                  GoldenCard
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold-500 to-teal-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <span className="text-sm text-neutral-400 hidden lg:block">|</span>
              <span className="text-sm text-neutral-600 hidden lg:block max-w-xs truncate">
                {tagline}
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-neutral-700
                               hover:text-gold-600 transition-colors group"
                  >
                    {item.label}
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                                 bg-gradient-to-r from-gold-500 to-teal-500
                                 group-hover:w-3/4 transition-all duration-300"
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <LocaleSwitcher locale={locale} />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-neutral-700 hover:text-gold-600 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden overflow-hidden glass border-b border-neutral-200/50"
      >
        <nav className="container mx-auto px-6 py-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-neutral-700 hover:bg-gold-50/50
                         hover:text-gold-600 transition-all font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  )
}
