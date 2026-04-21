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

// ─── Persistent cursor teacher (Desktop Only) ───────────────────────────────
function CursorTeacher({ isMobile }: { isMobile: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isMobile) return
    const dot = dotRef.current
    if (!dot) return

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 })
    tl.set(dot, { x: -110 })
    tl.to(dot, { x: 110,  duration: 1.4, ease: 'power2.inOut' })
    tl.to(dot, { x: -110, duration: 1.4, ease: 'power2.inOut', delay: 0.3 })

    return () => { tl.kill() }
  }, [isMobile])

  if (isMobile) return null

  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0, zIndex: 55, pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
      <style>{`
        @keyframes labelPulse { 0%,100%{opacity:.3} 50%{opacity:1} }
        @keyframes dotGlow { 0%{box-shadow: 0 0 30px rgba(226,0,16,0.7)} 50%{box-shadow: 0 0 60px rgba(226,0,16,0.9)} 100%{box-shadow: 0 0 30px rgba(226,0,16,0.7)} }
        @keyframes textPulse { 0%,100%{opacity:.4} 50%{opacity:1} }
      `}</style>
      <div style={{ position: 'relative', width: 260, height: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div ref={dotRef} style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: 60, height: 60, borderRadius: '50%', border: '3px solid #E20010', background: 'rgba(226,0,16,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'dotGlow 2s infinite', backdropFilter: 'blur(8px)' }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 3l14 9-7 1-4 7L5 3z" fill="#E20010" /></svg>
          </div>
        </div>
      </div>
      <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(226,0,16,0.8)', animation: 'textPulse 2.4s infinite' }}>
        Move cursor to explore →
      </div>
    </div>
  )
}

// ─── Enhanced Marquee with Auto-Drive and Inertia ───────────────────────────
function InfiniteMarquee({ wrapRef, isMobile }: { wrapRef: React.RefObject<HTMLDivElement | null>, isMobile: boolean }) {
  const trackRef  = useRef<HTMLDivElement>(null)
  const stateRef  = useRef({ 
    x: 0, vel: 0, targetVel: 0, mouseX: 0, mouseY: 0, inside: false, lastTouchX: 0, isTouching: false 
  })
  
  const SINGLE = (CARD_W + GAP) * PRODUCTS.length
  const BASE_SPEED = 0.5 // Constant cinematic drift

  useEffect(() => {
    const track = trackRef.current
    const wrap  = wrapRef.current
    if (!track || !wrap) return

    const s = stateRef.current

    const onMove  = (e: MouseEvent) => { 
        const r = wrap.getBoundingClientRect(); 
        s.mouseX = e.clientX - r.left; 
        s.mouseY = e.clientY - r.top 
    }
    const onEnter = () => { s.inside = true }
    const onLeave = () => { s.inside = false }

    const onTouchStart = (e: TouchEvent) => {
        s.isTouching = true;
        s.lastTouchX = e.touches[0].clientX;
    }
    const onTouchMove = (e: TouchEvent) => {
        const touchX = e.touches[0].clientX;
        const delta = touchX - s.lastTouchX;
        s.vel -= delta * 0.25; // Direct manipulation
        s.lastTouchX = touchX;
    }
    const onTouchEnd = () => { s.isTouching = false }

    wrap.addEventListener('mousemove', onMove)
    wrap.addEventListener('mouseenter', onEnter)
    wrap.addEventListener('mouseleave', onLeave)
    wrap.addEventListener('touchstart', onTouchStart, { passive: true })
    wrap.addEventListener('touchmove', onTouchMove, { passive: true })
    wrap.addEventListener('touchend', onTouchEnd)

    let raf: number
    const tick = () => {
      const W = wrap.offsetWidth || 800
      const cx = W / 2

      // Calculate Target Velocity
      if (s.inside && !isMobile) {
        // Desktop: Center-based steering + Base speed
        const norm = (s.mouseX - cx) / cx
        const DEAD = 0.1
        const clamped = Math.abs(norm) < DEAD ? 0 : (norm - Math.sign(norm) * DEAD) / (1 - DEAD)
        s.targetVel = clamped * 8 + BASE_SPEED
      } else {
        // Mobile & Idle: Maintain base cinematic drift
        s.targetVel = BASE_SPEED
      }

      // Physics: Approach target speed. 
      // If user is swiping, we let s.vel be controlled by onTouchMove.
      // If not, we lerp back to targetVel (base speed).
      const friction = s.isTouching ? 0.2 : 0.05
      s.vel += (s.targetVel - s.vel) * friction
      s.x -= s.vel

      // Seamless Loop
      if (Math.abs(s.x) >= SINGLE * 2) s.x += SINGLE * 2
      if (s.x > 0) s.x -= SINGLE * 2
      
      gsap.set(track, { x: s.x })

      // Visual Distortions (Tilt/Scale)
      const wrapRect = wrap.getBoundingClientRect()
      track.querySelectorAll<HTMLElement>('.mac-card').forEach(card => {
        const r2 = card.getBoundingClientRect()
        const ccx = r2.left - wrapRect.left + r2.width / 2
        const normX = Math.max(-1, Math.min(1, (ccx - cx) / (cx * 0.85)))
        
        gsap.set(card, { 
          rotateY: normX * -22, 
          scale: 1 - Math.abs(normX) * 0.08, 
          boxShadow: Math.abs(normX) < 0.2 ? '0 30px 100px rgba(226,0,16,0.3)' : '0 10px 40px rgba(0,0,0,0.5)',
          transformPerspective: 1200 
        })
      })

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      wrap.removeEventListener('mousemove', onMove); wrap.removeEventListener('mouseenter', onEnter); wrap.removeEventListener('mouseleave', onLeave)
      wrap.removeEventListener('touchstart', onTouchStart); wrap.removeEventListener('touchmove', onTouchMove); wrap.removeEventListener('touchend', onTouchEnd)
    }
  }, [SINGLE, wrapRef, isMobile])

  return (
    <div ref={wrapRef} style={{ 
        overflow: 'hidden', padding: isMobile ? '30px 0' : '60px 0', 
        perspective: '1200px', position: 'relative', touchAction: 'pan-y' 
    }}>
      <div ref={trackRef} style={{ display: 'flex', gap: GAP, width: 'max-content', alignItems: 'center' }}>
        {ITEMS.map((p, i) => (
          <Link key={i} href="#" style={{ flexShrink: 0, display: 'block' }}>
            <div className="mac-card" style={{
              width: CARD_W, height: isMobile ? 360 : 400, borderRadius: 16, overflow: 'hidden', position: 'relative',
              background: '#151515', transformStyle: 'preserve-3d', border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.9) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 20, left: 20, zIndex: 2 }}>
                <div style={{ fontSize: 9, color: '#FF6B35', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>{p.sub}</div>
                <div style={{ fontSize: 18, color: '#fff', fontWeight: 800 }}>{p.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <CursorTeacher isMobile={isMobile} />
    </div>
  )
}

export default function ProductsSection() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check(); window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section style={{ background: '#0A0A0A', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', marginBottom: 40 }}>
        <h2 style={{ fontSize: isMobile ? '32px' : '56px', fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1.1 }}>
            Industrial Solutions<br />
            <span style={{ color: '#E20010' }}>Forged in Quality</span>
        </h2>
      </div>

      <InfiniteMarquee wrapRef={wrapRef} isMobile={isMobile} />

      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <button style={{
          padding: '14px 32px', background: 'transparent', border: '2px solid #E20010', color: '#E20010',
          fontWeight: 800, borderRadius: 4, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10
        }}>
          Explore Full Range <ArrowRight size={18} />
        </button>
      </div>
    </section>
  )
}