'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { motionVariants } from '@/lib/motion-variants'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Hotline',
    value: '1900 xxxx',
    description: 'Hỗ trợ 24/7',
    action: 'tel:1900xxxx'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@goldenenergy.vn',
    description: 'Phản hồi trong 24h',
    action: 'mailto:info@goldenenergy.vn'
  },
  {
    icon: MapPin,
    title: 'Văn phòng HCM',
    value: 'Quận 1, TP.HCM',
    description: 'Trụ sở chính',
    action: null
  },
  {
    icon: Clock,
    title: 'Giờ làm việc',
    value: '8:00 - 18:00',
    description: 'Thứ 2 - Thứ 7',
    action: null
  }
]

export default function PremiumContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Implement actual form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.')
    setFormData({ name: '', email: '', phone: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
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
            Liên hệ với chúng tôi
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nhận Tư Vấn Miễn Phí
          </h2>
          <p className="text-lg text-gray-600">
            Đội ngũ chuyên gia sẵn sàng tư vấn và khảo sát tận nơi.
            Gửi thông tin để nhận báo giá chi tiết trong 24h.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8, transition: { duration: 0.3 } }}
                  className="group"
                >
                  {info.action ? (
                    <a href={info.action} className="block">
                      <ContactCard info={info} />
                    </a>
                  ) : (
                    <ContactCard info={info} />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative h-64 rounded-2xl overflow-hidden bg-gray-100 border-2 border-gray-200"
            >
              {/* TODO: Replace with actual Google Maps embed */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gold-600 mx-auto mb-2" />
                  <p className="text-gray-600 font-medium">Google Maps</p>
                  <p className="text-sm text-gray-500">Trụ sở chính - TP.HCM</p>
                </div>
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="p-6 bg-gradient-to-br from-gold-50 to-amber-50 rounded-xl border border-gold-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-600 flex items-center justify-center shrink-0">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Cam kết phản hồi nhanh
                  </h4>
                  <p className="text-sm text-gray-600">
                    Hơn 1000+ khách hàng tin tưởng. Chúng tôi phản hồi mọi yêu cầu trong vòng 2 giờ.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gold-500 focus:ring-4 focus:ring-gold-100 outline-none transition-all duration-200"
                  placeholder="Nguyễn Văn A"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gold-500 focus:ring-4 focus:ring-gold-100 outline-none transition-all duration-200"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gold-500 focus:ring-4 focus:ring-gold-100 outline-none transition-all duration-200"
                    placeholder="0901 234 567"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nội dung *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gold-500 focus:ring-4 focus:ring-gold-100 outline-none transition-all duration-200 resize-none"
                  placeholder="Tôi muốn tư vấn về giải pháp điện mặt trời cho nhà riêng..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gold-600 hover:bg-gold-700 disabled:bg-gray-400 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-gold-600/30 hover:shadow-xl hover:shadow-gold-600/40 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Đang gửi...</span>
                  </>
                ) : (
                  <>
                    <span>Gửi yêu cầu tư vấn</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {/* Privacy Note */}
              <p className="text-xs text-center text-gray-500">
                Thông tin của bạn được bảo mật tuyệt đối. Chúng tôi không chia sẻ với bên thứ ba.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ info }: { info: typeof contactInfo[0] }) {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-gold-300 transition-all duration-300 shadow-sm hover:shadow-lg">
      <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center shrink-0">
        <info.icon className="w-6 h-6 text-gold-600" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-500 mb-1">{info.title}</h4>
        <p className="font-semibold text-lg text-gray-900 mb-0.5">{info.value}</p>
        <p className="text-sm text-gray-600">{info.description}</p>
      </div>
    </div>
  )
}
