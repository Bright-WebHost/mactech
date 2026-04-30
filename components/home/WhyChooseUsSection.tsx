'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Award, Zap, Globe, Users, CheckCircle2, MapPin } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

// Ensure fonts are loaded in your layout:
// Barlow Condensed (900) and DM Sans (400, 500, 700)

const RED = '#CC1020'

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
      fontFamily: "'DM Sans', sans-serif"
    }}>
      {/* Subtle watermark - Barlow Condensed */}
      <div style={{
        position: 'absolute', top: '50%', right: '-2%',
        transform: 'translateY(-50%)',
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: 'clamp(60px,14vw,220px)',
        fontWeight: 900, color: 'rgba(204,16,32,0.05)',
        lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
        letterSpacing: '-0.01em', zIndex: 0,
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
                fontSize: 11, fontWeight: 700, color: RED,
                letterSpacing: '4px', textTransform: 'uppercase', marginBottom: 16,
              }}>
                <span style={{ width: 24, height: 2, background: RED }} />
                Why Choose Us
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(38px,6vw,84px)',
                fontWeight: 900, lineHeight: 0.9, color: '#111',
                margin: 0, textTransform: 'uppercase'
              }}>
                Quality &amp; Excellence<br />
                Is <span style={{ color: RED }}>Our Priority</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1} dir="right">
            <p style={{ fontSize: 16, color: '#555', lineHeight: 1.6, margin: 0, maxWidth: 500 }}>
              Every product undergoes rigorous quality checks. ISO 9001 compliance
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
                borderRight: i < 3 ? '1px solid rgba(204,16,32,0.1)' : 'none',
              }}>
                <div style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(32px,6vw,64px)',
                  fontWeight: 900, color: RED, lineHeight: 1,
                }}>
                  <Counter to={stat.n} suffix={stat.s} duration={2.2} />
                </div>
                <div style={{
                  fontSize: 10, fontWeight: 700, color: '#888',
                  letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 4,
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Body */}
        <div className="wcu-body">
          <div>
            <Reveal>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 18, fontWeight: 900, color: '#111',
                letterSpacing: '1px', textTransform: 'uppercase',
                marginBottom: 20, paddingBottom: 8,
                borderBottom: `3px solid ${RED}`, display: 'inline-block',
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
                  padding: '16px 0',
                  borderBottom: '1px solid rgba(17,17,17,0.06)',
                  fontSize: 15, color: '#333', fontWeight: 500,
                }}>
                  <CheckCircle2 size={18} color={RED} strokeWidth={3} />
                  {item}
                </div>
              </Reveal>
            ))}
          </div>

          <div>
            <div className="wcu-cards">
              {[
                { iconType: 'award', title: 'ISO 9001:2015', sub: 'Quality-certified supply chain with full documentation.' },
                { iconType: 'zap',   title: 'Fast Delivery',  sub: '24–48h delivery across all Oman with dedicated fleet.' },
                { iconType: 'globe', title: 'Global Brands',  sub: 'Authorized distributor of Stanley, Ansell & Delta-Plus.' },
                { iconType: 'users', title: 'Expert Team',    sub: '19+ professionals with deep technical knowledge.' },
              ].map((card, i) => (
                <Reveal key={card.title} delay={i * 0.07}>
                  <motion.div
                    whileHover={{ y: -4, border: `1px solid ${RED}40` }}
                    className="wcu-card"
                  >
                    <div className="wcu-card-icon">
                      {card.iconType === 'award' && <Award size={20} />}
                      {card.iconType === 'zap'   && <Zap   size={20} />}
                      {card.iconType === 'globe' && <Globe size={20} />}
                      {card.iconType === 'users' && <Users size={20} />}
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
                background: RED, borderRadius: 4,
                padding: '20px 24px',
                display: 'flex', alignItems: 'center',
                gap: 14, flexWrap: 'wrap',
                marginTop: 14,
              }}>
                <MapPin size={18} color="#fff" style={{ flexShrink: 0 }} />
                <div style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 14, fontWeight: 900,
                  color: '#fff',
                  letterSpacing: '2px', textTransform: 'uppercase',
                  flex: 1, minWidth: 100,
                }}>
                  Muscat &nbsp;·&nbsp; Sohar &nbsp;·&nbsp; Dubai
                </div>
                <Link href="/contact" style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  display: 'inline-flex', alignItems: 'center',
                  background: '#fff',
                  color: RED, fontSize: 13, fontWeight: 900,
                  padding: '8px 16px', borderRadius: 2,
                  textDecoration: 'none', letterSpacing: '1px',
                  textTransform: 'uppercase', flexShrink: 0,
                  transition: '0.3s'
                }}>
                  Contact Us →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        .wcu-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: flex-end;
          margin-bottom: 60px;
        }

        .wcu-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: #fff;
          border-radius: 4px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          overflow: hidden;
          margin-bottom: 60px;
        }
        .wcu-stat-item {
          padding: 35px 20px;
          text-align: center;
        }

        .wcu-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        .wcu-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .wcu-card {
          background: #fff;
          padding: 24px;
          border-radius: 4px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: all .3s;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .wcu-card-icon {
          width: 44px; height: 44px;
          border-radius: 4px;
          background: ${RED}10;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
          color: ${RED};
          flex-shrink: 0;
        }
        .wcu-card-title { 
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 20px; 
            font-weight: 900; 
            color: #111; 
            text-transform: uppercase;
            line-height: 1;
        }
        .wcu-card-sub { font-size: 13px; color: #666; line-height: 1.5; margin-top: 8px; }

        @media (max-width: 900px) {
          .wcu-header { grid-template-columns: 1fr; gap: 20px; }
          .wcu-body { grid-template-columns: 1fr; gap: 40px; }
        }

        @media (max-width: 600px) {
          .wcu-stats { grid-template-columns: 1fr 1fr; }
          .wcu-stat-item:nth-child(odd) { border-right: 1px solid rgba(204,16,32,0.1) !important; }
          .wcu-stat-item:nth-child(even) { border-right: none !important; }
          .wcu-stat-item:nth-child(1), .wcu-stat-item:nth-child(2) { border-bottom: 1px solid rgba(204,16,32,0.1); }
          
          .wcu-card { padding: 16px; }
          .wcu-card-title { font-size: 16px; }
          .wcu-card-sub { display: none; }
        }
      `}</style>
    </section>
  )
}