'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Calendar, Zap, ArrowUpRight } from 'lucide-react'
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
    <section id="projects" className="py-24 lg:py-32 bg-gradient-to-b from-white via-gold-50/30 to-white relative overflow-hidden">
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
            Dự án tiêu biểu
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hơn 500+ Dự Án Thành Công
          </h2>
          <p className="text-lg text-gray-600">
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
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes={isLarge ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
              {project.category}
            </span>
          </div>

          {/* Arrow Icon */}
          <motion.div
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1, rotate: 45 }}
          >
            <ArrowUpRight className="w-5 h-5 text-gray-900" />
          </motion.div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="font-playfair text-xl lg:text-2xl font-bold mb-3 group-hover:text-gold-300 transition-colors">
              {project.title}
            </h3>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/90">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-gold-400" />
                <span className="font-semibold">{project.capacity}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
