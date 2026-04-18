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

    // Animation for other elements only
    tl.fromTo(
      headlineRef.current,
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power3.out',
      },
      0.1
    )

    // Subheadline - Fast fade in
    tl.fromTo(
      subheadlineRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      },
      0.2
    )

    // Product Image - Zoom and fade
    tl.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.75,
        y: 30,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        ease: 'back.out(1.2)',
      },
      0.15
    )

    // Right panel - Slide in from right
    tl.fromTo(
      rightLabelRef.current,
      {
        opacity: 0,
        x: 40,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.55,
        ease: 'power3.out',
      },
      0.2
    )

    return () => {
      tl.kill()
    }
  }, [idx])

  // ─── Sharp Breathing Animation ──────────────────────────────────────────────
  useEffect(() => {
    const breathingTl = gsap.timeline({ repeat: -1 })

    breathingTl.to(
      imageRef.current,
      {
        scale: 1.12,
        y: -16,
        duration: 4,
        ease: 'power1.inOut',
      },
      0
    )

    breathingTl.to(
      imageRef.current,
      {
        scale: 1,
        y: 0,
        duration: 4,
        ease: 'power1.inOut',
      },
      4
    )

    return () => {
      breathingTl.kill()
    }
  }, [])


  const goToSlide = (targetIdx: number) => {
    const progress = targetIdx / (N - 1)
    const scrollDistance = (N - 1) * window.innerHeight
    const scrollTarget = progress * scrollDistance

    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth',
    })
  }

  const abs = (extra?: React.CSSProperties): React.CSSProperties => ({
    position: 'absolute',
    ...extra,
  })

  return (
    <div ref={containerRef}>
      {/* ─── STICKY HERO SECTION ────────────────────────────────────────────────── */}
      <section
        ref={stickyRef}
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '100vh',
          minHeight: '100vh',
          maxHeight: '100vh',
          overflow: 'hidden',
          background: BG,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 0,
          paddingRight: 0,
          margin: 0,
        }}
      >
        {/* ─── Animated Gradient Background Orbs ──────────────────────────────── */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
          {/* Red gradient orb */}
          <div
            style={{
              position: 'absolute',
              right: '-10%',
              top: '-20%',
              width: 600,
              height: 600,
              background: `radial-gradient(circle, ${RED}12 0%, transparent 70%)`,
              borderRadius: '50%',
              filter: 'blur(60px)',
              zIndex: 1,
            }}
          />
          {/* Orange gradient orb */}
          <div
            style={{
              position: 'absolute',
              left: '-5%',
              bottom: '-15%',
              width: 500,
              height: 500,
              background: `radial-gradient(circle, ${ACCENT_ORANGE}08 0%, transparent 70%)`,
              borderRadius: '50%',
              filter: 'blur(80px)',
              zIndex: 1,
            }}
          />
        </div>

        {/* ─── MACTECH Background Brand Text (Static, RED) ──────── */}
        <div
          ref={macTechNoiseRef}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 12,
            pointerEvents: 'none',
            width: '90vw',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            maxWidth: '1200px',
          }}
        >
          <div
            style={{
              fontSize: 'clamp(160px, 32vw, 420px)',
              fontWeight: 900,
              color: RED,
              opacity: 0.22,
              letterSpacing: '-12px',
              lineHeight: 0.85,
              whiteSpace: 'normal',
              wordWrap: 'break-word',
              userSelect: 'none',
              textShadow: `0 0 40px ${RED}40`,
              mixBlendMode: 'lighten',
              filter: 'none',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textAlign: 'center',
            }}
          >
            MACTECH
          </div>
        </div>

        {/* ─── Premium Brand Accent Bar ───────────────────────────────────────── */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${RED} 0%, ${ACCENT_ORANGE} 100%)`, zIndex: 50 }} />

        {/* ─── LEFT CONTENT PANEL ─────────────────────────────────────────────── */}
        <div
          style={{
            position:  'absolute',
            left:      'clamp(24px, 6vw, 92px)',
            top:       '50%',
            transform: 'translateY(-50%)',
            zIndex:    40,
            maxWidth:  'clamp(300px, 32vw, 420px)',
          }}
        >
          {/* Description */}
          <p
            style={{
              fontSize: 'clamp(11px, 0.95vw, 12px)',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.8,
              margin: '0 0 28px',
            }}
          >
            Serving Oil &amp; Gas, Construction, Fabrication &amp; Industrial sectors. ISO 9001:2015 certified with 15+ years of excellence.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link
              href="/products"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: `linear-gradient(135deg, ${RED} 0%, ${ACCENT_ORANGE} 100%)`,
                color: WHITE,
                fontSize: '11px', fontWeight: 800,
                padding: '12px 22px', borderRadius: 6,
                textDecoration: 'none', letterSpacing: '0.6px',
                border: `1px solid ${RED}80`,
                boxShadow: `0 12px 32px ${RED}25`,
                transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  y: -5,
                  boxShadow: `0 18px 48px ${RED}40`,
                  duration: 0.25,
                })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  y: 0,
                  boxShadow: `0 12px 32px ${RED}25`,
                  duration: 0.25,
                })
              }}
            >
              View Products <ArrowRight size={13} strokeWidth={3} />
            </Link>

            <Link
              href="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'rgba(255,255,255,0.08)',
                border: `1.5px solid rgba(255,255,255,0.15)`,
                color: WHITE, fontSize: '11px', fontWeight: 700,
                padding: '12px 20px', borderRadius: 6, textDecoration: 'none',
                transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  background: 'rgba(255,255,255,0.12)',
                  borderColor: `rgba(204, 16, 32, 0.3)`,
                  duration: 0.25,
                })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  background: 'rgba(255,255,255,0.08)',
                  borderColor: 'rgba(255,255,255,0.15)',
                  duration: 0.25,
                })
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* ─── CENTER: Headline + Product Display ──────────────────────────────── */}
        <div
          style={{
            position:      'absolute',
            left:          '50%',
            top:           '50%',
            transform:     'translate(-50%, -50%)',
            zIndex:        25,
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Headline Above Image */}
          <div
            ref={headlineRef}
            style={{
              textAlign: 'center',
              marginBottom: 'clamp(20px, 3vw, 40px)',
              opacity: 0,
              pointerEvents: 'none',
              zIndex: 35,
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(22px, 2.8vw, 42px)',
                fontWeight: 900,
                color: WHITE,
                lineHeight: 1.2,
                letterSpacing: '-1px',
                margin: 0,
              }}
            >
              Complete <span style={{ color: RED }}>Industrial</span> Supply
            </h2>
          </div>

          {/* Subheading Below Headline */}
          <div
            ref={subheadlineRef}
            style={{
              textAlign: 'center',
              marginBottom: 'clamp(30px, 4vw, 50px)',
              opacity: 0,
              pointerEvents: 'none',
              zIndex: 35,
              maxWidth: 'clamp(250px, 90%, 600px)',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(12px, 1.1vw, 15px)',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.8)',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              From <span style={{ color: ACCENT_ORANGE }}>fasteners to safety equipment</span>, delivering excellence across industries
            </p>
          </div>

          {/* Drop shadow beneath product */}
          <div
            style={{
              position: 'absolute',
              bottom: -40,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '70%',
              height: 50,
              borderRadius: '50%',
              background: `${RED}20`,
              filter: 'blur(30px)',
              zIndex: 12,
            }}
          />

          {/* Main Product Image */}
          <div
            style={{
              position: 'relative',
              zIndex: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              ref={imageRef}
              key={`prod-${idx}`}
              style={{
                opacity: 0,
                scale: 0.75,
                y: 30,
              }}
            >
              <Image
                src={slide.src}
                alt={slide.label}
                width={500}
                height={500}
                priority
                style={{
                  objectFit: 'contain',
                  width: 'clamp(280px, 38vw, 480px)',
                  height: 'auto',
                  display: 'block',
                  userSelect: 'none',
                  filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.4)) drop-shadow(0 0 30px rgba(204,16,32,0.2))',
                }}
              />
            </div>
          </div>
        </div>

        {/* ─── RIGHT CONTENT PANEL: Product Info ──────────────────────────────── */}
        <div
          style={{
            position:  'absolute',
            right:     'clamp(24px, 6vw, 92px)',
            top:       '50%',
            transform: 'translateY(-50%)',
            zIndex:    30,
            maxWidth:  'clamp(280px, 28vw, 400px)',
          }}
        >
          {/* Product Feature Card */}
          <div
            ref={rightLabelRef}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: `1.5px solid ${RED}40`,
              borderRadius: 12,
              padding: '18px 18px',
              backdropFilter: 'blur(12px)',
              marginBottom: 24,
              opacity: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 8,
                background: `${RED}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <IconComponent size={20} color={RED} strokeWidth={2} />
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: RED, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  Feature
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: WHITE, marginTop: 4, lineHeight: 1.4 }}>
                  {slide.feature}
                </div>
              </div>
            </div>
          </div>

          {/* Product Tagline */}
          <div
            style={{
              fontSize: 'clamp(12px, 1.1vw, 14px)',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.6)',
              fontStyle: 'italic',
              lineHeight: 1.6,
              marginBottom: 24,
            }}
          >
            &ldquo;<span style={{ color: ACCENT_ORANGE }}>{slide.tagline}</span>&rdquo;
          </div>

          {/* Certification Badge */}
          <div
            style={{
              background: `linear-gradient(135deg, ${RED}12 0%, ${ACCENT_ORANGE}08 100%)`,
              border: `1.5px solid ${RED}40`,
              borderRadius: 10,
              padding: '14px 16px',
              textAlign: 'center',
              backdropFilter: 'blur(8px)',
              animation: 'float 3.5s ease-in-out infinite',
            }}
          >
            <div style={{ fontSize: '16px', fontWeight: 900, color: WHITE, letterSpacing: '-0.5px' }}>ISO 9001:2015</div>
            <div style={{ fontSize: '8px', fontWeight: 700, color: RED, letterSpacing: '2px', marginTop: 4, textTransform: 'uppercase' }}>Certified Quality</div>
          </div>
        </div>

        {/* ─── CREAM WAVE SECTION ───────────────────────────────────────────────── */}
        <div
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '40%', zIndex: 15, pointerEvents: 'none',
          }}
        >
          <svg
            viewBox="0 0 1440 300" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', height: '100%' }}
          >
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: BG, stopOpacity: 1 }} />
                <stop offset="15%" style={{ stopColor: CREAM, stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: CREAM, stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              d="M0,80 Q180,10 360,40 T720,30 T1080,50 Q1260,10 1440,40 L1440,300 L0,300 Z"
              fill="url(#waveGrad)"
            />
          </svg>
        </div>

        {/* ─── PRODUCT COUNTER ────────────────────────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            left: 30,
            zIndex: 30,
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: BLACK,
              letterSpacing: '1px',
            }}
          >
            {pad(idx + 1)} / {pad(N)}
          </div>
        </div>

        {/* ─── SCROLL PROGRESS ─────────────────────────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: 'rgba(0,0,0,0.05)',
            zIndex: 50,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              background: `linear-gradient(90deg, ${RED}, ${ACCENT_ORANGE})`,
              width: `${(idx / (N - 1)) * 100}%`,
              transition: 'width 0.3s ease-out',
            }}
          />
        </div>

        {/* ─── CSS Animations ───────────────────────────────────────────────────── */}
        <style>{`
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          
          @keyframes ping {
            75%, 100% { transform: scale(2); opacity: 0; }
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