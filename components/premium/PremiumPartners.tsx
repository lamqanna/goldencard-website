'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { motionVariants } from '@/lib/motion-variants'

const partners = [
  {
    name: 'Huawei',
    logo: '/images/partners/huawei-logo.png',
    description: 'Inverter & Smart Energy',
    featured: true
  },
  {
    name: 'Growatt',
    logo: '/images/partners/growatt-logo.png',
    description: 'Solar Inverter Solutions'
  },
  {
    name: 'Jinko Solar',
    logo: '/images/partners/jinko-logo.png',
    description: 'Premium Solar Panels'
  },
  {
    name: 'Longi Solar',
    logo: '/images/partners/longi-logo.png',
    description: 'High-Efficiency Modules'
  },
  {
    name: 'Canadian Solar',
    logo: '/images/partners/canadian-solar-logo.png',
    description: 'Solar Technology'
  },
  {
    name: 'Fronius',
    logo: '/images/partners/fronius-logo.png',
    description: 'Inverter Technology'
  }
]

const certifications = [
  'ISO 9001:2015',
  'ISO 14001:2015',
  'CE Certified',
  'IEC Standards',
  'TÜV Certified',
  'VDE Approved'
]

export default function PremiumPartners() {
  return (
    <section id="partners" className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gold-50/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-gold-600 tracking-wider uppercase mb-4">
            Đối tác công nghệ
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hợp Tác Cùng Thương Hiệu Hàng Đầu
          </h2>
          <p className="text-lg text-gray-600">
            Chúng tôi là đối tác chính thức của các thương hiệu năng lượng mặt trời 
            uy tín nhất thế giới, đảm bảo chất lượng và hiệu suất vượt trội.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={motionVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={motionVariants.fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative h-32 p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-gold-300 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col items-center justify-center">
                {/* Logo placeholder - replace with actual logos */}
                <div className="relative w-full h-16 mb-2 grayscale hover:grayscale-0 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
                      {partner.name}
                    </span>
                  </div>
                </div>
                
                {partner.featured && (
                  <div className="absolute -top-2 -right-2 px-2 py-1 bg-gold-600 text-white text-xs font-bold rounded-full">
                    ⭐ VIP
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                Chứng nhận chất lượng quốc tế
              </h3>
              <p className="text-gray-600">
                Sản phẩm và dịch vụ đạt các tiêu chuẩn nghiêm ngặt nhất
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gold-50 hover:border-gold-300 hover:text-gold-700 transition-colors"
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: '15+', label: 'Năm kinh nghiệm' },
            { value: '500+', label: 'Dự án hoàn thành' },
            { value: '50MW', label: 'Tổng công suất' },
            { value: '98%', label: 'Khách hài lòng' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-gold-50 to-amber-50 rounded-xl border border-gold-200">
              <div className="text-3xl lg:text-4xl font-bold text-gold-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
