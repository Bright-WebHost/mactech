import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Fahud Safety & Technical Trading | Industrial Supplier Since 2008',
  description: 'Learn about Fahud Safety & Technical Trading — ISO 9001 certified supplier established in 2008. Serving Oman and UAE with industrial materials, tools, PPE and building solutions.',
  keywords: ['about Fahud', 'industrial supplier', 'ISO 9001 certified', 'Oman supplier', 'established 2008', 'building materials'],
  openGraph: {
    title: 'About Fahud Safety & Technical Trading — Your Industrial Partner',
    description: 'ISO 9001 certified industrial supplier in Muscat, Oman. Over 15 years of experience serving construction and industrial sectors.',
    url: 'https://www.fahudoman.com/about',
    type: 'website',
  },
  alternates: { canonical: 'https://www.fahudoman.com/about' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
