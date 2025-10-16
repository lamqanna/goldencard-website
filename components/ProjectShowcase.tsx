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

interface ProjectShowcaseProps {
  locale: Locale
}

export function ProjectShowcase({ locale }: ProjectShowcaseProps) {
  const projects: Project[] = [
    {
      id: "19",
      title: locale === "vi" ? "Dự án thẻ từ 1" : locale === "zh" ? "卡片项目 1" : "Card Project 1",
      description: locale === "vi" ? "Giải pháp thẻ từ toàn diện" : locale === "zh" ? "综合卡片解决方案" : "Comprehensive card solution",
      image: "/Projects/Cards/19.png"
    },
    {
      id: "20",
      title: locale === "vi" ? "Dự án thẻ từ 2" : locale === "zh" ? "卡片项目 2" : "Card Project 2",
      description: locale === "vi" ? "Hệ thống quản lý thẻ thông minh" : locale === "zh" ? "智能卡管理系统" : "Smart card management system",
      image: "/Projects/Cards/20.png"
    },
    {
      id: "21",
      title: locale === "vi" ? "Dự án thẻ từ 3" : locale === "zh" ? "卡片项目 3" : "Card Project 3",
      description: locale === "vi" ? "Giải pháp thanh toán không tiếp xúc" : locale === "zh" ? "非接触式支付解决方案" : "Contactless payment solution",
      image: "/Projects/Cards/21.png"
    },
    {
      id: "22",
      title: locale === "vi" ? "Dự án thẻ ngân hàng 1" : locale === "zh" ? "银行卡项目 1" : "Bank Card Project 1",
      description: locale === "vi" ? "Thẻ tín dụng cao cấp" : locale === "zh" ? "高级信用卡" : "Premium credit card",
      image: "/Projects/Cards/22.png"
    },
    {
      id: "23",
      title: locale === "vi" ? "Dự án thẻ ngân hàng 2" : locale === "zh" ? "银行卡项目 2" : "Bank Card Project 2",
      description: locale === "vi" ? "Thẻ ATM an toàn" : locale === "zh" ? "安全ATM卡" : "Secure ATM card",
      image: "/Projects/Cards/23.png"
    },
    {
      id: "24",
      title: locale === "vi" ? "Dự án thẻ thành viên" : locale === "zh" ? "会员卡项目" : "Membership Card Project",
      description: locale === "vi" ? "Chương trình khách hàng thân thiết" : locale === "zh" ? "忠诚客户计划" : "Loyalty customer program",
      image: "/Projects/Cards/24.png"
    },
    {
      id: "25",
      title: locale === "vi" ? "Dự án thẻ doanh nghiệp" : locale === "zh" ? "企业卡项目" : "Corporate Card Project",
      description: locale === "vi" ? "Giải pháp cho doanh nghiệp" : locale === "zh" ? "企业解决方案" : "Enterprise solution",
      image: "/Projects/Cards/25.png"
    },
  ]

  const title = {
    vi: "Dự án tiêu biểu",
    zh: "代表性项目",
    en: "Featured Projects"
  }

  const subtitle = {
    vi: "Những dự án thành công đã triển khai cho khách hàng",
    zh: "为客户成功实施的项目",
    en: "Successfully implemented projects for clients"
  }

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-gold-50/20 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-40 right-20 w-80 h-80 bg-gold-200 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-teal-200 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={motionVariants.staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              variants={motionVariants.fadeUpScale}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                         bg-gradient-to-r from-gold-50 to-white
                         border border-gold-200/50 shadow-lg mb-6"
            >
              <span className="text-2xl">🏆</span>
              <span className="text-sm font-semibold text-neutral-800">
                {locale === "vi" ? "Thành tựu của chúng tôi" : locale === "zh" ? "我们的成就" : "Our Achievements"}
              </span>
            </motion.div>
            
            <motion.h2
              variants={motionVariants.fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-gold-600 via-gold-500 to-neutral-900 bg-clip-text text-transparent">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={motionVariants.fadeUpScale}
                custom={index}
                whileHover={{ y: -12, transition: { duration: 0.4 } }}
                className="group relative rounded-2xl overflow-hidden
                         bg-white border border-neutral-200/50
                         shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gold-50 to-neutral-50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 
                             group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                                opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Success badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full 
                                bg-gold-500/90 backdrop-blur-sm
                                flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-white">
                      ✓ {locale === "vi" ? "Hoàn thành" : locale === "zh" ? "已完成" : "Completed"}
                    </span>
                  </div>
                  
                  {/* Project Info */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="text-lg md:text-xl font-bold mb-2 drop-shadow-lg leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/95 leading-relaxed
                                opacity-0 group-hover:opacity-100 
                                transform translate-y-2 group-hover:translate-y-0
                                transition-all duration-500 delay-75">
                      {project.description}
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
                value: "200+", 
                label: locale === "vi" ? "Dự án thành công" : locale === "zh" ? "成功项目" : "Successful Projects",
                icon: "🎯"
              },
              { 
                value: "100%", 
                label: locale === "vi" ? "Khách hàng hài lòng" : locale === "zh" ? "客户满意度" : "Client Satisfaction",
                icon: "⭐"
              },
              { 
                value: "15+", 
                label: locale === "vi" ? "Năm kinh nghiệm" : locale === "zh" ? "年经验" : "Years Experience",
                icon: "📅"
              },
              { 
                value: "50+", 
                label: locale === "vi" ? "Đối tác tin cậy" : locale === "zh" ? "可信赖的合作伙伴" : "Trusted Partners",
                icon: "🤝"
              },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 md:p-8 rounded-2xl 
                         bg-gradient-to-br from-white to-gold-50/30
                         border border-gold-200/40 shadow-lg hover:shadow-xl
                         transition-all duration-300 hover:scale-105"
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-3
                              bg-gradient-to-r from-gold-600 via-gold-500 to-neutral-900 
                              bg-clip-text text-transparent">
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
