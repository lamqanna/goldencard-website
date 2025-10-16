"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { Locale } from "@/lib/i18n"
import { motionVariants } from "@/lib/motion-variants"

interface Project {
  id: string
  title: string
  description: string
  image: string
}

interface SolarProjectShowcaseProps {
  locale: Locale
}

export function SolarProjectShowcase({ locale }: SolarProjectShowcaseProps) {
  const projects: Project[] = [
    {
      id: "solar-1",
      title: locale === "vi" ? "Dự án điện mặt trời 1" : locale === "zh" ? "太阳能项目 1" : "Solar Project 1",
      description: locale === "vi" ? "Hệ thống năng lượng mặt trời quy mô lớn" : locale === "zh" ? "大规模太阳能系统" : "Large-scale solar energy system",
      image: "/Projects/Cards/24.png"
    },
    {
      id: "solar-2",
      title: locale === "vi" ? "Dự án điện mặt trời 2" : locale === "zh" ? "太阳能项目 2" : "Solar Project 2",
      description: locale === "vi" ? "Giải pháp năng lượng sạch cho doanh nghiệp" : locale === "zh" ? "企业清洁能源解决方案" : "Clean energy solution for enterprises",
      image: "/Projects/Cards/25.png"
    },
  ]

  const title = {
    vi: "Dự án năng lượng mặt trời tiêu biểu",
    zh: "代表性太阳能项目",
    en: "Featured Solar Energy Projects"
  }

  const subtitle = {
    vi: "Những dự án năng lượng xanh đã triển khai thành công",
    zh: "成功实施的绿色能源项目",
    en: "Successfully implemented green energy projects"
  }

  const stats = [
    {
      icon: "🌞",
      value: "150+",
      label: {
        vi: "Dự án năng lượng mặt trời",
        zh: "太阳能项目",
        en: "Solar Projects"
      }
    },
    {
      icon: "⚡",
      value: "500+ MW",
      label: {
        vi: "Công suất lắp đặt",
        zh: "安装容量",
        en: "Installed Capacity"
      }
    },
    {
      icon: "🌱",
      value: "100%",
      label: {
        vi: "Năng lượng tái tạo",
        zh: "可再生能源",
        en: "Renewable Energy"
      }
    },
    {
      icon: "🏆",
      value: "50+",
      label: {
        vi: "Khách hàng hài lòng",
        zh: "满意客户",
        en: "Satisfied Clients"
      }
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-teal-50/20 to-white">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={motionVariants.staggerContainer}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              variants={motionVariants.fadeUpScale}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                         bg-gradient-to-r from-teal-50 to-white
                         border border-teal-200/50 shadow-lg mb-6"
            >
              <span className="text-2xl">☀️</span>
              <span className="text-sm font-semibold text-neutral-800">
                {locale === "vi" ? "Năng lượng xanh" : locale === "zh" ? "绿色能源" : "Green Energy"}
              </span>
            </motion.div>
            
            <motion.h2
              variants={motionVariants.fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-teal-800 via-teal-700 to-green-700 bg-clip-text text-transparent
                             drop-shadow-lg" style={{ WebkitTextStroke: '0.5px rgba(13, 148, 136, 0.1)' }}>
                {title[locale]}
              </span>
            </motion.h2>
            
            <motion.p
              variants={motionVariants.fadeUp}
              className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed"
            >
              {subtitle[locale]}
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={motionVariants.fadeUpScale}
                custom={index}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl overflow-hidden
                         bg-white border border-neutral-200/50
                         shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-teal-50 to-neutral-50 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 
                             group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Gradient overlay - Darker for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent
                                opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Success badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full 
                                bg-teal-500/95 backdrop-blur-sm shadow-lg
                                flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-white drop-shadow-md">
                      ✓ {locale === "vi" ? "Hoàn thành" : locale === "zh" ? "已完成" : "Completed"}
                    </span>
                  </div>
                  
                  {/* Project Info - Enhanced text contrast */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="text-lg md:text-2xl font-black mb-2 leading-tight
                                 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.5)' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base font-medium leading-relaxed
                                opacity-0 group-hover:opacity-100 
                                transform translate-y-2 group-hover:translate-y-0
                                transition-all duration-500 delay-75
                                text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                       style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                  transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Grid */}
          <motion.div
            variants={motionVariants.fadeUpScale}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={motionVariants.fadeUpScale}
                custom={index}
                whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.3 } }}
                className="relative p-6 md:p-8 rounded-2xl
                         bg-gradient-to-br from-white to-teal-50/30
                         border border-teal-200/30
                         shadow-md hover:shadow-xl transition-all duration-300
                         text-center"
              >
                {/* Icon */}
                <div className="text-4xl mb-3">{stat.icon}</div>
                
                {/* Value */}
                <div className="text-2xl md:text-3xl font-black mb-2">
                  <span className="bg-gradient-to-r from-teal-800 via-teal-700 to-green-700 bg-clip-text text-transparent
                                 drop-shadow-lg" style={{ WebkitTextStroke: '0.5px rgba(20, 184, 166, 0.1)' }}>
                    {stat.value}
                  </span>
                </div>
                
                {/* Label */}
                <div className="text-xs md:text-sm text-neutral-700 font-medium">
                  {stat.label[locale]}
                </div>

                {/* Decorative glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent rounded-2xl blur-xl" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
