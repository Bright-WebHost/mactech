'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

// Ensure these are loaded in your project:
// @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@900&family=DM+Sans:wght@400;500;700&display=swap');

const PROJECTS = [
  { img:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80', city:'Muscat', label:'Industrial Complex', year:'2023' },
  { img:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80', city:'Sohar', label:'Port Infrastructure', year:'2022' },
  { img:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80', city:'Dubai', label:'Commercial Tower', year:'2023' },
]

const RED = '#CC1020'

export default function ImprovedProjectsSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % PROJECTS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="relative h-[650px] md:h-[750px] w-full">
        
        {/* Cinematic Background Layer */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={active}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image 
              src={PROJECTS[active].img} 
              alt={PROJECTS[active].city} 
              fill 
              className="object-cover" 
              priority
              style={{ filter: 'brightness(0.65) contrast(1.1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* ── Header Area ── */}
        <div className="absolute top-12 left-6 md:left-20 z-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-12 h-[2px]" style={{ backgroundColor: RED }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em]" style={{ color: RED }}>Portfolio</span>
          </motion.div>
          {/* FIXED: Adjusted sizing to text-[12vw] for mobile, added whitespace-nowrap */}
          <h2 
            className="text-[12vw] sm:text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] whitespace-nowrap"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {/* FIXED: Removed block class from span so it stays inline */}
            Our <span style={{ color: RED }}>Projects</span>
          </h2>
        </div>

        {/* ── Main Content + Thumbs ── */}
        <div className="absolute bottom-16 w-full px-6 md:px-20 z-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            
            {/* Text Info */}
            <div className="max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-4 mb-4 font-bold text-lg" style={{ color: RED }}>
                    <span>0{active + 1}</span>
                    <span className="w-8 h-[1px] bg-white/20" />
                    <span className="text-white/40">0{PROJECTS.length}</span>
                  </div>
                  
                  <h3 
                    className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight leading-none uppercase"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {PROJECTS[active].label}
                  </h3>

                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} style={{ color: RED }} />
                      <span className="text-sm font-bold uppercase tracking-widest text-white/80">
                        {PROJECTS[active].city}
                      </span>
                    </div>
                    <span className="text-white/20">|</span>
                    <span className="text-sm font-bold text-white/50">{PROJECTS[active].year}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Visual Thumbnails */}
            <div className="hidden md:flex flex-col gap-4">
              {PROJECTS.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`group relative w-52 h-28 rounded-sm overflow-hidden transition-all duration-500 border-2 ${
                    active === i ? 'scale-105' : 'border-white/10 opacity-40 grayscale hover:grayscale-0 hover:opacity-100'
                  }`}
                  style={{ borderColor: active === i ? RED : 'rgba(255,255,255,0.1)' }}
                >
                  <Image src={p.img} alt={p.city} fill className="object-cover" />
                  <div className={`absolute inset-0 ${active === i ? 'bg-transparent' : 'bg-black/40'}`} />
                  <div className="absolute bottom-3 left-3 flex items-center justify-between w-[85%]">
                    <span 
                      className="text-[10px] font-black uppercase text-white tracking-widest"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {p.city}
                    </span>
                    {active === i && <ChevronRight size={16} style={{ color: RED }} />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Progress Bar ── */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 z-30">
          <motion.div 
            className="h-full"
            style={{ backgroundColor: RED }}
            initial={{ width: "0%" }}
            animate={{ width: `${((active + 1) / PROJECTS.length) * 100}%` }}
            transition={{ duration: 0.8, ease: "anticipate" }}
          />
        </div>
      </div>

      {/* ── Mobile Navigation ── */}
      <div className="md:hidden flex items-center justify-between px-6 py-6 border-t border-white/10">
        <div className="flex gap-2">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="h-1 transition-all duration-300 rounded-full"
              style={{ 
                width: active === i ? '32px' : '16px',
                backgroundColor: active === i ? RED : 'rgba(255,255,255,0.2)' 
              }}
            />
          ))}
        </div>
        <div className="text-white/40 font-bold text-xs tracking-widest">
          0{active + 1} / 0{PROJECTS.length}
        </div>
      </div>
    </section>
  )
}