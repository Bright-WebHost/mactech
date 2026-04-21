'use client'

import { ArrowRight, Zap, Target, Heart, Globe, Shield, Award, Users, MapPin } from 'lucide-react'
import Link from 'next/link'
import Model3DViewer from '@/components/Model3DViewer'
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

// ─── CUSTOM PREMIUM COMPONENTS ──────────────────────────────────────────────

// 1. Magnetic Button (Snaps to cursor)
function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current!.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    x.set(middleX * 0.2)
    y.set(middleY * 0.2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}

// 2. Parallax Image with Mask Reveal
function ParallaxImage({ src, alt, className, style = {} }: { src: string, alt: string, className?: string, style?: React.CSSProperties }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Image moves slightly slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1])

  return (
    <motion.div 
      ref={containerRef}
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
      transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
      viewport={{ once: true, margin: '-50px' }}
      className={`relative overflow-hidden ${className || ''}`}
      style={style}
    >
      <motion.img 
        src={src} 
        alt={alt} 
        style={{ y, scale }} 
        className="absolute w-full h-[130%] object-cover -top-[15%] left-0" 
      />
    </motion.div>
  )
}

// 3. Staggered Text Line Reveal
function AnimatedLine({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <div style={{ overflow: 'hidden', display: 'block' }}>
      <motion.div
        initial={{ y: '100%', rotate: 2 }}
        whileInView={{ y: 0, rotate: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9, delay, ease: [0.33, 1, 0.68, 1] }}
        style={{ display: 'block', transformOrigin: 'left center' }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// 4. Standard Block Reveal
function Reveal({ children, delay = 0, dir = 'up' }: { children: React.ReactNode, delay?: number, dir?: 'up' | 'left' | 'right' | 'scale' }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const init = {
    up: { y: 40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
    scale: { y: 0, x: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...init[dir], scale: dir === 'scale' ? 0.94 : 1 }}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

// ─── MAIN PAGE COMPONENT ──────────────────────────────────────────────────

export default function AboutPage() {
  
  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  const stats = [
    { number: '2008', label: 'Est. in Dubai, UAE', sub: 'Founded' },
    { number: '150+', label: 'Industry Partners', sub: 'Trusted by' },
    { number: '3', label: 'Muscat · Sohar · Dubai', sub: 'Offices' },
    { number: 'ISO', label: '9001:2015 Certified', sub: 'Quality' },
  ]

  const values = [
    { title: 'Quality First', description: 'Every product we supply meets or exceeds international standards — from precision fasteners to safety PPE. ISO 9001:2015 certified across all operations.', icon: <Award className="w-5 h-5" /> },
    { title: 'Reliability', description: 'Trusted supplier to PDO, ORPIC, and leading Oil & Gas companies in Oman. Ministry of Oil & Gas approved under JSRS certification.', icon: <Shield className="w-5 h-5" /> },
    { title: 'Innovation', description: 'Continuously expanding our product lines to offer 360-degree industrial solutions — from Head-to-Toe safety to complete fabrication consumables.', icon: <Zap className="w-5 h-5" /> },
    { title: 'Customer Focus', description: 'Exceptional service and satisfaction are at the core of every interaction. We build lasting partnerships, not just transactions.', icon: <Heart className="w-5 h-5" /> },
  ]

  const products = [
    { label: 'PPE & Safety', desc: 'Head, body, hand, foot, fall protection, workwear & disposable wear' },
    { label: 'Fasteners', desc: 'Bolts, nuts, screws, washers, pins, circlips, T-bolts & Allen plugs' },
    { label: 'Hand & Power Tools', desc: 'Professional-grade hand, power & pneumatic tools for every trade' },
    { label: 'Welding Supplies', desc: 'Welding consumables, accessories & complete welding solutions' },
    { label: 'Abrasives & Adhesives', desc: 'Industrial-grade abrasives, adhesives & construction consumables' },
    { label: 'Pipe & Fittings', desc: 'Full range of industrial pipe fittings & building materials' },
  ]

  const offices = [
    { city: 'Muscat', detail: 'Al Jami Al Akbar St., Ghala', type: 'Headquarters', phone: '94422435 / 94434412', year: '2012' },
    { city: 'Sohar', detail: 'Sohar Industrial Area, Oman', type: 'Operations', phone: '91796734', year: '2015' },
    { city: 'Dubai', detail: 'United Arab Emirates', type: 'Origin Office', phone: '', year: '2008' },
  ]

  return (
    <div style={{ fontFamily: "'DM Sans', 'Barlow', sans-serif", background: '#ffffff', color: '#0D1B2A' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Barlow+Condensed:wght@600;700;800&display=swap');
        
        /* Lenis Native Defaults */
        html.lenis { height: auto; }
        .lenis.lenis-smooth { scroll-behavior: auto !important; }
        .lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
        .lenis.lenis-stopped { overflow: hidden; }
        .lenis.lenis-scrolling iframe { pointer-events: none; }
        
        .about-page * { box-sizing: border-box; margin: 0; padding: 0; }
        .tag { display: inline-block; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #E20010; background: #FFE5E8; border: 1px solid #FFB3BC; padding: 4px 12px; border-radius: 2px; }
        .display { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; line-height: 0.95; text-transform: uppercase; }
        .amber { color: #E20010; }
        .navy { color: #0D1B2A; }
        .btn-dark { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; background: #0D1B2A; color: #fff; font-family: 'DM Sans'; font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; border-radius: 3px; text-decoration: none; transition: background 0.2s; }
        .btn-dark:hover { background: #1a2d42; }
        .btn-outline { display: inline-flex; align-items: center; gap: 8px; padding: 13px 28px; border: 1.5px solid #0D1B2A; color: #0D1B2A; font-family: 'DM Sans'; font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; border-radius: 3px; text-decoration: none; transition: all 0.2s; }
        .btn-outline:hover { background: #0D1B2A; color: #fff; }
        .btn-amber { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; background: #E20010; color: #fff; font-family: 'DM Sans'; font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; border-radius: 3px; text-decoration: none; transition: background 0.2s; }
        .btn-amber:hover { background: #b4000d; }
        .divider { width: 40px; height: 3px; background: #E20010; border-radius: 2px; }
        .value-card { border: 1.5px solid #E8EDF2; border-radius: 4px; padding: 32px 28px; background: #fff; transition: border-color 0.4s, box-shadow 0.4s, transform 0.4s; }
        .value-card:hover { border-color: #E20010; box-shadow: 0 10px 40px rgba(226,0,16,0.08); transform: translateY(-4px); }
        .product-row { display: flex; align-items: flex-start; gap: 20px; padding: 24px 0; border-bottom: 1px solid #F0F4F8; }
        .product-row:last-child { border-bottom: none; }
        .product-num { font-family: 'Barlow Condensed', sans-serif; font-size: 28px; font-weight: 800; color: #E8EDF2; line-height: 1; min-width: 40px; transition: color 0.3s; }
        .product-row:hover .product-num { color: #E20010; }
        .check-item { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 14px; }
        .check-dot { width: 18px; height: 18px; border-radius: 50%; background: #E20010; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
        .img-label { position: absolute; bottom: 16px; left: 16px; background: #0D1B2A; color: #fff; font-family: 'DM Sans'; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 6px 14px; border-radius: 2px; z-index: 10; }
        
        /* Mobile Breakpoints */
        @media (max-width: 1024px) {
          .hero-grid, .story-grid, .vision-grid, .cta-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .story-sticky { position: relative !important; top: 0 !important; }
          .value-grid { grid-template-columns: 1fr 1fr !important; }
          .office-grid { grid-template-columns: 1fr !important; }
          .stat-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .value-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="about-page">

        {/* ── HERO ── */}
        <section style={{ padding: '120px 0 0', background: '#fff', overflow: 'hidden' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            
            <Reveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
                <span className="tag">About Mactech Oman</span>
                <div style={{ flex: 1, height: 1, background: '#E8EDF2' }} />
                <span style={{ fontFamily: 'DM Sans', fontSize: 12, color: '#9AA5B4', fontWeight: 600 }}>Est. 2008 · Muscat, Oman</span>
              </div>
            </Reveal>

            <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'flex-end', paddingBottom: 0 }}>
              
              {/* Left Content with Choreographed Text */}
              <div>
                <h1 className="display" style={{ fontSize: 'clamp(52px, 6.5vw, 88px)', color: '#0D1B2A', marginBottom: 24 }}>
                  <AnimatedLine delay={0.1}>Premium</AnimatedLine>
                  <AnimatedLine delay={0.2}>Industrial</AnimatedLine>
                  <AnimatedLine delay={0.3}><span className="amber">Solutions</span></AnimatedLine>
                  <AnimatedLine delay={0.4}>For Oman</AnimatedLine>
                </h1>
                
                <Reveal delay={0.5}>
                  <p style={{ fontFamily: 'DM Sans', fontSize: 17, lineHeight: 1.7, color: '#4A5568', marginBottom: 36, maxWidth: 420 }}>
                    Since 2008, Mactech Building Materials Trading LLC has been the trusted industrial supply partner across Oman and the UAE — ISO 9001:2015 certified, Oil & Gas approved, and built on a foundation of quality, service, and integrity.
                  </p>
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    <MagneticButton>
                      <Link href="/contact" className="btn-dark">Start Partnership <ArrowRight size={14} /></Link>
                    </MagneticButton>
                    <MagneticButton>
                      <Link href="/products" className="btn-outline">Our Products</Link>
                    </MagneticButton>
                  </div>
                </Reveal>
              </div>

              {/* Right Images with Parallax & Masking */}
              <div style={{ position: 'relative', height: 520, width: '100%' }}>
                <ParallaxImage 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                  alt="Industrial worker"
                  className="absolute top-0 right-0 w-[78%] h-[360px] rounded-md z-10"
                />
                <div className="img-label z-20">Oil & Gas · Construction</div>
                
                <ParallaxImage 
                  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=500&q=80"
                  alt="Tools"
                  className="absolute bottom-0 left-0 w-[48%] h-[200px] rounded-md z-20 shadow-2xl"
                />
                
                <Reveal delay={0.6} dir="scale">
                  <div style={{ position: 'absolute', bottom: 0, right: 0, width: '28%', height: 200, background: '#E20010', borderRadius: 4, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px 18px', zIndex: 30 }}>
                    <span style={{ fontFamily: 'Barlow Condensed', fontSize: 48, fontWeight: 800, color: '#fff', lineHeight: 1 }}>ISO</span>
                    <span style={{ fontFamily: 'DM Sans', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>9001:2015<br />Certified</span>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div style={{ background: '#0D1B2A', marginTop: 80 }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
              <div className="stat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
                {stats.map((s, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div style={{ padding: '36px 32px', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ fontFamily: 'DM Sans', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E20010', marginBottom: 8 }}>{s.sub}</div>
                      <div style={{ fontFamily: 'Barlow Condensed', fontSize: 40, fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: 4 }}>{s.number}</div>
                      <div style={{ fontFamily: 'DM Sans', fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{s.label}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── OUR STORY (STICKY SCROLLYTELLING) ── */}
        <section style={{ padding: '120px 0', background: '#fff', position: 'relative' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <div className="story-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '80px', alignItems: 'flex-start' }}>
              
              {/* Left Side: Tall Image Track */}
              <div style={{ position: 'relative', minHeight: '120vh', width: '100%' }}>
                
                <ParallaxImage 
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80"
                  alt="Warehouse"
                  className="w-[80%] h-[460px] rounded-2xl z-10 sticky top-[15vh]"
                />
                
                <ParallaxImage 
                  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=700&q=80"
                  alt="Hardware"
                  className="absolute right-0 top-[45vh] w-[65%] h-[400px] z-20 shadow-2xl border-8 border-white"
                  style={{ borderRadius: '50%' }}
                />

                <Reveal delay={0.4}>
                  <div style={{ position: 'sticky', top: '75vh', left: 0, zIndex: 30, background: '#fff', border: '1.5px solid #E8EDF2', borderRadius: 14, padding: '16px 20px', display: 'inline-block', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
                    <div style={{ fontFamily: 'Barlow Condensed', fontSize: 32, fontWeight: 800, color: '#E20010', lineHeight: 1 }}>PDO</div>
                    <div style={{ fontFamily: 'DM Sans', fontSize: 11, color: '#4A5568', fontWeight: 600, marginTop: 4 }}>Approved Supplier</div>
                    <div style={{ fontFamily: 'DM Sans', fontSize: 10, color: '#9AA5B4', marginTop: 2 }}>Ministry of Oil & Gas · JSRS</div>
                  </div>
                </Reveal>
              </div>

              {/* Right Side: Sticky Text Content */}
              <div className="story-sticky" style={{ position: 'sticky', top: '20vh', paddingRight: 20 }}>
                <Reveal>
                  <span className="tag" style={{ marginBottom: 16, display: 'inline-block' }}>Our Journey</span>
                  <h2 className="display" style={{ fontSize: 'clamp(36px, 3.8vw, 56px)', color: '#0D1B2A', marginBottom: 18 }}>
                    From Dubai<br />
                    To <span className="amber">Gulf Leader</span>
                  </h2>
                  <div className="divider" style={{ marginBottom: 30 }} />
                </Reveal>

                <Reveal delay={0.1}>
                  <p style={{ fontFamily: 'DM Sans', fontSize: 15, lineHeight: 1.75, color: '#4A5568', marginBottom: 14 }}>
                    Mactech Building Materials Trading LLC had its humble beginning in <strong style={{ color: '#0D1B2A' }}>2008 in Dubai, UAE</strong>. Driven by a commitment to quality and customer service, we expanded to Muscat, Oman in <strong style={{ color: '#0D1B2A' }}>2012</strong> — opening our showroom in Ghala, Muscat.
                  </p>
                  <p style={{ fontFamily: 'DM Sans', fontSize: 15, lineHeight: 1.75, color: '#4A5568', marginBottom: 28 }}>
                    Today, with offices across Muscat, Sohar, and Dubai, we serve as an <strong style={{ color: '#0D1B2A' }}>authorized distributor for Delta Plus Products</strong> in Oman and a trusted supply partner to the region's largest industrial players — including PDO and ORPIC.
                  </p>

                  <div style={{ marginBottom: 36 }}>
                    {[
                      'ISO 9001:2015 Certified — quality assured across all operations',
                      'Oil & Gas Ministry Approved — JSRS registered supplier',
                      'Authorized Delta Plus PPE distributor in Oman',
                      '150+ active industry partnerships across the Gulf',
                    ].map((item, i) => (
                      <div className="check-item" key={i}>
                        <div className="check-dot" style={{ width: 9, height: 9, marginTop: 8 }} />
                        <p style={{ fontFamily: 'DM Sans', fontSize: 14, color: '#4A5568', lineHeight: 1.55, margin: 0 }}>{item}</p>
                      </div>
                    ))}
                  </div>

                  <MagneticButton>
                    <Link href="/contact" className="btn-amber">Partner With Us <ArrowRight size={14} /></Link>
                  </MagneticButton>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* ── MISSION & VISION ── */}
        <section style={{ padding: '100px 0 140px', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <Reveal>
                <span className="tag" style={{ marginBottom: 20, display: 'inline-block' }}>Our Purpose</span>
              </Reveal>
              <h2 className="display" style={{ fontSize: 'clamp(40px, 4vw, 62px)', color: '#0D1B2A' }}>
                <AnimatedLine delay={0.1}>Driven By</AnimatedLine>
                <AnimatedLine delay={0.2}><span className="amber">Trust & Quality</span></AnimatedLine>
              </h2>
            </div>
            
            <div className="vision-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 960, margin: '0 auto' }}>
              
              <Reveal dir="up">
                <div style={{ background: '#0D1B2A', borderRadius: 4, padding: '56px 48px', height: '100%', transition: 'transform 0.4s', cursor: 'default' }} className="hover:-translate-y-2">
                  <div style={{ width: 48, height: 48, background: 'rgba(226,0,16,0.2)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
                    <Target size={20} color="#E20010" />
                  </div>
                  <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: 36, fontWeight: 800, color: '#fff', textTransform: 'uppercase', marginBottom: 16 }}>Our Mission</h3>
                  <div style={{ width: 40, height: 2, background: '#E20010', marginBottom: 24 }} />
                  <p style={{ fontFamily: 'DM Sans', fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.7)' }}>
                    To deliver premium industrial products and unparalleled service that empower our clients to achieve operational excellence. We offer 360-degree solutions — from safety PPE and fasteners to welding consumables and building materials — across every major industry sector.
                  </p>
                </div>
              </Reveal>

              <Reveal dir="up" delay={0.1}>
                <div style={{ border: '1.5px solid #0D1B2A', borderRadius: 4, padding: '56px 48px', background: '#fff', height: '100%', transition: 'transform 0.4s', cursor: 'default' }} className="hover:-translate-y-2">
                  <div style={{ width: 48, height: 48, background: '#FFE5E8', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
                    <Globe size={20} color="#E20010" />
                  </div>
                  <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: 36, fontWeight: 800, color: '#0D1B2A', textTransform: 'uppercase', marginBottom: 16 }}>Our Vision</h3>
                  <div style={{ width: 40, height: 2, background: '#E20010', marginBottom: 24 }} />
                  <p style={{ fontFamily: 'DM Sans', fontSize: 15, lineHeight: 1.8, color: '#4A5568' }}>
                    To be the most trusted and reliable industrial supply partner in the Middle East — recognized for our quality standards, customer-first approach, and our continuous expansion into new product lines and industry solutions that keep our partners ahead of the curve.
                  </p>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* ── CORE VALUES ── */}
        <section style={{ padding: '120px 0', background: '#F7F9FC', borderTop: '1px solid #E8EDF2' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
              <div>
                <Reveal><span className="tag" style={{ marginBottom: 16, display: 'inline-block' }}>What Drives Us</span></Reveal>
                <h2 className="display" style={{ fontSize: 'clamp(40px, 4vw, 60px)', color: '#0D1B2A' }}>
                  <AnimatedLine>Core Values That</AnimatedLine>
                  <AnimatedLine delay={0.1}>Define <span className="amber">Excellence</span></AnimatedLine>
                </h2>
              </div>
              <Reveal delay={0.2}>
                <MagneticButton>
                  <Link href="/contact" className="btn-outline">Get in Touch <ArrowRight size={14} /></Link>
                </MagneticButton>
              </Reveal>
            </div>
            
            <div className="value-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
              {values.map((v, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="value-card h-full">
                    <div style={{ width: 40, height: 40, background: i % 2 === 0 ? '#FFE5E8' : '#0D1B2A', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, color: i % 2 === 0 ? '#E20010' : '#fff' }}>
                      {v.icon}
                    </div>
                    <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: 24, fontWeight: 700, color: '#0D1B2A', textTransform: 'uppercase', marginBottom: 12, letterSpacing: '0.02em' }}>{v.title}</h3>
                    <p style={{ fontFamily: 'DM Sans', fontSize: 14, lineHeight: 1.7, color: '#4A5568' }}>{v.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS AT A GLANCE ── */}
        <section style={{ padding: '140px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
              
              <div>
                <Reveal><span className="tag" style={{ marginBottom: 20, display: 'inline-block' }}>What We Supply</span></Reveal>
                <h2 className="display" style={{ fontSize: 'clamp(40px, 4vw, 60px)', color: '#0D1B2A', marginBottom: 24 }}>
                  <AnimatedLine>360° Industrial</AnimatedLine>
                  <AnimatedLine delay={0.1}><span className="amber">Product Range</span></AnimatedLine>
                </h2>
                <Reveal delay={0.2}><div className="divider" style={{ marginBottom: 40 }} /></Reveal>
                
                <Reveal delay={0.3} dir="scale">
                  <div style={{ height: 460, background: '#F7F9FC', borderRadius: 8, overflow: 'hidden' }}>
                    <Model3DViewer />
                  </div>
                </Reveal>
              </div>
              
              <div style={{ paddingTop: 20 }}>
                {products.map((p, i) => (
                  <Reveal key={i} delay={i * 0.08} dir="up">
                    <div className="product-row group">
                      <div className="product-num">0{i + 1}</div>
                      <div>
                        <div style={{ fontFamily: 'Barlow Condensed', fontSize: 22, fontWeight: 700, color: '#0D1B2A', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 6 }}>{p.label}</div>
                        <div style={{ fontFamily: 'DM Sans', fontSize: 14, color: '#718096', lineHeight: 1.6 }}>{p.desc}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── OFFICES ── */}
        <section style={{ padding: '120px 0', background: '#0D1B2A', position: 'relative', overflow: 'hidden' }}>
          {/* subtle abstract background */}
          <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(226,0,16,0.05) 0%, transparent 70%)', borderRadius: '50%' }} />
          
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
              <div>
                <Reveal>
                  <span style={{ display: 'inline-block', fontFamily: 'DM Sans', fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#E20010', background: 'rgba(226,0,16,0.1)', border: '1px solid rgba(226,0,16,0.3)', padding: '4px 12px', borderRadius: 2, marginBottom: 20 }}>
                    Regional Presence
                  </span>
                </Reveal>
                <h2 className="display" style={{ fontSize: 'clamp(40px, 4vw, 60px)', color: '#fff' }}>
                  <AnimatedLine>Strategic Offices</AnimatedLine>
                  <AnimatedLine delay={0.1}>Across the <span className="amber">Region</span></AnimatedLine>
                </h2>
              </div>
              <Reveal delay={0.2}>
                <div style={{ fontFamily: 'DM Sans', fontSize: 14, color: 'rgba(255,255,255,0.5)', maxWidth: 280, lineHeight: 1.7 }}>
                  From our Dubai origin to our Muscat headquarters and Sohar operations, we are always close to our clients.
                </div>
              </Reveal>
            </div>
            
            <div className="office-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
              {offices.map((o, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div style={{ background: i === 0 ? '#E20010' : 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '56px 40px', position: 'relative', overflow: 'hidden', height: '100%', transition: 'background 0.3s' }} className="hover:bg-white/5">
                    <div style={{ fontFamily: 'Barlow Condensed', fontSize: 100, fontWeight: 800, color: i === 0 ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.03)', position: 'absolute', top: 10, right: 10, lineHeight: 0.8, pointerEvents: 'none' }}>{o.year}</div>
                    
                    <div style={{ position: 'relative', zIndex: 5 }}>
                      <div style={{ fontFamily: 'DM Sans', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: i === 0 ? 'rgba(255,255,255,0.7)' : '#E20010', marginBottom: 16 }}>{o.type}</div>
                      <div style={{ fontFamily: 'Barlow Condensed', fontSize: 48, fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: 16 }}>{o.city}</div>
                      <div style={{ fontFamily: 'DM Sans', fontSize: 14, color: i === 0 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)', marginBottom: o.phone ? 8 : 0 }}>{o.detail}</div>
                      {o.phone && <div style={{ fontFamily: 'DM Sans', fontSize: 14, color: i === 0 ? '#fff' : 'rgba(255,255,255,0.8)', fontWeight: 600 }}>{o.phone}</div>}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: '140px 0', background: '#fff', borderTop: '1px solid #E8EDF2' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <div className="cta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
              
              <div>
                <Reveal><span className="tag" style={{ marginBottom: 20, display: 'inline-block' }}>Work With Us</span></Reveal>
                <h2 className="display" style={{ fontSize: 'clamp(40px, 4vw, 64px)', color: '#0D1B2A', marginBottom: 24 }}>
                  <AnimatedLine>Ready to Build</AnimatedLine>
                  <AnimatedLine delay={0.1}>Something <span className="amber">Extraordinary?</span></AnimatedLine>
                </h2>
                <Reveal delay={0.2}>
                  <p style={{ fontFamily: 'DM Sans', fontSize: 16, lineHeight: 1.8, color: '#4A5568', marginBottom: 40, maxWidth: 420 }}>
                    Partner with Mactech and experience the difference of working with an ISO-certified, Gulf-region industrial supply leader. Let's create success together.
                  </p>
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    <MagneticButton>
                      <Link href="/contact" className="btn-dark">Get in Touch <ArrowRight size={14} /></Link>
                    </MagneticButton>
                    <MagneticButton>
                      <Link href="/products" className="btn-outline">Explore Products</Link>
                    </MagneticButton>
                  </div>
                </Reveal>
              </div>
              
              <div style={{ position: 'relative' }}>
                <ParallaxImage 
                  src="https://images.unsplash.com/photo-1565793979861-2f3e57cf6b0b?w=800&q=80"
                  alt="Industrial partnership"
                  className="w-full h-[480px] rounded-md shadow-lg"
                />
                <Reveal delay={0.4} dir="scale">
                  <div style={{ position: 'absolute', top: 32, left: -32, background: '#fff', border: '1.5px solid #E8EDF2', borderRadius: 6, padding: '20px 24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                    <div style={{ fontFamily: 'DM Sans', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9AA5B4', marginBottom: 6 }}>Authorized Distributor</div>
                    <div style={{ fontFamily: 'Barlow Condensed', fontSize: 24, fontWeight: 800, color: '#0D1B2A' }}>Delta Plus · Oman</div>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  )
}