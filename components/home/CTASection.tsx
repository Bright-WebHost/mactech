'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
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

export default function CTASection() {
  return (
    <section style={{ background:'#111', padding:'clamp(72px,10vw,120px) clamp(20px,5vw,6vw)', textAlign:'center', position:'relative', overflow:'hidden' }}>
      <motion.div animate={{ opacity:[.05,.15,.05] }} transition={{ duration:6, repeat:Infinity }}
        style={{ position:'absolute', top:'50%', left:'25%', transform:'translate(-50%,-50%)', width:600, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(226,0,16,0.3) 0%,transparent 70%)', pointerEvents:'none' }}/>
      <div style={{ position:'relative', zIndex:1, maxWidth:860, margin:'0 auto' }}>
        <Reveal>
          <h2 style={{ fontSize:'clamp(40px,8vw,108px)', fontWeight:900, lineHeight:.88, letterSpacing:'-0.5px', color:'#fff', marginBottom:20 }}>
            Ready to <span style={{ color:'#E20010' }}>Partner</span><br/>
            With <span style={{ WebkitTextStroke:'1.5px #D7B569', color:'transparent' }}>Us?</span>
          </h2>
        </Reveal>
        <Reveal delay={.1}>
          <p style={{ fontSize:15, color:'rgba(255,255,255,0.35)', maxWidth:420, margin:'0 auto 48px', lineHeight:1.75 }}>
            Contact our team for custom specifications, technical consultation, or emergency supply requirements across Muscat, Sohar and Dubai.
          </p>
        </Reveal>
        <Reveal delay={.2}>
          <div style={{ display:'flex', justifyContent:'center', gap:'14px', flexWrap:'wrap' }}>
            <Link href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:10, background:'#E20010', color:'#fff', fontWeight:700, fontSize:11, padding:'16px 36px', borderRadius:7, textDecoration:'none', letterSpacing:'2px', textTransform:'uppercase', border:'2px solid #E20010', transition:'all .3s' }} className="hover:bg-transparent hover:text-red-500">
              Contact Us Today <ArrowRight size={14}/>
            </Link>
            <a href="tel:+96824218110" style={{ display:'inline-flex', alignItems:'center', gap:10, border:'2px solid rgba(215,181,105,0.35)', color:'#D7B569', fontWeight:700, fontSize:11, padding:'16px 36px', borderRadius:7, textDecoration:'none', letterSpacing:'2px', textTransform:'uppercase', transition:'all .3s' }} className="hover:border-yellow-400">
              <Phone size={14}/> +968 2421 8110
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
