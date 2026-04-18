'use client'

import { useEffect, useRef } from 'react'

// ─── Zone config ─────────────────────────────────────────────────────────────
type Zone =
  | 'default' | 'hero' | 'marquee' | 'about' | 'products'
  | 'featured' | 'why' | 'projects' | 'brands' | 'cta' | 'link'

interface ZoneCfg { label: string; size: number }

const ZONES: Record<Zone, ZoneCfg> = {
  default:  { label: '',          size: 18 },
  link:     { label: '',          size: 18 },
  marquee:  { label: '',          size: 12 },
  hero:     { label: 'EXPLORE',   size: 52 },
  about:    { label: 'OUR STORY', size: 46 },
  products: { label: 'VIEW',      size: 48 },
  featured: { label: 'DISCOVER',  size: 54 },
  why:      { label: 'QUALITY',   size: 46 },
  projects: { label: 'OPEN',      size: 58 },
  brands:   { label: 'PARTNER',   size: 42 },
  cta:      { label: "LET'S GO",  size: 64 },
}

interface Particle {
  x: number; y: number
  vx: number; vy: number
  life: number; decay: number; r: number
}
interface Drop { x: number; y: number; life: number; r: number }

const R   = 'rgba(226,0,16,'
const lrp = (a: number, b: number, t: number) => a + (b - a) * t
const hyp = (x: number, y: number) => Math.sqrt(x * x + y * y)
const drawCenteredSpacedText = (
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  spacing: number
) => {
  if (!text) return
  const chars = text.split('')
  const textWidth = chars.reduce((sum, ch) => sum + ctx.measureText(ch).width, 0)
  const totalSpacing = spacing * Math.max(0, chars.length - 1)
  let drawX = x - (textWidth + totalSpacing) / 2

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i]
    ctx.fillText(ch, drawX, y)
    drawX += ctx.measureText(ch).width + spacing
  }
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // ── State ─────────────────────────────────────────────────────────────
    let mx = innerWidth / 2, my = innerHeight / 2
    let f1x = innerWidth / 2, f1y = innerHeight / 2
    let f2x = innerWidth / 2, f2y = innerHeight / 2
    let f3x = innerWidth / 2, f3y = innerHeight / 2
    let vx = 0, vy = 0, spd = 0
    let zone: Zone = 'default', linkHov = false
    let pressing = false, visible = true
    let curSize = 18, tgtSize = 18
    let rot = 0
    let magX = 0, magY = 0, magOn = false, magStr = 0
    const particles: Particle[] = []
    const drops: Drop[] = []
    let ldx = -999, ldy = -999
    let raf: number

    // ── FIX 1: Snap all followers to real mouse position on first move ─────
    // After Next.js client-side navigation the component remounts but no
    // mousemove fires, so the canvas stays blank. Grabbing the first event
    // and teleporting all lerp followers fixes the blank + swim-from-center.
    const snapOnFirstMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      f1x = mx; f1y = my
      f2x = mx; f2y = my
      f3x = mx; f3y = my
      visible = true
      document.removeEventListener('mousemove', snapOnFirstMove, true)
    }
    document.addEventListener('mousemove', snapOnFirstMove, { capture: true, passive: true })

    // ── FIX 2: Release pressing state via multiple safety nets ────────────
    // When a link is clicked, the browser navigates before mouseup fires on
    // the document, leaving pressing=true forever → cursor shrinks & freezes.
    // We catch mouseup on window (capture), tab blur, and page hide.
    const releasePressing = () => { pressing = false }
    window.addEventListener('mouseup', releasePressing, true)
    window.addEventListener('blur', releasePressing)
    document.addEventListener('visibilitychange', releasePressing)

    const detect = (el: Element | null) => {
      const link = !!el?.closest('a,button,[role="button"],[data-cursor="link"]')
      const sec  = el?.closest('[data-cursor-zone]') as HTMLElement | null
      return { zone: (sec?.dataset.cursorZone as Zone) ?? 'default', link }
    }

    const burst = (bx: number, by: number) => {
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2 + Math.random() * 0.4
        const s = 1.8 + Math.random() * 3.6
        particles.push({
          x: bx, y: by,
          vx: Math.cos(a) * s, vy: Math.sin(a) * s - 1.2,
          life: 1, decay: 0.03 + Math.random() * 0.025,
          r: 1.5 + Math.random() * 2.5,
        })
      }
    }

    const onMove = (e: MouseEvent) => {
      const px = mx, py = my
      mx = e.clientX; my = e.clientY
      vx = mx - px; vy = my - py; spd = hyp(vx, vy)
      visible = true
      const d = detect(document.elementFromPoint(mx, my) as Element | null)
      zone = d.zone; linkHov = d.link
      const mEl = (document.elementFromPoint(mx, my) as Element | null)
        ?.closest('[data-magnetic]') as HTMLElement | null
      if (mEl) {
        const r = mEl.getBoundingClientRect()
        magX = r.left + r.width / 2; magY = r.top + r.height / 2; magOn = true
      } else { magOn = false }
      if (hyp(mx - ldx, my - ldy) > 9) {
        ldx = mx; ldy = my
        drops.push({ x: mx, y: my, life: 1, r: Math.min(spd * 0.22 + 1.2, 5) })
        if (drops.length > 28) drops.shift()
      }
    }

    const onDown = (e: MouseEvent) => {
      pressing = true
      burst(e.clientX, e.clientY)
      // FIX 3: Hard timeout safety net — if mouseup is never received
      // (e.g. navigation swallows it), force-release after 350 ms.
      setTimeout(releasePressing, 350)
    }
    const onUp   = () => { pressing = false }
    const onOut  = () => { visible = true }
    const onIn   = () => { visible = true }

    document.addEventListener('mousemove',  onMove, { passive: true })
    document.addEventListener('mousedown',  onDown)
    document.addEventListener('mouseup',    onUp)
    document.addEventListener('mouseleave', onOut)
    document.addEventListener('mouseenter', onIn)

    const tick = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      rot += 0.011

      f1x = lrp(f1x, mx, 0.22); f1y = lrp(f1y, my, 0.22)
      f2x = lrp(f2x, mx, 0.10); f2y = lrp(f2y, my, 0.10)
      f3x = lrp(f3x, mx, 0.05); f3y = lrp(f3y, my, 0.05)

      // magnetic pull on tight follower
      if (magOn) {
        const dx = f1x - magX, dy = f1y - magY
        const pull = Math.max(0, 1 - hyp(dx, dy) / 130)
        magStr = lrp(magStr, pull, 0.12)
        f1x -= dx * magStr * 0.38; f1y -= dy * magStr * 0.38
      } else { magStr = lrp(magStr, 0, 0.07) }

      const active = linkHov || (zone !== 'default' && zone !== 'marquee')
      const cfg    = ZONES[linkHov ? 'link' : zone] ?? ZONES.default
      tgtSize      = active ? cfg.size : 18
      curSize      = lrp(curSize, tgtSize, 0.11)
      const ps     = pressing ? 0.72 : 1.0

      // ── 1) INK TRAIL ──────────────────────────────────────────────────
      for (let i = drops.length - 1; i >= 0; i--) drops[i].life -= 0.042
      for (let i = 1; i < drops.length; i++) {
        const c = drops[i], p = drops[i - 1], prog = i / drops.length
        const a = c.life * prog
        ctx.beginPath(); ctx.arc(c.x, c.y, c.r * prog, 0, Math.PI * 2)
        ctx.fillStyle = R + (a * 0.38) + ')'; ctx.fill()
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(c.x, c.y)
        ctx.strokeStyle = R + (a * 0.18) + ')'; ctx.lineWidth = c.r * prog * 1.1
        ctx.lineCap = 'round'; ctx.stroke()
      }
      for (let i = drops.length - 1; i >= 0; i--) if (drops[i].life <= 0) drops.splice(i, 1)

      // ── 2) CLICK BURST PARTICLES ───────────────────────────────────────
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.vy += 0.09; p.vx *= 0.96; p.x += p.vx; p.y += p.vy; p.life -= p.decay
        if (p.life <= 0) { particles.splice(i, 1); continue }
        const pr = Math.max(0.001, p.r * p.life)
        ctx.beginPath(); ctx.arc(p.x, p.y, pr, 0, Math.PI * 2)
        ctx.fillStyle = R + (p.life * 0.95) + ')'; ctx.fill()
      }

      // ── 3) GHOST RING (slowest) ────────────────────────────────────────
      ctx.beginPath(); ctx.arc(f3x, f3y, (curSize + 18) * ps, 0, Math.PI * 2)
      ctx.strokeStyle = R + (active ? 0.10 : 0.06) + ')'; ctx.lineWidth = 1; ctx.stroke()

      // ── 4) MID RING (squash/stretch along velocity) ────────────────────
      {
        const angle = Math.atan2(vy, vx), stretch = Math.min(spd / 22, 0.65)
        ctx.save(); ctx.translate(f2x, f2y); ctx.rotate(angle)
        ctx.scale(1 + stretch, 1 / (1 + stretch * 0.55))
        ctx.beginPath(); ctx.arc(0, 0, (curSize + 7) * ps, 0, Math.PI * 2)
        ctx.strokeStyle = R + (active ? 0.20 : 0.13) + ')'; ctx.lineWidth = 1.5; ctx.stroke()
        ctx.restore()
      }

      // ── 5) ROTATING DASHES (active only) ──────────────────────────────
      if (active && curSize > 14) {
        const dash = Math.max(3, curSize * 0.22)
        ctx.save(); ctx.translate(f1x, f1y); ctx.rotate(rot)
        ctx.beginPath(); ctx.arc(0, 0, curSize * ps + 11, 0, Math.PI * 2)
        ctx.strokeStyle = R + '0.32)'; ctx.lineWidth = 1.2
        ctx.setLineDash([dash, dash * 2.2]); ctx.stroke(); ctx.setLineDash([])
        ctx.restore()
      }

      // ── 6) MAIN RING ──────────────────────────────────────────────────
      {
        const r = curSize * ps
        ctx.beginPath(); ctx.arc(f1x, f1y, r, 0, Math.PI * 2)
        if (active) {
          const gf = ctx.createRadialGradient(f1x, f1y, 0, f1x, f1y, r)
          gf.addColorStop(0, 'rgba(226,0,16,0.95)'); gf.addColorStop(1, 'rgba(180,0,10,0.82)')
          ctx.fillStyle = gf; ctx.fill()
          const gg = ctx.createRadialGradient(f1x, f1y, r * 0.6, f1x, f1y, r * 2.2)
          gg.addColorStop(0, 'rgba(226,0,16,0.18)'); gg.addColorStop(1, 'rgba(226,0,16,0)')
          ctx.beginPath(); ctx.arc(f1x, f1y, r * 2.2, 0, Math.PI * 2)
          ctx.fillStyle = gg; ctx.fill()
        } else {
          ctx.strokeStyle = 'rgba(226,0,16,0.65)'; ctx.lineWidth = 1.5; ctx.stroke()
        }
      }

      // ── 7) LABEL ──────────────────────────────────────────────────────
      if (cfg.label && curSize > 22) {
        const alpha = Math.min(1, (curSize - 22) / 18)
        ctx.save(); ctx.translate(f1x, f1y)
        ctx.font = '700 8px -apple-system,"Helvetica Neue",sans-serif'
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
        ctx.fillStyle = `rgba(255,255,255,${alpha})`
        // Avoid CanvasRenderingContext2D.letterSpacing so the loop does not crash
        // on browsers that do not implement that property.
        drawCenteredSpacedText(ctx, cfg.label, 0, 0, 2.5)
        ctx.restore()
      }

      // ── 8) CENTER DOT ─────────────────────────────────────────────────
      const dr = pressing ? 2.5 : 4.5
      ctx.beginPath(); ctx.arc(mx, my, dr, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(226,0,16,1)'; ctx.fill()
      ctx.beginPath(); ctx.arc(mx - 1, my - 1, dr * 0.28, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.fill()

      // ── 9) MAGNETIC TETHER ────────────────────────────────────────────
      if (magStr > 0.04) {
        const ang = Math.atan2(magY - f1y, magX - f1x)
        ctx.save(); ctx.globalAlpha = magStr * 0.38
        ctx.beginPath()
        ctx.moveTo(f1x + Math.cos(ang) * curSize, f1y + Math.sin(ang) * curSize)
        ctx.lineTo(magX, magY)
        ctx.strokeStyle = 'rgba(226,0,16,1)'; ctx.lineWidth = 1
        ctx.setLineDash([3, 7]); ctx.stroke(); ctx.setLineDash([])
        ctx.restore()
        ctx.beginPath(); ctx.arc(magX, magY, 3, 0, Math.PI * 2)
        ctx.fillStyle = R + (magStr * 0.7) + ')'; ctx.fill()
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', snapOnFirstMove, true)
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mousedown',  onDown)
      document.removeEventListener('mouseup',    onUp)
      document.removeEventListener('mouseleave', onOut)
      document.removeEventListener('mouseenter', onIn)
      window.removeEventListener('mouseup', releasePressing, true)
      window.removeEventListener('blur', releasePressing)
      document.removeEventListener('visibilitychange', releasePressing)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <style>{`
        *, *::before, *::after { cursor: none !important; }
        canvas { display: block; }
      `}</style>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          width: '100vw', height: '100vh',
          pointerEvents: 'none',
          zIndex: 999999,
          display: 'block',
          willChange: 'transform',
        }}
      />
    </>
  )
}
