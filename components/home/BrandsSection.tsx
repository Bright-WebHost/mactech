'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const BRANDS = [
  { name: 'ATG', logo: '/images/atg.png' },
  { name: '3M', logo: '/images/3m.png' },
  { name: 'CTG', logo: '/images/ctg.png' },
  { name: 'Delta Plus', logo: '/images/deltaplus.png' },
  { name: 'Eyevex', logo: '/images/eyevex.png' },
  { name: 'Hans', logo: '/images/hans.png' },
  { name: 'MTS', logo: '/images/mts.png' },
  { name: 'Pyramax', logo: '/images/pyramax.png' },
  { name: 'Uvex', logo: '/images/uvex.png' },
  { name: 'Vaultex', logo: '/images/vaultex.png' },
]

const DESKTOP_MAP = [
  { x: -0.75, y: -0.45, scale: 1.15 }, 
  { x: 0.75,  y: -0.55, scale: 0.90 }, 
  { x: -0.35, y: -0.05, scale: 0.85 }, 
  { x: 0.40,  y: -0.15, scale: 1.25 }, 
  { x: -0.85, y: 0.25,  scale: 1.05 }, 
  { x: 0.85,  y: 0.20,  scale: 0.95 }, 
  { x: -0.15, y: 0.45,  scale: 1.10 }, 
  { x: 0.20,  y: 0.35,  scale: 0.80 }, 
  { x: -0.55, y: 0.75,  scale: 0.95 }, 
  { x: 0.55,  y: 0.85,  scale: 1.15 }  
]

const MOBILE_MAP = [
  { x: -0.80, y: -0.75, scale: 0.90 }, 
  { x: 0.00,  y: -0.85, scale: 1.10 },
  { x: 0.80,  y: -0.75, scale: 0.85 },
  { x: -0.85, y: -0.25, scale: 1.05 },  
  { x: 0.00,  y: -0.15, scale: 0.90 },  
  { x: 0.85,  y: -0.25, scale: 1.15 },  
  { x: -0.75, y: 0.30,  scale: 1.10 },  
  { x: 0.00,  y: 0.45,  scale: 0.85 },  
  { x: 0.75,  y: 0.30,  scale: 0.95 },  
  { x: 0.00,  y: 0.85,  scale: 1.05 }   
]

const RED = '#CC1020'

export default function BrandsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [win, setWin] = useState({ w: 1200, h: 800, isMobile: false, mounted: false })

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lastWidth = window.innerWidth

    const handleResize = () => {
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth
        setWin({
          w: window.innerWidth,
          h: window.innerHeight,
          isMobile: window.innerWidth < 1024,
          mounted: true
        })
      }
    }
    
    setWin({
      w: window.innerWidth,
      h: window.innerHeight,
      isMobile: window.innerWidth < 1024,
      mounted: true
    })

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section 
      ref={containerRef} 
      style={{ 
        height: '100vh', 
        background: '#f5f4f0',
        position: 'relative',
        '--card-size': win.isMobile ? '80px' : '135px'
      } as React.CSSProperties}
    >
      <style>{`
        .brand-card {
          width: var(--card-size);
          height: var(--card-size);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .brand-card img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
      `}</style>

      <div style={{ 
        position: 'relative', 
        height: '100vh', 
        overflow: 'hidden',
        display: 'flex',
        flexDirection: win.isMobile ? 'column' : 'row',
      }}>
        
        {/* ── LEFT SIDE: BLACK TEXT CONTENT ── */}
        <div style={{ 
          flex: win.isMobile ? '0 0 45%' : '0 0 45%', 
          background: '#0A0A0A',
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          padding: win.isMobile ? '40px 24px' : '0 8%',
          zIndex: 20,
          position: 'relative'
        }}>
           <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.15 }}>
            <div style={{ 
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle, #CC1020 1px, transparent 1px)', 
              backgroundSize: '30px 30px', 
            }}/>
          </div>

          <div style={{ 
            display: 'inline-flex', alignItems: 'center', gap: 10, 
            fontSize: 11, fontWeight: 700, color: RED, 
            letterSpacing: '4px', textTransform: 'uppercase', marginBottom: 16,
            fontFamily: "'DM Sans', sans-serif",
            position: 'relative'
          }}>
            <span style={{ width: 24, height: 2, background: RED }}/>
            Trusted Partners
          </div>
          
          <h2 style={{ 
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(40px, 5vw, 80px)', 
            fontWeight: 900, 
            lineHeight: 0.9, 
            color: '#FFF', 
            textTransform: 'uppercase',
            marginBottom: 20,
            position: 'relative'
          }}>
            Brands We <br/>
            <span style={{ color: RED }}>Represent</span>
          </h2>
          
          <p style={{ 
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16, 
            color: 'rgba(255,255,255,0.5)', 
            maxWidth: 400, 
            lineHeight: 1.6,
            position: 'relative'
          }}>
            Authorized distributor of leading global brands, all ISO certified 
            with international compliance for the industrial sector.
          </p>
        </div>

        {/* ── RIGHT SIDE: LOGO CONTAINER ── */}
        <div style={{ 
          flex: 1, 
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {win.mounted && (
            <div style={{ position: 'absolute', width: 0, height: 0 }}>
              {BRANDS.map((brand, i) => (
                <BrandNode 
                  key={brand.name} 
                  brand={brand} 
                  index={i} 
                  total={BRANDS.length} 
                  win={win} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function BrandNode({ brand, index, total, win }: { 
  brand: any, index: number, total: number, win: any 
}) {
  const targetMap = win.isMobile ? MOBILE_MAP : DESKTOP_MAP
  
  const panelWidth = win.isMobile ? win.w : win.w * 0.55
  const panelHeight = win.isMobile ? win.h * 0.55 : win.h
  
  const paddingX = win.isMobile ? 40 : 100
  const paddingY = win.isMobile ? 50 : 100
  
  const maxX = (panelWidth / 2) - paddingX
  const maxY = (panelHeight / 2) - paddingY
  
  const endX = targetMap[index].x * maxX
  const endY = targetMap[index].y * maxY
  const finalScale = targetMap[index].scale

  return (
    <motion.div
      style={{
        position: 'absolute',
        x: endX,
        y: endY,
        scale: win.isMobile ? finalScale * 0.85 : finalScale,
        left: 'calc(var(--card-size) / -2)', 
        top: 'calc(var(--card-size) / -2)',
      }}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 3 + (index % 4), ease: 'easeInOut' }}
      >
        <div className="brand-card">
          <Image src={brand.logo} alt={brand.name} width={160} height={160} priority={index < 4} />
        </div>
      </motion.div>
    </motion.div>
  )
}