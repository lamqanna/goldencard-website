import PremiumHero from '@/components/premium/PremiumHero'
import PremiumAbout from '@/components/premium/PremiumAbout'
import PremiumProjects from '@/components/premium/PremiumProjects'
import PremiumBenefits from '@/components/premium/PremiumBenefits'
import PremiumPartners from '@/components/premium/PremiumPartners'
import PremiumContact from '@/components/premium/PremiumContact'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trang Chủ',
  description: 'Golden Energy Vietnam - Giải pháp điện mặt trời hàng đầu với hơn 500+ dự án thành công. Tiết kiệm chi phí, bảo vệ môi trường.',
}

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <PremiumHero />
      
      {/* About Section */}
      <PremiumAbout />
      
      {/* Projects Section */}
      <PremiumProjects />
      
      {/* Benefits Section */}
      <PremiumBenefits />
      
      {/* Partners Section */}
      <PremiumPartners />
      
      {/* Contact Section */}
      <PremiumContact />
    </main>
  )
}
