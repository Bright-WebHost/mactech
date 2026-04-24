'use client'

import { motion } from 'framer-motion'
import HeroSection from '../HeroSection'
import MarqueeSection from './MarqueeSection'
import AboutSection from './AboutSection'
import ProductsSection from './ProductsSection'
import FeaturedProductsSection from './FeaturedProductsSection'
import WhyChooseUsSection from './WhyChooseUsSection'
import ProjectsSection from './ProjectsSection'
import BrandsSection from './BrandsSection'
import CertificationsSection from './CertificationsSection'
import CTASection from './CTASection'

export default function HomePage() {
  return (
    <div style={{ 
      fontFamily: "'DM Sans', sans-serif", 
      background: '#0A0A0A', // Dark background for the hero area
      color: '#111', 
      overflowX: 'hidden' 
    }}>
      
      {/* 1. HERO LAYER 
          We wrap the Hero in a relative container with a lower z-index.
      */}
      <section style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
      </section>

      {/* 2. CONTENT LAYER 
          This is the "About Page" trick: 
          - Higher z-index (10) slides it OVER the hero.
          - Negative margin (-mt-24) creates the overlap.
          - Large border radius creates the 'card' look.
      */}
      <div 
        className="content-card-wrapper"
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          background: '#f5f4f0', 
          marginTop: '-100px', // Pulls the content up over the Hero
          borderRadius: '40px 40px 0 0',
          boxShadow: '0 -20px 60px rgba(0,0,0,0.4)',
          overflow: 'hidden' // Keeps the marquee clipped to the rounded corners
        }}
      >
        <MarqueeSection />
        <AboutSection />
        <ProductsSection />
        <FeaturedProductsSection />
        <WhyChooseUsSection />
        <ProjectsSection />
        <BrandsSection />
        <CertificationsSection />
        <CTASection />
      </div>

      {/* WhatsApp - Unchanged */}
      <motion.a 
        href="https://wa.me/96897984810?text=Hello%20Mactech" 
        target="_blank" 
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ delay: 3, type: 'spring' }}
        whileHover={{ scale: 1.12 }}
        style={{ 
          position: 'fixed', bottom: 24, right: 24, zIndex: 50, 
          width: 56, height: 56, background: '#25D366', borderRadius: '50%', 
          display: 'flex', alignItems: 'center', justifyContent: 'center', 
          boxShadow: '0 8px 28px rgba(37,211,102,0.4)', textDecoration: 'none' 
        }}
        aria-label="WhatsApp"
      >
        <motion.span animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }} style={{ fontSize: 26 }}>💬</motion.span>
        <motion.span animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }} transition={{ duration: 2, repeat: Infinity }}
          style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid #25D366' }}/>
      </motion.a>
    </div>
  )
}