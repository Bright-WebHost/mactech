'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useSpring, useMotionValue, useVelocity, useTransform, useInView } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

const PRODUCTS = [
  { id: 'center', name: 'Fasteners', image: '/images/products/fastner.png', category: 'INDUSTRIAL', desc: 'High-tensile precision fasteners for heavy-duty applications.', badge: 'Best Seller' },
  { id: 'left', name: 'Welding', image: '/images/products/welding-consumable.png', category: 'ENGINEERING', desc: 'Superior grade welding consumables for structural integrity.', badge: 'Premium' },
  { id: 'right', name: 'Safety', image: '/images/products/saftlyppes.png', category: 'PROTECTION', desc: 'Certified high-performance PPE for hazardous environments.', badge: 'Certified' },
]

export default function FeaturedProductsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { margin: "0px" })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 200, mass: 0.8 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  const xVelocity = useVelocity(smoothX)
  const tiltAngle = useTransform(xVelocity, [-1000, 1000], [-10, 10])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 1024 && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <div 
      ref={sectionRef}
      className="bg-[#050505] min-h-screen text-white relative cursor-default overflow-hidden pt-16 pb-20"
    >
      
      {/* ── 1. Top Section Break ────────────────── */}
      <div className="absolute top-0 left-0 w-full z-30">
        <div className="h-40 bg-gradient-to-b from-white/5 to-transparent opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-[#E20010] to-transparent shadow-[0_0_15px_rgba(226,0,16,0.5)]" />
     
      </div>

      {/* ── 2. The Floating Cinematic Image ─────────────────────────────────── */}
      <motion.div
        style={isMobile ? {} : { x: smoothX, y: smoothY, rotate: tiltAngle }}
        className={`pointer-events-none z-10 overflow-hidden rounded-xl bg-black shadow-[0_20px_60px_rgba(0,0,0,1)] ring-1 ring-white/10
          ${isMobile 
            ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px]' 
            : 'absolute top-0 left-0 w-[420px] h-[520px] -ml-[210px] -mt-[260px]'}`} 
        animate={{
          scale: activeIndex !== null ? 1 : 0.8,
          // Mobile opacity raised to 0.5 (from 0.3) so it's visible, but not overwhelming
          opacity: activeIndex !== null && (!isMobile || isInView) ? (isMobile ? 0.5 : 1) : 0, 
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Dark overlay to ensure white text is ALWAYS readable on top of the image */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {PRODUCTS.map((prod, index) => (
          <Image
            key={prod.id}
            src={prod.image}
            alt={prod.name}
            fill
            className="object-cover absolute inset-0 z-0"
            style={{
              opacity: activeIndex === index ? 1 : 0,
              transform: `scale(${activeIndex === index ? 1 : 1.2})`,
              transition: 'opacity 0.4s ease, transform 0.8s ease',
            }}
          />
        ))}
      </motion.div>

      {/* ── 3. Page Header ──────────────────────────────────────────────────── */}
      <header className="px-6 lg:px-20 mb-10 lg:mb-16 relative z-20 flex flex-col items-start mt-20">
        <div className="inline-block mb-3">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#E20010]">
            Premium Collection
          </span>
        </div>
        <h2 className="font-barlow-condensed font-black uppercase tracking-tighter flex gap-3 lg:gap-5 text-white" style={{ fontSize: 'clamp(44px, 7vw, 100px)', lineHeight: 0.9 }}>
          <span>Featured</span>
          <span className="opacity-80">Products</span>
        </h2>
        <div className="h-1.5 w-24 bg-[#E20010] mt-6" />
      </header>

      {/* ── 4. The Interactive List ─────────────────────────────────────────── */}
      <section 
        className="relative z-20"
        onMouseLeave={() => !isMobile && setActiveIndex(null)}
      >
        {PRODUCTS.map((prod, index) => (
          <motion.div 
            key={prod.id}
            onMouseEnter={() => !isMobile && setActiveIndex(index)}
            onViewportEnter={() => isMobile && setActiveIndex(index)}
            viewport={{ margin: "-35% 0px -35% 0px" }} 
            className="group block border-t border-white/10 last:border-b px-6 lg:px-20 py-10 lg:py-14 hover:bg-white/[0.03] transition-all duration-500 cursor-pointer relative"
          >
            <div className="max-w-[1900px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 relative">
              
              <div className="flex items-start gap-4 lg:gap-8 flex-1 w-full">
                {/* Number */}
                <span className="font-barlow-condensed font-bold text-3xl lg:text-4xl text-[#E20010] mt-1 lg:mt-3 drop-shadow-lg">
                  0{index + 1}
                </span>
                
                {/* Title */}
                <motion.h3 
                  className="font-barlow-condensed font-black uppercase tracking-tighter text-white drop-shadow-2xl"
                  style={{ fontSize: 'clamp(48px, 6.5vw, 110px)', lineHeight: 0.9 }}
                >
                  <motion.div animate={{ y: activeIndex === index ? -8 : 0 }} transition={{ duration: 0.5 }} className="origin-left">
                    {prod.name}
                  </motion.div>
                </motion.h3>
              </div>

              {/* ── HIGH READABILITY TEXT BLOCK ── */}
              <motion.div 
                // Added a glassmorphism background that appears when active to separate text from the image
                className={`lg:w-[450px] flex flex-col items-start lg:items-end lg:text-right relative z-10 p-4 lg:p-6 rounded-xl transition-colors duration-500
                  ${activeIndex === index ? 'bg-black/40 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border border-white/10 lg:border-transparent' : ''}`}
                animate={{ 
                  y: activeIndex === index ? -8 : 0, 
                  opacity: activeIndex === index ? 1 : (isMobile ? 0.5 : 0.4) // Kept resting state visible
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Badge */}
                <div className="mb-4 px-4 py-2 rounded-full border border-white/30 inline-flex items-center gap-2 bg-black/60 shadow-lg">
                  <Zap size={14} className="text-[#E20010]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">
                    {prod.badge}
                  </span>
                </div>
                
                {/* Category */}
                <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#E20010] mb-3 drop-shadow-md">
                  {prod.category}
                </div>
                
                {/* Description - Increased to text-base, pure white text, strong shadow */}
                <p className="text-base leading-relaxed text-white mb-6 font-medium drop-shadow-xl max-w-full lg:max-w-md">
                  {prod.desc}
                </p>
                
                {/* Button */}
                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-white hover:text-[#E20010] transition-colors drop-shadow-md">
                  View Details <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </motion.div>

            </div>
          </motion.div>
        ))}
      </section>
    </div>
  )
}