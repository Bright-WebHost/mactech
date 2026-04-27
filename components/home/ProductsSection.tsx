'use client'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

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
const RED    = '#CC1020'

function CursorTeacher({ isMobile, mousePos, isInteracted }: { isMobile: boolean, mousePos: { x: number, y: number }, isInteracted: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const autoTl = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (isMobile) return

    if (!isInteracted) {
      gsap.set(containerRef.current, { xPercent: -50, yPercent: -50, left: '50%', top: '50%' })
      
      autoTl.current = gsap.timeline({ repeat: -1, repeatDelay: 0.8 })
      autoTl.current.set(dotRef.current, { x: -110 })
      autoTl.current.to(dotRef.current, { x: 110, duration: 1.4, ease: 'power2.inOut' })
      autoTl.current.to(dotRef.current, { x: -110, duration: 1.4, ease: 'power2.inOut', delay: 0.3 })
    } else {
      if (autoTl.current) autoTl.current.kill()
      
      gsap.to(dotRef.current, { x: 0, duration: 0.4, ease: 'power2.out' })
      
      gsap.to(containerRef.current, {
        left: mousePos.x,
        top: mousePos.y,
        duration: 0.5,
        ease: 'power2.out'
      })
    }

    return () => { autoTl.current?.kill() }
  }, [isMobile, isInteracted, mousePos])

  if (isMobile) return null

  return (
    <div ref={containerRef} style={{ 
      position: 'absolute', zIndex: 55, pointerEvents: 'none', 
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      justifyContent: 'center', gap: 24, willChange: 'left, top' 
    }}>
      <div style={{ position: 'relative', width: 260, height: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div ref={dotRef} style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ 
            width: 60, height: 60, borderRadius: '50%', border: `3px solid ${RED}`, 
            background: 'rgba(204,16,32,0.2)', display: 'flex', alignItems: 'center', 
            justifyContent: 'center', backdropFilter: 'blur(8px)', boxShadow: `0 0 30px ${RED}50` 
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M5 3l14 9-7 1-4 7L5 3z" fill={RED} />
            </svg>
          </div>
        </div>
      </div>
      <div style={{ 
        fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, 
        fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', 
        color: RED, opacity: 0.8 
      }}>
        {isInteracted ? 'Explore Solutions' : 'Move cursor to explore →'}
      </div>
    </div>
  )
}

function InfiniteMarquee({ wrapRef, isMobile }: { wrapRef: React.RefObject<HTMLDivElement | null>, isMobile: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isInteracted, setIsInteracted] = useState(false)
  
  const stateRef = useRef({ x: 0, vel: 0, targetVel: 0, mouseX: 0, inside: false })
  const SINGLE = (CARD_W + GAP) * PRODUCTS.length
  const BASE_SPEED = 0.5 

  useEffect(() => {
    const track = trackRef.current
    const wrap  = wrapRef.current
    if (!track || !wrap) return

    const s = stateRef.current

    // Desktop Mouse Events
    const onMove = (e: MouseEvent) => { 
      const r = wrap.getBoundingClientRect()
      const x = e.clientX - r.left
      const y = e.clientY - r.top
      if (!isInteracted) setIsInteracted(true)
      s.mouseX = x
      setMousePos({ x, y })
    }

    // Mobile Touch Events (ADDED)
    const onTouchMove = (e: TouchEvent) => {
      const r = wrap.getBoundingClientRect()
      const x = e.touches[0].clientX - r.left
      if (!isInteracted) setIsInteracted(true)
      s.mouseX = x
    }

    wrap.addEventListener('mousemove', onMove)
    wrap.addEventListener('mouseenter', () => { s.inside = true })
    wrap.addEventListener('mouseleave', () => { s.inside = false })

    // ADDED Touch Listeners for Mobile
    wrap.addEventListener('touchstart', (e) => { s.inside = true; onTouchMove(e); }, { passive: true })
    wrap.addEventListener('touchmove', onTouchMove, { passive: true })
    wrap.addEventListener('touchend', () => { s.inside = false })

    let raf: number
    const tick = () => {
      const W = wrap.offsetWidth || 800
      const cx = W / 2

      // Removed !isMobile check so touch events interact with the speed
      if (s.inside && isInteracted) {
        const norm = (s.mouseX - cx) / cx
        const DEAD = 0.1
        const clamped = Math.abs(norm) < DEAD ? 0 : (norm - Math.sign(norm) * DEAD) / (1 - DEAD)
        s.targetVel = clamped * 10 + BASE_SPEED
      } else {
        s.targetVel = BASE_SPEED
      }

      s.vel += (s.targetVel - s.vel) * 0.05
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
          rotateY: normX * -22, scale: 1 - Math.abs(normX) * 0.08, transformPerspective: 1200 
        })
      })

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      wrap.removeEventListener('mousemove', onMove)
      wrap.removeEventListener('touchstart', onTouchMove)
      wrap.removeEventListener('touchmove', onTouchMove)
    }
  }, [SINGLE, wrapRef, isInteracted])

  return (
    // FIX: Reduced bottom padding from 60px to 20px
    <div ref={wrapRef} style={{ 
        overflow: 'hidden', paddingTop: '60px', paddingBottom: '20px', perspective: '1200px', 
        position: 'relative', cursor: isInteracted && !isMobile ? 'none' : 'default' 
    }}>
      <div ref={trackRef} style={{ display: 'flex', gap: GAP, width: 'max-content', alignItems: 'center' }}>
        {ITEMS.map((p, i) => (
          <div key={i} className="mac-card" style={{
            width: CARD_W, height: 400, borderRadius: 8, overflow: 'hidden', position: 'relative',
            background: '#151515', border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.9) 100%)' }} />
            <div style={{ position: 'absolute', bottom: 25, left: 25 }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: '#FF6B35', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>{p.sub}</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, color: '#fff', fontWeight: 900, textTransform: 'uppercase' }}>{p.name}</div>
            </div>
          </div>
        ))}
      </div>
      
      <CursorTeacher isMobile={isMobile} mousePos={mousePos} isInteracted={isInteracted} />
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
    // FIX: Changed padding to '100px 0 0 0' to eliminate the massive 100px gap at the bottom
    <section style={{ background: '#0A0A0A', paddingTop: '100px', paddingBottom: isMobile ? '20px' : '40px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', marginBottom: 20 }}>
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? '48px' : '84px', fontWeight: 900, color: '#fff', margin: 0, lineHeight: 0.85, textTransform: 'uppercase' }}>
            Industrial Solutions<br /><span style={{ color: RED }}>Forged in Quality</span>
        </h2>
      </div>
      <InfiniteMarquee wrapRef={wrapRef} isMobile={isMobile} />
    </section>
  )
}