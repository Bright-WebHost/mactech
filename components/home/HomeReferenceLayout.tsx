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
    <div style={{ fontFamily:"'DM Sans', sans-serif", background:'#fff', color:'#111', overflowX:'hidden' }}>
      <HeroSection/>
      <MarqueeSection/>
      <AboutSection/>
      <ProductsSection/>
      <FeaturedProductsSection/>
      <WhyChooseUsSection/>
      <ProjectsSection/>
      <BrandsSection/>
      <CertificationsSection/>
      <CTASection/>

      {/* WhatsApp */}
      <motion.a href="https://wa.me/96897984810?text=Hello%20Mactech" target="_blank" rel="noopener noreferrer"
        initial={{ scale:0, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ delay:3, type:'spring' }}
        whileHover={{ scale:1.12 }}
        style={{ position:'fixed', bottom:24, right:24, zIndex:50, width:56, height:56, background:'#25D366', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 8px 28px rgba(37,211,102,0.4)', textDecoration:'none' }}
        aria-label="WhatsApp">
        <motion.span animate={{ scale:[1,1.25,1] }} transition={{ duration:2, repeat:Infinity, repeatDelay:3 }} style={{ fontSize:26 }}>💬</motion.span>
        <motion.span animate={{ scale:[1,1.6,1], opacity:[0.4,0,0.4] }} transition={{ duration:2, repeat:Infinity }}
          style={{ position:'absolute', inset:0, borderRadius:'50%', border:'2px solid #25D366' }}/>
      </motion.a>
    </div>
  )
}
