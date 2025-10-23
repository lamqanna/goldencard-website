'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  TrendingDown, 
  Leaf, 
  Shield, 
  Zap, 
  Home, 
  LineChart,
  Award,
  Headphones
} from 'lucide-react'
import { motionVariants } from '@/lib/motion-variants'

const benefits = [
  {
    icon: TrendingDown,
    title: 'Tiết kiệm chi phí',
    description: 'Giảm 50-70% hóa đơn tiền điện hàng tháng, thu hồi vốn sau 4-6 năm.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Leaf,
    title: 'Thân thiện môi trường',
    description: 'Giảm 50 tấn CO₂/năm, đóng góp vào tương lai xanh bền vững.',
    color: 'from-green-600 to-teal-600'
  },
  {
    icon: Shield,
    title: 'Bảo hành dài hạn',
    description: 'Bảo hành 25 năm cho tấm pin, 10 năm cho inverter và thiết bị.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Zap,
    title: 'Hiệu suất cao',
    description: 'Công nghệ PERC mới nhất, hiệu suất chuyển đổi đến 22%.',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: Home,
    title: 'Tăng giá trị BĐS',
    description: 'Nhà có điện mặt trời tăng giá 10-15% khi bán hoặc cho thuê.',
    color: 'from-gold-500 to-amber-600'
  },
  {
    icon: LineChart,
    title: 'Theo dõi thời gian thực',
    description: 'App giám sát 24/7, xem dữ liệu sản xuất và tiết kiệm mọi lúc.',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: Award,
    title: 'Chất lượng đảm bảo',
    description: 'Thiết bị chính hãng từ Huawei, Growatt, đạt chuẩn quốc tế.',
    color: 'from-red-500 to-rose-600'
  },
  {
    icon: Headphones,
    title: 'Hỗ trợ 24/7',
    description: 'Đội ngũ kỹ thuật sẵn sàng hỗ trợ, bảo trì định kỳ miễn phí.',
    color: 'from-cyan-500 to-blue-600'
  }
]

export default function PremiumBenefits() {
  return (
    <section id="benefits" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(212 175 55) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

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
            Lợi ích vượt trội
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tại Sao Chọn Điện Mặt Trời?
          </h2>
          <p className="text-lg text-gray-600">
            Đầu tư thông minh cho hiện tại và tương lai. Tiết kiệm chi phí,
            bảo vệ môi trường và tăng giá trị tài sản.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={motionVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={motionVariants.fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-gold-200 transition-all duration-300 shadow-sm hover:shadow-xl">
                {/* Icon with Gradient */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-xl text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 4, y: -4 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center">
                    <span className="text-gold-600 text-sm">→</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-br from-gold-50 to-amber-50 rounded-2xl border border-gold-200">
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                Bạn muốn tính toán chi phí và lợi ích cụ thể?
              </h3>
              <p className="text-gray-600">
                Đội ngũ chuyên gia sẵn sàng tư vấn miễn phí và khảo sát tận nơi.
              </p>
            </div>
            <Link
              href="/lien-he"
              className="shrink-0 px-8 py-4 bg-gold-600 hover:bg-gold-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Nhận tư vấn ngay
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
