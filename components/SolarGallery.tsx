"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Sun } from "lucide-react"
import { useState, useEffect } from "react"
import type { Locale } from "@/lib/i18n"
import { motionVariants } from "@/lib/motion-variants"

interface SolarGalleryProps {
  locale: Locale
}

export function SolarGallery({ locale }: SolarGalleryProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Featured hero images for carousel
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=85",
      title: locale === "vi" ? "Tấm pin mặt trời hiện đại" : locale === "zh" ? "现代太阳能电池板" : "Modern Solar Panels",
      description: locale === "vi" ? "Hệ thống năng lượng sạch cho tương lai" : locale === "zh" ? "未来的清洁能源系统" : "Clean energy system for the future"
    },
    {
      url: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1400&q=85",
      title: locale === "vi" ? "Trang trại năng lượng mặt trời" : locale === "zh" ? "太阳能农场" : "Solar Energy Farm",
      description: locale === "vi" ? "Nguồn năng lượng tái tạo bền vững" : locale === "zh" ? "可持续的可再生能源" : "Sustainable renewable energy"
    },
    {
      url: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1400&q=85",
      title: locale === "vi" ? "Giải pháp năng lượng xanh" : locale === "zh" ? "绿色能源解决方案" : "Green Energy Solution",
      description: locale === "vi" ? "Tiết kiệm chi phí, bảo vệ môi trường" : locale === "zh" ? "节省成本，保护环境" : "Cost savings, environmental protection"
    },
  ]

  const images = [
    {
      url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      title: locale === "vi" ? "Tấm pin mặt trời hiện đại" : locale === "zh" ? "现代太阳能电池板" : "Modern Solar Panels",
      description: locale === "vi" ? "Công nghệ năng lượng sạch tiên tiến" : locale === "zh" ? "先进的清洁能源技术" : "Advanced clean energy technology"
    },
    {
      url: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
      title: locale === "vi" ? "Hệ thống điện mặt trời quy mô lớn" : locale === "zh" ? "大型太阳能发电系统" : "Large-scale Solar System",
      description: locale === "vi" ? "Giải pháp năng lượng bền vững" : locale === "zh" ? "可持续能源解决方案" : "Sustainable energy solution"
    },
    {
      url: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
      title: locale === "vi" ? "Trang trại năng lượng mặt trời" : locale === "zh" ? "太阳能农场" : "Solar Farm",
      description: locale === "vi" ? "Năng lượng tái tạo cho tương lai" : locale === "zh" ? "可再生能源的未来" : "Renewable energy for the future"
    },
    {
      url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
      title: locale === "vi" ? "Lắp đặt pin mặt trời" : locale === "zh" ? "太阳能电池板安装" : "Solar Panel Installation",
      description: locale === "vi" ? "Dịch vụ lắp đặt chuyên nghiệp" : locale === "zh" ? "专业安装服务" : "Professional installation service"
    },
    {
      url: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80",
      title: locale === "vi" ? "Năng lượng xanh" : locale === "zh" ? "绿色能源" : "Green Energy",
      description: locale === "vi" ? "Giảm chi phí điện hiệu quả" : locale === "zh" ? "有效降低电费" : "Effective electricity cost reduction"
    },
    {
      url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
      title: locale === "vi" ? "Hệ thống năng lượng thông minh" : locale === "zh" ? "智能能源系统" : "Smart Energy System",
      description: locale === "vi" ? "Giám sát và tối ưu hóa năng lượng" : locale === "zh" ? "能源监控和优化" : "Energy monitoring and optimization"
    },
  ]

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Premium background with sunrise and nature */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-yellow-50/60 to-teal-50/80" />
      
      {/* Sunrise background image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1920&q=80"
          alt="Sunrise with trees"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Animated sun rays */}
      <div className="absolute top-10 right-10 w-96 h-96 opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/40 via-orange-300/20 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Green nature accents */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teal-100/30 to-transparent" />
      
      {/* Floating light particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }} />
        <div className="absolute top-40 right-32 w-48 h-48 bg-orange-200/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }} />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={motionVariants.staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              variants={motionVariants.fadeUpScale}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                         bg-gradient-to-r from-yellow-50 to-teal-50
                         border border-yellow-200/50 shadow-lg mb-6"
            >
              <Sun className="w-4 h-4 text-yellow-600 animate-pulse" />
              <span className="text-sm font-semibold text-neutral-800">
                {locale === "vi" ? "Năng lượng xanh - Tương lai bền vững" : locale === "zh" ? "绿色能源 - 可持续未来" : "Green Energy - Sustainable Future"}
              </span>
            </motion.div>
            
            <motion.h2
              variants={motionVariants.fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-yellow-700 via-orange-600 to-teal-700 bg-clip-text text-transparent
                             drop-shadow-lg" style={{ WebkitTextStroke: '0.5px rgba(212, 175, 55, 0.1)' }}>
                {locale === "vi" 
                  ? "Hệ thống năng lượng mặt trời" 
                  : locale === "zh" 
                  ? "太阳能系统展示" 
                  : "Solar Energy Systems"}
              </span>
            </motion.h2>
            
            <motion.p
              variants={motionVariants.fadeUp}
              className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed"
            >
              {locale === "vi"
                ? "Khám phá các dự án năng lượng mặt trời hiện đại, tiết kiệm chi phí và thân thiện với môi trường"
                : locale === "zh"
                ? "探索现代化、节约成本且环保的太阳能项目"
                : "Explore modern, cost-effective and eco-friendly solar energy projects"}
            </motion.p>
          </div>

          {/* Image Carousel Section - Replaces video */}
          <motion.div
            variants={motionVariants.fadeUpScale}
            className="mb-16"
          >
            <div className="relative aspect-[21/9] md:aspect-[16/7] rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroImages[currentSlide].url}
                    alt={heroImages[currentSlide].title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Text overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg"
                    >
                      {heroImages[currentSlide].title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-base md:text-lg text-white/95 drop-shadow-md max-w-2xl"
                    >
                      {heroImages[currentSlide].description}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full 
                         bg-white/90 backdrop-blur-sm shadow-xl
                         flex items-center justify-center
                         hover:bg-white hover:scale-110 transition-all duration-300
                         z-10 group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-neutral-800 group-hover:text-teal-600 transition-colors" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full 
                         bg-white/90 backdrop-blur-sm shadow-xl
                         flex items-center justify-center
                         hover:bg-white hover:scale-110 transition-all duration-300
                         z-10 group"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-neutral-800 group-hover:text-teal-600 transition-colors" />
              </button>

              {/* Slide indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={motionVariants.fadeUpScale}
                whileHover={{ y: -12, transition: { duration: 0.4 } }}
                className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500
                         bg-white border border-neutral-200/50"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-yellow-50 to-teal-50">
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Premium overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent
                                opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
                  
                  {/* Green energy badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full 
                                bg-teal-500/90 backdrop-blur-sm
                                flex items-center gap-1.5 opacity-0 group-hover:opacity-100
                                transition-opacity duration-500">
                    <Sun className="w-3.5 h-3.5 text-white" />
                    <span className="text-xs font-semibold text-white">
                      {locale === "vi" ? "Xanh" : locale === "zh" ? "绿色" : "Green"}
                    </span>
                  </div>
                  
                  {/* Text Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="text-lg md:text-xl font-bold mb-2 drop-shadow-lg leading-tight">
                      {image.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/95 leading-relaxed
                                opacity-0 group-hover:opacity-100 
                                transform translate-y-2 group-hover:translate-y-0
                                transition-all duration-500 delay-75">
                      {image.description}
                    </p>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Footer */}
          <motion.div
            variants={motionVariants.fadeUpScale}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { 
                value: "500+", 
                label: locale === "vi" ? "Dự án hoàn thành" : locale === "zh" ? "已完成项目" : "Projects Completed",
                icon: "🏆"
              },
              { 
                value: "50MW", 
                label: locale === "vi" ? "Tổng công suất" : locale === "zh" ? "总容量" : "Total Capacity",
                icon: "⚡"
              },
              { 
                value: "15+", 
                label: locale === "vi" ? "Năm kinh nghiệm" : locale === "zh" ? "年经验" : "Years Experience",
                icon: "📅"
              },
              { 
                value: "98%", 
                label: locale === "vi" ? "Khách hàng hài lòng" : locale === "zh" ? "客户满意度" : "Client Satisfaction",
                icon: "⭐"
              },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 md:p-8 rounded-2xl 
                         bg-gradient-to-br from-white to-yellow-50/50
                         border border-yellow-200/40 shadow-lg hover:shadow-xl
                         transition-all duration-300 hover:scale-105"
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-3
                              bg-gradient-to-r from-yellow-700 via-orange-600 to-teal-700 
                              bg-clip-text text-transparent
                              drop-shadow-md" style={{ WebkitTextStroke: '0.5px rgba(212, 175, 55, 0.1)' }}>
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-medium text-neutral-700 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
