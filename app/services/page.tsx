'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// ─── Service Data ─────────────────────────────────────────────────────────────
const SERVICES = [
  { 
    id: 'fasteners', 
    num: '01', 
    category: 'FASTENERS', 
    tag: 'High-load · Corrosion-resistant', 
    title: ['Fasteners &', 'Fixings'], 
    desc: 'A comprehensive range of industrial fasteners engineered for high-load, corrosive, and demanding environments across oil & gas, marine, and construction projects.', 
    features: ['Hex bolts, stud bolts, anchor bolts', 'Stainless & high-tensile finishes', 'ASTM, DIN & ISO certified'], 
    images: ['/images/fasteners/nut.png', '/images/fasteners/bolt.png', '/images/fasteners/brush.png', '/images/fasteners/wrench.png'] 
  },
  { 
    id: 'safety', 
    num: '02', 
    category: 'SAFETY', 
    tag: 'EN · ANSI · OSHA Certified', 
    title: ['Personal Protective', 'Equipment'], 
    desc: 'Certified head-to-toe PPE solutions for industrial, construction, and offshore environments meeting or exceeding international safety standards.', 
    features: ['Hard hats & safety helmets', 'Hi-vis vests & coveralls', 'Respiratory & eye protection'], 
    images: ['/images/fasteners/helmate.png', '/images/safety/boots.png', '/images/safety/coat.png', '/images/safety/fullsuit.png'] 
  },
  { 
    id: 'welding', 
    num: '03', 
    category: 'WELDING', 
    tag: 'MIG · TIG · MMA · FCAW', 
    title: ['Welding', 'Consumables'], 
    desc: 'Full-spectrum welding consumables for all major processes. OEM-grade materials for structural, pipeline, and offshore welding across Oman.', 
    features: ['Cellulosic, rutile & low-hydrogen', 'MIG/TIG wires & metal-cored', 'Welding gases & treatment'], 
    images: ['/images/welding/welding1.png', '/images/welding/welding2.png', '/images/welding/welding3.png', '/images/welding/welding4.png'] 
  },
  { 
    id: 'tools', 
    num: '04', 
    category: 'TOOLS', 
    tag: 'Hand · Power · Precision', 
    title: ['Hand &', 'Power Tools'], 
    desc: 'Industrial-grade hand tools and power tools from globally trusted brands for maintenance, fabrication, and site operations across Oman.', 
    features: ['Spanners, ratchets, torque wrenches', 'Grinders, drills & impact drivers', 'Precision measuring tools'], 
    images: ['/images/tools/tool1.png', '/images/tools/tool2.png', '/images/tools/tool3.png', '/images/fasteners/wrench2.png'] 
  },
  { 
    id: 'piping', 
    num: '05', 
    category: 'PIPING', 
    tag: 'CS · SS · GI · HDPE', 
    title: ['Pipes, Valves', '& Fittings'], 
    desc: 'Extensive piping systems for oil & gas, utility, and process applications. Supplied to project spec with fast turnaround across all schedules and ratings.', 
    features: ['Carbon steel, stainless & GI pipes', 'Gate, ball, globe & check valves', 'Gaskets & pipe support'], 
    images: ['/images/pipes/pipe1.png', '/images/pipes/pipe2.png', '/images/pipes/pipe3.png', '/images/pipes/pipe4.png'] 
  },
  { 
    id: 'construction', 
    num: '06', 
    category: 'CONSTRUCTION', 
    tag: 'Abrasives · Sealants · Chemicals', 
    title: ['Construction', 'Consumables'], 
    desc: 'General and specialist consumables to keep construction, maintenance, and civil works running. Trusted by major Oman contractors for reliability and quality.', 
    features: ['Cutting discs & flap discs', 'Adhesives, sealants & lubricants', 'Cleaning & site maintenance'], 
    images: ['/images/construction/1.png', '/images/construction/2.png', '/images/construction/3.png', '/images/construction/4.png'] 
  },
]

const STATS = [
  { value: '12k+', label: 'SKUs IN STOCK' },
  { value: '24 HR', label: 'DELIVERY OMAN' }, // Slightly shortened for mobile fit
  { value: 'ISO', label: 'CERTIFIED' },        // Slightly shortened for mobile fit
  { value: '15+', label: 'YEARS MARKET' },    // Slightly shortened for mobile fit
]

const Check = () => (
  <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
    <path d="M2.5 6.5l3 3 5-5" stroke="#E20010" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function FloatingImages({ images }: { images: string[] }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {images.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          alt="Industrial component"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ 
            y: [0, -15, 0], 
            opacity: 1,
            transition: { 
              y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.8 }
            }
          }}
          className="absolute object-contain drop-shadow-2xl"
          style={{
            width: i === 0 ? '55%' : '25%', 
            zIndex: i === 0 ? 10 : 5,
            left: i === 0 ? '22%' : i === 1 ? '8%' : i === 2 ? '68%' : '12%',
            top: i === 0 ? '22%' : i === 1 ? '12%' : i === 2 ? '18%' : '58%',
            filter: i !== 0 ? 'blur(1px)' : 'none',
            opacity: i !== 0 ? 0.5 : 1
          }}
        />
      ))}
    </div>
  )
}

function ServiceCard({ svc, index, total }: { svc: typeof SERVICES[0], index: number, total: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const isLast = index === total - 1
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.98])

  return (
    <div 
      ref={containerRef} 
      id={svc.id}
      className="h-[95vh] lg:h-[105vh] w-full sticky top-0 flex items-center justify-center pt-24 lg:pt-24 px-4 lg:px-8"
    >
      <motion.div 
        style={{ scale }}
        className={`w-full max-w-[1400px] h-[80vh] lg:h-[75vh] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] border border-black/5 flex flex-col lg:flex-row relative ${index % 2 === 0 ? 'bg-[#151515]' : 'bg-[#0d0d0d]'}`}
      >
        <div className="w-full lg:w-1/2 h-[55%] lg:h-full flex flex-col justify-center p-6 lg:p-20 relative z-20 text-white">
          <div className="flex flex-col gap-1 mb-4 lg:mb-6">
            <span className="text-[10px] lg:text-xs uppercase tracking-[0.4em] text-[#E20010] font-bold">{svc.category}</span>
            <span className="text-[8px] lg:text-[10px] uppercase tracking-[0.2em] text-white/30">{svc.tag}</span>
          </div>

          <h2 className="font-barlow-condensed font-black uppercase leading-[0.9] tracking-tighter mb-4 lg:mb-6" style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}>
            {svc.title[0]} <br /> <span className="text-[#E20010]">{svc.title[1]}</span>
          </h2>

          <p className="text-sm lg:text-base text-white/40 leading-relaxed mb-0 lg:mb-8 max-w-[440px] font-medium line-clamp-3 lg:line-clamp-none">
            {svc.desc}
          </p>

          <ul className="hidden lg:block space-y-4">
            {svc.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-[11px] lg:text-sm text-white/90 tracking-widest">
                <span className="flex-shrink-0 bg-[#E20010]/20 p-2 rounded-full"><Check /></span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-1/2 h-[45%] lg:h-full bg-[#f6f6f6] relative overflow-hidden">
          <FloatingImages images={svc.images} />
          <div className="absolute font-barlow-condensed font-black text-[#E20010] opacity-[0.03] text-[200px] lg:text-[350px] leading-none select-none pointer-events-none right-[-20px] lg:right-[-30px] bottom-[-20px] lg:bottom-[-30px]">
            {svc.num}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ServicesPage() {
  const scrollToService = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* ── Hero ── */}
      <section className="px-6 pt-24 pb-12 lg:px-20 lg:pt-24 max-w-[1440px] mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 text-[#E20010] bg-[#E20010]/5 border border-[#E20010]/20 px-4 py-1.5 rounded-full text-[10px] lg:text-xs font-bold mb-6 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E20010] animate-pulse" />
            Industrial Supply — Oman
          </div>

          <h1 className="font-barlow-condensed font-black uppercase leading-[0.8] tracking-tighter text-black mb-6" style={{ fontSize: 'clamp(56px, 10vw, 130px)' }}>
            Our Supply<br />
            <span className="text-[#E20010]">Services</span>
          </h1>

          <p className="text-sm lg:text-base text-black/60 leading-relaxed max-w-xl font-medium border-l-3 border-[#E20010] pl-4 lg:pl-5 italic">
            Bridging global manufacturing with Oman’s infrastructure 
            through certified, precision-engineered solutions.
          </p>
        </div>
      </section>

      {/* ── Stats (UPDATED: Forced 1 line on mobile) ── */}
      <div className="grid grid-cols-4 bg-black text-white">
        {STATS.map((stat, i) => (
          <div key={stat.label} className={`px-1 py-6 lg:px-10 lg:py-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-1 ${i < 3 ? 'border-r border-white/10' : ''}`}>
            <span className="font-barlow-condensed font-black text-2xl sm:text-3xl lg:text-7xl text-[#E20010] leading-none">{stat.value}</span>
            <span className="text-[7px] sm:text-[9px] lg:text-xs text-white/50 lg:text-white/30 font-bold tracking-widest">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* ── Filter Nav (UPDATED: Forced full width fit, no scrolling) ── */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5 shadow-sm">
        <div className="flex w-full max-w-[1440px] mx-auto">
          {SERVICES.map((s, i) => (
            <button 
              key={s.id} 
              onClick={() => scrollToService(s.id)}
              className={`flex-1 min-w-0 py-3 lg:py-6 flex flex-col items-center justify-center gap-1 hover:bg-gray-50 transition-all group px-1 ${i < SERVICES.length - 1 ? 'border-r border-black/5' : ''}`}
            >
              <span className="text-[#E20010] font-barlow-condensed font-black text-sm lg:text-lg leading-none opacity-40 group-hover:opacity-100">{s.num}</span>
              <span className="text-[6.5px] sm:text-[9px] lg:text-xs text-black group-hover:text-[#E20010] font-bold tracking-wider lg:tracking-widest uppercase truncate max-w-full">{s.category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Cards Stack ── */}
      <div className="relative pt-4 lg:pt-8 pb-20 lg:pb-32">
        {SERVICES.map((svc, index) => (
          <ServiceCard key={svc.id} svc={svc} index={index} total={SERVICES.length} />
        ))}
      </div>

      {/* ── CTA ── */}
      <section className="bg-black py-20 lg:py-28 text-center relative overflow-hidden px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#E20010]/5 blur-[80px] lg:blur-[120px] rounded-full" />
        <div className="relative z-10">
          <h2 className="font-barlow-condensed font-black uppercase text-5xl lg:text-[9rem] text-white leading-[0.85] mb-8 lg:mb-10">
            Ready to <br /><span className="text-[#E20010]">Build?</span>
          </h2>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact" 
            className="inline-block bg-[#E20010] text-white font-black px-8 lg:px-12 py-4 lg:py-5 rounded-full uppercase tracking-[0.15em] text-xs lg:text-sm shadow-xl shadow-red-900/20"
          >
            Request a Quote
          </motion.a>
        </div>
      </section>

    </div>
  )
}