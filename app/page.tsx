import type { Metadata } from 'next'
import HomeReferenceLayout from '@/components/home/HomeReferenceLayout'

export const metadata: Metadata = {
  title: 'MACTECH Building Materials Trading LLC | Industrial Fasteners, PPE & Building Materials Supplier — Muscat',
  description: 'MACTECH Building Materials Trading LLC — Oman\'s leading industrial supplier since 2008. ISO 9001 certified. Fasteners, PPE, welding consumables, power tools and lifting solutions in Muscat.',
  keywords: ['industrial supplier Muscat', 'fasteners', 'PPE', 'welding consumables', 'building materials', 'ISO 9001', 'Oman'],
  openGraph: {
    title: 'MACTECH Building Materials Trading LLC — Your Industrial Partner',
    description: 'ISO 9001 certified industrial and building materials supplier in Muscat, Oman. Extensive inventory of fasteners, PPE, and technical equipment.',
    url: 'https://www.mactechoman.com',
  },
  twitter: { title: 'MACTECH Building Materials Trading LLC' },
  alternates: { canonical: 'https://www.mactechoman.com' },
}

export default function HomePage() {
  return <HomeReferenceLayout />
}
