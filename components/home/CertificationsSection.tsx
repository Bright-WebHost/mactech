'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Reveal({ children, delay=0, dir='up', className='' }: {
  children:React.ReactNode; delay?:number; dir?:'up'|'left'|'right'|'scale'; className?:string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once:true, margin:'-80px' })
  const init = { up:{y:40,x:0}, left:{y:0,x:-40}, right:{y:0,x:40}, scale:{y:0,x:0} }
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, ...init[dir], scale: dir==='scale' ? 0.94 : 1 }}
      animate={inView ? { opacity:1, x:0, y:0, scale:1 } : {}}
      transition={{ duration:0.7, delay, ease:[0.25,0.1,0.25,1] }}
      className={className}
    >{children}</motion.div>
  )
}

export default function CertificationsSection() {
  return (
    <section style={{ background: '#edeae4', padding: 'clamp(60px,8vw,80px) clamp(20px,5vw,6vw)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <Reveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <Reveal delay={0.05}>
                <h2 style={{ fontSize: 'clamp(28px,4.5vw,56px)', fontWeight: 900 }}>
                  CERTIFICATIONS
                </h2>
              </Reveal>
            </div>
          </Reveal>
        </div>

        {/* Grid: Constrained max-width & exactly 2 columns to ensure they share a line on mobile */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: 'clamp(10px, 4vw, 40px)',
          maxWidth: 700, // Keeps them from stretching too far apart on large desktop screens
          margin: '0 auto'
        }}>
          {[
            { image: '/images/iso.png', title: 'ISO 9001:2015' },
            { image: '/images/jsrs.png', title: 'JSRS Certified' },
          ].map((cert, idx) => (
            <Reveal key={cert.title} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Container with Dynamic Height for Mobile */}
                <div style={{ 
                  position: 'relative', 
                  height: 'clamp(140px, 25vw, 240px)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  {/* Floating Animation applied here */}
                  <motion.div 
                    animate={{ y: [0, -12, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3 + (idx * 0.5), // Offsets the animation so they float out of sync
                      ease: 'easeInOut' 
                    }}
                    whileHover={{ scale: 1.08 }} // Retain the hover scale
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={220}
                      height={220}
                      style={{ 
                        objectFit: 'contain',
                        maxWidth: '100%',
                        maxHeight: '100%'
                      }}
                    />
                  </motion.div>
                </div>

                {/* Title */}
                <div style={{ textAlign: 'center', paddingTop: 12 }}>
                  <div style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', fontWeight: 900, color: '#111' }}>
                    {cert.title}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}