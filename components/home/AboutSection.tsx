'use client'

import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function Reveal({ children, delay = 0, dir = 'up', className = '' }: {
  children: React.ReactNode; delay?: number; dir?: 'up' | 'left' | 'right' | 'scale'; className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const init = { up: { y: 40, x: 0 }, left: { y: 0, x: -40 }, right: { y: 0, x: 40 }, scale: { y: 0, x: 0 } }
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, ...init[dir], scale: dir === 'scale' ? 0.94 : 1 }}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >{children}</motion.div>
  )
}

export default function AboutSection() {
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"] 
  })

  // Exact Parallax Exit Animations mirrored from Hero Parallax
  const sectionScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.8])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 992)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Added backgroundColor: '#0D1B2A' to the parent div so it reveals the dark color as the section shrinks
  return (
    <div ref={containerRef} style={{ height: isMobile ? 'auto' : '110vh', position: 'relative', backgroundColor: '#0D1B2A' }}>
      <motion.section 
        style={{ 
          position: isMobile ? 'relative' : 'sticky',
          top: 0,
          scale: isMobile ? 1 : sectionScale,
          opacity: isMobile ? 1 : sectionOpacity,
          
          background: '#f5f4f0', 
          padding: isMobile ? '80px 0' : 'clamp(100px,10vw,120px) 0', 
          overflow: 'hidden', 
          zIndex: 10,
          marginTop: '-100px', 
          // Added bottom border radius (40px) so it looks like the Hero card shrinking
          borderRadius: isMobile ? '32px' : '60px 60px 40px 40px', 
          boxShadow: '0 -20px 60px rgba(0,0,0,0.3)',
          fontFamily: "'Barlow', sans-serif",
          width: '100%',
          minHeight: '100vh'
        }}
      >
        {/* Background Decorative Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ 
            position: 'absolute', 
            top: isMobile ? '10%' : '50%', 
            left: '-30px', 
            transform: isMobile ? 'none' : 'translateY(-50%)', 
            fontFamily: "'Barlow Condensed', sans-serif", 
            fontSize: 'clamp(80px,14vw,200px)', 
            fontWeight: 900, 
            color: 'rgba(226,0,16,0.05)', 
            lineHeight: 1, 
            pointerEvents: 'none', 
            userSelect: 'none', 
            letterSpacing: '-4px', 
            zIndex: 0 
          }}>
          ABOUT
        </motion.div>

        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(20px,5vw,6vw)', position: 'relative', zIndex: 1 }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
            gap: isMobile ? '40px' : '80px', 
            alignItems: 'center' 
          }}>

            {/* LEFT CONTENT */}
            <div style={{ order: isMobile ? 2 : 1 }}>
              <Reveal>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#E20010', marginBottom: 16 }}>
                  About Our Company
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 style={{ 
                  fontFamily: "'Barlow Condensed', sans-serif", 
                  fontSize: 'clamp(32px, 4.5vw, 56px)', 
                  fontWeight: 900, 
                  lineHeight: 1, 
                  letterSpacing: '-0.5px', 
                  textTransform: 'uppercase', 
                  color: '#1a1a1a', 
                  marginBottom: 24 
                }}>
                  The <span style={{ color: '#E20010' }}>Complete Industrial</span><br />Supply Partner
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <div style={{ maxWidth: isMobile ? '100%' : '90%' }}>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: '#666', marginBottom: 14 }}>
                    <strong style={{ color: '#1a1a1a' }}>Mactech Building Materials Trading LLC</strong> is committed to providing exceptional service with super quality products and comprehensive solutions. Established in 2008, we've been the trusted partner for over 15 years.
                  </p>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: '#666', marginBottom: 0 }}>
                    We focus on delivering excellence across Oil &amp; Gas, Construction, Fabrication, and various industrial sectors with full compliance to international standards.
                  </p>
                </div>
              </Reveal>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile && window.innerWidth < 600 ? '1fr' : '1fr 1fr', 
                gap: '16px', 
                marginTop: '32px' 
              }}>
                {[
                  { title: 'Industrial Sectors', desc: 'We serve oil & gas, construction, fabrication & more' },
                  { title: 'Quality Certified', desc: 'ISO 9001:2015 certified across all operations' },
                ].map((feat, i) => (
                  <Reveal key={feat.title} delay={0.3 + i * 0.1}>
                    <motion.div whileHover={{ x: 4 }}
                      style={{ borderLeft: '3px solid #E20010', padding: '16px', background: 'rgba(255,255,255,0.8)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{feat.title}</div>
                      <div style={{ fontSize: 12, color: '#888', lineHeight: 1.5 }}>{feat.desc}</div>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE PANEL */}
            <div style={{ 
              position: 'relative', 
              height: isMobile ? '350px' : '420px',
              width: isMobile ? '90%' : '100%',
              margin: isMobile ? '0 auto' : '0',
              order: isMobile ? 1 : 2 
            }}>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: [1, 1.03, 1] }}
                transition={{ opacity: { duration: 0.7, delay: 0.1 }, scale: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.1 } }}
                style={{ position: 'absolute', top: -12, left: -12, width: '55%', height: '60%', background: '#111', zIndex: 0 }} />

              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: [1, 1.04, 1] }}
                transition={{ opacity: { duration: 0.7, delay: 0.2 }, scale: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 } }}
                style={{ position: 'absolute', bottom: -12, right: -12, width: '45%', height: '50%', background: '#E20010', zIndex: 0 }} />

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}
                style={{ position: 'absolute', top: 12, left: 12, right: 12, bottom: 12, zIndex: 1, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} style={{ width: '100%', height: '100%' }}>
                  <Image src="/images/products/about.avif" alt="Mactech industrial" fill className="object-cover" />
                </motion.div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: [0, -8, 0] }}
                transition={{ opacity: { duration: 0.6, delay: 0.4 }, y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.4 } }}
                style={{ 
                  position: 'absolute', 
                  bottom: isMobile ? 20 : 36, 
                  left: isMobile ? 20 : 36, 
                  background: '#E20010', 
                  padding: isMobile ? '10px 16px' : '14px 20px', 
                  zIndex: 2,
                  boxShadow: '0 10px 20px rgba(226,0,16,0.3)'
                }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: isMobile ? 28 : 36, fontWeight: 900, lineHeight: 1, color: '#fff' }}>15+</div>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginTop: 2 }}>Years Experience</div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}