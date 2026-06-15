import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import CustomCursor from '@/components/CustomCursor'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fahudoman.com'),
  title: {
    default: 'Fahud Safety & Technical Trading | Industrial & Building Materials Supplier — Muscat',
    template: '%s | Fahud Safety & Technical Trading',
  },
  description: 'Fahud Safety & Technical Trading — ISO 9001 certified industrial supplier in Muscat, Oman. Fasteners, PPE, welding consumables, power tools, lifting solutions and more. Serving Oil & Gas, construction and manufacturing since 2008.',
  keywords: ['industrial supplier Muscat', 'PPE supplier Oman', 'fasteners Muscat', 'welding consumables Oman', 'safety equipment Muscat', 'building materials Oman', 'industrial tools Muscat'],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.fahudoman.com',
    siteName: 'Fahud Safety & Technical Trading',
    title: 'Fahud Safety & Technical Trading — Your Industrial Partner',
    description: 'ISO 9001 certified industrial & building materials supplier in Muscat, Oman. Fasteners, PPE, welding, tools and more since 2008.',
    images: [{ url: 'https://www.fahudoman.com/fahud-logo.webp', width: 400, height: 400, alt: 'Fahud Safety & Technical Trading Industrial Supplier' }],
  },
  twitter: { card: 'summary_large_image', title: 'Fahud Safety & Technical Trading', description: 'Industrial supplier in Muscat, Oman', images: ['https://www.fahudoman.com/fahud-logo.webp'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://www.fahudoman.com' },
  verification: { google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.fahudoman.com',
    name: 'Fahud Safety & Technical Trading',
    alternateName: 'Fahud Oman',
    url: 'https://www.fahudoman.com',
    logo: 'https://www.fahudoman.com/fahud-logo.webp',
    image: 'https://www.fahudoman.com/fahud-logo.webp',
    description: 'ISO 9001 certified industrial and building materials supplier in Muscat, Oman. Established 2008.',
    foundingDate: '2008',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Muscat, Ghala, Sultanate of Oman',
      addressLocality: 'Muscat',
      postalCode: '115',
      addressCountry: 'OM',
    },
    contactPoint: [
      { '@type': 'ContactPoint', telephone: '00968 + 94422435', contactType: 'sales', areaServed: 'OM', availableLanguage: ['English', 'Arabic'] },
      { '@type': 'ContactPoint', telephone: '00968 + 94422435', contactType: 'customer service', areaServed: 'OM' },
    ],
    sameAs: ['https://www.facebook.com/fahudsafety', 'https://www.instagram.com/fahud_me/', 'https://www.linkedin.com/company/fahudoman'],
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fahudoman.com' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.fahudoman.com/about' },
      { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://www.fahudoman.com/services' },
      { '@type': 'ListItem', position: 4, name: 'Contact', item: 'https://www.fahudoman.com/contact' },
    ],
  }

  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
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
