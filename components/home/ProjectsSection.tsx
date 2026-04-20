'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const PROJECTS = [
  { img:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80', city:'Muscat', label:'Industrial Complex', year:'2023' },
  { img:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80', city:'Sohar', label:'Port Infrastructure', year:'2022' },
  { img:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80', city:'Dubai', label:'Commercial Tower', year:'2023' },
]

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0)

  return (
    <section style={{ position:'relative', overflow:'hidden', background:'#0d0d0d' }}>
      <div style={{ position:'relative', height:'580px' }}>

        {/* Background slides */}
        {PROJECTS.map((p, i) => (
          <motion.div key={i}
            animate={{ opacity: activeProject===i ? 1 : 0 }}
            transition={{ duration:.7 }}
            style={{ position:'absolute', inset:0, zIndex: activeProject===i ? 1 : 0 }}
          >
            <Image src={p.img} alt={p.city} fill className="object-cover" style={{ filter:'brightness(0.6) saturate(0.85)' }}/>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(160deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.82) 100%)' }}/>
            <div style={{ position:'absolute', left:0, top:0, bottom:0, width:3, background:'linear-gradient(to bottom, #E20010 0%, transparent 70%)', zIndex:2 }}/>
          </motion.div>
        ))}

        {/* Header — top left */}
        <div style={{ position:'absolute', top:'clamp(24px,4vw,48px)', left:'clamp(20px,5vw,8vw)', zIndex:20 }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, fontSize:10, fontWeight:700, color:'#E20010', letterSpacing:'5px', textTransform:'uppercase', marginBottom:14 }}>
            <span style={{ width:24, height:2, background:'#E20010', display:'inline-block' }}/> What We Do
          </div>
          <h2 style={{ fontSize:'clamp(28px,4.5vw,60px)', fontWeight:900, lineHeight:.9, letterSpacing:'-2px', color:'#fff' }}>
            Our <span style={{ color:'#E20010' }}>Projects</span>
          </h2>
        </div>

        {/* Ghost counter — desktop only */}
        <div style={{ position:'absolute', top:'40px', right:'8vw', zIndex:20, fontSize:'clamp(48px,6vw,80px)', fontWeight:900, color:'rgba(255,255,255,0.05)', letterSpacing:'-3px', lineHeight:1, userSelect:'none' }}>
          {String(activeProject+1).padStart(2,'0')}&nbsp;
          <span style={{ color:'rgba(226,0,16,0.15)' }}>/</span>
          &nbsp;{String(PROJECTS.length).padStart(2,'0')}
        </div>

        {/* Bottom: info + thumbs */}
        <div style={{ position:'absolute', bottom:'40px', left:0, right:0, zIndex:20, padding:'0 8vw', display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:'24px' }}>
          <motion.div key={activeProject} initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:.45 }}>
            <div style={{ fontSize:10, fontWeight:700, color:'#E20010', letterSpacing:'5px', textTransform:'uppercase', marginBottom:10 }}>
              {String(activeProject+1).padStart(2,'0')} / {String(PROJECTS.length).padStart(2,'0')}
            </div>
            <h3 style={{ fontSize:'clamp(32px,5vw,64px)', fontWeight:900, color:'#fff', lineHeight:.9, letterSpacing:'-2px', marginBottom:'14px' }}>{PROJECTS[activeProject].label}</h3>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:20 }}>
              <MapPin size={12} color="#E20010"/>
              <span style={{ fontSize:11, color:'rgba(255,255,255,0.5)', fontWeight:600, letterSpacing:'3px', textTransform:'uppercase' }}>
                {PROJECTS[activeProject].city}&nbsp;·&nbsp;{PROJECTS[activeProject].year}
              </span>
            </div>
            <Link href="/products" style={{ display:'inline-flex', alignItems:'center', gap:10, background:'#E20010', color:'#fff', fontWeight:700, fontSize:11, padding:'11px 24px', borderRadius:7, textDecoration:'none', letterSpacing:'2px', textTransform:'uppercase' }}>
              View Work <ArrowRight size={12}/>
            </Link>
          </motion.div>

          {/* Thumbnail strip */}
          <div style={{ display:'flex', flexDirection:'column', gap:'8px', flexShrink:0 }}>
            {PROJECTS.map((p, i) => (
              <motion.button key={i} onClick={() => setActiveProject(i)} whileHover={{ scale:1.03 }}
                style={{ position:'relative', width:'150px', height:'88px', border: activeProject===i ? '2px solid #E20010' : '2px solid rgba(255,255,255,0.1)', background:'none', padding:0, cursor:'pointer', borderRadius:'8px', overflow:'hidden', flexShrink:0, transition:'border .3s' }}
              >
                <Image src={p.img} alt={p.city} fill className="object-cover" style={{ filter: activeProject===i ? 'brightness(0.75)' : 'brightness(0.5)' }}/>
                {activeProject===i && <div style={{ position:'absolute', left:0, top:0, bottom:0, width:3, background:'#E20010' }}/>}
                <div style={{ position:'absolute', bottom:5, left:8, fontSize:8, fontWeight:700, color:'#fff', letterSpacing:'2px', textTransform:'uppercase' }}>{p.city}</div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:2, background:'rgba(255,255,255,0.06)', zIndex:20 }}>
          <motion.div style={{ height:'100%', background:'#E20010' }} animate={{ width:`${((activeProject+1)/PROJECTS.length)*100}%` }} transition={{ duration:.4 }}/>
        </div>
      </div>

      {/* Bottom strip */}
      <div style={{ background:'#0d0d0d', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px clamp(20px,5vw,6vw)', borderTop:'1px solid rgba(255,255,255,0.06)', flexWrap:'wrap', gap:12 }}>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
          {PROJECTS.map((p, i) => (
            <button key={i} onClick={() => setActiveProject(i)}
              style={{ fontSize:10, fontWeight:600, letterSpacing:'2px', textTransform:'uppercase', color: activeProject===i ? '#E20010' : 'rgba(255,255,255,0.35)', border: activeProject===i ? '1px solid rgba(226,0,16,0.4)' : '1px solid rgba(255,255,255,0.1)', padding:'5px 14px', borderRadius:20, background:'none', cursor:'pointer', transition:'all .3s' }}>
              {p.city}
            </button>
          ))}
        </div>
        <div style={{ display:'flex', gap:7, alignItems:'center' }}>
          {PROJECTS.map((_, i) => (
            <button key={i} onClick={() => setActiveProject(i)}
              style={{ width: activeProject===i ? 26 : 7, height:7, borderRadius:4, background: activeProject===i ? '#E20010' : 'rgba(255,255,255,0.18)', border:'none', cursor:'pointer', transition:'all .3s', padding:0 }}/>
          ))}
        </div>
      </div>
    </section>
  )
}
