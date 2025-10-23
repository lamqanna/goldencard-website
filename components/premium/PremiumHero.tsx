'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sun, Zap, Leaf, TrendingUp, Shield, Award } from 'lucide-react'
import { motionVariants } from '@/lib/motion-variants'

export default function PremiumHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Elegant Background with Image */}
      <div className="absolute inset-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gold-900">
          {/* You can add real image here later */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23d4af37" fill-opacity="0.4"><path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/></g></g></svg>')`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Gradient Overlays for Luxury Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        
        {/* Animated Light Beams */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-gold-500/20 via-transparent to-transparent blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-gold-600/15 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Decorative Golden Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50" />

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
              <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                Năng Lượng Sạch
                <span className="block bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent drop-shadow-lg">
                  Tương Lai Xanh
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-xl drop-shadow-lg">
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
                  <stat.icon className="w-6 h-6 text-gold-400" />
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/lien-he"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:via-gold-400 hover:to-gold-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-2xl shadow-gold-600/50 hover:shadow-gold-500/60 hover:-translate-y-1"
              >
                Tư vấn miễn phí
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/du-an"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold border-2 border-white/30 hover:border-gold-400 backdrop-blur-sm transition-all duration-300"
              >
                Xem dự án
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 pt-4 text-sm text-gray-300">
              <Shield className="w-5 h-5 text-green-400" />
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
            {/* Main Visual Card with Luxury Background */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {/* Luxury gradient background with pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/90 via-amber-500/80 to-gold-600/90">
                {/* Decorative Grid Pattern */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                  backgroundSize: '50px 50px'
                }} />
                
                {/* Radial Glow */}
                <div className="absolute inset-0 bg-gradient-radial from-white/30 via-transparent to-transparent" />
              </div>
              
              {/* Central Icon with Glow Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Glow rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-white/30 blur-2xl animate-pulse" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gold-200/40 blur-xl" />
                  </div>
                  
                  {/* Icon */}
                  <Sun className="w-24 h-24 text-white drop-shadow-2xl relative z-10" />
                </div>
              </div>
              
              {/* Bottom gradient fade */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>

            {/* Floating Card - Energy Saved with Glass Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">-65%</div>
                  <div className="text-sm text-gray-600">Tiết kiệm điện năng</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge - Verified with Gradient */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700 rounded-full flex items-center justify-center shadow-2xl shadow-gold-600/50"
            >
              <div className="text-center">
                <Award className="w-8 h-8 text-white mx-auto mb-1 drop-shadow-lg" />
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
