'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1] as const

// EXACT SAME as About Page - Scroll-Linked Marquee with BOTH animations
export default function MarqueeSection() {
  const marqueeRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"]
  })
  
  const xOffset = useTransform(scrollYProgress, [0, 1], [0, -200])
  
  return (
    <motion.div 
      ref={marqueeRef}
      className="py-8 bg-[#0D1B2A] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="flex gap-8 text-white/30 font-['Barlow_Condensed'] font-bold text-3xl uppercase"
        style={{ x: xOffset }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <span className="whitespace-nowrap">PDO Approved ✦ ISO 9001:2015 ✦ JSRS Certified ✦ PDO Approved ✦ ISO 9001:2015</span>
        <span className="whitespace-nowrap" aria-hidden="true">PDO Approved ✦ ISO 9001:2015 ✦ JSRS Certified ✦ PDO Approved ✦ ISO 9001:2015</span>
      </motion.div>
    </motion.div>
  )
}