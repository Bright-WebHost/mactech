'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const PRODUCTS = [
  { name: 'Fasteners',   sub: 'Industrial',  image: '/images/products/fastner.png' },
  { name: 'Welding',     sub: 'Consumables', image: '/images/products/welding-consumable.png' },
  { name: 'Safety PPE',  sub: 'Protection',  image: '/images/products/saftlyppes.png' },
  { name: 'Lifting',     sub: 'Solutions',   image: '/images/products/lifting-solutions.png' },
  { name: 'Power Tools', sub: 'Heavy Duty',  image: '/images/products/powertools.png' },
]

const ITEMS  = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS]
const CARD_W = 280
const GAP    = 24

// ─── Persistent cursor teacher - ALWAYS VISIBLE ───────────────────────────────
function CursorTeacher({ wrapRef, isMobile }: { wrapRef: React.RefObject<HTMLDivElement | null>, isMobile: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isMobile) {
      ref.current?.style.setProperty('display', 'none')
      return
    }

    const wrap = wrapRef.current
    const el   = ref.current
    const dot  = dotRef.current
    if (!wrap || !el || !dot) return

    // Sweeping cursor animation - CONTINUOUS, NO DISMISS
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 })

    tl.set(dot, { x: -110 })
    tl.to(dot, { x: 110,  duration: 1.4, ease: 'power2.inOut' })
    tl.to(dot, { x: -110, duration: 1.4, ease: 'power2.inOut', delay: 0.3 })

    return () => {
      tl.kill()
    }
  }, [wrapRef, isMobile])

  return (
    <div
      ref={ref}
      style={{
        position:      'absolute',
        inset:         0,
        zIndex:        55,
        pointerEvents: 'none',
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'center',
        justifyContent:'center',
        gap:           24,
      }}
    >
      <style>{`
        @keyframes labelPulse { 0%,100%{opacity:.3} 50%{opacity:1} }
        @keyframes dotGlow { 0%{box-shadow: 0 0 30px rgba(226,0,16,0.7), 0 0 60px rgba(226,0,16,0.4)} 50%{box-shadow: 0 0 50px rgba(226,0,16,0.9), 0 0 100px rgba(226,0,16,0.6)} 100%{box-shadow: 0 0 30px rgba(226,0,16,0.7), 0 0 60px rgba(226,0,16,0.4)} }
        @keyframes arrowBounce { 0%{opacity:.2;transform:translateX(0) scale(0.8)} 50%{opacity:1;transform:translateX(0) scale(1.2)} 100%{opacity:.2;transform:translateX(0) scale(0.8)} }
        @keyframes textPulse { 0%,100%{opacity:.4;transform:scale(0.95)} 50%{opacity:1;transform:scale(1)} }
      `}</style>

      {/* Animated sweep dot + trail */}
      <div style={{ position: 'relative', width: 260, height: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        {/* Left label */}
        <div style={{ position: 'absolute', left: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <ChevronLeft size={22} color="#E20010" strokeWidth={2.5} style={{ animation: 'arrowBounce 2.2s ease-in-out infinite' }} />
          <span style={{ fontSize: 9, color: '#E20010', fontWeight: 800, letterSpacing: '2px', animation: 'labelPulse 2.2s ease-in-out infinite' }}>DRAG</span>
        </div>

        {/* Right label */}
        <div style={{ position: 'absolute', right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <ChevronRight size={22} color="#E20010" strokeWidth={2.5} style={{ animation: 'arrowBounce 2.2s ease-in-out infinite .4s' }} />
          <span style={{ fontSize: 9, color: '#E20010', fontWeight: 800, letterSpacing: '2px', animation: 'labelPulse 2.2s ease-in-out infinite .4s' }}>DRAG</span>
        </div>

        {/* The sweeping dot */}
        <div ref={dotRef} style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>

          {/* Glow ring */}
          <div style={{
            width: 60, height: 60, borderRadius: '50%',
            border: '3px solid #E20010',
            background: 'rgba(226,0,16,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 30px rgba(226,0,16,0.7), 0 0 60px rgba(226,0,16,0.4)',
            animation: 'dotGlow 2s ease-in-out infinite',
            backdropFilter: 'blur(8px)',
          }}>
            {/* Cursor SVG inside the ring */}
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M5 3l14 9-7 1-4 7L5 3z" fill="#E20010" stroke="#E20010" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Text label */}
      <div style={{
        fontSize: 13, fontWeight: 700, letterSpacing: '3px',
        textTransform: 'uppercase', color: 'rgba(226,0,16,0.8)',
        animation: 'textPulse 2.4s ease-in-out infinite',
        textAlign: 'center',
        background: 'rgba(226,0,16,0.05)',
        padding: '10px 20px',
        borderRadius: '30px',
        border: '1px solid rgba(226,0,16,0.3)',
        backdropFilter: 'blur(10px)',
      }}>
        Move cursor to explore →
      </div>
    </div>
  )
}

// ─── Enhanced edge vignette with pulsing chevrons ──────────────────────────────────────
function EdgeArrow({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left'
  return (
    <div
      style={{
        position: 'absolute',
        top: 0, bottom: 0,
        [side]: 0,
        width: 100,
        zIndex: 50,
        pointerEvents: 'none',
        background: isLeft
          ? 'linear-gradient(to right, rgba(10,10,10,0.95) 0%, transparent 100%)'
          : 'linear-gradient(to left, rgba(10,10,10,0.95) 0%, transparent 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isLeft ? 'flex-start' : 'flex-end',
        padding: '0 20px',
      }}
    >
      <style>{`
        @keyframes edgePulse {
          0%,100% { opacity: .25; transform: translateX(0) scale(1); }
          50%      { opacity: .8; transform: translateX(${isLeft ? '-6px' : '6px'}) scale(1.15); }
        }
      `}</style>
      <div style={{
        fontSize: 32,
        color: '#E20010',
        animation: 'edgePulse 2s ease-in-out infinite',
        fontWeight: 'bold',
      }}>
        {isLeft ? '‹' : '›'}
      </div>
    </div>
  )
}

// ─── Main marquee with external wrapRef ──────────────────────────────────────
function InfiniteMarquee({ wrapRef, isMobile }: { wrapRef: React.RefObject<HTMLDivElement | null>, isMobile: boolean }) {
  const trackRef  = useRef<HTMLDivElement>(null)
  const stateRef  = useRef({ x: 0, vel: 0, targetVel: 0, mouseX: 0, mouseY: 0, inside: false })
  const velRef    = useRef(0)
  const SINGLE    = (CARD_W + GAP) * PRODUCTS.length

  useEffect(() => {
    const track = trackRef.current
    const wrap  = wrapRef.current
    if (!track || !wrap) return

    const s = stateRef.current
    const onMove  = (e: MouseEvent) => { const r = wrap.getBoundingClientRect(); s.mouseX = e.clientX - r.left; s.mouseY = e.clientY - r.top }
    const onEnter = () => { s.inside = true }
    const onLeave = () => { s.inside = false; s.targetVel = 0 }

    wrap.addEventListener('mousemove', onMove)
    wrap.addEventListener('mouseenter', onEnter)
    wrap.addEventListener('mouseleave', onLeave)

    let raf: number
    const tick = () => {
      const W = wrap.offsetWidth || 800
      const cx = W / 2
      const H  = wrap.offsetHeight || 380

      if (s.inside) {
        const norm    = (s.mouseX - cx) / cx
        const DEAD    = 0.12
        const clamped = Math.abs(norm) < DEAD ? 0 : (norm - Math.sign(norm) * DEAD) / (1 - DEAD)
        s.targetVel = clamped * 7
      } else {
        s.targetVel = 0
      }

      s.vel += (s.targetVel - s.vel) * 0.07
      s.x   -= s.vel
      velRef.current = s.vel

      if (Math.abs(s.x) >= SINGLE * 2) s.x += SINGLE * 2
      if (s.x > 0) s.x -= SINGLE * 2
      gsap.set(track, { x: s.x })

      const wrapRect   = wrap.getBoundingClientRect()
      const mouseNormY = s.mouseY / H - 0.5

      track.querySelectorAll<HTMLElement>('.mac-card').forEach(card => {
        const r2    = card.getBoundingClientRect()
        const ccx   = r2.left - wrapRect.left + r2.width / 2
        const normX = Math.max(-1, Math.min(1, (ccx - cx) / (cx * 0.9)))
        const rotY  = normX * -28
        const rotX  = mouseNormY * 12
        const sc    = 1 - Math.abs(normX) * 0.11
        const sh    = Math.abs(normX) < 0.18
          ? '0 40px 120px rgba(226,0,16,0.5)'
          : '0 15px 50px rgba(0,0,0,0.7)'

        const imgEl = card.querySelector<HTMLElement>('.mac-img')
        if (imgEl) gsap.set(imgEl, { x: normX * -12, y: mouseNormY * -10 })

        gsap.set(card, { rotateY: rotY, rotateX: rotX, scale: sc, boxShadow: sh, transformPerspective: 1200 })
      })

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      wrap.removeEventListener('mousemove', onMove)
      wrap.removeEventListener('mouseenter', onEnter)
      wrap.removeEventListener('mouseleave', onLeave)
    }
  }, [SINGLE, wrapRef])

  return (
    <div
      ref={wrapRef}
      style={{ overflow: 'hidden', padding: isMobile ? '20px 0' : '50px 0', perspective: '1200px', cursor: isMobile ? 'grab' : 'none', position: 'relative' }}
    >
      <div
        ref={trackRef}
        style={{ display: 'flex', gap: GAP, width: 'max-content', alignItems: 'center' }}
      >
        {ITEMS.map((p, i) => (
          <Link key={i} href="#" style={{ flexShrink: 0, display: 'block' }}>
            <div
              className="mac-card"
              style={{
                width: CARD_W, 
                height: isMobile ? 360 : 400, 
                borderRadius: 16,
                overflow: 'hidden', 
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(30,30,40,0.8) 0%, rgba(20,20,30,0.8) 100%)',
                transformStyle: 'preserve-3d',
                border: '1.5px solid rgba(226,0,16,0.3)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Image container with overlay */}
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <div className="mac-img" style={{ position: 'relative', width: '100%', height: '125%', top: '-12.5%' }}>
                  <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} />
                </div>
              </div>

              {/* Modern gradient overlay - subtle at top, dark at bottom */}
              <div style={{
                position: 'absolute', 
                inset: 0, 
                zIndex: 1,
                background: 'linear-gradient(180deg, rgba(10,10,15,0) 0%, rgba(10,10,15,0.4) 50%, rgba(10,10,15,0.95) 100%)',
                backdropFilter: 'blur(1px)',
              }} />

              {/* Neon accent bars - top and bottom */}
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                height: 1, 
                background: 'linear-gradient(90deg, transparent 0%, rgba(226,0,16,0.5) 50%, transparent 100%)',
                zIndex: 2 
              }} />
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                height: 2, 
                background: 'linear-gradient(90deg, rgba(226,0,16,0.3) 0%, #E20010 50%, rgba(226,0,16,0.3) 100%)',
                zIndex: 2,
                boxShadow: '0 0 20px rgba(226,0,16,0.4)',
              }} />

              {/* Content section with modern styling */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3, padding: '24px 18px 20px' }}>
                <div style={{ 
                  fontSize: 9, 
                  fontWeight: 600, 
                  opacity: 0.7, 
                  letterSpacing: '3px', 
                  textTransform: 'uppercase', 
                  color: '#FF6B35',
                  marginBottom: 8,
                  textShadow: '0 0 10px rgba(255,107,53,0.3)',
                }}>
                  {p.sub}
                </div>
                <div style={{ 
                  fontSize: 18, 
                  fontWeight: 800, 
                  color: '#fff', 
                  letterSpacing: '-0.5px',
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                }}>
                  {p.name}
                </div>
              </div>

              {/* Hover glow effect - hidden but reactive */}
              <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                background: 'radial-gradient(circle at 50% 50%, rgba(226,0,16,0.15) 0%, transparent 70%)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
              }} className="card-glow" />
            </div>
          </Link>
        ))}
      </div>
      <CursorTeacher wrapRef={wrapRef} isMobile={isMobile} />
    </div>
  )
}

export default function ProductsSection() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section style={{ 
      background: 'linear-gradient(180deg, #0A0A0A 0%, #0f0f1a 50%, #0A0A0A 100%)', 
      padding: isMobile ? '50px 0 40px' : '80px 0 70px', 
      position: 'relative', 
      overflow: 'hidden'
    }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 10px rgba(226,0,16,0.2); }
          50% { box-shadow: 0 0 20px rgba(226,0,16,0.4), inset 0 0 20px rgba(226,0,16,0.1); }
        }
        .fade-in-up { animation: fadeInUp 0.9s ease-out forwards; }
        .slide-in-left { animation: slideInLeft 0.9s ease-out forwards; }
        .slide-in-right { animation: slideInRight 0.9s ease-out forwards; }
        .pill-hover:hover { animation: glow 1.5s ease-in-out infinite; }
      `}</style>

      {/* Top accent line with neon glow */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        height: 2, 
        background: 'linear-gradient(90deg, transparent 0%, #E20010 25%, #FF6B35 50%, #E20010 75%, transparent 100%)',
        zIndex: 10,
        boxShadow: '0 0 20px rgba(226,0,16,0.6)',
      }} />

      {/* Large central glow - more prominent */}
      <div style={{ 
        position: 'absolute', 
        top: '20%', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: '95%',
        maxWidth: 900, 
        height: 450, 
        background: 'radial-gradient(ellipse, rgba(226,0,16,0.15) 0%, transparent 60%)', 
        pointerEvents: 'none', 
        zIndex: 0,
        filter: 'blur(80px)',
      }} />

      {/* Secondary orange glow */}
      <div style={{ 
        position: 'absolute', 
        bottom: '5%', 
        right: '10%', 
        width: 350, 
        height: 350, 
        background: 'radial-gradient(ellipse, rgba(255,107,53,0.12) 0%, transparent 65%)', 
        pointerEvents: 'none', 
        zIndex: 0,
        filter: 'blur(100px)',
      }} />

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 20px 35px' : '0 40px 50px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'flex-end', justifyContent: 'space-between', gap: 32 }}>
          <div className="fade-in-up">
            <div style={{ 
              fontSize: 10, 
              fontWeight: 800, 
              letterSpacing: '4px', 
              textTransform: 'uppercase', 
              color: '#FF6B35',
              marginBottom: 16,
              opacity: 0.9,
            }}>
              ✦ Our Catalogue
            </div>
            <h2 style={{ 
              fontSize: isMobile ? 'clamp(32px, 8vw, 48px)' : 'clamp(42px, 5.5vw, 68px)', 
              fontWeight: 900, 
              color: '#fff', 
              margin: 0, 
              lineHeight: 1.08, 
              letterSpacing: '-1.5px',
            }}>
              Products Built for<br />
              <span style={{ 
                background: 'linear-gradient(120deg, #E20010 0%, #FF6B35 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Every Industry
              </span>
            </h2>
          </div>

          {/* Category pills - modern design */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'flex-end', flexShrink: 0, maxWidth: '55%' }}>
              {PRODUCTS.map((p, i) => (
                <div 
                  key={i} 
                  className="pill-hover"
                  style={{
                    fontSize: 11, 
                    fontWeight: 700, 
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase', 
                    color: 'rgba(255,255,255,0.7)',
                    border: '1.5px solid rgba(226,0,16,0.4)',
                    borderRadius: 25, 
                    padding: '8px 16px',
                    background: 'rgba(226,0,16,0.08)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                  }} 
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    gsap.to(el, { 
                      background: 'rgba(226,0,16,0.2)', 
                      borderColor: 'rgba(226,0,16,0.8)', 
                      color: '#E20010',
                      boxShadow: '0 0 20px rgba(226,0,16,0.4)',
                      duration: 0.3 
                    })
                  }} 
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    gsap.to(el, { 
                      background: 'rgba(226,0,16,0.08)', 
                      borderColor: 'rgba(226,0,16,0.4)', 
                      color: 'rgba(255,255,255,0.7)',
                      boxShadow: 'none',
                      duration: 0.3 
                    })
                  }}
                >
                  {p.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Marquee + edge effects ───────────────────────────────────────────── */}
      <div style={{ position: 'relative' }}>
        {!isMobile && <EdgeArrow side="left" />}
        {!isMobile && <EdgeArrow side="right" />}
        <InfiniteMarquee wrapRef={wrapRef} isMobile={isMobile} />
      </div>

      {/* ── Mobile scroll indicator ──────────────────────────────────────────── */}
      {isMobile && (
        <div style={{
          textAlign: 'center',
          marginTop: 24,
          position: 'relative',
          zIndex: 10,
          fontSize: 12,
          fontWeight: 600,
          color: 'rgba(226,0,16,0.8)',
          letterSpacing: '1.5px',
          animation: 'fadeInUp 0.9s ease-out 0.3s both',
        }}>
          ← Swipe to explore →
        </div>
      )}

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <div style={{ textAlign: 'center', marginTop: isMobile ? 45 : 60, position: 'relative', zIndex: 10 }}>
        <button
          style={{
            padding: isMobile ? '13px 36px' : '15px 44px',
            background: 'transparent',
            border: '2px solid #E20010',
            color: '#E20010',
            cursor: 'pointer',
            fontWeight: 800,
            fontSize: isMobile ? 12 : 14,
            borderRadius: 6,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            transition: 'all .4s cubic-bezier(0.23, 1, 0.320, 1)',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
          }}
          onMouseEnter={e => { 
            const btn = e.currentTarget as HTMLButtonElement
            gsap.to(btn, { 
              background: '#E20010', 
              color: '#fff', 
              boxShadow: '0 0 40px rgba(226,0,16,0.7), inset 0 0 20px rgba(255,255,255,0.2)',
              transform: 'scale(1.05)',
              duration: 0.4 
            })
          }}
          onMouseLeave={e => { 
            const btn = e.currentTarget as HTMLButtonElement
            gsap.to(btn, { 
              background: 'transparent', 
              color: '#E20010', 
              boxShadow: 'none',
              transform: 'scale(1)',
              duration: 0.4 
            })
          }}
        >
          View All Products <ArrowRight size={16} strokeWidth={3} />
        </button>
      </div>

    </section>
  )
}