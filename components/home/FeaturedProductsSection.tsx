'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Wrench, Flame, HardHat, Anchor, Zap, Construction, Layers, Building2, Package } from 'lucide-react'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

function renderIcon(type: string, size: number = 24) {
  const p = { size, color: 'currentColor' }
  switch(type) {
    case 'wrench': return <Wrench {...p} />
    case 'flame': return <Flame {...p} />
    case 'hardhat': return <HardHat {...p} />
    case 'anchor': return <Anchor {...p} />
    case 'zap': return <Zap {...p} />
    case 'construction': return <Construction {...p} />
    case 'layers': return <Layers {...p} />
    case 'building2': return <Building2 {...p} />
    case 'package': return <Package {...p} />
    default: return <Wrench {...p} />
  }
}

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

const PRODUCTS = [
  { slug:'fasteners', name:'Fasteners', iconType:'wrench', image:'/images/products/fastner.png', desc:'Precision HIGH TENSILE fasteners — BOLTS, NUTS, SCREWS, WASHERS, PINS, CIRCLIPS, COTTER PINS, T-BOLTS, ALLEN PLUGS, GREASE NIPPLES and more.' },
  { slug:'welding-consumables', name:'Welding Consumables', iconType:'flame', image:'/images/products/welding-consumable.png', desc:'High-grade welding consumables for vehicles, buildings, boats, bridges and heavy steel structures. Full range of accessories with training and post-sale services.' },
  { slug:'ppe-safety', name:'Safety PPE', iconType:'hardhat', image:'/images/products/saftlyppes.png', desc:'Superior quality helmets, harnesses, gloves, eye protection, hearing protection and chemical-resistant gear — all compliant with international standards.' },
]

export default function FeaturedProductsSection() {
  return (
    <section style={{ background:'#000', padding:'clamp(60px,8vw,100px) clamp(20px,5vw,6vw)' }}>
      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        <Reveal>
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, fontSize:10, fontWeight:700, color:'#E20010', letterSpacing:'5px', textTransform:'uppercase', marginBottom:16 }}>
            <span style={{ width:24, height:2, background:'#E20010' }}/> Featured Products
          </div>
        </Reveal>
        <Reveal delay={.05}>
          <h2 style={{ fontSize:'clamp(28px,4.5vw,60px)', fontWeight:900, lineHeight:.9, letterSpacing:'-2px', color:'#fff', marginBottom:'clamp(32px,5vw,60px)' }}>
            Our <span style={{ color:'#E20010' }}>Core Supply</span> Lines
          </h2>
        </Reveal>

        {PRODUCTS.map((p,idx) => {
          const even = idx%2===0
          return (
            <div key={p.slug} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:0, borderBottom:'1px solid rgba(226,0,16,0.2)' }}>
              <Reveal dir={even?'left':'right'} className={even?'':'order-last'}>
                <div style={{ position:'relative', height:'380px', overflow:'clip', background:'#1a1a1a' }}>
                  <Image src={p.image} alt={p.name} fill priority
                    className="object-cover opacity-100 hover:scale-105 transition-transform duration-700"
                    style={{ objectFit:'cover' }}/>
                </div>
              </Reveal>
              <Reveal dir={even?'right':'left'} delay={.1}>
                <div style={{ padding:'48px 40px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
                    <div style={{ width:44, height:44, borderRadius:10, background:'rgba(226,0,16,0.15)', border:'1px solid rgba(226,0,16,0.25)', display:'flex', alignItems:'center', justifyContent:'center', color:'#E20010', flexShrink:0 }}>{renderIcon(p.iconType)}</div>
                    <div style={{ flex:1, height:1, background:'rgba(226,0,16,0.25)' }}/>
                    <span style={{ fontSize:10, fontWeight:700, letterSpacing:'3px', color:'#aaa', textTransform:'uppercase' }}>Category {String(idx+1).padStart(2,'0')}</span>
                  </div>
                  <h3 style={{ fontSize:'clamp(22px,2.5vw,32px)', fontWeight:900, color:'#fff', marginBottom:12, lineHeight:1.1 }}>{p.name}</h3>
                  <p style={{ fontSize:15, color:'#ccc', lineHeight:1.7, marginBottom:24 }}>{p.desc}</p>
                  <Link href={`/products/${p.slug}`} style={{ display:'inline-flex', alignItems:'center', gap:10, fontSize:10, fontWeight:700, color:'#E20010', letterSpacing:'3px', textTransform:'uppercase', textDecoration:'none' }}>
                    Browse {p.name} <ArrowRight size={12}/>
                  </Link>
                </div>
              </Reveal>
            </div>
          )
        })}
      </div>
    </section>
  )
}
