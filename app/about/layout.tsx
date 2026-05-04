import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Mactech Oman | Industrial Supplier Since 2008',
  description: 'Learn about Mactech Building Materials Trading LLC — ISO 9001 certified supplier established in 2008. Serving Oman and UAE with industrial materials, tools, PPE and building solutions.',
  keywords: ['about mactech', 'industrial supplier', 'ISO 9001 certified', 'Oman supplier', 'established 2008', 'building materials'],
  openGraph: {
    title: 'About Mactech Oman — Your Industrial Partner',
    description: 'ISO 9001 certified industrial supplier in Muscat, Oman. Over 15 years of experience serving construction and industrial sectors.',
    url: 'https://www.mactechoman.com/about',
    type: 'website',
  },
  alternates: { canonical: 'https://www.mactechoman.com/about' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
