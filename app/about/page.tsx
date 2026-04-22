'use client'

import { useRef, useEffect } from 'react'
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useInView, 
  useVelocity, 
  useAnimationFrame, 
  useMotionValue 
} from 'framer-motion'
import { ArrowRight, Target, Globe } from 'lucide-react'
import Link from 'next/link'
import Lenis from '@studio-freight/lenis'

const EASE = [0.76, 0, 0.24, 1] as const;

// 1. Magnetic Button (Disabled for touch)
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
    <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={() => { x.set(0); y.set(0); }} style={{ x, y }} className={`inline-block ${className}`}>
      {children}
    </motion.div>
  )
}

// 2. Blur Text (Optimized for mobile reflow)
function BlurText({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });
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

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Only apply parallax scale if on desktop (min-width: 768px)
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    // Optimized Lenis Config
    const lenis = new Lenis({ 
      duration: 1.2, 
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5, // Better response on mobile touch
    })
    
    function raf(time: number) { 
      lenis.raf(time); 
      requestAnimationFrame(raf); 
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, [])

  return (
    <main ref={containerRef} className="bg-[#0D1B2A] text-[#0D1B2A] font-['DM_Sans'] overflow-x-hidden">

      {/* HERO: sticky on md+, relative on mobile to prevent "stuck" feel */}
      <motion.section 
        style={{ scale: typeof window !== 'undefined' && window.innerWidth > 768 ? heroScale : 1 }}
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
                <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400" className="w-full h-full object-cover" alt="" />
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
            <Link href="/contact" className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#E20010] text-white flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-center hover:scale-105 transition-transform active:scale-95">
              Let's Talk
            </Link>
          </div>
        </div>
      </motion.section>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 bg-white rounded-t-[32px] md:rounded-t-[48px] -mt-8">
        
        {/* Simple Marquee for Mobile Performance */}
        <div className="py-8 bg-[#0D1B2A] overflow-hidden whitespace-nowrap">
          <div className="flex gap-8 animate-marquee text-white/30 font-['Barlow_Condensed'] font-bold text-3xl uppercase">
            <span>PDO Approved ✦ ISO 9001:2015 ✦ JSRS Certified ✦ PDO Approved ✦ ISO 9001:2015</span>
          </div>
        </div>

        {/* MISSION/VISION: Single column on mobile */}
        <section className="py-20 px-6 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0D1B2A] text-white p-8 md:p-16 rounded-2xl">
              <Target className="text-[#E20010] mb-6" size={32} />
              <h3 className="font-['Barlow_Condensed'] text-4xl font-bold uppercase mb-4">Our Mission</h3>
              <p className="text-white/60 leading-relaxed">Empowering industrial growth through premium supplies and service excellence.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 md:p-16 rounded-2xl border border-gray-100">
              <Globe className="text-[#E20010] mb-6" size={32} />
              <h3 className="font-['Barlow_Condensed'] text-4xl font-bold uppercase mb-4">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">To be the most trusted supply backbone for Middle Eastern infrastructure.</p>
            </div>
          </div>
        </section>

        {/* TIMELINE: Simplified for mobile */}
        <section className="py-20 px-6 max-w-[1400px] mx-auto">
          <div className="space-y-16">
            {[
              { year: "2008", title: "Started in Dubai", desc: "Founding vision for industrial excellence." },
              { year: "2012", title: "Muscat HQ", desc: "Expanding to support Oman's growth." },
              { year: "Today", title: "Market Leaders", desc: "The gold standard in oil & gas supplies." }
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-[#E20010]/20 pl-6 relative">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#E20010]" />
                <span className="text-[#E20010] font-['Barlow_Condensed'] text-5xl font-black">{item.year}</span>
                <h4 className="text-xl font-bold mt-2">{item.title}</h4>
                <p className="text-gray-500 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </main>
  )
}