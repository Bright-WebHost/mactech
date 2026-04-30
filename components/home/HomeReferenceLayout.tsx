'use client'

import HeroSection from '@/components/HeroSection'
import MarqueeSection from '@/components/home/MarqueeSection'
import AboutSection from '@/components/home/AboutSection'
import ProductsSection from '@/components/home/ProductsSection'
import FeaturedProductsSection from '@/components/home/FeaturedProductsSection'
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import BrandsSection from '@/components/home/BrandsSection'
import CertificationsSection from '@/components/home/CertificationsSection'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <div 
      style={{ 
        fontFamily: "'DM Sans', sans-serif", 
        background: '#0A0A0A',
        color: '#111', 
        overflowX: 'hidden' 
      }}
    >
      
      {/* HERO SECTION (Background Layer) */}
      <section style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
      </section>

      {/* CONTENT WRAPPER (Sliding Sheet Layer) */}
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          background: '#f5f4f0',
          marginTop: '-100px',
          borderRadius: '40px 40px 0 0',
          boxShadow: '0 -20px 60px rgba(0,0,0,0.4)',
          overflow: 'hidden'
        }}
      >
        
        {/* 1. AboutSection now comes FIRST on the sheet */}
        <AboutSection />

        {/* 2. MarqueeSection now follows the About Section */}
        <MarqueeSection />

        {/* Remaining Sections */}
        <ProductsSection />
        <FeaturedProductsSection />
        <WhyChooseUsSection />
        <ProjectsSection />
        <BrandsSection />
        <CertificationsSection />
        <CTASection />
        
      </div>
    </div>
  )
}