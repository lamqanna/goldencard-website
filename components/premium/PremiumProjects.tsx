'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Calendar, Zap, ArrowUpRight, Sun } from 'lucide-react'
import { motionVariants } from '@/lib/motion-variants'

const featuredProjects = [
  {
    id: 1,
    title: 'Nhà máy Solar 5MW',
    location: 'Bình Dương',
    date: '2024',
    capacity: '5.0 MW',
    image: '/images/projects/project-1.jpg',
    category: 'Thương mại',
    featured: true
  },
  {
    id: 2,
    title: 'Hệ thống điện mặt trời hòa lưới',
    location: 'TP. Hồ Chí Minh',
    date: '2024',
    capacity: '100 kWp',
    image: '/images/projects/project-2.jpg',
    category: 'Công nghiệp'
  },
  {
    id: 3,
    title: 'Giải pháp năng lượng cho Resort',
    location: 'Phú Quốc',
    date: '2023',
    capacity: '250 kWp',
    image: '/images/projects/project-3.jpg',
    category: 'Du lịch'
  },
  {
    id: 4,
    title: 'Dự án Solar áp mái gia đình',
    location: 'Đồng Nai',
    date: '2024',
    capacity: '15 kWp',
    image: '/images/projects/project-4.jpg',
    category: 'Gia đình'
  },
  {
    id: 5,
    title: 'Trạm Solar công suất lớn',
    location: 'Tây Ninh',
    date: '2023',
    capacity: '10 MW',
    image: '/images/projects/project-5.jpg',
    category: 'Thương mại',
    featured: true
  },
  {
    id: 6,
    title: 'Hệ thống độc lập Off-grid',
    location: 'Lâm Đồng',
    date: '2024',
    capacity: '50 kWp',
    image: '/images/projects/project-6.jpg',
    category: 'Nông nghiệp'
  }
]

export default function PremiumProjects() {
  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0">
        {/* Dark to light gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
        
        {/* Animated light beams */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-gold-500/20 via-gold-600/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-radial from-amber-500/20 via-amber-600/10 to-transparent blur-3xl" />
        </div>
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="1"><path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/></g></g></svg>')`,
          backgroundSize: '60px 60px'
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
          <span className="inline-block text-sm font-semibold text-gold-400 tracking-wider uppercase mb-4">
            Dự án tiêu biểu
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Hơn 500+ Dự Án Thành Công
          </h2>
          <p className="text-lg text-gray-300">
            Từ hệ thống gia đình đến nhà máy điện mặt trời quy mô lớn,
            chúng tôi mang đến giải pháp tối ưu cho mọi nhu cầu.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={motionVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/du-an"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-600 hover:bg-gold-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-gold-600/30 hover:shadow-xl hover:shadow-gold-600/40 hover:-translate-y-0.5"
          >
            Xem tất cả dự án
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: typeof featuredProjects[0], index: number }) {
  const isLarge = project.featured

  return (
    <motion.div
      variants={motionVariants.fadeUp}
      className={`group relative ${isLarge ? 'md:col-span-2' : ''}`}
    >
      <Link href={`/du-an/${project.id}`}>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          {/* Luxury Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold-600 via-amber-700 to-gold-800">
            {/* Diagonal stripes pattern */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,.1) 20px, rgba(255,255,255,.1) 40px)`
            }} />
            
            {/* Radial glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent" />
          </div>
          
          {/* Decorative Icon with Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
            <div className="relative">
              <div className="absolute inset-0 bg-white/40 blur-2xl rounded-full" />
              <Sun className="w-20 h-20 text-white relative z-10" />
            </div>
          </div>
          
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Category Badge with Glass Effect */}
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium rounded-full">
              {project.category}
            </span>
            {project.featured && (
              <span className="ml-2 inline-block px-3 py-1 bg-gold-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                ⭐ NỔI BẬT
              </span>
            )}
          </div>

          {/* Arrow Icon with Gold Accent */}
          <motion.div
            className="absolute top-4 right-4 w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
            whileHover={{ scale: 1.1, rotate: 45 }}
          >
            <ArrowUpRight className="w-5 h-5 text-white" />
          </motion.div>

          {/* Content with Enhanced Contrast */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="font-playfair text-xl lg:text-2xl font-bold mb-3 group-hover:text-gold-300 transition-colors drop-shadow-lg">
              {project.title}
            </h3>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-200">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-gold-400" />
                <span className="font-semibold text-white">{project.capacity}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
