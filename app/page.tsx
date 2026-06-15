import type { Metadata } from 'next'
import HomeReferenceLayout from '@/components/home/HomeReferenceLayout'

export const metadata: Metadata = {
  title: 'Fahud Safety & Technical Trading | Industrial Fasteners, PPE & Building Materials Supplier — Muscat',
  description: 'Fahud Safety & Technical Trading — Oman\'s leading industrial supplier since 2008. ISO 9001 certified. Fasteners, PPE, welding consumables, power tools and lifting solutions in Muscat.',
  keywords: ['industrial supplier Muscat', 'fasteners', 'PPE', 'welding consumables', 'building materials', 'ISO 9001', 'Oman'],
  openGraph: {
    title: 'Fahud Safety & Technical Trading — Your Industrial Partner',
    description: 'ISO 9001 certified industrial supplier in Muscat, Oman. Complete range of fasteners, PPE, welding, tools and building materials.',
    url: 'https://www.fahudoman.com',
    type: 'website',
  },
  alternates: { canonical: 'https://www.fahudoman.com' },
}

export default function HomePage() {
  return <HomeReferenceLayout />
}
