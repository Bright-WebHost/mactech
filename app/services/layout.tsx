import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industrial Services & Solutions | Fasteners, PPE, Welding Tools — Mactech Oman',
  description: 'Comprehensive industrial services: fasteners, safety equipment (PPE), welding consumables, hand & power tools, lifting solutions, pipes & fittings. ISO 9001 certified supplier in Muscat, Oman.',
  keywords: ['industrial services', 'fasteners supplier', 'PPE equipment', 'welding consumables', 'power tools', 'lifting equipment', 'pipes and fittings', 'Muscat Oman'],
  openGraph: {
    title: 'Industrial Services & Solutions — Mactech Oman',
    description: 'Complete range of industrial products and services: fasteners, safety equipment, welding, tools, lifting solutions and more.',
    url: 'https://www.mactechoman.com/services',
    type: 'website',
  },
  alternates: { canonical: 'https://www.mactechoman.com/services' },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
