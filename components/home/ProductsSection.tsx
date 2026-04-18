'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ArrowRight } from 'lucide-react'

const PRODUCTS = [
  { name: 'Fasteners',   sub: 'Industrial',  image: '/images/products/fastner.png' },
  { name: 'Welding',     sub: 'Consumables', image: '/images/products/welding-consumable.png' },
  { name: 'Safety PPE',  sub: 'Protection',  image: '/images/products/saftlyppes.png' },
  { name: 'Lifting',     sub: 'Solutions',   image: '/images/products/lifting-solutions.png' },
  { name: 'Power Tools', sub: 'Heavy Duty',  image: '/images/products/powertools.png' },
]

const ITEMS  = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS]
const CARD_W = 320
const GAP    = 28

// ─── Cursor teacher demo with sweeping animation ───────────────────────────
function CursorTeacher({ wrapRef }: { wrapRef: React.RefObject<HTMLDivElement | null> }) {
  const ref = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const dismissed = useRef(false)

  useEffect(() => {
    const wrap = wrapRef.current
    const el   = ref.current
    const dot  = dotRef.current
    if (!wrap || !el || !dot) return

    // Sweeping cursor animation: left → right → left, repeat
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 })

    tl.set(dot, { x: -90 })
    tl.to(dot, { x: 90,  duration: 1.1, ease: 'power2.inOut' })
    tl.to(dot, { x: -90, duration: 1.1, ease: 'power2.inOut', delay: 0.1 })

    // Dismiss on first real mouse move inside wrap
    const dismiss = () => {
      if (dismissed.current) return
      dismissed.current = true
      tl.kill()
      gsap.to(el, { opacity: 0, scale: 0.85, duration: 0.35, ease: 'power2.in',
        onComplete: () => { el.style.display = 'none' }
      })
      wrap.removeEventListener('mousemove', dismiss)
    }
    wrap.addEventListener('mousemove', dismiss)

    return () => {
      tl.kill()
      wrap.removeEventListener('mousemove', dismiss)
    }
  }, [wrapRef])

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
        gap:           16,
      }}
    >
      <style>{`
        @keyframes labelPulse { 0%,100%{opacity:.45} 50%{opacity:.9} }
        @keyframes trailFade  { 0%{opacity:.35;transform:scaleX(1)} 100%{opacity:0;transform:scaleX(1.6)} }
      `}</style>

      {/* Animated sweep dot + trail */}
      <div style={{ position: 'relative', width: 200, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        {/* Left label */}
        <span style={{ position: 'absolute', left: 0, fontSize: 11, color: '#E20010', fontWeight: 800, letterSpacing: '1px', animation: 'labelPulse 1.6s ease-in-out infinite' }}>←</span>
        {/* Right label */}
        <span style={{ position: 'absolute', right: 0, fontSize: 11, color: '#E20010', fontWeight: 800, letterSpacing: '1px', animation: 'labelPulse 1.6s ease-in-out infinite .4s' }}>→</span>

        {/* The sweeping dot */}
        <div ref={dotRef} style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>

          {/* Glow ring */}
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            border: '2px solid #E20010',
            background: 'rgba(226,0,16,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 24px rgba(226,0,16,0.5), 0 0 8px rgba(226,0,16,0.8)',
          }}>
            {/* Cursor SVG inside the ring */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 3l14 9-7 1-4 7L5 3z" fill="#E20010" stroke="#E20010" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Text label */}
      <div style={{
        fontSize: 10, fontWeight: 700, letterSpacing: '3px',
        textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
        animation: 'labelPulse 2s ease-in-out infinite',
      }}>
        Move cursor to explore
      </div>
    </div>
  )
}

// ─── Edge vignette with pulsing chevrons ──────────────────────────────────────
function EdgeArrow({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left'
  return (
    <div
      style={{
        position: 'absolute',
        top: 0, bottom: 0,
        [side]: 0,
        width: 120,
        zIndex: 50,
        pointerEvents: 'none',
        background: isLeft
          ? 'linear-gradient(to right, #0A0A0A 0%, transparent 100%)'
          : 'linear-gradient(to left, #0A0A0A 0%, transparent 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isLeft ? 'flex-start' : 'flex-end',
        padding: '0 18px',
      }}
    >
      <style>{`
        @keyframes edgePulse {
          0%,100% { opacity: .2; transform: translateX(0); }
          50%      { opacity: .7; transform: translateX(${isLeft ? '-4px' : '4px'}); }
        }
      `}</style>
      <div style={{
        fontSize: 22,
        color: '#E20010',
        animation: 'edgePulse 1.6s ease-in-out infinite',
      }}>
        {isLeft ? '‹' : '›'}
      </div>
    </div>
  )
}

// ─── Main marquee with external wrapRef ──────────────────────────────────────
function InfiniteMarquee({ wrapRef }: { wrapRef: React.RefObject<HTMLDivElement | null> }) {
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
        const rotY  = normX * -24
        const rotX  = mouseNormY * 10
        const sc    = 1 - Math.abs(normX) * 0.09
        const sh    = Math.abs(normX) < 0.18
          ? '0 30px 80px rgba(226,0,16,0.45)'
          : '0 10px 36px rgba(0,0,0,0.5)'

        const imgEl = card.querySelector<HTMLElement>('.mac-img')
        if (imgEl) gsap.set(imgEl, { x: normX * -10, y: mouseNormY * -8 })

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
      style={{ overflow: 'hidden', padding: '40px 0', perspective: '1200px', cursor: 'none', position: 'relative' }}
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
                width: CARD_W, height: 420, borderRadius: 20,
                overflow: 'hidden', position: 'relative',
                background: '#111', transformStyle: 'preserve-3d',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <div className="mac-img" style={{ position: 'relative', width: '100%', height: '115%', top: '-7.5%' }}>
                  <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div style={{
                position: 'absolute', inset: 0, zIndex: 1,
                background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
              }} />
              {/* Red accent line */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: '#E20010', opacity: 0.8, zIndex: 2 }} />
              <div style={{ position: 'absolute', bottom: 20, left: 18, zIndex: 2 }}>
                <div style={{ fontSize: 9, fontWeight: 600, opacity: 0.55, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#fff', marginBottom: 5 }}>
                  {p.sub}
                </div>
                <div style={{ fontSize: 17, fontWeight: 800, color: '#fff', letterSpacing: '0.2px' }}>
                  {p.name}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>      <CursorTeacher wrapRef={wrapRef} />    </div>
  )
}

export default function ProductsSection() {
  const wrapRef = useRef<HTMLDivElement>(null)

  return (
    <section style={{ background: '#0A0A0A', padding: '80px 0 70px', position: 'relative', overflow: 'hidden' }}>

      {/* Top accent line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent 0%, #E20010 40%, #FF6B35 60%, transparent 100%)', zIndex: 10 }} />

      {/* Subtle red glow behind cards */}
      <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 300, background: 'radial-gradient(ellipse, rgba(226,0,16,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px 40px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '3.5px', textTransform: 'uppercase', color: '#E20010', marginBottom: 14 }}>
              Our Catalogue
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 62px)', fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1.05, letterSpacing: '-2px' }}>
              Products Built for<br />
              <span style={{ color: '#E20010' }}>Every</span> Industry
            </h2>
          </div>

          {/* Category pills */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end', paddingBottom: 8, flexShrink: 0 }}>
            {PRODUCTS.map((p, i) => (
              <div key={i} style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '1.5px',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 20, padding: '4px 12px',
              }}>
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Marquee + edge effects ───────────────────────────────────────────── */}
      <div style={{ position: 'relative' }}>
        <EdgeArrow side="left" />
        <EdgeArrow side="right" />
        <InfiniteMarquee wrapRef={wrapRef} />
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <div style={{ textAlign: 'center', marginTop: 48, position: 'relative', zIndex: 10 }}>
        <button
          style={{
            padding: '14px 40px',
            background: 'transparent',
            border: '2px solid #E20010',
            color: '#E20010',
            cursor: 'pointer',
            fontWeight: 800,
            fontSize: 13,
            borderRadius: 4,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            transition: 'all .2s ease',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#E20010'; (e.currentTarget as HTMLButtonElement).style.color = '#fff' }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = '#E20010' }}
        >
          View All Products <ArrowRight size={14} strokeWidth={3} />
        </button>
      </div>

    </section>
  )
}