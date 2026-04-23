'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ArrowRight } from 'lucide-react'

// Ensure these are in your layout or global CSS:
// @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@900&family=DM+Sans:wght@400;500;700&display=swap');

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
const RED    = '#CC1020' // Matching the exact Red from your Hero

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
      <div style={{ position: 'relative', width: 260, height: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div ref={dotRef} style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: 60, height: 60, borderRadius: '50%', border: `3px solid ${RED}`, background: 'rgba(204,16,32,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)', boxShadow: `0 0 30px ${RED}50` }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 3l14 9-7 1-4 7L5 3z" fill={RED} /></svg>
          </div>
        </div>
      </div>
      <div style={{ 
        fontFamily: "'Barlow Condensed', sans-serif", 
        fontSize: 14, 
        fontWeight: 900, 
        letterSpacing: '2px', 
        textTransform: 'uppercase', 
        color: RED, 
        opacity: 0.8 
      }}>
        Move cursor to explore →
      </div>
    </div>
  )
}

function InfiniteMarquee({ wrapRef, isMobile }: { wrapRef: React.RefObject<HTMLDivElement | null>, isMobile: boolean }) {
  const trackRef  = useRef<HTMLDivElement>(null)
  const stateRef  = useRef({ 
    x: 0, vel: 0, targetVel: 0, mouseX: 0, mouseY: 0, inside: false, lastTouchX: 0, isTouching: false 
  })
  
  const SINGLE = (CARD_W + GAP) * PRODUCTS.length
  const BASE_SPEED = 0.5 

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
    const onTouchStart = (e: TouchEvent) => { s.isTouching = true; s.lastTouchX = e.touches[0].clientX; }
    const onTouchMove = (e: TouchEvent) => {
        const touchX = e.touches[0].clientX;
        const delta = touchX - s.lastTouchX;
        s.vel -= delta * 0.25;
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

      if (s.inside && !isMobile) {
        const norm = (s.mouseX - cx) / cx
        const DEAD = 0.1
        const clamped = Math.abs(norm) < DEAD ? 0 : (norm - Math.sign(norm) * DEAD) / (1 - DEAD)
        s.targetVel = clamped * 8 + BASE_SPEED
      } else {
        s.targetVel = BASE_SPEED
      }

      const friction = s.isTouching ? 0.2 : 0.05
      s.vel += (s.targetVel - s.vel) * friction
      s.x -= s.vel

      if (Math.abs(s.x) >= SINGLE * 2) s.x += SINGLE * 2
      if (s.x > 0) s.x -= SINGLE * 2
      
      gsap.set(track, { x: s.x })

      const wrapRect = wrap.getBoundingClientRect()
      track.querySelectorAll<HTMLElement>('.mac-card').forEach(card => {
        const r2 = card.getBoundingClientRect()
        const ccx = r2.left - wrapRect.left + r2.width / 2
        const normX = Math.max(-1, Math.min(1, (ccx - cx) / (cx * 0.85)))
        
        gsap.set(card, { 
          rotateY: normX * -22, 
          scale: 1 - Math.abs(normX) * 0.08, 
          boxShadow: Math.abs(normX) < 0.2 ? `0 30px 100px ${RED}30` : '0 10px 40px rgba(0,0,0,0.5)',
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
          <Link key={i} href="#" style={{ flexShrink: 0, display: 'block', textDecoration: 'none' }}>
            <div className="mac-card" style={{
              width: CARD_W, height: isMobile ? 360 : 400, borderRadius: 8, overflow: 'hidden', position: 'relative',
              background: '#151515', transformStyle: 'preserve-3d', border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.9) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 25, left: 25, zIndex: 2 }}>
                <div style={{ 
                    fontFamily: "'DM Sans', sans-serif", 
                    fontSize: 10, color: '#FF6B35', fontWeight: 700, 
                    letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 4 
                }}>{p.sub}</div>
                <div style={{ 
                    fontFamily: "'Barlow Condensed', sans-serif", 
                    fontSize: 28, color: '#fff', fontWeight: 900, 
                    textTransform: 'uppercase', lineHeight: 0.9 
                }}>{p.name}</div>
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
    <section style={{ background: '#0A0A0A', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', marginBottom: 20 }}>
        {/* Industrial Headline Styling */}
        <h2 style={{ 
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: isMobile ? '48px' : '84px', 
            fontWeight: 900, 
            color: '#fff', 
            margin: 0, 
            lineHeight: 0.85,
            textTransform: 'uppercase'
        }}>
            Industrial Solutions<br />
            <span style={{ color: RED }}>Forged in Quality</span>
        </h2>
      </div>

      <InfiniteMarquee wrapRef={wrapRef} isMobile={isMobile} />

      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <button style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          padding: '16px 40px', background: 'transparent', border: `2px solid ${RED}`, color: '#fff',
          fontWeight: 900, fontSize: '18px', letterSpacing: '1px', textTransform: 'uppercase',
          borderRadius: 4, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 12,
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = RED)}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          Explore Full Range <ArrowRight size={20} />
        </button>
      </div>
    </section>
  )
}