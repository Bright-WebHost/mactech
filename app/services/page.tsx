import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Mactech Oman',
  description:
    'Explore Mactech Oman services and supply categories including fasteners, PPE, welding consumables, tools, pipes and construction consumables.',
}

// ─── Service data (one strong image per service) ───────────────────────────────
const SERVICES = [
  {
    num: '01',
    tag: 'High-load · Corrosion-resistant',
    category: 'Fasteners',
    title: ['Fasteners &', 'Fixings'],
    desc: 'A comprehensive range of industrial fasteners engineered for high-load, corrosive, and demanding environments across oil & gas, marine, and construction projects.',
    features: [
      'Hex bolts, stud bolts, anchor bolts — all grades',
      'Stainless, galvanised & high-tensile finishes',
      'ASTM, DIN & ISO certified to project spec',
      'Custom kitting and packing on request',
    ],
    image: { src: '/images/fasteners/nut.png', alt: 'Industrial hex nut and bolt' },
  },
  {
    num: '02',
    tag: 'EN · ANSI · OSHA Certified',
    category: 'Safety',
    title: ['Personal Protective', 'Equipment'],
    desc: 'Certified head-to-toe PPE solutions for industrial, construction, and offshore environments meeting or exceeding international safety standards.',
    features: [
      'Hard hats & safety helmets — Type I & II',
      'Hi-vis vests, coveralls & chemical suits',
      'Safety footwear — steel toe, puncture-resistant',
      'Respiratory, eye & hearing protection',
    ],
    image: { src: '/images/fasteners/helmate.png', alt: 'Industrial safety helmet' },
  },
  {
    num: '03',
    tag: 'MIG · TIG · MMA · FCAW',
    category: 'Welding',
    title: ['Welding', 'Consumables'],
    desc: 'Full-spectrum welding consumables for all major processes. OEM-grade materials for structural, pipeline, and offshore welding across Oman.',
    features: [
      'Electrodes — cellulosic, rutile & low-hydrogen',
      'MIG/TIG wires — solid, flux-cored & metal-cored',
      'Welding gases — Argon, CO₂, mixed cylinders',
      'Grinding discs, brushes & post-weld treatment',
    ],
    image: { src: '/images/welding/welding1.png', alt: 'Professional welding equipment' },
  },
  {
    num: '04',
    tag: 'Hand · Power · Precision',
    category: 'Tools',
    title: ['Hand &', 'Power Tools'],
    desc: 'Industrial-grade hand tools and power tools from globally trusted brands for maintenance, fabrication, and site operations across Oman.',
    features: [
      'Spanners, ratchets, torque wrenches, pliers sets',
      'Grinders, drills, impact drivers & saws',
      'Measuring & marking tools — precision grade',
      'Tool storage systems and organiser sets',
    ],
    image: { src: '/images/hero/tools4.png', alt: 'Industrial tools set' },
  },
  {
    num: '05',
    tag: 'CS · SS · GI · HDPE',
    category: 'Piping',
    title: ['Pipes, Valves', '& Fittings'],
    desc: 'Extensive piping systems for oil & gas, utility, and process applications. Supplied to project spec with fast turnaround across all schedules and ratings.',
    features: [
      'Carbon steel, stainless & GI pipes — all schedules',
      'Elbows, tees, reducers, flanges & end caps',
      'Gate, ball, butterfly, globe & check valves',
      'Gaskets, clamps & pipe support systems',
    ],
    image: { src: '/images/pipes/pipe1.png', alt: 'Industrial steel pipe system' },
  },
  {
    num: '06',
    tag: 'Abrasives · Sealants · Chemicals',
    category: 'Construction',
    title: ['Construction', 'Consumables'],
    desc: 'General and specialist consumables to keep construction, maintenance, and civil works running. Trusted by major Oman contractors for reliability and quality.',
    features: [
      'Abrasives — cutting discs, flap discs, grinding wheels',
      'Adhesives, sealants, PTFE tape & lubricants',
      'Cable ties, conduits, tapes & marking supplies',
      'Cleaning chemicals & site maintenance products',
    ],
    image: { src: '/images/construction/1.png', alt: 'Construction consumables' },
  },
]

// ─── Trust stats ──────────────────────────────────────────────────────────────
const STATS = [
  { value: '12,000+', label: 'SKUs in Stock' },
  { value: '24 hr', label: 'Delivery Across Oman' },
  { value: 'ISO', label: 'Certified Supply Chain' },
  { value: '15+', label: 'Years in Market' },
]

// ─── Checkmark icon ───────────────────────────────────────────────────────────
const Check = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path
      d="M2.5 6.5l3 3 5-5"
      stroke="#E20010"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <div className="bg-white">

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="px-8 py-16 lg:px-16 lg:py-24 bg-white border-b border-[rgba(226,0,16,0.12)]">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-1.5 text-[#E20010] bg-[rgba(226,0,16,0.07)] border border-[rgba(226,0,16,0.18)] px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.12em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E20010]" />
            Industrial Supply — Oman
          </div>

          <h1
            className="font-barlow-condensed font-black uppercase leading-[1.0] tracking-tight text-[#0D0D0D] mb-5"
            style={{ fontSize: 'clamp(52px, 8vw, 96px)' }}
          >
            Our Supply<br />
            <span className="text-[#E20010]">Services</span>
          </h1>

          <p className="text-[15px] text-[#6b6b6b] leading-relaxed max-w-[500px]">
            Complete industrial supply support — from product selection to timely delivery
            across Oman, serving oil & gas, marine, and construction sectors.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ──────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 bg-[#0D0D0D] border-b border-white/5">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-8 py-7 flex flex-col gap-1.5 ${
              i < STATS.length - 1 ? 'border-r border-white/[0.07]' : ''
            }`}
          >
            <span
              className="font-barlow-condensed font-black uppercase text-[#E20010] leading-none"
              style={{ fontSize: 'clamp(30px, 3.5vw, 44px)' }}
            >
              {stat.value}
            </span>
            <span className="text-[10.5px] font-medium uppercase tracking-[0.1em] text-white/40">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Category Nav ───────────────────────────────────────────────────── */}
      <nav
        className="hidden lg:flex items-stretch border-b border-[rgba(226,0,16,0.1)] bg-white sticky top-0 z-10"
        aria-label="Service categories"
      >
        {SERVICES.map((svc) => (
          <a
            key={svc.num}
            href={`#${svc.category.toLowerCase()}`}
            className="flex-1 group flex flex-col items-center justify-center px-4 py-3 border-r border-[rgba(226,0,16,0.08)] last:border-r-0 hover:bg-[rgba(226,0,16,0.04)] transition-colors duration-150"
          >
            <span className="text-[9px] font-bold text-[#E20010] tracking-[0.1em] mb-0.5">
              {svc.num}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.09em] text-[#888] group-hover:text-[#E20010] transition-colors duration-150 whitespace-nowrap">
              {svc.category}
            </span>
          </a>
        ))}
      </nav>

      {/* ── Service Sections ───────────────────────────────────────────────── */}
      <div>
        {SERVICES.map((svc, index) => {
          const isEven = index % 2 === 1

          /* ── Text panel (dark) ── */
          const TextPanel = (
            <div
              className="flex flex-col justify-center px-10 py-16 lg:px-14 lg:py-20 bg-[#0D0D0D]"
              style={{ minHeight: 500 }}
            >
              {/* Number + category row */}
              <div className="flex items-end gap-4 mb-8">
                <span
                  className="font-barlow-condensed font-black leading-none text-[#E20010]"
                  style={{ fontSize: 80, opacity: 0.12 }}
                  aria-hidden="true"
                >
                  {svc.num}
                </span>
                <div className="mb-1.5 flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#E20010]">
                    {svc.category}
                  </span>
                  <span className="text-[9.5px] uppercase tracking-[0.1em] text-white/30">
                    {svc.tag}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h2
                className="font-barlow-condensed font-black uppercase leading-[1.0] tracking-tight text-white mb-5"
                style={{ fontSize: 'clamp(34px, 3.8vw, 54px)' }}
              >
                {svc.title[0]}
                <br />
                {svc.title[1]}
              </h2>

              {/* Red rule */}
              <div className="w-10 h-[2px] bg-[#E20010] mb-6 rounded-full" />

              {/* Description */}
              <p className="text-[13px] text-white/50 leading-relaxed mb-8 max-w-[380px]">
                {svc.desc}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-3.5">
                {svc.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-[12.5px] text-white/70 leading-snug"
                  >
                    <span className="flex-shrink-0 mt-[2px]">
                      <Check />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )

          /* ── Image panel (light) ── */
          const ImagePanel = (
            <div
              className="relative flex items-center justify-center bg-[#F4F4F2]"
              style={{ minHeight: 500 }}
            >
              {/* Subtle section number watermark */}
              <span
                className="absolute bottom-4 right-5 font-barlow-condensed font-black uppercase leading-none pointer-events-none select-none text-[#E20010]"
                style={{ fontSize: 130, opacity: 0.035, letterSpacing: '-0.04em' }}
                aria-hidden="true"
              >
                {svc.num}
              </span>

              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E20010] to-transparent opacity-10" />

              {/* Product image */}
              <img
                src={svc.image.src}
                alt={svc.image.alt}
                loading="lazy"
                className="relative z-10 hover:scale-[1.05] transition-transform duration-700 ease-out"
                style={{
                  maxWidth: '68%',
                  maxHeight: 340,
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 28px 56px rgba(0,0,0,0.14))',
                }}
              />

              {/* Bottom left label */}
              <div className="absolute bottom-5 left-6 z-10">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#E20010] bg-white border border-[rgba(226,0,16,0.22)] px-3 py-1.5 rounded-full shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E20010]" />
                  {svc.category}
                </span>
              </div>
            </div>
          )

          return (
            <article
              key={svc.num}
              id={svc.category.toLowerCase()}
              className="grid grid-cols-1 lg:grid-cols-2 border-b border-[rgba(226,0,16,0.1)] scroll-mt-[88px]"
            >
              {isEven ? (
                <>
                  <div className="order-2 lg:order-1">{ImagePanel}</div>
                  <div className="order-1 lg:order-2">{TextPanel}</div>
                </>
              ) : (
                <>
                  <div>{TextPanel}</div>
                  <div>{ImagePanel}</div>
                </>
              )}
            </article>
          )
        })}
      </div>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] px-8 py-16 lg:px-16 lg:py-20 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#E20010] mb-3 block">
              Procurement — Fast Track
            </span>
            <h2
              className="font-barlow-condensed font-black uppercase leading-[1.0] tracking-tight text-white mb-4"
              style={{ fontSize: 'clamp(30px, 4.5vw, 56px)' }}
            >
              Send us your<br />
              <span className="text-[#E20010]">Bill of Materials</span>
            </h2>
            <p className="text-[13px] text-white/45 leading-relaxed max-w-[440px]">
              Upload your BOM or material list — our technical sales team will price, source,
              and deliver across Oman within 24 hours. No back-and-forth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-[#E20010] hover:bg-[#b4000d] text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200 text-[11px] uppercase tracking-widest whitespace-nowrap"
            >
              Upload your BOM
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-[11px] uppercase tracking-widest whitespace-nowrap"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}