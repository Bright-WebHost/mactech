'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const PRODUCTS = [
  { id: 'center', name: 'Fasteners', image: '/images/products/fastner.png', category: 'INDUSTRIAL', desc: 'High-tensile precision fasteners for heavy-duty applications.', badge: 'Best Seller' },
  { id: 'left', name: 'Welding', image: '/images/products/welding-consumable.png', category: 'ENGINEERING', desc: 'Superior grade welding consumables for structural integrity.', badge: 'Premium' },
  { id: 'right', name: 'Safety', image: '/images/products/saftlyppes.png', category: 'PROTECTION', desc: 'Certified high-performance PPE for hazardous environments.', badge: 'Certified' },
]

const ACCENT_RED = "#E20010"

export default function FeaturedProductsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)

  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const infoRefs = useRef<(HTMLDivElement | null)[]>([])
  const imgRefs = useRef<(HTMLImageElement | null)[]>([])
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([])
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ──── PAGE LOAD: crisp staggered entrance ────
      gsap.fromTo(headerRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" }
      )

      cardRefs.current.forEach((card, idx) => {
        if (!card) return
        gsap.fromTo(card,
          { y: 60, opacity: 0, scale: 0.92, rotateX: 8 },
          {
            y: 0, opacity: 1, scale: 1, rotateX: 0,
            duration: 0.75,
            delay: 0.1 + idx * 0.1,
            ease: "expo.out",
          }
        )
      })

      const mm = gsap.matchMedia()

      // ════════════════════════════════════════
      // DESKTOP — fluid expanding reveal
      // ════════════════════════════════════════
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=3600",
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
          }
        })

        const sequence = [0, 1, 2]
        sequence.forEach((idx) => {
          const L = `s${idx}`

          tl.to(cardRefs.current[idx], {
            flex: 4,
            duration: 1,
            ease: "power4.inOut"
          }, L)
          .to(imgRefs.current[idx], {
            scale: 1.18,
            opacity: 1,
            filter: "grayscale(0%) brightness(1.25) saturate(1.15)",
            duration: 1,
            ease: "power3.out"
          }, L)
          .to(overlayRefs.current[idx], { opacity: 0.1, duration: 0.8 }, L)
          .to(badgeRefs.current[idx], { opacity: 0, scale: 0.8, duration: 0.3 }, L)

          .fromTo(infoRefs.current[idx],
            { opacity: 0, x: -50, skewX: -4 },
            { opacity: 1, x: 0, skewX: 0, duration: 0.55, ease: "expo.out" },
            `${L}+=0.4`
          )

          .to({}, { duration: 0.8 })

          .to(infoRefs.current[idx], {
            opacity: 0, x: 40, skewX: 3,
            duration: 0.35,
            ease: "power3.in"
          }, `${L}+=1.7`)

          .to(cardRefs.current[idx], {
            flex: 1,
            duration: 0.9,
            ease: "power4.inOut"
          }, `${L}+=1.85`)
          .to(imgRefs.current[idx], {
            scale: 1,
            opacity: 0.45,
            filter: "grayscale(85%) brightness(0.75) saturate(0.4)",
            duration: 0.9,
            ease: "power3.inOut"
          }, `${L}+=1.85`)
          .to(overlayRefs.current[idx], { opacity: 0.72, duration: 0.7 }, `${L}+=1.85`)
          .to(badgeRefs.current[idx], { opacity: 1, scale: 1, duration: 0.4 }, `${L}+=2.2`)
        })
      })

      // ════════════════════════════════════════
      // MOBILE — cinematic card stack peel
      // Fast, punchy, breathtaking
      // ════════════════════════════════════════
      mm.add("(max-width: 1023px)", () => {
        const container = cardsContainerRef.current
        if (!container) return

        const displayOrder = [1, 0, 2]
        const total = displayOrder.length

        container.style.position = 'relative'
        displayOrder.forEach((cardIdx, stackPos) => {
          const card = cardRefs.current[cardIdx]
          if (!card) return
          card.style.position = 'absolute'
          card.style.inset = '0'
          card.style.width = '100%'
          card.style.height = '100%'
          card.style.borderRadius = '12px'
          card.style.zIndex = String(total - stackPos)

          gsap.set(card, {
            scale: 1 - stackPos * 0.05,
            y: stackPos * 10,
            transformOrigin: "50% 100%",
          })
        })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=2800",
            pin: true,
            scrub: 0.5,   // very tight = instant scroll response
            anticipatePin: 1,
          }
        })

        displayOrder.forEach((cardIdx, stackPos) => {
          if (stackPos === total - 1) return

          const card = cardRefs.current[cardIdx]
          const info = infoRefs.current[cardIdx]
          const img = imgRefs.current[cardIdx]
          const overlay = overlayRefs.current[cardIdx]
          const badge = badgeRefs.current[cardIdx]
          if (!card) return

          const L = `m${stackPos}`

          // Card illuminates
          tl.to(img, {
            filter: "grayscale(0%) brightness(1.3) saturate(1.2)",
            opacity: 1,
            scale: 1.1,
            duration: 0.6,
            ease: "power4.out"
          }, L)
          .to(overlay, { opacity: 0.15, duration: 0.5 }, L)
          .to(badge, { opacity: 0, scale: 0.7, duration: 0.25 }, L)

          // Info crashes in from bottom
          .fromTo(info,
            { opacity: 0, y: 50, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "expo.out" },
            `${L}+=0.3`
          )

          // Short dwell
          .to({}, { duration: 0.6 })

          // Info snaps out upward
          .to(info, {
            opacity: 0,
            y: -30,
            scale: 1.04,
            duration: 0.28,
            ease: "power4.in"
          }, `${L}+=1.2`)

          // Card peels away — violent drop
          .to(card, {
            y: "110%",
            scaleX: 0.9,
            scaleY: 0.95,
            skewY: 3,
            opacity: 0,
            duration: 0.55,
            ease: "power4.in",
            transformOrigin: "50% 0%",
          }, `${L}+=1.35`)

          // Cards beneath snap into place
          displayOrder.slice(stackPos + 1).forEach((nextIdx, offset) => {
            const nextCard = cardRefs.current[nextIdx]
            if (!nextCard) return
            tl.to(nextCard, {
              scale: 1 - offset * 0.05,
              y: offset * 10,
              duration: 0.4,
              ease: "back.out(2)",
            }, `${L}+=1.5`)
          })
        })

        // Last card illuminates
        const lastIdx = displayOrder[total - 1]
        tl.to(imgRefs.current[lastIdx], {
          filter: "grayscale(0%) brightness(1.3) saturate(1.2)",
          opacity: 1, scale: 1.1,
          duration: 0.6, ease: "power4.out"
        })
        .to(overlayRefs.current[lastIdx], { opacity: 0.15, duration: 0.5 }, "<")
        .to(badgeRefs.current[lastIdx], { opacity: 0, scale: 0.7, duration: 0.25 }, "<")
        .fromTo(infoRefs.current[lastIdx],
          { opacity: 0, y: 50, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "expo.out" },
          "+=0.2"
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A] overflow-hidden font-sans">

      <div className="absolute top-0 left-0 w-full h-[1px] lg:h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent z-50" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none industrial-grid z-0" />

      <section className="relative z-20 min-h-screen w-full flex flex-col items-center justify-center px-3 sm:px-4 lg:px-20 py-8 lg:py-16">

        {/* Header */}
        <div ref={headerRef} className="mb-8 lg:mb-12 text-center max-w-3xl">
          <div className="inline-block mb-2 lg:mb-3">
            <span className="text-xs lg:text-sm font-bold tracking-[0.25em] uppercase text-red-500/80 opacity-90">
              Premium Collection
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight mb-3 lg:mb-4">
            Featured <span style={{ color: ACCENT_RED }}>Products</span>
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-gray-400 font-medium max-w-xl mx-auto">
            Scroll to discover our most trusted industrial solutions, engineered for performance and reliability.
          </p>
          <div className="h-0.5 sm:h-1 lg:h-1.5 w-12 sm:w-16 lg:w-24 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mt-4 lg:mt-6" />
        </div>

        {/* Cards */}
        <div
          ref={cardsContainerRef}
          className="w-full max-w-[1900px] lg:flex lg:flex-row lg:gap-4 lg:items-stretch"
          style={{ height: '65vh' }}
        >
          {[1, 0, 2].map((idx) => (
            <div
              key={idx}
              ref={(el) => { cardRefs.current[idx] = el }}
              className="card-base group"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  ref={(el) => { imgRefs.current[idx] = el }}
                  src={PRODUCTS[idx].image}
                  alt={PRODUCTS[idx].name}
                  fill
                  className="object-cover opacity-50 saturate-50 brightness-75 transition-none"
                  priority
                />
                <div
                  ref={(el) => { overlayRefs.current[idx] = el }}
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent/30 opacity-70"
                />
              </div>

              <div
                ref={(el) => { badgeRefs.current[idx] = el }}
                className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 z-30 opacity-0"
              >
                <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-600/90 backdrop-blur border border-red-500/50 shadow-lg">
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white flex items-center gap-1">
                    <Zap size={10} className="sm:w-3 sm:h-3" />
                    {PRODUCTS[idx].badge}
                  </span>
                </div>
              </div>

              <div
                ref={(el) => { infoRefs.current[idx] = el }}
                className="relative z-10 opacity-0 w-full max-w-xs sm:max-w-sm lg:max-w-md pointer-events-none px-2 sm:px-4 lg:px-0"
                style={{ transform: 'translateY(50px)' }}
              >
                <div className="glass-card">
                  <span className="text-[8px] sm:text-[9px] lg:text-xs font-bold tracking-[0.25em] lg:tracking-[0.3em] uppercase mb-2 sm:mb-2.5 lg:mb-3 block text-red-500/90">
                    {PRODUCTS[idx].category}
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-5xl xl:text-6xl font-black text-white uppercase mb-2 sm:mb-3 lg:mb-4 leading-tight lg:leading-none">
                    {PRODUCTS[idx].name}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4 lg:mb-8 font-medium line-clamp-2 sm:line-clamp-3 lg:line-clamp-none">
                    {PRODUCTS[idx].desc}
                  </p>
                  <button className="w-full sm:w-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-red-600 hover:bg-white hover:text-black text-white text-[9px] sm:text-[10px] lg:text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(226,0,16,0.3)] hover:shadow-[0_0_30px_rgba(226,0,16,0.6)] flex items-center justify-center sm:justify-start gap-2 rounded hover:gap-3">
                    View Details <ArrowRight size={12} strokeWidth={2.5} className="hidden sm:inline" />
                  </button>
                </div>
              </div>

              <div className="absolute bottom-2 sm:bottom-4 lg:bottom-10 left-2.5 sm:left-4 lg:left-10 z-20 flex items-center gap-1.5 sm:gap-2 lg:gap-4 group/number">
                <div className="w-0.5 sm:w-1 h-4 sm:h-6 lg:h-10 bg-red-600 shadow-[0_0_10px_rgba(226,0,16,0.5)] group-hover/number:shadow-[0_0_20px_rgba(226,0,16,0.8)] transition-all" />
                <span className="text-white/50 font-black tracking-tight text-lg sm:text-2xl lg:text-4xl group-hover/number:text-red-500/80 transition-colors">
                  0{idx + 1}
                </span>
              </div>

              {idx === 1 && (
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 lg:hidden z-20 flex items-center gap-1.5 text-white/40 text-[10px] font-bold tracking-wide uppercase">
                  <span>Scroll</span>
                  <div className="animate-bounce text-red-600">↓</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:block absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-center">
          <p className="text-xs text-gray-500 font-medium tracking-wider uppercase mb-2">Start scrolling</p>
          <div className="flex flex-col items-center gap-1">
            <div className="w-0.5 h-6 bg-gradient-to-b from-red-600 to-transparent" />
          </div>
        </div>
      </section>

      <style jsx>{`
        .industrial-grid {
          background-size: 25px 25px;
          @media (min-width: 640px) { background-size: 40px 40px; }
          @media (min-width: 1024px) { background-size: 60px 60px; }
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
        }
        .card-base {
          position: relative;
          flex: 1;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(20,20,20,0.8), rgba(10,10,10,0.9));
          border: 1px solid rgba(226,0,16,0.2);
          display: flex;
          align-items: center;
          padding: 12px;
          border-radius: 8px;
          @media (min-width: 640px) {
            padding: 16px;
            border-radius: 12px;
          }
          @media (min-width: 1024px) {
            padding: 40px 60px;
            border-radius: 16px;
            border: 1px solid rgba(226,0,16,0.15);
          }
          transition: border-color 0.3s ease;
        }
        .card-base:hover {
          border-color: rgba(226,0,16,0.4);
        }
        .glass-card {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-left: 3px solid ${ACCENT_RED};
          padding: 12px 14px;
          border-radius: 6px;
          @media (min-width: 640px) {
            padding: 16px 20px;
            border-radius: 8px;
          }
          @media (min-width: 1024px) {
            padding: 32px 40px;
            border-radius: 12px;
            backdrop-filter: blur(24px);
            border-left: 4px solid ${ACCENT_RED};
          }
          box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255,255,255,0.05);
          border-top: 1px solid rgba(255,255,255,0.08);
        }
      `}</style>
    </div>
  )
}