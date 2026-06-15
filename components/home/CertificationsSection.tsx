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
  const jsrs = { image: '/images/jsrs.png', title: 'JSRS Certified', width: 220, height: 220, delay: 0 }
  const riyada = { image: '/images/riyada.png', title: 'Riyada Certified', width: 220, height: 220, delay: 0.1 }
  const iso = { image: '/images/iso.png', title: 'ISO 9001:2015', width: 280, height: 360, delay: 0.2 }

  return (
    <section style={{ background: '#edeae4', padding: 'clamp(32px, 4vw, 52px) clamp(20px,5vw,6vw)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <Reveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Reveal delay={0.05}>
                <h2 style={{ fontSize: 'clamp(28px,4.5vw,56px)', fontWeight: 900 }}>
                  CERTIFICATIONS
                </h2>
              </Reveal>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5" style={{ maxWidth: 980, margin: '0 auto' }}>
          <div className="grid grid-rows-2 gap-4 md:gap-5">
            <Reveal delay={jsrs.delay}>
              <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.25 }} style={{ height: 'clamp(170px, 22vw, 220px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.06 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}
                  >
                    <Image src={jsrs.image} alt={jsrs.title} width={jsrs.width} height={jsrs.height} style={{ objectFit: 'contain', maxWidth: '92%', maxHeight: '92%' }} />
                  </motion.div>
                </div>
              </motion.div>
            </Reveal>

            <Reveal delay={riyada.delay}>
              <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.25 }} style={{ height: 'clamp(170px, 22vw, 220px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.06 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}
                  >
                    <Image src={riyada.image} alt={riyada.title} width={riyada.width} height={riyada.height} style={{ objectFit: 'contain', maxWidth: '92%', maxHeight: '92%' }} />
                  </motion.div>
                </div>
              </motion.div>
            </Reveal>
          </div>

          <Reveal delay={iso.delay} dir="right">
            <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.25 }} style={{ height: 'clamp(356px, 46vw, 460px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.06 }}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}
                >
                  <Image src={iso.image} alt={iso.title} width={iso.width} height={iso.height} style={{ objectFit: 'contain', maxWidth: '92%', maxHeight: '92%' }} />
                </motion.div>
              </div>
            </motion.div>
          </Reveal>
        </div>

      </div>
    </section>
  )
}