'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollMarquee() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Text moves horizontally based on vertical scroll
  const xOffset = useTransform(scrollYProgress, [0, 1], [0, -250])
  
  return (
    <motion.div 
      ref={ref}
      className="py-10 bg-[#0D1B2A] overflow-hidden rounded-t-[40px] md:rounded-t-[60px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="flex gap-10 text-white/20 font-['Barlow_Condensed'] font-black text-4xl md:text-6xl uppercase italic whitespace-nowrap"
        style={{ x: xOffset }}
      >
        <span>PDO Approved ✦ ISO 9001:2015 ✦ JSRS Certified ✦ Industrial Leaders ✦ Muscat Oman</span>
        <span>PDO Approved ✦ ISO 9001:2015 ✦ JSRS Certified ✦ Industrial Leaders ✦ Muscat Oman</span>
      </motion.div>
    </motion.div>
  )
}