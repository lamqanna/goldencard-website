'use client'

import PremiumHero from '@/components/premium/PremiumHero'
import PremiumAbout from '@/components/premium/PremiumAbout'
import PremiumProjects from '@/components/premium/PremiumProjects'
import PremiumBenefits from '@/components/premium/PremiumBenefits'
import PremiumPartners from '@/components/premium/PremiumPartners'
import PremiumContact from '@/components/premium/PremiumContact'

export default function PremiumHomePage() {
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
