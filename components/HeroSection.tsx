'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ArrowRight, Zap, Shield, Award } from 'lucide-react'

// IMPORTANT: Add this to your layout.tsx or globals.css to load the fonts:
// @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@900&family=DM+Sans:wght@400;500;700&display=swap');

gsap.registerPlugin(ScrollTrigger)

const RED = '#CC1020'
const ACCENT_ORANGE = '#FF6B35'
const CREAM = '#F5F4F0'
const WHITE = '#FFFFFF'
const BG = '#0A0A0A'

const SLIDES = [
  { src: '/images/hero/tools.png', label: 'Fasteners', tagline: 'Precision Built. Industry Trusted.', feature: 'Premium grade fasteners with industry-leading standards', icon: Award },
  { src: '/images/hero/tools2.png', label: 'Welding', tagline: 'Fuse Metal. Forge Progress.', feature: 'ISO certified welding solutions for maximum strength', icon: Zap },
  { src: '/images/hero/tools3.png', label: 'Safety', tagline: 'Every Worker. Every Site. Protected.', feature: 'Complete protection coverage meeting global standards', icon: Shield },
  { src: '/images/hero/tools4.png', label: 'Lifting', tagline: 'Lift Heavy. Move Safely.', feature: 'Certified load capacity with safe operations assured', icon: Award },
  { src: '/images/hero/tools5.png', label: 'Power Tools', tagline: 'Power That Performs.', feature: 'Professional tool selection built for continuous use', icon: Zap },
]

const N = SLIDES.length
const pad = (n: number) => String(n).padStart(2, '0')

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [idx, setIdx] = useState(0)
  const indexRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const isMobile = window.innerWidth < 1024
    const scrollDistance = isMobile ? (N - 1) * 600 : (N - 1) * window.innerHeight

    gsap.set(".slide-item", { opacity: 0, scale: 0.8, z: -100 })
    gsap.set(".slide-item-0", { opacity: 1, scale: 1, z: 0 })

    const st = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: `+=${scrollDistance}`,
      pin: true,
      scrub: 0.1,
      onUpdate: (self) => {
        const progress = self.progress * (N - 1)
        const currentRounded = Math.min(Math.round(progress), N - 1)

        if (currentRounded !== indexRef.current) {
          indexRef.current = currentRounded
          setIdx(currentRounded)
        }

        SLIDES.forEach((_, i) => {
          const slideEl = container.querySelector(`.slide-item-${i}`)
          if (!slideEl) return

          const diff = i - progress
          let y = 0, z = 0, opacity = 0, scale = 1

          if (diff < 0) {
            y = Math.abs(diff) * (isMobile ? 400 : 700)
            z = Math.abs(diff) * 200
            opacity = 1 - Math.abs(diff) * 2
          } else if (i === currentRounded) {
            opacity = 1 - Math.abs(diff)
            scale = 1
            z = 0
          } else {
            opacity = 0 
            if (diff < 1) opacity = 1 - diff 
            scale = 1 - (diff * 0.1)
            z = diff * -150
          }

          gsap.to(slideEl, {
            y, z, scale,
            opacity: Math.max(opacity, 0),
            duration: 0.1,
            ease: 'none',
            overwrite: 'auto'
          })
        })
      }
    })

    return () => st.kill()
  }, [])

  const slide = SLIDES[idx]
  const IconComponent = slide.icon

  return (
    <div ref={containerRef} style={{ background: BG, overflow: 'hidden', fontFamily: "'DM Sans', sans-serif" }}>
      <section className="hero-viewport">
        {/* Background Large Text - Using the Industrial Font */}
        <div className="mactech-bg-text">MACTECH</div>
        
        <div className="stack-container">
          {SLIDES.map((s, i) => (
            <div key={i} className={`slide-item slide-item-${i}`} style={{ zIndex: N - i }}>
              <Image src={s.src} alt={s.label} width={650} height={650} priority className="product-image" />
            </div>
          ))}
        </div>

        <div className="premium-ui-overlay">
          <div className="left-panel">
             <div className="headline-group">
                {/* Main Title - Switched to the Bold Industrial Font */}
                <h2 className="main-title">
                  COMPLETE <br />
                  <span style={{ color: RED }}>INDUSTRIAL</span> <br />
                  SUPPLY
                </h2>
                <p className="current-label">PREMIUM <span style={{ color: ACCENT_ORANGE }}>{slide.label.toUpperCase()}</span> SOLUTIONS</p>
             </div>
            
            <p className="description-text">Serving Oil & Gas, Construction, and Fabrication sectors with ISO 9001:2015 certified excellence since 2008.</p>
            
            <div className="btn-group">
              <Link href="/products" className="btn-primary">VIEW PRODUCTS <ArrowRight size={14} /></Link>
              <Link href="/contact" className="btn-secondary">CONTACT US</Link>
            </div>
          </div>

          <div className="right-panel">
            <div className="feature-card">
              <div className="icon-box"><IconComponent size={20} color={RED} /></div>
              <div>
                <div className="feature-tag">Spec-Sheet</div>
                <div className="feature-text">{slide.feature}</div>
              </div>
            </div>
            <div className="tagline-text">&ldquo;{slide.tagline}&rdquo;</div>
          </div>
        </div>

        <div className="slide-counter-wrapper">
           <span className="counter-current">{pad(idx + 1)}</span>
           <div className="counter-divider" />
           <span className="counter-total">{pad(N)}</span>
        </div>

        <div className="bottom-wave">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none"><path d="M0,80 Q360,20 720,60 T1440,40 L1440,200 L0,200 Z" fill={CREAM} /></svg>
        </div>

        <style>{`
          /* THE INDUSTRIAL CONDENSED FONT */
          .main-title, .mactech-bg-text, .btn-primary, .btn-secondary, .feature-tag {
            font-family: 'Barlow Condensed', sans-serif;
            text-transform: uppercase;
            letter-spacing: -0.02em;
          }

          /* THE CLEAN MODERN FONT */
          .current-label, .description-text, .feature-text, .tagline-text, .counter-current, .counter-total {
            font-family: 'DM Sans', sans-serif;
          }

          .hero-viewport {
            position: relative; width: 100%; height: 100dvh;
            display: flex; align-items: center; justify-content: center;
            perspective: 2000px;
          }
          
          .mactech-bg-text {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
            font-size: clamp(100px, 22vw, 450px); font-weight: 900; color: ${RED};
            opacity: 0.06; letter-spacing: -0.05em; z-index: 1; pointer-events: none;
          }

          .main-title { 
            font-size: clamp(48px, 6vw, 90px); 
            font-weight: 900; 
            color: ${WHITE}; 
            line-height: 0.9; 
            margin-bottom: 15px;
          }

          .current-label { 
            font-size: 14px; 
            color: ${WHITE}; 
            margin-bottom: 25px; 
            font-weight: 700; 
            letter-spacing: 0.1em;
          }

          .stack-container {
            position: absolute; inset: 0; display: flex; align-items: center;
            justify-content: center; transform-style: preserve-3d; z-index: 5;
          }
          .slide-item { position: absolute; display: flex; justify-content: center; align-items: center; pointer-events: none; }
          .product-image { width: clamp(280px, 35vw, 600px); height: auto; filter: drop-shadow(0 40px 60px rgba(0,0,0,0.6)); }

          .premium-ui-overlay {
            position: absolute; inset: 0; z-index: 100; pointer-events: none;
            display: flex; justify-content: space-between; align-items: center;
            padding: 0 8%;
          }
          .left-panel { max-width: 600px; pointer-events: auto; }
          .right-panel { max-width: 350px; text-align: right; pointer-events: auto; }

          .description-text { color: rgba(255,255,255,0.5); font-size: 15px; margin-bottom: 35px; max-width: 420px; line-height: 1.6; }
          
          .btn-group { display: flex; gap: 15px; }
          .btn-primary { background: ${RED}; color: ${WHITE}; padding: 16px 32px; border-radius: 4px; text-decoration: none; font-weight: 800; font-size: 16px; display: flex; align-items: center; gap: 10px; transition: 0.3s; }
          .btn-primary:hover { background: ${ACCENT_ORANGE}; }
          .btn-secondary { background: transparent; border: 2px solid rgba(255,255,255,0.2); color: ${WHITE}; padding: 16px 32px; border-radius: 4px; text-decoration: none; font-weight: 800; font-size: 16px; transition: 0.3s; }
          .btn-secondary:hover { border-color: ${WHITE}; }

          .feature-card { background: rgba(20, 20, 20, 0.8); border-left: 4px solid ${RED}; padding: 20px; border-radius: 4px; backdrop-filter: blur(10px); display: flex; gap: 15px; text-align: left; margin-bottom: 20px; }
          .icon-box { background: ${RED}20; width: 44px; height: 44px; border-radius: 4px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
          .feature-tag { color: ${RED}; font-size: 12px; font-weight: 900; }
          .feature-text { color: ${WHITE}; font-size: 14px; font-weight: 500; line-height: 1.4; }
          .tagline-text { color: rgba(255,255,255,0.4); font-style: italic; font-size: 13px; }

          .slide-counter-wrapper { position: absolute; right: 40px; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; align-items: center; gap: 10px; z-index: 200; color: ${WHITE}; font-weight: 900; }
          .counter-divider { width: 2px; height: 60px; background: ${RED}; }
          
          .bottom-wave { position: absolute; bottom: -2px; width: 100%; height: 10vh; z-index: 10; }

          @media (max-width: 1024px) {
            .premium-ui-overlay { flex-direction: column; justify-content: center; text-align: center; padding: 5vh 20px; }
            .left-panel { margin-bottom: 40px; display: flex; flex-direction: column; align-items: center; }
            .description-text, .tagline-text, .slide-counter-wrapper { display: none; }
            .main-title { font-size: 50px; }
            .stack-container { height: 40%; top: 45%; }
            .product-image { width: 75vw; }
            .right-panel { position: absolute; bottom: 12vh; width: 100%; left: 0; display: flex; justify-content: center; }
            .feature-card { width: 90%; }
          }
        `}</style>
      </section>
    </div>
  )
}