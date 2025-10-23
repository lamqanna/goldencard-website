'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Target, Eye, Heart, Users } from 'lucide-react'
import { motionVariants } from '@/lib/motion-variants'

const companyValues = [
  {
    icon: Target,
    title: 'Sứ mệnh',
    description: 'Mang năng lượng sạch đến mọi gia đình và doanh nghiệp Việt Nam, góp phần xây dựng tương lai xanh bền vững.'
  },
  {
    icon: Eye,
    title: 'Tầm nhìn',
    description: 'Trở thành đơn vị hàng đầu Việt Nam về giải pháp năng lượng tái tạo với công nghệ tiên tiến nhất thế giới.'
  },
  {
    icon: Heart,
    title: 'Giá trị cốt lõi',
    description: 'Chất lượng - Uy tín - Bền vững. Đặt lợi ích khách hàng lên hàng đầu với dịch vụ chuyên nghiệp.'
  },
  {
    icon: Users,
    title: 'Đội ngũ',
    description: 'Hơn 50 kỹ sư chuyên nghiệp được đào tạo bài bản, tận tâm với từng dự án và khách hàng.'
  }
]

export default function PremiumAbout() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold-50/50 via-white to-white" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-golden-energy.jpg"
                alt="Golden Energy Vietnam Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Stats Card Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
            >
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-gold-600">15+</div>
                  <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-600">98%</div>
                  <div className="text-sm text-gray-600">Hài lòng</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Circle */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-gold-100 rounded-full -z-10 blur-3xl opacity-60" />
            <div className="absolute -bottom-12 right-12 w-40 h-40 bg-gold-200 rounded-full -z-10 blur-3xl opacity-40" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Section Label */}
            <div className="inline-block">
              <span className="text-sm font-semibold text-gold-600 tracking-wider uppercase">
                Về chúng tôi
              </span>
              <div className="w-12 h-1 bg-gold-600 mt-2 rounded-full" />
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Golden Energy Vietnam
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tiên phong trong lĩnh vực năng lượng tái tạo tại Việt Nam với hơn 15 năm kinh nghiệm.
                Chúng tôi tự hào là đối tác chính thức của các thương hiệu hàng đầu thế giới như 
                <span className="font-semibold text-gray-900"> Huawei, Growatt, và Jinko Solar</span>.
              </p>
            </div>

            {/* Values Grid */}
            <motion.div
              variants={motionVariants.staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6 pt-4"
            >
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={motionVariants.fadeUp}
                  className="space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="/gioi-thieu"
                className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold group"
              >
                <span>Tìm hiểu thêm về chúng tôi</span>
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
