'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sun, Zap, Leaf, TrendingUp, Shield, Award } from 'lucide-react'
import { motionVariants } from '@/lib/motion-variants'

export default function PremiumHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gold-50 via-white to-gold-50/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(212 175 55) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 rounded-full border border-gold-200"
            >
              <Award className="w-4 h-4 text-gold-600" />
              <span className="text-sm font-medium text-gold-900">
                Đối tác chính thức Huawei & Growatt
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Năng Lượng Sạch
                <span className="block bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                  Tương Lai Xanh
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                Giải pháp điện mặt trời hàng đầu Việt Nam với hơn 500+ dự án thành công.
                Tiết kiệm chi phí, bảo vệ môi trường, đầu tư bền vững.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              variants={motionVariants.staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-6 pt-4"
            >
              {[
                { icon: Sun, value: '500+', label: 'Dự án' },
                { icon: Zap, value: '50MW', label: 'Công suất' },
                { icon: Leaf, value: '15+', label: 'Năm kinh nghiệm' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={motionVariants.fadeUp}
                  className="space-y-2"
                >
                  <stat.icon className="w-6 h-6 text-gold-600" />
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/lien-he"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-600 hover:bg-gold-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-gold-600/30 hover:shadow-xl hover:shadow-gold-600/40 hover:-translate-y-0.5"
              >
                Tư vấn miễn phí
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/du-an"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gold-50 text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-gold-300 transition-all duration-300"
              >
                Xem dự án
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 pt-4 text-sm text-gray-600">
              <Shield className="w-5 h-5 text-green-600" />
              <span>Bảo hành 25 năm • Lắp đặt chuyên nghiệp • Hỗ trợ 24/7</span>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            {/* Floating Cards */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gold-100 via-gold-50 to-amber-50">
              {/* Placeholder - Add real image later */}
              {/* <Image
                src="/images/hero-solar-panels.jpg"
                alt="Solar Panel Installation"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              /> */}
              
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgb(212 175 55) 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }} />
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
              
              {/* Placeholder Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Sun className="w-32 h-32 text-gold-400 opacity-40" />
              </div>
            </div>

            {/* Floating Card - Energy Saved */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">-65%</div>
                  <div className="text-sm text-gray-600">Tiết kiệm điện năng</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge - Verified */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gold-600 rounded-full flex items-center justify-center shadow-xl"
            >
              <div className="text-center">
                <Award className="w-8 h-8 text-white mx-auto mb-1" />
                <div className="text-xs font-bold text-white">Top #1</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-gold-600"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
