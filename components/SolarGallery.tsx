"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Play } from "lucide-react"
import { useState } from "react"
import type { Locale } from "@/lib/i18n"
import { motionVariants } from "@/lib/motion-variants"

interface SolarGalleryProps {
  locale: Locale
}

export function SolarGallery({ locale }: SolarGalleryProps) {
  const [videoPlaying, setVideoPlaying] = useState(false)

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

  const videoUrl = "https://www.youtube.com/embed/5530I_pYjbo" // Sample solar energy video

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-teal-50/30 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-100/20 rounded-full blur-3xl" />
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
          <div className="text-center mb-12">
            <motion.div
              variants={motionVariants.fadeUpScale}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                         glass shadow-sm mb-4 border border-teal-200/50"
            >
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-neutral-700">
                {locale === "vi" ? "Thư viện hình ảnh" : locale === "zh" ? "图库展示" : "Image Gallery"}
              </span>
            </motion.div>
            
            <motion.h2
              variants={motionVariants.fadeUp}
              className="text-4xl md:text-5xl font-display font-bold text-gradient-elegant mb-4"
            >
              {locale === "vi" 
                ? "Hệ thống năng lượng mặt trời" 
                : locale === "zh" 
                ? "太阳能系统展示" 
                : "Solar Energy Systems"}
            </motion.h2>
            
            <motion.p
              variants={motionVariants.fadeUp}
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
            >
              {locale === "vi"
                ? "Khám phá các dự án năng lượng mặt trời hiện đại và bền vững"
                : locale === "zh"
                ? "探索现代化和可持续的太阳能项目"
                : "Explore modern and sustainable solar energy projects"}
            </motion.p>
          </div>

          {/* Video Section */}
          <motion.div
            variants={motionVariants.fadeUpScale}
            className="mb-12 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="relative aspect-video bg-neutral-900">
              {!videoPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80"
                    alt="Solar Energy Video Thumbnail"
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => setVideoPlaying(true)}
                    className="relative z-10 flex items-center gap-3 px-8 py-4 
                             bg-white/95 backdrop-blur-sm rounded-full
                             shadow-xl hover:shadow-2xl transition-all duration-300
                             hover:scale-105 group"
                  >
                    <Play className="w-6 h-6 text-teal-600 fill-teal-600 
                                   group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-neutral-900">
                      {locale === "vi" 
                        ? "Xem video giới thiệu" 
                        : locale === "zh" 
                        ? "观看介绍视频" 
                        : "Watch Introduction Video"}
                    </span>
                  </button>
                </div>
              ) : (
                <iframe
                  src={videoUrl}
                  title="Solar Energy Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={motionVariants.fadeUpScale}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                                opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Text Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white transform 
                                translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-semibold mb-2 drop-shadow-lg">
                      {image.title}
                    </h3>
                    <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 delay-100">
                      {image.description}
                    </p>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Footer */}
          <motion.div
            variants={motionVariants.fadeUpScale}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { 
                value: "500+", 
                label: locale === "vi" ? "Dự án hoàn thành" : locale === "zh" ? "已完成项目" : "Projects Completed" 
              },
              { 
                value: "50MW", 
                label: locale === "vi" ? "Tổng công suất" : locale === "zh" ? "总容量" : "Total Capacity" 
              },
              { 
                value: "15+", 
                label: locale === "vi" ? "Năm kinh nghiệm" : locale === "zh" ? "年经验" : "Years Experience" 
              },
              { 
                value: "98%", 
                label: locale === "vi" ? "Khách hàng hài lòng" : locale === "zh" ? "客户满意度" : "Client Satisfaction" 
              },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl glass border border-teal-200/30">
                <div className="text-3xl md:text-4xl font-bold text-gradient-elegant mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
