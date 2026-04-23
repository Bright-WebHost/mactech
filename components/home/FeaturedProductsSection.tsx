'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

const PRODUCTS = [
  { id: 'p1', name: 'Fasteners', image: '/images/products/fastner.png', category: 'INDUSTRIAL', desc: 'High-tensile precision fasteners for heavy-duty applications.', badge: 'Best Seller' },
  { id: 'p2', name: 'Welding', image: '/images/products/welding-consumable.png', category: 'ENGINEERING', desc: 'Superior grade welding consumables for structural integrity.', badge: 'Premium' },
  { id: 'p3', name: 'Safety', image: '/images/products/saftlyppes.png', category: 'PROTECTION', desc: 'Certified high-performance PPE for hazardous environments.', badge: 'Certified' },
]

export default function FeaturedProductsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Same smooth cursor logic as your Projects section
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
    
    mouseX.set(clientX - rect.left)
    mouseY.set(clientY - rect.top)
  }

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      className="bg-[#050505] min-h-screen text-white relative overflow-hidden py-20"
    >
      {/* ── Header ── */}
      <header className="px-6 lg:px-20 mb-16 relative z-10">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#E20010] block mb-4">
          03 — Our Catalog
        </span>
        <h2 className="font-barlow-condensed font-black uppercase tracking-tighter text-5xl md:text-8xl leading-none">
          Featured <span className="italic font-light opacity-50">Products</span>
        </h2>
      </header>

      {/* ── Product List ── */}
      <div className="relative z-10 border-t border-white/10" onMouseLeave={() => setHoveredIndex(null)}>
        {PRODUCTS.map((prod, index) => (
          <div
            key={prod.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onTouchStart={() => setHoveredIndex(index)}
            className="group relative border-b border-white/10 px-6 lg:px-20 py-10 md:py-16 cursor-pointer hover:bg-white/[0.02] transition-colors"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-[#E20010] text-sm md:text-xl">0{index + 1}</span>
                <h3 className="font-barlow-condensed font-black uppercase text-4xl md:text-7xl tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                  {prod.name}
                </h3>
              </div>

              <div className="flex flex-col md:items-end text-left md:text-right max-w-md">
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={14} className="text-[#E20010]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{prod.badge}</span>
                </div>
                <p className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  {prod.desc}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* ── Floating Tooltip (The "Magic" part from your Projects Section) ── */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="pointer-events-none absolute left-0 top-0 z-50 w-[200px] h-[250px] md:w-[320px] md:h-[400px] rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-105%', // This is what keeps it above the finger on mobile
            }}
          >
            <Image 
              src={PRODUCTS[hoveredIndex].image} 
              alt={PRODUCTS[hoveredIndex].name} 
              fill 
              className="object-cover" 
            />
            {/* Dark gradient overlay for a premium look */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}