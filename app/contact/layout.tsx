import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Mactech Oman | Industrial Supplier — Get in Touch',
  description: 'Contact Mactech Building Materials Trading LLC in Muscat, Oman. Call +968 2421 8110 or WhatsApp +968 9798 4810 for inquiries, quotes and technical support. Fast 2-hour response time.',
  keywords: ['contact mactech', 'industrial supplier contact', 'Muscat supplier', 'technical support', 'product inquiry'],
  openGraph: {
    title: 'Contact Mactech Oman',
    description: 'Reach our team for supply needs, availability checks, or technical guidance. We respond within 2 business hours.',
    url: 'https://www.mactechoman.com/contact',
    type: 'website',
  },
  alternates: { canonical: 'https://www.mactechoman.com/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
