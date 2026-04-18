import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import CustomCursor from '@/components/CustomCursor'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mactechoman.com'),
  title: {
    default: 'Mactech Oman | Industrial & Building Materials Supplier — Muscat',
    template: '%s | Mactech Oman',
  },
  description: 'Mactech Building Materials Trading LLC — ISO 9001 certified industrial supplier in Muscat, Oman. Fasteners, PPE, welding consumables, power tools, lifting solutions and more. Serving Oil & Gas, construction and manufacturing since 2008.',
  keywords: ['industrial supplier Muscat', 'PPE supplier Oman', 'fasteners Muscat', 'welding consumables Oman', 'safety equipment Muscat', 'building materials Oman', 'industrial tools Muscat'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mactechoman.com',
    siteName: 'Mactech Oman',
    title: 'Mactech Oman — Your Industrial Partner',
    description: 'ISO 9001 certified industrial & building materials supplier in Muscat, Oman. Fasteners, PPE, welding, tools and more since 2008.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Mactech Oman Industrial Supplier' }],
  },
  twitter: { card: 'summary_large_image', title: 'Mactech Oman', description: 'Industrial supplier in Muscat, Oman', images: ['/og-image.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://www.mactechoman.com' },
  verification: { google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mactech Building Materials Trading LLC',
    alternateName: 'Mactech Oman',
    url: 'https://www.mactechoman.com',
    logo: 'https://www.mactechoman.com/images/logo.png',
    description: 'ISO 9001 certified industrial and building materials supplier in Muscat, Oman. Established 2008.',
    foundingDate: '2008',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Al Jami Al Akbar St, Ghala Industrial Area',
      addressLocality: 'Muscat',
      postalCode: '115',
      addressCountry: 'OM',
    },
    contactPoint: [
      { '@type': 'ContactPoint', telephone: '+968-2421-8110', contactType: 'sales', areaServed: 'OM', availableLanguage: ['English', 'Arabic'] },
    ],
    sameAs: ['https://www.facebook.com/mactechoman/', 'https://www.instagram.com/mactech_me/', 'https://www.linkedin.com/company/mactechoman'],
  }

  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </head>
      <body className="bg-white text-black font-sans antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CustomCursor />
      </body>
    </html>
  )
}
