'use client'

import { ArrowRight, Zap, Target, Heart, Globe, Shield, Award, Users, MapPin } from 'lucide-react'
import Link from 'next/link'
import Model3DViewer from '@/components/Model3DViewer'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Reveal({ children, delay = 0, dir = 'up' }: {
  children: React.ReactNode
  delay?: number
  dir?: 'up' | 'left' | 'right' | 'scale'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const init = {
    up: { y: 40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
    scale: { y: 0, x: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...init[dir], scale: dir === 'scale' ? 0.94 : 1 }}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  const stats = [
    { number: '2008', label: 'Est. in Dubai, UAE', sub: 'Founded' },
    { number: '150+', label: 'Industry Partners', sub: 'Trusted by' },
    { number: '3', label: 'Muscat · Sohar · Dubai', sub: 'Offices' },
    { number: 'ISO', label: '9001:2015 Certified', sub: 'Quality' },
  ]

  const values = [
    {
      title: 'Quality First',
      description: 'Every product we supply meets or exceeds international standards — from precision fasteners to safety PPE. ISO 9001:2015 certified across all operations.',
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: 'Reliability',
      description: 'Trusted supplier to PDO, ORPIC, and leading Oil & Gas companies in Oman. Ministry of Oil & Gas approved under JSRS certification.',
      icon: <Shield className="w-5 h-5" />,
    },
    {
      title: 'Innovation',
      description: 'Continuously expanding our product lines to offer 360-degree industrial solutions — from Head-to-Toe safety to complete fabrication consumables.',
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: 'Customer Focus',
      description: 'Exceptional service and satisfaction are at the core of every interaction. We build lasting partnerships, not just transactions.',
      icon: <Heart className="w-5 h-5" />,
    },
  ]

  const products = [
    { label: 'PPE & Safety', desc: 'Head, body, hand, foot, fall protection, workwear & disposable wear' },
    { label: 'Fasteners', desc: 'Bolts, nuts, screws, washers, pins, circlips, T-bolts & Allen plugs' },
    { label: 'Hand & Power Tools', desc: 'Professional-grade hand, power & pneumatic tools for every trade' },
    { label: 'Welding Supplies', desc: 'Welding consumables, accessories & complete welding solutions' },
    { label: 'Abrasives & Adhesives', desc: 'Industrial-grade abrasives, adhesives & construction consumables' },
    { label: 'Pipe & Fittings', desc: 'Full range of industrial pipe fittings & building materials' },
  ]

  const offices = [
    { city: 'Muscat', detail: 'Al Jami Al Akbar St., Ghala', type: 'Headquarters', phone: '94422435 / 94434412', year: '2012' },
    { city: 'Sohar', detail: 'Sohar Industrial Area, Oman', type: 'Operations', phone: '91796734', year: '2015' },
    { city: 'Dubai', detail: 'United Arab Emirates', type: 'Origin Office', phone: '', year: '2008' },
  ]

  return (
    <div style={{ fontFamily: "'DM Sans', 'Barlow', sans-serif", background: '#ffffff', color: '#0D1B2A' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Barlow+Condensed:wght@600;700;800&display=swap');
        .about-page * { box-sizing: border-box; margin: 0; padding: 0; }
        .tag { display: inline-block; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #E20010; background: #FFE5E8; border: 1px solid #FFB3BC; padding: 4px 12px; border-radius: 2px; }
        .display { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; line-height: 0.95; text-transform: uppercase; }
        .amber { color: #E20010; }
        .navy { color: #0D1B2A; }
        .border-box { border: 1.5px solid #E8EDF2; }
        .btn-dark { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; background: #0D1B2A; color: #fff; font-family: 'DM Sans'; font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; border-radius: 3px; text-decoration: none; transition: background 0.2s; }
        .btn-dark:hover { background: #1a2d42; }
        .btn-outline { display: inline-flex; align-items: center; gap: 8px; padding: 13px 28px; border: 1.5px solid #0D1B2A; color: #0D1B2A; font-family: 'DM Sans'; font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; border-radius: 3px; text-decoration: none; transition: all 0.2s; }
        .btn-outline:hover { background: #0D1B2A; color: #fff; }
        .btn-amber { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; background: #E20010; color: #fff; font-family: 'DM Sans'; font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; border-radius: 3px; text-decoration: none; transition: background 0.2s; }
        .btn-amber:hover { background: #b4000d; }
        .stat-num { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 52px; line-height: 1; text-transform: uppercase; color: #0D1B2A; }
        .divider { width: 40px; height: 3px; background: #E20010; border-radius: 2px; }
        .value-card { border: 1.5px solid #E8EDF2; border-radius: 4px; padding: 32px 28px; background: #fff; transition: border-color 0.2s, box-shadow 0.2s; }
        .value-card:hover { border-color: #E20010; box-shadow: 0 4px 24px rgba(226,0,16,0.08); }
        .sector-pill { display: inline-block; padding: 6px 16px; border: 1.5px solid #E8EDF2; border-radius: 2px; font-family: 'DM Sans'; font-size: 12px; font-weight: 600; color: #4A5568; letter-spacing: 0.04em; background: #FAFAFA; }
        .product-row { display: flex; align-items: flex-start; gap: 20px; padding: 24px 0; border-bottom: 1px solid #F0F4F8; }
        .product-row:last-child { border-bottom: none; }
        .product-num { font-family: 'Barlow Condensed', sans-serif; font-size: 28px; font-weight: 800; color: #E8EDF2; line-height: 1; min-width: 40px; }
        .office-card { border: 1.5px solid #E8EDF2; border-radius: 4px; padding: 32px 28px; transition: all 0.2s; }
        .office-card:hover { border-color: #0D1B2A; }
        .check-item { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 14px; }
        .check-dot { width: 18px; height: 18px; border-radius: 50%; background: #E20010; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
        .hero-img { width: 100%; height: 100%; object-fit: cover; border-radius: 4px; }
        .img-frame { position: relative; overflow: hidden; border-radius: 4px; }
        .img-label { position: absolute; bottom: 16px; left: 16px; background: #0D1B2A; color: #fff; font-family: 'DM Sans'; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 6px 14px; border-radius: 2px; }
        .stripe { background: repeating-linear-gradient(45deg, #F7F9FC, #F7F9FC 2px, transparent 2px, transparent 12px); }
      `}</style>

      <div className="about-page">

        {/* ── HERO ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ padding: '80px 0 0', background: '#fff', overflow: 'hidden' }}
        >
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            {/* Top label row */}
            <Reveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                <span className="tag">About Mactech Oman</span>
                <div style={{ flex: 1, height: 1, background: '#E8EDF2' }} />
                <span style={{ fontFamily: 'DM Sans', fontSize: 12, color: '#9AA5B4', fontWeight: 600 }}>Est. 2008 · Muscat, Oman</span>
              </div>
            </Reveal>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'flex-end', paddingBottom: 0 }}>
              {/* Left */}
              <Reveal dir="left" delay={0.05}>
              <div>
                <h1 className="display" style={{ fontSize: 'clamp(52px, 6vw, 88px)', color: '#0D1B2A', marginBottom: 24 }}>
                  Premium<br />
                  Industrial<br />
                  <span className="amber">Solutions</span><br />
                  For Oman
                </h1>
                <p style={{ fontFamily: 'DM Sans', fontSize: 17, lineHeight: 1.7, color: '#4A5568', marginBottom: 36, maxWidth: 420 }}>
                  Since 2008, Mactech Building Materials Trading LLC has been the trusted industrial supply partner across Oman and the UAE — ISO 9001:2015 certified, Oil & Gas approved, and built on a foundation of quality, service, and integrity.
                </p>
                <div style={{ display: 'flex', gap: 12 }}>
                  <Link href="/contact" className="btn-dark">Start Partnership <ArrowRight size={14} /></Link>
                  <Link href="/products" className="btn-outline">Our Products</Link>
                </div>
              </div>
              </Reveal>

              {/* Right — image collage */}
              <Reveal dir="right" delay={0.1}>
              <div style={{ position: 'relative', height: 520 }}>
                {/* Main image */}
                <div className="img-frame" style={{ position: 'absolute', top: 0, right: 0, width: '78%', height: 360 }}>
                  <img
                    className="hero-img"
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                    alt="Industrial worker in safety equipment"
                  />
                  <div className="img-label">Oil & Gas · Construction · Manufacturing</div>
                </div>
                {/* Bottom-left accent image */}
                <div className="img-frame" style={{ position: 'absolute', bottom: 0, left: 0, width: '48%', height: 200 }}>
                  <img
                    className="hero-img"
                    src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=500&q=80"
                    alt="Industrial fasteners and tools"
                  />
                </div>
                {/* Amber accent block */}
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: '28%', height: 200, background: '#E20010', borderRadius: 4, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px 18px' }}>
                  <span style={{ fontFamily: 'Barlow Condensed', fontSize: 48, fontWeight: 800, color: '#fff', lineHeight: 1 }}>ISO</span>
                  <span style={{ fontFamily: 'DM Sans', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>9001:2015<br />Certified</span>
                </div>
              </div>
              </Reveal>
            </div>
          </div>

          {/* Stats strip */}
          <div style={{ background: '#0D1B2A', marginTop: 60 }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
                {stats.map((s, i) => (
                  <Reveal key={i} delay={i * 0.07}>
                  <div style={{ padding: '36px 32px', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontFamily: 'DM Sans', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E20010', marginBottom: 8 }}>{s.sub}</div>
                    <div style={{ fontFamily: 'Barlow Condensed', fontSize: 40, fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: 4 }}>{s.number}</div>
                    <div style={{ fontFamily: 'DM Sans', fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{s.label}</div>
                  </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── OUR STORY ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ padding: '100px 0', background: '#fff' }}
        >
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 1.05fr) 1fr', gap: 'clamp(22px, 3vw, 40px)', alignItems: 'center' }}>
                {/* Image side */}
                <Reveal dir="left">
                <div style={{ position: 'relative', minHeight: 500 }}>
                  <div style={{ position: 'absolute', top: 10, right: 24, display: 'grid', gridTemplateColumns: 'repeat(5, 9px)', gap: 12, zIndex: 4 }}>
                    {Array.from({ length: 15 }).map((_, i) => (
                      <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: i % 3 === 0 ? '#E20010' : '#FFB3BC', display: 'block' }} />
                    ))}
                  </div>

                  <div className="img-frame" style={{ position: 'absolute', left: 0, top: 0, width: '62%', height: 360, borderRadius: 20, zIndex: 1 }}>
                    <img
                      className="hero-img"
                      src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80"
                      alt="Industrial warehouse and operations"
                    />
                  </div>

                  <div className="img-frame" style={{ position: 'absolute', right: 0, bottom: 0, width: '62%', height: 360, borderRadius: '50%', border: '8px solid #fff', boxShadow: '0 16px 40px rgba(13,27,42,0.12)', zIndex: 2 }}>
                    <img
                      className="hero-img"
                      src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=700&q=80"
                      alt="Industrial fasteners and tools"
                    />
                  </div>

                  <div style={{ position: 'absolute', left: 18, bottom: 18, zIndex: 3, background: '#fff', border: '1.5px solid #E8EDF2', borderRadius: 14, padding: '14px 16px', boxShadow: '0 10px 26px rgba(0,0,0,0.09)' }}>
                    <div style={{ fontFamily: 'Barlow Condensed', fontSize: 32, fontWeight: 800, color: '#E20010', lineHeight: 1 }}>PDO</div>
                    <div style={{ fontFamily: 'DM Sans', fontSize: 11, color: '#4A5568', fontWeight: 600, marginTop: 2 }}>Approved Supplier</div>
                    <div style={{ fontFamily: 'DM Sans', fontSize: 10, color: '#9AA5B4', marginTop: 1 }}>Ministry of Oil & Gas · JSRS</div>
                  </div>
                </div>
                </Reveal>

                {/* Content side */}
                <Reveal dir="right" delay={0.08}>
                <div style={{ position: 'relative', paddingRight: 56 }}>
                  <span className="tag" style={{ marginBottom: 16, display: 'inline-block' }}>Our Journey</span>
                  <h2 className="display" style={{ fontSize: 'clamp(36px, 3.8vw, 56px)', color: '#0D1B2A', marginBottom: 18 }}>
                    From Dubai<br />
                    To <span className="amber">Gulf Leader</span>
                  </h2>
                  <div className="divider" style={{ marginBottom: 20 }} />

                  <p style={{ fontFamily: 'DM Sans', fontSize: 15, lineHeight: 1.75, color: '#4A5568', marginBottom: 14 }}>
                    Mactech Building Materials Trading LLC had its humble beginning in <strong style={{ color: '#0D1B2A' }}>2008 in Dubai, UAE</strong>. Driven by a commitment to quality and customer service, we expanded to Muscat, Oman in <strong style={{ color: '#0D1B2A' }}>2012</strong> — opening our showroom in Ghala, Muscat.
                  </p>
                  <p style={{ fontFamily: 'DM Sans', fontSize: 15, lineHeight: 1.75, color: '#4A5568', marginBottom: 24 }}>
                    Today, with offices across Muscat, Sohar, and Dubai, we serve as an <strong style={{ color: '#0D1B2A' }}>authorized distributor for Delta Plus Products</strong> in Oman and a trusted supply partner to the region's largest industrial players — including PDO and ORPIC.
                  </p>

                  <div style={{ marginBottom: 26 }}>
                    {[
                      'ISO 9001:2015 Certified — quality assured across all operations',
                      'Oil & Gas Ministry Approved — JSRS registered supplier',
                      'Authorized Delta Plus PPE distributor in Oman',
                      '150+ active industry partnerships across the Gulf',
                    ].map((item, i) => (
                      <div className="check-item" key={i} style={{ marginBottom: 10 }}>
                        <div className="check-dot" style={{ width: 9, height: 9, marginTop: 8 }} />
                        <p style={{ fontFamily: 'DM Sans', fontSize: 14, color: '#4A5568', lineHeight: 1.55, margin: 0 }}>{item}</p>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="btn-amber">Partner With Us <ArrowRight size={14} /></Link>

                  <div style={{ position: 'absolute', top: 12, right: 0, writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontFamily: 'Barlow Condensed', fontSize: 34, fontWeight: 700, lineHeight: 1, color: '#E20010', letterSpacing: '0.02em', opacity: 0.75 }}>
                    2008
                  </div>
                </div>
                </Reveal>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── MISSION & VISION ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ padding: '100px 0', background: '#fff' }}
        >
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <span className="tag" style={{ marginBottom: 20, display: 'inline-block' }}>Our Purpose</span>
              <h2 className="display" style={{ fontSize: 'clamp(40px, 4vw, 62px)', color: '#0D1B2A' }}>
                Driven By <span className="amber">Trust & Quality</span>
              </h2>
            </div>
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 900, margin: '0 auto' }}>
              {/* Mission */}
              <Reveal dir="left">
              <div style={{ background: '#0D1B2A', borderRadius: 4, padding: '48px 40px' }}>
                <div style={{ width: 40, height: 40, background: 'rgba(226,0,16,0.2)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <Target size={18} color="#E20010" />
                </div>
                <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: 32, fontWeight: 800, color: '#fff', textTransform: 'uppercase', marginBottom: 16 }}>Our Mission</h3>
                <div style={{ width: 32, height: 2, background: '#E20010', marginBottom: 20 }} />
                <p style={{ fontFamily: 'DM Sans', fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.65)' }}>
                  To deliver premium industrial products and unparalleled service that empower our clients to achieve operational excellence. We offer 360-degree solutions — from safety PPE and fasteners to welding consumables and building materials — across every major industry sector.
                </p>
              </div>
              </Reveal>
              {/* Vision */}
              <Reveal dir="right" delay={0.08}>
              <div style={{ border: '1.5px solid #0D1B2A', borderRadius: 4, padding: '48px 40px', background: '#fff' }}>
                <div style={{ width: 40, height: 40, background: '#FFE5E8', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <Globe size={18} color="#E20010" />
                </div>
                <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: 32, fontWeight: 800, color: '#0D1B2A', textTransform: 'uppercase', marginBottom: 16 }}>Our Vision</h3>
                <div style={{ width: 32, height: 2, background: '#E20010', marginBottom: 20 }} />
                <p style={{ fontFamily: 'DM Sans', fontSize: 15, lineHeight: 1.8, color: '#4A5568' }}>
                  To be the most trusted and reliable industrial supply partner in the Middle East — recognized for our quality standards, customer-first approach, and our continuous expansion into new product lines and industry solutions that keep our partners ahead of the curve.
                </p>
              </div>
              </Reveal>
            </div>
          </div>
        </motion.section>

        {/* ── CORE VALUES ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ padding: '100px 0', background: '#F7F9FC', borderTop: '1px solid #E8EDF2' }}
        >
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <Reveal>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
              <div>
                <span className="tag" style={{ marginBottom: 16, display: 'inline-block' }}>What Drives Us</span>
                <h2 className="display" style={{ fontSize: 'clamp(40px, 4vw, 60px)', color: '#0D1B2A' }}>
                  Core Values That<br />Define <span className="amber">Excellence</span>
                </h2>
              </div>
              <Link href="/contact" className="btn-outline">Get in Touch <ArrowRight size={14} /></Link>
            </div>
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
              {values.map((v, i) => (
                <Reveal key={i} delay={i * 0.07}>
                <div className="value-card">
                  <div style={{ width: 36, height: 36, background: i % 2 === 0 ? '#FFE5E8' : '#0D1B2A', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, color: i % 2 === 0 ? '#E20010' : '#fff' }}>
                    {v.icon}
                  </div>
                  <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: 22, fontWeight: 700, color: '#0D1B2A', textTransform: 'uppercase', marginBottom: 12, letterSpacing: '0.02em' }}>{v.title}</h3>
                  <p style={{ fontFamily: 'DM Sans', fontSize: 14, lineHeight: 1.7, color: '#4A5568' }}>{v.description}</p>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── PRODUCTS AT A GLANCE ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ padding: '100px 0', background: '#fff' }}
        >
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'flex-start' }}>
              <Reveal dir="left">
              <div>
                <span className="tag" style={{ marginBottom: 20, display: 'inline-block' }}>What We Supply</span>
                <h2 className="display" style={{ fontSize: 'clamp(40px, 4vw, 60px)', color: '#0D1B2A', marginBottom: 24 }}>
                  360° Industrial<br /><span className="amber">Product Range</span>
                </h2>
                <div className="divider" style={{ marginBottom: 28 }} />
                <div className="img-frame" style={{ height: 460 }} data-cursor-zone="default">
                  <Model3DViewer />
                </div>
              </div>
              </Reveal>
              <Reveal dir="right" delay={0.08}>
              <div style={{ paddingTop: 8 }}>
                {products.map((p, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                  <div className="product-row">
                    <div className="product-num">0{i + 1}</div>
                    <div>
                      <div style={{ fontFamily: 'Barlow Condensed', fontSize: 20, fontWeight: 700, color: '#0D1B2A', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>{p.label}</div>
                      <div style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#718096', lineHeight: 1.6 }}>{p.desc}</div>
                    </div>
                  </div>
                  </Reveal>
                ))}
              </div>
              </Reveal>
            </div>
          </div>
        </motion.section>

        {/* ── OFFICES ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ padding: '100px 0', background: '#0D1B2A' }}
        >
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <Reveal>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
              <div>
                <span style={{ display: 'inline-block', fontFamily: 'DM Sans', fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#E20010', background: 'rgba(226,0,16,0.1)', border: '1px solid rgba(226,0,16,0.3)', padding: '4px 12px', borderRadius: 2, marginBottom: 20 }}>Regional Presence</span>
                <h2 className="display" style={{ fontSize: 'clamp(40px, 4vw, 60px)', color: '#fff' }}>
                  Strategic Offices<br />Across the <span className="amber">Region</span>
                </h2>
              </div>
              <div style={{ fontFamily: 'DM Sans', fontSize: 13, color: 'rgba(255,255,255,0.4)', maxWidth: 260, lineHeight: 1.7 }}>
                From our Dubai origin to our Muscat headquarters and Sohar operations, we are always close to our clients.
              </div>
            </div>
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
              {offices.map((o, i) => (
                <Reveal key={i} delay={i * 0.08}>
                <div style={{ background: i === 0 ? '#E20010' : 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '48px 40px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ fontFamily: 'Barlow Condensed', fontSize: 80, fontWeight: 800, color: i === 0 ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.04)', position: 'absolute', top: 16, right: 20, lineHeight: 1 }}>{o.year}</div>
                  <div style={{ fontFamily: 'DM Sans', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: i === 0 ? 'rgba(255,255,255,0.7)' : '#E20010', marginBottom: 16 }}>{o.type}</div>
                  <div style={{ fontFamily: 'Barlow Condensed', fontSize: 48, fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: 12 }}>{o.city}</div>
                  <div style={{ fontFamily: 'DM Sans', fontSize: 13, color: i === 0 ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.45)', marginBottom: o.phone ? 8 : 0 }}>{o.detail}</div>
                  {o.phone && <div style={{ fontFamily: 'DM Sans', fontSize: 13, color: i === 0 ? '#fff' : 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{o.phone}</div>}
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── CTA ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ padding: '100px 0', background: '#fff', borderTop: '1px solid #E8EDF2' }}
        >
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
              <Reveal dir="left">
              <div>
                <span className="tag" style={{ marginBottom: 20, display: 'inline-block' }}>Work With Us</span>
                <h2 className="display" style={{ fontSize: 'clamp(40px, 4vw, 64px)', color: '#0D1B2A', marginBottom: 24 }}>
                  Ready to Build<br />Something <span className="amber">Extraordinary?</span>
                </h2>
                <p style={{ fontFamily: 'DM Sans', fontSize: 16, lineHeight: 1.8, color: '#4A5568', marginBottom: 36, maxWidth: 420 }}>
                  Partner with Mactech and experience the difference of working with an ISO-certified, Gulf-region industrial supply leader. Let's create success together.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn-dark">Get in Touch <ArrowRight size={14} /></Link>
                  <Link href="/products" className="btn-outline">Explore Products</Link>
                </div>
              </div>
              </Reveal>
              <Reveal dir="right" delay={0.08}>
              <div style={{ position: 'relative' }}>
                <div className="img-frame" style={{ height: 420 }}>
                  <img
                    className="hero-img"
                    src="https://images.unsplash.com/photo-1565793979861-2f3e57cf6b0b?w=800&q=80"
                    alt="Industrial partnership and collaboration"
                  />
                </div>
                <div style={{ position: 'absolute', top: 24, left: -24, background: '#fff', border: '1.5px solid #E8EDF2', borderRadius: 4, padding: '16px 20px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                  <div style={{ fontFamily: 'DM Sans', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9AA5B4', marginBottom: 4 }}>Authorized Distributor</div>
                  <div style={{ fontFamily: 'Barlow Condensed', fontSize: 22, fontWeight: 800, color: '#0D1B2A' }}>Delta Plus · Oman</div>
                </div>
              </div>
              </Reveal>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}