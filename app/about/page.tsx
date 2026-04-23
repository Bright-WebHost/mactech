'use client'

import { useRef } from 'react'
import { motion, useSpring, useScroll, useTransform } from 'framer-motion'
import { Target, Globe } from 'lucide-react'
import Link from 'next/link'

const EASE = [0.76, 0, 0.24, 1] as const;

// 1. Magnetic Button
function MagneticButton({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 })
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  }

  return (
    <motion.div 
      ref={ref} 
      onMouseMove={handleMouse} 
      onMouseLeave={() => { x.set(0); y.set(0); }} 
      style={{ x, y }} 
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}

// 2. Blur Text - with filter blur animation
function BlurText({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = true; // Always animate on mount
  const words = text.split(" ");

  return (
    <div ref={ref} className={`${className} flex flex-wrap`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.2em] py-[0.1em]">
          <motion.span
            initial={{ opacity: 0, filter: "blur(8px)", y: "100%" }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)", y: "0%" } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: delay + (i * 0.03) }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

// 3. Hero Section with Parallax (Scoped)
function HeroParallax() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.8])

  return (
    <motion.section 
      ref={heroRef}
      style={{ scale: heroScale, opacity: heroOpacity }}
      className="relative md:sticky top-0 min-h-[90svh] md:h-screen bg-white pt-24 pb-12 px-6 flex flex-col justify-between z-0 md:rounded-b-[40px]"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#E20010]">About Mactech</span>
          <div className="w-8 h-[1px] bg-black/10" />
          <span className="text-[10px] text-gray-400">Est. 2008</span>
        </div>

        <div className="font-['Barlow_Condensed'] font-extrabold uppercase leading-[0.95] text-[clamp(45px,12vw,140px)]">
          <BlurText text="Defining" />
          <div className="flex items-center gap-3">
            <BlurText text="Industrial" className="text-[#E20010]" delay={0.1} />
            <div className="h-[0.8em] aspect-video rounded-full overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" 
                className="w-full h-full object-cover" 
                alt="Industrial"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <BlurText text="Excellence" delay={0.2} />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end mt-12 md:mt-0">
        <p className="text-gray-500 text-base md:text-lg max-w-sm leading-relaxed">
          ISO 9001:2015 certified partner to Oman's energy sector. We deliver excellence where precision matters most.
        </p>
        <div className="flex md:justify-end">
          <MagneticButton>
            <Link 
              href="/contact" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#E20010] text-white flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-center hover:scale-105 transition-transform active:scale-95"
            >
              Let's Talk
            </Link>
          </MagneticButton>
        </div>
      </div>
    </motion.section>
  )
}

// 4. Scroll-Linked Marquee
function ScrollMarquee() {
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
      >
        <span className="whitespace-nowrap">PDO Approved ✦ ISO 9001:2015 ✦ JSRS Certified ✦ PDO Approved ✦ ISO 9001:2015</span>
        <span className="whitespace-nowrap" aria-hidden="true">PDO Approved ✦ ISO 9001:2015 ✦ JSRS Certified ✦ PDO Approved ✦ ISO 9001:2015</span>
      </motion.div>
    </motion.div>
  )
}

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────

export default function AboutPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  }

  const timelineItems = [
    { year: "2008", title: "Started in Dubai", desc: "Founding vision for industrial excellence." },
    { year: "2012", title: "Muscat HQ", desc: "Expanding to support Oman's growth." },
    { year: "Today", title: "Market Leaders", desc: "The gold standard in oil & gas supplies." }
  ]

  return (
    <main className="bg-[#0D1B2A] text-[#0D1B2A] font-['DM_Sans'] overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* HERO SECTION - with parallax */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <HeroParallax />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CONTENT SECTION */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 bg-white rounded-t-[32px] md:rounded-t-[48px] -mt-8">
        
        {/* ─────────────────────────────────────────────────────────── */}
        {/* MARQUEE - Scroll Linked */}
        {/* ─────────────────────────────────────────────────────────── */}
        <ScrollMarquee />

        {/* ─────────────────────────────────────────────────────────── */}
        {/* MISSION & VISION */}
        {/* ─────────────────────────────────────────────────────────── */}
        <motion.section 
          className="py-20 px-6 max-w-[1400px] mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <motion.div 
              className="bg-[#0D1B2A] text-white p-8 md:p-16 rounded-2xl"
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                viewport={{ once: true }}
              >
                <Target className="text-[#E20010] mb-6" size={32} />
              </motion.div>
              <h3 className="font-['Barlow_Condensed'] text-4xl font-bold uppercase mb-4">Our Mission</h3>
              <p className="text-white/60 leading-relaxed">Empowering industrial growth through premium supplies and service excellence.</p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              className="bg-[#F8FAFC] p-8 md:p-16 rounded-2xl border border-gray-100"
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Globe className="text-[#E20010] mb-6" size={32} />
              </motion.div>
              <h3 className="font-['Barlow_Condensed'] text-4xl font-bold uppercase mb-4">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">To be the most trusted supply backbone for Middle Eastern infrastructure.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* ─────────────────────────────────────────────────────────── */}
        {/* TIMELINE - Professional Horizontal Design */}
        {/* ─────────────────────────────────────────────────────────── */}
        <motion.section 
          className="py-32 px-6 max-w-[1400px] mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {/* Timeline Container */}
          <div className="relative">
            {/* Horizontal line with gradient */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#E20010] to-[#E20010]" />
            
            {/* Timeline Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {timelineItems.map((timelineItem, i) => (
                <motion.div 
                  key={i}
                  className="relative"
                  variants={item}
                >
                  {/* Timeline Dot - positioned on the line */}
                  <motion.div 
                    className="absolute left-0 md:left-1/2 top-0 md:top-3 w-8 h-8 bg-[#E20010] border-4 border-white rounded-full md:transform md:-translate-x-1/2 shadow-lg z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Content Box */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="md:pt-24 pt-12 pl-16 md:pl-0 md:text-center group"
                  >
                    {/* Year Badge */}
                    <div className="inline-block mb-4 md:block">
                      <span className="font-['Barlow_Condensed'] text-5xl md:text-6xl font-black text-[#E20010] leading-none">
                        {timelineItem.year}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-base md:text-lg font-bold text-[#0D1B2A] mb-3 uppercase tracking-widest">
                      {timelineItem.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base font-['DM_Sans']">
                      {timelineItem.desc}
                    </p>
                    
                    {/* Animated underline on hover */}
                    <motion.div 
                      className="h-0.5 bg-[#E20010] w-0 mt-6 md:mx-auto group-hover:w-full md:group-hover:w-16"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

      </div>

      <style jsx global>{`
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  )
}