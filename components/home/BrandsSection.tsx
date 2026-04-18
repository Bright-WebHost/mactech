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

const BRANDS = [
  { name:'ATG', logo:'/images/atg.png' },
  { name:'3M', logo:'/images/3m.png' },
  { name:'CTG', logo:'/images/ctg.png' },
  { name:'Delta Plus', logo:'/images/deltaplus.png' },
  { name:'Eyevex', logo:'/images/eyevex.png' },
  { name:'Hans', logo:'/images/hans.png' },
  { name:'MTS', logo:'/images/mts.png' },
  { name:'Pyramax', logo:'/images/pyramax.png' },
  { name:'Uvex', logo:'/images/uvex.png' },
  { name:'Vaultex', logo:'/images/vaultex.png' },
]

export default function BrandsSection() {
  const floatClasses = ['fa', 'fb', 'fc']

  return (
    <section style={{ background:'#f5f4f0', padding:'clamp(60px,8vw,100px) clamp(20px,5vw,6vw)', position:'relative', overflow:'hidden' }}>
      <style>{`
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes floatC { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        .brand-card { position:relative; cursor:pointer; background:transparent; border:none; outline:none; width:100%; height:130px; display:flex; align-items:center; justify-content:center; padding:16px; border-radius:12px; transition:transform .35s ease; overflow:hidden; }
        .brand-card::before { content:''; position:absolute; inset:0; border-radius:12px; background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(226,0,16,0.10) 0%,transparent 65%); opacity:0; transition:opacity .3s ease; pointer-events:none; z-index:0; }
        .brand-card:hover { transform:translateY(-8px) scale(1.05); }
        .brand-card:hover::before { opacity:1; }
        .brand-card img { position:relative; z-index:1; max-width:100%; max-height:90px; object-fit:contain; width:auto; height:auto; transition:filter .35s ease,transform .35s ease; filter:grayscale(15%) brightness(0.95); }
        .brand-card:hover img { filter:grayscale(0%) brightness(1) drop-shadow(0 4px 12px rgba(226,0,16,0.22)); transform:scale(1.08); }
        .brand-card.fa { animation:floatA 3.8s ease-in-out infinite; }
        .brand-card.fb { animation:floatB 4.4s ease-in-out infinite; }
        .brand-card.fc { animation:floatC 3.2s ease-in-out infinite; }
      `}</style>
      {/* Subtle dot grid */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:'radial-gradient(circle, rgba(226,0,16,0.04) 1px, transparent 1px)', backgroundSize:'36px 36px', zIndex:0 }}/>

      <div style={{ maxWidth:1200, margin:'0 auto', position:'relative', zIndex:1 }}>
        <div style={{ textAlign:'center', marginBottom:'60px' }}>
          <Reveal>
            <div style={{ display:'inline-flex', alignItems:'center', gap:10, fontSize:10, fontWeight:700, color:'#E20010', letterSpacing:'5px', textTransform:'uppercase', marginBottom:14 }}>
              <span style={{ width:24, height:2, background:'#E20010' }}/>Trusted Partners<span style={{ width:24, height:2, background:'#E20010' }}/>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 style={{ fontSize:'clamp(28px,4vw,52px)', fontWeight:900, letterSpacing:'-1.5px', color:'#111', marginBottom:14 }}>
              Brands We <span style={{ color:'#E20010' }}>Represent</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize:13, color:'#6b6b6b', maxWidth:560, margin:'0 auto' }}>
              Authorized distributor of leading global brands, all ISO certified with international compliance.
            </p>
          </Reveal>
        </div>

        {/* Brands Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'8px' }}>
          {BRANDS.map((brand, i) => (
            <Reveal key={brand.name} delay={i * 0.05}>
              <button
                className={`brand-card ${floatClasses[i % 3]}`}
                title={brand.name}
                style={{ background:'none' }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={100}
                  style={{ maxWidth:'100%', maxHeight:'90px', objectFit:'contain' }}
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
