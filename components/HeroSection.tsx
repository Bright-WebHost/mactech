'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ArrowRight, Zap, Shield, Award } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

// ─── Premium Brand Tokens ──────────────────────────────────────────────────────
const RED   = '#CC1020'
const ACCENT_ORANGE = '#FF6B35'
const CREAM = '#F5F4F0'
const BLACK = '#0F0F0F'
const WHITE = '#FFFFFF'
const BG    = '#0A0A0A'

const SLIDES = [
  {
    src:     '/images/hero/tools.png',
    label:   'Fasteners',
    sub:     'High-Tensile Precision Solutions',
    tagline: 'Precision Built. Industry Trusted.',
    feature: 'Premium grade fasteners with industry-leading standards',
    icon: Award,
  },
  {
    src:     '/images/hero/tools2.png',
    label:   'Welding',
    sub:     'Professional Consumables & Accessories',
    tagline: 'Fuse Metal. Forge Progress.',
    feature: 'ISO certified welding solutions for maximum strength',
    icon: Zap,
  },
  {
    src:     '/images/hero/tools3.png',
    label:   'Safety',
    sub:     'International Compliance Standards',
    tagline: 'Every Worker. Every Site. Protected.',
    feature: 'Complete protection coverage meeting global standards',
    icon: Shield,
  },
  {
    src:     '/images/hero/tools4.png',
    label:   'Lifting',
    sub:     'WLL Certified Heavy-Duty Solutions',
    tagline: 'Lift Heavy. Move Safely.',
    feature: 'Certified load capacity with safe operations assured',
    icon: Award,
  },
  {
    src:     '/images/hero/tools5.png',
    label:   'Power Tools',
    sub:     'Industrial Grade Performance',
    tagline: 'Power That Performs.',
    feature: 'Professional tool selection built for continuous use',
    icon: Zap,
  },
]

const pad = (n: number) => String(n).padStart(2, '0')
const N = SLIDES.length

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const [idx, setIdx] = useState(0)
  const indexRef = useRef(0)

  const imageRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const subheadlineRef = useRef<HTMLDivElement>(null)
  const rightLabelRef = useRef<HTMLDivElement>(null)
  const macTechNoiseRef = useRef<HTMLDivElement>(null)

  const slide = SLIDES[idx]
  const IconComponent = slide.icon

  // ─── GSAP Scroll Animation ──────────────────────────────────────────────────
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollDistance = (N - 1) * window.innerHeight

    const tween = gsap.to(container, {
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: `+=${scrollDistance}`,
        pin: true,
        pinSpacing: true,
        scrub: 1.2,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress
          const newIdx = Math.min(Math.floor(progress * N), N - 1)

          if (newIdx !== indexRef.current) {
            indexRef.current = newIdx
            setIdx(newIdx)
          }
        },
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  // ─── Sharp Content Animation on Slide Change ──────────────────────────────────
  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' },
      0.1
    )

    tl.fromTo(
      subheadlineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      0.2
    )

    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.75, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'back.out(1.2)' },
      0.15
    )

    tl.fromTo(
      rightLabelRef.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.55, ease: 'power3.out' },
      0.2
    )

    return () => { tl.kill() }
  }, [idx])

  // ─── Sharp Breathing Animation ──────────────────────────────────────────────
  useEffect(() => {
    const breathingTl = gsap.timeline({ repeat: -1 })
    breathingTl.to(imageRef.current, { scale: 1.12, y: -16, duration: 4, ease: 'power1.inOut' }, 0)
    breathingTl.to(imageRef.current, { scale: 1, y: 0, duration: 4, ease: 'power1.inOut' }, 4)
    return () => { breathingTl.kill() }
  }, [])

  return (
    <div ref={containerRef}>
      <section
        ref={stickyRef}
        className="hero-main-container"
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          background: BG,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
        }}
      >
        {/* Background Orbs */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: '-10%', top: '-20%', width: 600, height: 600, background: `radial-gradient(circle, ${RED}12 0%, transparent 70%)`, borderRadius: '50%', filter: 'blur(60px)', zIndex: 1 }} />
          <div style={{ position: 'absolute', left: '-5%', bottom: '-15%', width: 500, height: 500, background: `radial-gradient(circle, ${ACCENT_ORANGE}08 0%, transparent 70%)`, borderRadius: '50%', filter: 'blur(80px)', zIndex: 1 }} />
        </div>

        {/* MACTECH Background Text */}
        <div ref={macTechNoiseRef} className="mactech-bg-text">
          <div style={{
            fontSize: 'clamp(120px, 28vw, 420px)',
            fontWeight: 900,
            color: RED,
            opacity: 0.15,
            letterSpacing: '-12px',
            lineHeight: 0.85,
            userSelect: 'none',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            textAlign: 'center',
          }}>
            MACTECH
          </div>
        </div>

        {/* Top Accent Bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${RED} 0%, ${ACCENT_ORANGE} 100%)`, zIndex: 50 }} />

        {/* ─── LEFT PANEL ─── */}
        <div className="left-panel">
          <p style={{ fontSize: 'clamp(11px, 0.95vw, 12px)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, margin: '0 0 28px' }}>
            Serving Oil & Gas, Construction, Fabrication & Industrial sectors. ISO 9001:2015 certified.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'inherit' }}>
            <Link href="/products" className="btn-primary">View Products <ArrowRight size={13} strokeWidth={3} /></Link>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>

        {/* ─── CENTER PANEL ─── */}
        <div className="center-panel">
          <div ref={headlineRef} style={{ textAlign: 'center', marginBottom: 'clamp(10px, 2vw, 20px)', opacity: 0 }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 42px)', fontWeight: 900, color: WHITE, lineHeight: 1.2, letterSpacing: '-1px', margin: 0 }}>
              Complete <span style={{ color: RED }}>Industrial</span> Supply
            </h2>
          </div>

          <div ref={subheadlineRef} style={{ textAlign: 'center', marginBottom: 'clamp(15px, 3vw, 30px)', opacity: 0, maxWidth: 'clamp(250px, 90%, 600px)' }}>
            <p style={{ fontSize: 'clamp(12px, 1.1vw, 15px)', fontWeight: 600, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, margin: 0 }}>
              From <span style={{ color: ACCENT_ORANGE }}>{slide.label}</span>, delivering excellence
            </p>
          </div>

          <div ref={imageRef} style={{ position: 'relative', zIndex: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              src={slide.src}
              alt={slide.label}
              width={500}
              height={500}
              priority
              style={{ objectFit: 'contain', width: 'clamp(220px, 35vw, 480px)', height: 'auto', filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.4))' }}
            />
          </div>
        </div>

        {/* ─── RIGHT PANEL ─── */}
        <div className="right-panel">
          <div ref={rightLabelRef} className="feature-card" style={{ opacity: 0 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: `${RED}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <IconComponent size={20} color={RED} />
              </div>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 800, color: RED, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Feature</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: WHITE, marginTop: 4, lineHeight: 1.4 }}>{slide.feature}</div>
              </div>
            </div>
          </div>

          <div className="tagline-text">
            &ldquo;<span style={{ color: ACCENT_ORANGE }}>{slide.tagline}</span>&rdquo;
          </div>
        </div>

        {/* Wave Background */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', zIndex: 5, pointerEvents: 'none' }}>
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ position: 'absolute', bottom: -1, width: '100%', height: '100%' }}>
            <path d="M0,80 Q360,20 720,60 T1440,40 L1440,200 L0,200 Z" fill={CREAM} />
          </svg>
        </div>

        {/* UI Elements */}
        <div style={{ position: 'absolute', bottom: 30, left: 30, zIndex: 30, fontSize: 12, fontWeight: 800, color: BLACK }}>
          {pad(idx + 1)} / {pad(N)}
        </div>

        <style>{`
          /* Mobile Overlapping Fixes */
          .hero-main-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }

          .mactech-bg-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            pointer-events: none;
          }

          /* Desktop Default (Matches your original) */
          .left-panel { position: absolute; left: clamp(24px, 6vw, 92px); top: 50%; transform: translateY(-50%); z-index: 40; max-width: 420px; }
          .center-panel { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 25; pointer-events: none; display: flex; flex-direction: column; align-items: center; }
          .right-panel { position: absolute; right: clamp(24px, 6vw, 92px); top: 50%; transform: translateY(-50%); z-index: 30; max-width: 400px; text-align: right; }
          
          .btn-primary { display: inline-flex; alignItems: center; gap: 8; background: linear-gradient(135deg, ${RED}, ${ACCENT_ORANGE}); color: ${WHITE}; font-size: 11px; font-weight: 800; padding: 12px 22px; border-radius: 6px; text-decoration: none; }
          .btn-secondary { display: inline-flex; alignItems: center; background: rgba(255,255,255,0.08); border: 1.5px solid rgba(255,255,255,0.15); color: ${WHITE}; font-size: 11px; font-weight: 700; padding: 12px 20px; border-radius: 6px; text-decoration: none; backdrop-filter: blur(8px); }
          .feature-card { background: rgba(255,255,255,0.05); border: 1.5px solid ${RED}40; border-radius: 12px; padding: 18px; backdrop-filter: blur(12px); margin-bottom: 24px; text-align: left; }
          .tagline-text { font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.6); font-style: italic; }

          /* Mobile Specific Breakpoint */
          @media (max-width: 1024px) {
            .left-panel, .center-panel, .right-panel {
              position: relative !important;
              left: auto !important;
              right: auto !important;
              top: auto !important;
              transform: none !important;
              max-width: 100% !important;
              text-align: center !important;
              margin-bottom: 20px;
            }
            .hero-main-container {
               justify-content: flex-start !important;
               padding-top: 60px;
               height: 100vh;
               overflow-y: auto;
            }
            .center-panel { order: 1; }
            .left-panel { order: 2; display: flex; flex-direction: column; align-items: center; }
            .right-panel { order: 3; display: flex; flex-direction: column; align-items: center; }
            .feature-card { margin-bottom: 10px; }
            .tagline-text { display: none; }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
        `}</style>
      </section>
    </div>
  )
}