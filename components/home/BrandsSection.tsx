'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform, useTime, MotionValue } from 'framer-motion'
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

// UPDATED DESKTOP MAP: Fills the massive gap in the middle while keeping the text area clear.
const DESKTOP_MAP = [
  { x: -0.75, y: -0.45, scale: 1.15 }, // Top Left
  { x: 0.75,  y: -0.55, scale: 0.90 }, // Top Right
  { x: -0.35, y: -0.05, scale: 0.85 }, // Mid-Inner Left (Fills center space)
  { x: 0.40,  y: -0.15, scale: 1.25 }, // Mid-Inner Right (Fills center space)
  { x: -0.85, y: 0.25,  scale: 1.05 }, // Far Left
  { x: 0.85,  y: 0.20,  scale: 0.95 }, // Far Right
  { x: -0.15, y: 0.45,  scale: 1.10 }, // Center-Lower Left (Fills center space)
  { x: 0.20,  y: 0.35,  scale: 0.80 }, // Center-Lower Right (Fills center space)
  { x: -0.55, y: 0.75,  scale: 0.95 }, // Bottom Left
  { x: 0.55,  y: 0.85,  scale: 1.15 }  // Bottom Right
]

// Mobile Map: 3 icons per row to fit perfectly on narrow screens.
const MOBILE_MAP = [
  { x: -0.90, y: -0.20, scale: 0.90 }, // Row 1
  { x: 0.00,  y: -0.10, scale: 1.10 },
  { x: 0.90,  y: -0.20, scale: 0.85 },
  
  { x: -0.90, y: 0.20, scale: 1.05 },  // Row 2
  { x: -0.05, y: 0.30, scale: 0.90 },  
  { x: 0.90,  y: 0.20, scale: 1.15 },  
  
  { x: -0.90, y: 0.60, scale: 1.10 },  // Row 3
  { x: 0.05,  y: 0.70, scale: 0.85 },  
  { x: 0.90,  y: 0.60, scale: 0.95 },  
  
  { x: 0.00,  y: 0.95, scale: 1.05 }   // Row 4
]

export default function BrandsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [win, setWin] = useState({ w: 1200, h: 800, isMobile: false, mounted: false })
  const [scrollDistance, setScrollDistance] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWin({
        w: window.innerWidth,
        h: window.innerHeight,
        isMobile: window.innerWidth < 768,
        mounted: true
      })
      if (containerRef.current) {
        setScrollDistance(containerRef.current.offsetHeight - window.innerHeight)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Sticky fix: Exact pixel translation
  const fakeStickyY = useTransform(scrollYProgress, [0, 1], [0, scrollDistance])

  // Move the text up 35% of the screen height
  const textY = useTransform(scrollYProgress, [0, 0.7], [0, -(win.h * 0.35)])
  const textScale = useTransform(scrollYProgress, [0, 0.7], [1, win.isMobile ? 0.7 : 0.8])

  return (
    <section 
      ref={containerRef} 
      style={{ 
        height: '300vh', 
        background: '#f5f4f0', 
        position: 'relative',
        '--card-size': win.isMobile ? '95px' : '140px' 
      } as React.CSSProperties}
    >
      <style>{`
        .brand-card {
          position: relative;
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

      <motion.div style={{ 
        position: 'relative', 
        y: fakeStickyY,
        height: '100vh', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        
        <div style={{ 
          position: 'absolute', inset: 0, pointerEvents: 'none', 
          backgroundImage: 'radial-gradient(circle, rgba(226,0,16,0.05) 1px, transparent 1px)', 
          backgroundSize: '36px 36px', zIndex: 0 
        }}/>

        {/* Center Typography */}
        <motion.div 
          style={{ 
            position: 'absolute', 
            zIndex: 10, 
            textAlign: 'center',
            y: textY,
            scale: textScale,
            pointerEvents: 'none',
            padding: '0 20px',
            width: '100%',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 10, fontWeight: 700, color: '#E20010', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: 14 }}>
            <span style={{ width: 24, height: 2, background: '#E20010' }}/>
            Trusted Partners
            <span style={{ width: 24, height: 2, background: '#E20010' }}/>
          </div>
          <h2 style={{ fontSize: 'clamp(28px,6vw,52px)', fontWeight: 900, letterSpacing: '-1.5px', color: '#111', marginBottom: 14 }}>
            Brands We <span style={{ color: '#E20010' }}>Represent</span>
          </h2>
          <p style={{ fontSize: 'clamp(12px, 2.5vw, 13px)', color: '#6b6b6b', maxWidth: 560, margin: '0 auto' }}>
            Authorized distributor of leading global brands, all ISO certified with international compliance.
          </p>
        </motion.div>

        {/* Logos Container */}
        {win.mounted && (
          <div style={{ position: 'absolute', width: 0, height: 0, zIndex: 5 }}>
            {BRANDS.map((brand, i) => (
              <BrandNode 
                key={brand.name} 
                brand={brand} 
                index={i} 
                total={BRANDS.length} 
                scrollYProgress={scrollYProgress} 
                win={win} 
              />
            ))}
          </div>
        )}
      </motion.div>
    </section>
  )
}

// Sub-component for individual logo logic
function BrandNode({ brand, index, total, scrollYProgress, win }: { 
  brand: any, index: number, total: number, scrollYProgress: MotionValue<number>, win: any 
}) {
  const time = useTime()

  // 1. Setup Data for the initial orbit
  const orbitRadius = win.isMobile ? win.w * 0.38 : 280
  const baseAngle = (index / total) * Math.PI * 2

  // Get the correct map depending on screen size
  const targetMap = win.isMobile ? MOBILE_MAP : DESKTOP_MAP

  // Calculate borders based on device
  const paddingX = win.isMobile ? 55 : 120
  const paddingY = win.isMobile ? 80 : 120
  const maxX = (win.w / 2) - paddingX
  const maxY = (win.h / 2) - paddingY
  
  // Get destination coordinates
  const endX = targetMap[index].x * maxX
  const endY = targetMap[index].y * maxY

  // 2. Dynamic Position Math: Smoothly blend from orbiting to static scatter
  const x = useTransform(() => {
    const t = time.get()
    const scroll = Math.min(Math.max(scrollYProgress.get() / 0.7, 0), 1) // Completes at 70% scroll
    
    // Initial orbiting effect
    const currentAngle = (t / 4500) + baseAngle 
    const orbitX = Math.cos(currentAngle) * orbitRadius
    
    // Mix values: As scroll increases, orbit fades and scatter position takes over
    return orbitX * (1 - scroll) + endX * scroll
  })

  const y = useTransform(() => {
    const t = time.get()
    const scroll = Math.min(Math.max(scrollYProgress.get() / 0.7, 0), 1)
    
    const currentAngle = (t / 4500) + baseAngle
    const orbitY = Math.sin(currentAngle) * orbitRadius
    
    return orbitY * (1 - scroll) + endY * scroll
  })

  // 3. Uneven Sizing transition
  const finalScale = targetMap[index].scale
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, win.isMobile ? finalScale * 0.85 : finalScale])

  return (
    <motion.div
      style={{
        position: 'absolute',
        x, 
        y,
        scale,
        left: 'calc(var(--card-size) / -2)', 
        top: 'calc(var(--card-size) / -2)',
      }}
    >
      {/* Gentle floating effect (runs continuously regardless of scroll) */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 3 + (index % 4), // Varied float speeds
          ease: 'easeInOut' 
        }}
      >
        <div className="brand-card">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={160}
            height={160}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}