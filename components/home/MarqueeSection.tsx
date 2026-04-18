'use client'

import { motion } from 'framer-motion'

const MARQUEE_ITEMS = [
  'Industrial Supply','Fasteners & Fittings','PPE & Safety',
  'Welding Consumables','Hand Tools','Power Tools',
  'Lifting Solutions','Pipes & Fittings','Fabrications',
  'Construction Consumables','Machine Tools','Pneumatic Tools',
]

export default function MarqueeSection() {
  return (
    <div style={{ background:'#111', borderTop:'2px solid #E20010', padding:'14px 0', overflow:'hidden', position:'relative' }}>
      <div style={{ position:'absolute', left:0, top:0, bottom:0, width:80, background:'linear-gradient(90deg,#111,transparent)', zIndex:2, pointerEvents:'none' }}/>
      <div style={{ position:'absolute', right:0, top:0, bottom:0, width:80, background:'linear-gradient(-90deg,#111,transparent)', zIndex:2, pointerEvents:'none' }}/>
      <motion.div animate={{ x:['0%','-50%'] }} transition={{ duration:30, repeat:Infinity, ease:'linear' }} style={{ display:'flex', whiteSpace:'nowrap' }}>
        {[...MARQUEE_ITEMS,...MARQUEE_ITEMS].map((item,i) => (
          <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:18, padding:'0 24px', fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.28)', letterSpacing:'4px', textTransform:'uppercase' }}>
            <span style={{ width:5, height:5, borderRadius:'50%', background:'#E20010', flexShrink:0 }}/>{item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
