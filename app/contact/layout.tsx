import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Fahud Safety & Technical Trading | Industrial Supplier — Get in Touch',
  description: 'Contact Fahud Safety & Technical Trading in Muscat, Oman. Call 00968 + 94422435 for inquiries, quotes and technical support. Fast 2-hour response time.',
  keywords: ['contact Fahud', 'industrial supplier contact', 'Muscat supplier', 'technical support', 'product inquiry'],
  openGraph: {
    title: 'Contact Fahud Safety & Technical Trading',
    description: 'Reach our team for supply needs, availability checks, or technical guidance. We respond within 2 business hours.',
    url: 'https://www.fahudoman.com/contact',
    type: 'website',
  },
  alternates: { canonical: 'https://www.fahudoman.com/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
