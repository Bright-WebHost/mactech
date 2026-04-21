'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useSpring, useMotionValue, useVelocity, useTransform } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

const PRODUCTS = [
  { id: 'center', name: 'Fasteners', image: '/images/products/fastner.png', category: 'INDUSTRIAL', desc: 'High-tensile precision fasteners for heavy-duty applications.', badge: 'Best Seller' },
  { id: 'left', name: 'Welding', image: '/images/products/welding-consumable.png', category: 'ENGINEERING', desc: 'Superior grade welding consumables for structural integrity.', badge: 'Premium' },
  { id: 'right', name: 'Safety', image: '/images/products/saftlyppes.png', category: 'PROTECTION', desc: 'Certified high-performance PPE for hazardous environments.', badge: 'Certified' },
]

export default function FeaturedProductsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 200, mass: 0.8 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  const xVelocity = useVelocity(smoothX)
  const tiltAngle = useTransform(xVelocity, [-1000, 1000], [-10, 10])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="bg-[#050505] min-h-screen text-white relative cursor-default overflow-hidden pt-32 pb-20">
      
      {/* ── 1. Top Section Break (The cinematic transition) ────────────────── */}
      <div className="absolute top-0 left-0 w-full z-30">
        {/* Subtle glow overflow from previous section */}
        <div className="h-40 bg-gradient-to-b from-white/5 to-transparent opacity-50" />
        
        {/* The Red Accent Line from your reference image */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-[#E20010] to-transparent shadow-[0_0_15px_rgba(226,0,16,0.5)]" />
        
        {/* Centered 'View All' Button (as seen in screenshot) */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2">
          <motion.button 
            whileHover={{ scale: 1.05, borderColor: '#E20010' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-3 border border-white/20 rounded-lg text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:shadow-[0_0_20px_rgba(226,0,16,0.2)] bg-black/40 backdrop-blur-md"
          >
            View All Products <ArrowRight size={14} className="text-[#E20010]" />
          </motion.button>
        </div>
      </div>

      {/* ── 2. The Floating Cinematic Image ─────────────────────────────────── */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          rotate: tiltAngle,
        }}
        className="fixed top-0 left-0 w-[260px] h-[340px] sm:w-[320px] sm:h-[400px] lg:w-[380px] lg:h-[480px] 
                   -ml-[130px] -mt-[170px] sm:-ml-[160px] sm:-mt-[200px] lg:-ml-[190px] lg:-mt-[240px] 
                   pointer-events-none z-10 overflow-hidden rounded-xl bg-black shadow-[0_20px_60px_rgba(0,0,0,1)] ring-1 ring-white/10"
        animate={{
          scale: activeIndex !== null ? 1 : 0.8,
          opacity: activeIndex !== null ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {PRODUCTS.map((prod, index) => (
          <Image
            key={prod.id}
            src={prod.image}
            alt={prod.name}
            fill
            className="object-cover absolute inset-0"
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
          <span className="text-[10px] lg:text-xs font-bold tracking-[0.25em] uppercase text-[#E20010]">
            Premium Collection
          </span>
        </div>
        <h2 className="font-barlow-condensed font-black uppercase tracking-tighter flex gap-3 lg:gap-5 mix-blend-difference text-white" style={{ fontSize: 'clamp(44px, 7vw, 100px)', lineHeight: 0.9 }}>
          <span>Featured</span>
          <span className="opacity-80">Products</span>
        </h2>
        <div className="h-1.5 w-24 bg-[#E20010] mt-6" />
      </header>

      {/* ── 4. The Interactive List ─────────────────────────────────────────── */}
      <section 
        className="relative z-20"
        onMouseLeave={() => setActiveIndex(null)}
      >
        {PRODUCTS.map((prod, index) => (
          <div
            key={prod.id}
            onMouseEnter={() => setActiveIndex(index)}
            className="group block border-t border-white/10 last:border-b px-6 lg:px-20 py-8 lg:py-12 hover:bg-white/[0.02] transition-all duration-500 cursor-pointer relative"
          >
            <div className="max-w-[1900px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12">
              
              <div className="flex items-start gap-4 lg:gap-8 mix-blend-difference flex-1 w-full">
                <span className="font-barlow-condensed font-bold text-xl lg:text-3xl text-[#E20010] mt-1 lg:mt-3">
                  0{index + 1}
                </span>
                
                <motion.h3 
                  className="font-barlow-condensed font-black uppercase tracking-tighter text-white"
                  style={{ fontSize: 'clamp(40px, 6.5vw, 110px)', lineHeight: 0.9 }}
                >
                  <motion.div
                    animate={{ y: activeIndex === index ? -8 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="origin-left"
                  >
                    {prod.name}
                  </motion.div>
                </motion.h3>
              </div>

              <motion.div 
                className="lg:w-[350px] flex flex-col items-start lg:items-end lg:text-right"
                animate={{ 
                  y: activeIndex === index ? -8 : 0,
                  opacity: activeIndex === index ? 1 : 0.3
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4 px-3 py-1 rounded-full border border-white/20 inline-flex items-center gap-2">
                  <Zap size={10} className="text-[#E20010]" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-white">
                    {prod.badge}
                  </span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E20010] mb-2">
                  {prod.category}
                </div>
                <p className="text-xs lg:text-sm leading-relaxed text-white/70 mb-5 font-medium">
                  {prod.desc}
                </p>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-[#E20010] transition-colors">
                  View Details <ArrowRight size={14} strokeWidth={2.5} />
                </button>
              </motion.div>

            </div>
          </div>
        ))}
      </section>
    </div>
  )
}