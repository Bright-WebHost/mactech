'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Award, Zap, Globe, Users, CheckCircle2, MapPin } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

function Counter({ to, suffix = '', duration = 2.2 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    let start: number | null = null
    const tick = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / (duration * 1000), 1)
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * to))
      if (p < 1) requestAnimationFrame(tick)
      else setVal(to)
    }
    requestAnimationFrame(tick)
  }, [inView, to, duration])
  return <span ref={ref}>{val}{suffix}</span>
}

function Reveal({
  children, delay = 0, dir = 'up', className = '',
}: {
  children: React.ReactNode; delay?: number; dir?: 'up' | 'left' | 'right' | 'scale'; className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const init = { up: { y: 32, x: 0 }, left: { y: 0, x: -32 }, right: { y: 0, x: 32 }, scale: { y: 0, x: 0 } }
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...init[dir], scale: dir === 'scale' ? 0.94 : 1 }}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function WhyChooseUsSection() {
  return (
    <section style={{
      background: '#f5f4f0',
      padding: 'clamp(48px,8vw,100px) clamp(16px,5vw,6vw)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle watermark */}
      <div style={{
        position: 'absolute', top: '50%', right: '-2%',
        transform: 'translateY(-50%)',
        fontSize: 'clamp(60px,14vw,180px)',
        fontWeight: 900, color: 'rgba(226,0,16,0.04)',
        lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
        letterSpacing: '-4px', zIndex: 0,
      }}>
        QUALITY
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="wcu-header">
          <div>
            <Reveal>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                fontSize: 10, fontWeight: 700, color: '#E20010',
                letterSpacing: '5px', textTransform: 'uppercase', marginBottom: 16,
              }}>
                <span style={{ width: 24, height: 2, background: '#E20010' }} />
                Why Choose Us
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 style={{
                fontSize: 'clamp(26px,5vw,62px)',
                fontWeight: 900, lineHeight: 1, letterSpacing: '-1.5px', color: '#111',
                margin: 0,
              }}>
                Quality &amp; Excellence<br />
                Is <span style={{ color: '#E20010' }}>Our Priority</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1} dir="right">
            <p style={{ fontSize: 15, color: '#6b6b6b', lineHeight: 1.8, margin: 0 }}>
              Every product undergoes rigorous quality checks. ISO&nbsp;9001 compliance
              across our supply chain with documented traceability from source to site.
            </p>
          </Reveal>
        </div>

        {/* Stats strip */}
        <Reveal delay={0.05}>
          <div className="wcu-stats">
            {[
              { n: 15, s: '+', label: 'Years of Experience' },
              { n: 145, s: '+', label: 'Projects Delivered' },
              { n: 150, s: '+', label: 'Business Partners' },
              { n: 19, s: '+', label: 'Expert Professionals' },
            ].map((stat, i) => (
              <div key={stat.label} className="wcu-stat-item" style={{
                borderRight: i < 3 ? '1px solid rgba(226,0,16,0.1)' : 'none',
              }}>
                <div style={{
                  fontSize: 'clamp(28px,6vw,56px)',
                  fontWeight: 900, color: '#E20010', lineHeight: 1, letterSpacing: '-2px',
                }}>
                  <Counter to={stat.n} suffix={stat.s} duration={2.2} />
                </div>
                <div style={{
                  fontSize: 10, fontWeight: 600, color: '#999',
                  letterSpacing: '2px', textTransform: 'uppercase', marginTop: 8,
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Body: checklist + tiles */}
        <div className="wcu-body">

          {/* Checklist — "All suppliers ISO 9001 certified" removed */}
          <div>
            <Reveal>
              <div style={{
                fontSize: 11, fontWeight: 700, color: '#111',
                letterSpacing: '2px', textTransform: 'uppercase',
                marginBottom: 20, paddingBottom: 12,
                borderBottom: '2px solid #E20010', display: 'inline-block',
              }}>
                Our Quality Commitments
              </div>
            </Reveal>
            {[
              'Material test reports & certificates on request',
              'Oil & Gas compliance verified products',
              'Full batch tracking & traceability',
              'International standard DIN / ISO / ASTM / AWS',
              'Post-sale installation & operating training',
            ].map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(17,17,17,0.08)',
                  fontSize: 14, color: '#333', fontWeight: 500,
                }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: '50%',
                    background: 'rgba(226,0,16,0.07)',
                    border: '1px solid rgba(226,0,16,0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <CheckCircle2 size={13} color="#E20010" />
                  </div>
                  {item}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right column: cards + location banner */}
          <div>
            <div className="wcu-cards">
              {[
                { iconType: 'award', title: 'ISO 9001:2015', sub: 'Quality-certified supply chain with full documentation.' },
                { iconType: 'zap',   title: 'Fast Delivery',  sub: '24–48h delivery across all Oman with dedicated fleet.' },
                { iconType: 'globe', title: 'Global Brands',  sub: 'Authorized distributor of Stanley, Ansell, Delta-Plus & more.' },
                { iconType: 'users', title: 'Expert Team',    sub: '19+ professionals with deep technical knowledge.' },
              ].map((card, i) => (
                <Reveal key={card.title} delay={i * 0.07}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(226,0,16,0.1)' }}
                    className="wcu-card"
                  >
                    <div className="wcu-card-icon">
                      {card.iconType === 'award' && <Award size={18} />}
                      {card.iconType === 'zap'   && <Zap   size={18} />}
                      {card.iconType === 'globe' && <Globe size={18} />}
                      {card.iconType === 'users' && <Users size={18} />}
                    </div>
                    <div className="wcu-card-text">
                      <div className="wcu-card-title">{card.title}</div>
                      <div className="wcu-card-sub">{card.sub}</div>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div style={{
                background: '#E20010', borderRadius: 10,
                padding: '18px 22px',
                display: 'flex', alignItems: 'center',
                gap: 14, flexWrap: 'wrap',
                marginTop: 14,
              }}>
                <MapPin size={16} color="rgba(255,255,255,0.8)" style={{ flexShrink: 0 }} />
                <div style={{
                  fontSize: 10, fontWeight: 700,
                  color: 'rgba(255,255,255,0.85)',
                  letterSpacing: '2.5px', textTransform: 'uppercase',
                  flex: 1, minWidth: 100,
                }}>
                  Muscat &nbsp;·&nbsp; Sohar &nbsp;·&nbsp; Dubai
                </div>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#fff', fontSize: 9, fontWeight: 700,
                  padding: '7px 14px', borderRadius: 5,
                  textDecoration: 'none', letterSpacing: '1px',
                  textTransform: 'uppercase', flexShrink: 0,
                }}>
                  Get Quote →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        /* Header: 2-col desktop, stacked mobile */
        .wcu-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: flex-end;
          margin-bottom: 48px;
        }

        /* Stats: 4-col desktop */
        .wcu-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: #fff;
          border-radius: 12px;
          border: 1px solid rgba(226,0,16,0.1);
          overflow: hidden;
          margin-bottom: 48px;
        }
        .wcu-stat-item {
          padding: 28px 20px;
          text-align: center;
        }

        /* Body: 2-col desktop */
        .wcu-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        /* Cards: 2x2 desktop */
        .wcu-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        /* Card — desktop: vertical */
        .wcu-card {
          background: #fff;
          padding: 22px 18px;
          border-radius: 12px;
          border: 1px solid rgba(226,0,16,0.1);
          transition: all .3s;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .wcu-card-icon {
          width: 40px; height: 40px;
          border-radius: 9px;
          background: rgba(226,0,16,0.07);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 12px;
          color: #E20010;
          flex-shrink: 0;
        }
        .wcu-card-text { display: flex; flex-direction: column; }
        .wcu-card-title { font-size: 13px; font-weight: 800; color: #111; }
        .wcu-card-sub   { font-size: 11px; color: #6b6b6b; line-height: 1.7; margin-top: 6px; }

        /* Tablet ≤ 900px */
        @media (max-width: 900px) {
          .wcu-header {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .wcu-body {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        /* Mobile ≤ 600px */
        @media (max-width: 600px) {
          .wcu-header { margin-bottom: 32px; }

          /* Stats → 2x2 */
          .wcu-stats {
            grid-template-columns: 1fr 1fr;
            margin-bottom: 32px;
          }
          .wcu-stat-item { padding: 20px 12px; }
          .wcu-stat-item:nth-child(odd)  { border-right: 1px solid rgba(226,0,16,0.1) !important; }
          .wcu-stat-item:nth-child(even) { border-right: none !important; }
          .wcu-stat-item:nth-child(1),
          .wcu-stat-item:nth-child(2)    { border-bottom: 1px solid rgba(226,0,16,0.1); }

          /* Cards → horizontal row, icon + title only */
          .wcu-cards { gap: 10px; }
          .wcu-card {
            flex-direction: row;
            align-items: center;
            gap: 10px;
            padding: 12px;
            height: auto;
          }
          .wcu-card-icon {
            width: 32px; height: 32px;
            border-radius: 7px;
            margin-bottom: 0;
          }
          .wcu-card-title { font-size: 11px; }
          .wcu-card-sub   { display: none; }
        }

        /* Very small ≤ 360px: cards 1-col */
        @media (max-width: 360px) {
          .wcu-cards { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}