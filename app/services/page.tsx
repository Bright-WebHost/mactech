'use client'

import { motion } from 'framer-motion'

// ─── Service Data ─────────────────────────────────────────────────────────────
const SERVICES = [
  { 
    id: 'fasteners', 
    num: '01', 
    category: 'FASTENERS & FIXINGS', 
    tag: 'Strong, Durable & Reliable', 
    title: ['Fasteners &', 'Fixings'], 
    desc: 'A wide range of high-quality fasteners designed for strong, secure, and long-lasting construction applications.', 
    features: ['Hex bolts, anchor bolts, stud bolts & more', 'Stainless steel & high-strength materials', 'ASTM, DIN & ISO certified'], 
    images: ['/images/fasteners/nut.png', '/images/fasteners/bolt.png', '/images/fasteners/brush.png', '/images/fasteners/wrench.png'] 
  },
  { 
    id: 'safety', 
    num: '02', 
    category: 'SAFETY EQUIPMENT (PPE)', 
    tag: 'CERTIFIED & COMPLIANT', 
    title: ['Safety & Protective', 'Equipment'], 
    desc: 'Complete range of safety equipment designed to protect workers across construction and industrial environments.', 
    features: ['Hard hats & safety helmets', 'Hi-vis vests & coveralls', 'Respiratory & eye protection'], 
    images: ['/images/fasteners/helmate.png', '/images/safety/boots.png', '/images/safety/coat.png', '/images/safety/fullsuit.png'] 
  },
  { 
    id: 'welding', 
    num: '03', 
    category: 'WELDING & FABRICATION', 
    tag: 'MIG · TIG · MMA · FCAW', 
    title: ['Welding &', 'Fabrication Supplies'], 
    desc: 'Complete range of welding consumables and equipment for construction, fabrication, and industrial applications.', 
    features: ['Electrodes: cellulosic, rutile & low-hydrogen', 'MIG/TIG wires & metal-cored', 'Welding gases & accessories'], 
    images: ['/images/welding/welding1.png', '/images/welding/welding2.png', '/images/welding/welding3.png', '/images/welding/welding4.png'] 
  },
  { 
    id: 'tools', 
    num: '04', 
    category: 'HAND & POWER TOOLS', 
    tag: 'Hand · Power · Precision', 
    title: ['Hand &', 'Power Tools'], 
    desc: 'High-quality hand and power tools designed for construction, maintenance, and on-site work.', 
    features: ['Spanners, ratchets, torque wrenches', 'Grinders, drills & impact drivers', 'Precision measuring tools'], 
    images: ['/images/tools/tool1.png', '/images/tools/tool2.png', '/images/tools/tool3.png', '/images/fasteners/wrench2.png'] 
  },
  { 
    id: 'piping', 
    num: '05', 
    category: 'PIPES & FITTINGS', 
    tag: 'CS · SS · GI · HDPE', 
    title: ['Pipes, Valves', '& Fittings'], 
    desc: 'Complete range of pipes, valves, and fittings for construction, plumbing, and infrastructure projects.', 
    features: ['Carbon steel, stainless & GI pipes', 'Gate, ball, globe & check valves', 'Gaskets, fittings & pipe supports'], 
    images: ['/images/pipes/pipe1.png', '/images/pipes/pipe2.png', '/images/pipes/pipe3.png', '/images/pipes/pipe4.png'] 
  },
  { 
    id: 'construction', 
    num: '06', 
    category: 'CONSTRUCTION MATERIALS', 
    tag: 'ESSENTIAL MATERIALS & SUPPLIES', 
    title: ['Construction', 'Materials & Consumables'], 
    desc: 'Wide range of construction materials and consumables designed to support building, maintenance, and site operations.', 
    features: ['Cutting discs & flap discs', 'Adhesives, sealants & lubricants', 'Cleaning & site maintenance'], 
    images: ['/images/construction/1.png', '/images/construction/2.png', '/images/construction/3.png', '/images/construction/4.png'] 
  },
]

const STATS = [
  { value: '12k+', label: 'PRODUCTS IN STOCK' },
  { value: '24 HR', label: 'FAST & RELIABLE DELIVERY' },
  { value: 'ISO', label: 'CERTIFIED' },
  { value: '15+', label: 'YEARS OF EXPERIENCE' },
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

function ServiceCard({ svc, index }: { svc: typeof SERVICES[0], index: number }) {
  // Even index = text left, image right | Odd index = image left, text right
  const isReversed = index % 2 !== 0

  const textContent = (
    <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-16 relative z-20 text-white">
      <div className="flex flex-col gap-1 mb-5">
        <span className="text-[10px] lg:text-xs uppercase tracking-[0.4em] text-[#E20010] font-bold">{svc.category}</span>
        <span className="text-[8px] lg:text-[10px] uppercase tracking-[0.2em] text-white/30">{svc.tag}</span>
      </div>

      <h2
        className="font-barlow-condensed font-black uppercase leading-[0.9] tracking-normal mb-5"
        style={{ fontSize: 'clamp(36px, 4vw, 64px)' }}
      >
        {svc.title[0]} <br /> <span className="text-[#E20010]">{svc.title[1]}</span>
      </h2>

      <p className="text-sm lg:text-base text-white/40 leading-relaxed mb-8 max-w-[440px] font-medium">
        {svc.desc}
      </p>

      <ul className="space-y-4">
        {svc.features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-xs lg:text-sm text-white/90 tracking-widest">
            <span className="flex-shrink-0 bg-[#E20010]/20 p-2 rounded-full"><Check /></span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  )

  const imageContent = (
    <div className="w-full lg:w-1/2 bg-[#f6f6f6] relative overflow-hidden min-h-[300px] lg:min-h-0">
      <FloatingImages images={svc.images} />
      <div className="absolute font-barlow-condensed font-black text-[#E20010] opacity-[0.03] text-[200px] lg:text-[320px] leading-none select-none pointer-events-none right-[-20px] lg:right-[-30px] bottom-[-20px] lg:bottom-[-30px]">
        {svc.num}
      </div>
    </div>
  )

  return (
    <motion.div
      id={svc.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full max-w-[1400px] mx-auto rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border border-black/5 flex flex-col lg:flex-row ${index % 2 === 0 ? 'bg-[#151515]' : 'bg-[#0d0d0d]'}`}
      style={{ minHeight: '420px' }}
    >
      {isReversed ? (
        <>
          {/* Mobile: image on top, text below. Desktop: image left, text right */}
          <div className="flex flex-col lg:flex-row w-full">
            <div className="w-full lg:w-1/2 bg-[#f6f6f6] relative overflow-hidden" style={{ minHeight: '300px' }}>
              <FloatingImages images={svc.images} />
              <div className="absolute font-barlow-condensed font-black text-[#E20010] opacity-[0.03] text-[200px] lg:text-[320px] leading-none select-none pointer-events-none right-[-20px] lg:right-[-30px] bottom-[-20px] lg:bottom-[-30px]">
                {svc.num}
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-16 relative z-20 text-white">
              <div className="flex flex-col gap-1 mb-5">
                <span className="text-[10px] lg:text-xs uppercase tracking-[0.4em] text-[#E20010] font-bold">{svc.category}</span>
                <span className="text-[8px] lg:text-[10px] uppercase tracking-[0.2em] text-white/30">{svc.tag}</span>
              </div>
              <h2 className="font-barlow-condensed font-black uppercase leading-[0.9] tracking-normal mb-5" style={{ fontSize: 'clamp(36px, 4vw, 64px)' }}>
                {svc.title[0]} <br /> <span className="text-[#E20010]">{svc.title[1]}</span>
              </h2>
              <p className="text-sm lg:text-base text-white/40 leading-relaxed mb-8 max-w-[440px] font-medium">{svc.desc}</p>
              <ul className="space-y-4">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-xs lg:text-sm text-white/90 tracking-widest">
                    <span className="flex-shrink-0 bg-[#E20010]/20 p-2 rounded-full"><Check /></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col lg:flex-row w-full">
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-16 relative z-20 text-white order-2 lg:order-1">
            <div className="flex flex-col gap-1 mb-5">
              <span className="text-[10px] lg:text-xs uppercase tracking-[0.4em] text-[#E20010] font-bold">{svc.category}</span>
              <span className="text-[8px] lg:text-[10px] uppercase tracking-[0.2em] text-white/30">{svc.tag}</span>
            </div>
            <h2 className="font-barlow-condensed font-black uppercase leading-[0.9] tracking-normal mb-5" style={{ fontSize: 'clamp(36px, 4vw, 64px)' }}>
              {svc.title[0]} <br /> <span className="text-[#E20010]">{svc.title[1]}</span>
            </h2>
            <p className="text-sm lg:text-base text-white/40 leading-relaxed mb-8 max-w-[440px] font-medium">{svc.desc}</p>
            <ul className="space-y-4">
              {svc.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-xs lg:text-sm text-white/90 tracking-widest">
                  <span className="flex-shrink-0 bg-[#E20010]/20 p-2 rounded-full"><Check /></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2 bg-[#f6f6f6] relative overflow-hidden order-1 lg:order-2" style={{ minHeight: '300px' }}>
            <FloatingImages images={svc.images} />
            <div className="absolute font-barlow-condensed font-black text-[#E20010] opacity-[0.03] text-[200px] lg:text-[320px] leading-none select-none pointer-events-none right-[-20px] lg:right-[-30px] bottom-[-20px] lg:bottom-[-30px]">
              {svc.num}
            </div>
          </div>
        </div>
      )}
    </motion.div>
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
            COMPLETE CONSTRUCTION SUPPLY — Oman
          </div>
          <h1 className="font-barlow-condensed font-black uppercase leading-[0.8] tracking-normal text-black mb-6" style={{ fontSize: 'clamp(56px, 10vw, 130px)' }}>
            Our Construction<br />
            <span className="text-[#E20010]">Supplies</span>
          </h1>
          <p className="text-sm lg:text-base text-black/60 leading-relaxed max-w-xl font-medium border-l-3 border-[#E20010] pl-4 lg:pl-5 italic">
            Supplying high-quality construction materials, tools, and safety equipment for every stage of your project.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="grid grid-cols-4 bg-black text-white">
        {STATS.map((stat, i) => (
          <div key={stat.label} className={`px-1 py-6 lg:px-10 lg:py-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-1 ${i < 3 ? 'border-r border-white/10' : ''}`}>
            <span className="font-barlow-condensed font-black text-2xl sm:text-3xl lg:text-7xl text-[#E20010] leading-none">{stat.value}</span>
            <span className="text-[7px] sm:text-[9px] lg:text-xs text-white/50 lg:text-white/30 font-bold tracking-widest">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* ── Filter Nav ── */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5 shadow-sm">
        <div className="flex flex-wrap w-full max-w-[1440px] mx-auto">
          {SERVICES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => scrollToService(s.id)}
              className={`w-1/3 lg:flex-1 py-3 lg:py-6 flex flex-col items-center justify-center gap-1 hover:bg-gray-50 transition-all group px-1 ${i < SERVICES.length - 1 && (i + 1) % 3 !== 0 ? 'border-r border-black/5' : ''} ${Math.floor(i / 3) < Math.floor((SERVICES.length - 1) / 3) ? 'border-b border-black/5' : ''}`}
            >
              <span className="text-[#E20010] font-barlow-condensed font-black text-sm lg:text-lg leading-none opacity-40 group-hover:opacity-100">{s.num}</span>
              <span className="text-[6.5px] sm:text-[9px] lg:text-xs text-black group-hover:text-[#E20010] font-bold tracking-wider lg:tracking-widest uppercase truncate max-w-full">{s.category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Cards — Static alternating left/right layout ── */}
      <div className="px-4 lg:px-8 py-16 lg:py-24 flex flex-col gap-6 lg:gap-10">
        {SERVICES.map((svc, index) => (
          <ServiceCard key={svc.id} svc={svc} index={index} />
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
            Contact Us
          </motion.a>
        </div>
      </section>

    </div>
  )
}