'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, MapPin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const locations = [
    {
      city: 'Muscat',
      country: 'Oman',
      address: 'Al Jami Al Akbar St, Ghala Industrial Area',
      pobox: 'PO Box: 870, PC: 115',
      phone: '+968 2421 8110',
      phone2: '+968 2421 8111',
      gsm: '+968 9798 4810',
      email: 'info@mactechoman.com'
    },
    {
      city: 'Dubai',
      country: 'UAE',
      address: 'Shop No. 38, Chinese Dragon Building, Naif, Deira',
      pobox: 'PO Box: 80565',
      phone: '+971 4 2218032',
      gsm: '+971 55 702 1325',
      email: 'faraz@mactech.ae'
    }
  ]

  return (
    <footer style={{ background: '#111', color: '#fff', fontFamily: "'DM Sans', sans-serif", position: 'relative' }}>

      {/* Red CTA Box */}
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(12px, 8vw, 60px)', position: 'relative', top: 'clamp(-20px, -3vw, -40px)', zIndex: 10 }}>
        <motion.div
          whileHover={{ boxShadow: '0 20px 40px rgba(226,0,16,0.3)' }}
          style={{
            background: 'linear-gradient(135deg, #E20010 0%, #ff3b47 100%)',
            padding: 'clamp(24px, 6vw, 40px)',
            borderRadius: 16,
            transition: 'box-shadow .3s',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'clamp(12px, 4vw, 20px)', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <h3 style={{ fontSize: 'clamp(20px, 5vw, 32px)', fontWeight: 900, marginBottom: 'clamp(4px, 2vw, 8px)', color: '#fff', letterSpacing: '-0.5px' }}>Get in Touch</h3>
              <p style={{ fontSize: 'clamp(12px, 3vw, 16px)', color: 'rgba(255,255,255,0.9)', margin: 0 }}>Contact us today for custom specifications, technical support, and supply solutions.</p>
            </div>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', color: '#E20010', fontWeight: 800,
                fontSize: 'clamp(11px, 2.5vw, 14px)',
                padding: 'clamp(12px, 3vw, 16px) clamp(20px, 5vw, 32px)',
                borderRadius: 8, textDecoration: 'none', letterSpacing: '1.5px',
                textTransform: 'uppercase', transition: 'all .3s', flexShrink: 0
              }}
              className="hover:scale-105 hover:shadow-lg"
            >
              Contact Us <ArrowRight size={16} strokeWidth={3} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div style={{ padding: 'clamp(20px, 5vw, 40px) clamp(16px, 8vw, 60px)', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'clamp(32px, 6vw, 48px)', marginBottom: 'clamp(40px, 8vw, 60px)' }}>

          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'clamp(12px, 4vw, 20px)', background: '#fff', padding: 'clamp(6px, 2vw, 10px) clamp(10px, 3vw, 15px)', borderRadius: 8, width: 'fit-content' }}>
              <Image
                src="/mactech-logo.webp"
                alt="Mactech Logo"
                width={120}
                height={40}
                style={{ objectFit: 'contain', width: 'clamp(80px, 20vw, 120px)', height: 'auto' }}
              />
            </div>
            <p style={{ fontSize: 'clamp(12px, 2.5vw, 14px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 'clamp(16px, 4vw, 24px)' }}>
              ISO 9001 certified industrial & building materials supplier serving Oman and UAE.
            </p>
            <div style={{ display: 'flex', gap: 'clamp(8px, 2vw, 12px)', flexWrap: 'wrap' }}>
              <a href="https://wa.me/96897984810" target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(226,0,16,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#E20010', fontSize: 16 }} className="hover:bg-red-600 hover:text-white">💬</a>
              <a href="tel:+96824218110" style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(226,0,16,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#E20010' }} className="hover:bg-red-600 hover:text-white"><Phone size={15} /></a>
              <a href="mailto:info@mactechoman.com" style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(226,0,16,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#E20010' }} className="hover:bg-red-600 hover:text-white"><Mail size={15} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 800, marginBottom: 20, color: '#fff', letterSpacing: '2px', textTransform: 'uppercase' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }} className="hover:text-red-500">
                    <span style={{ color: '#E20010', fontSize: 10 }}>▶</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices — compact two-column side by side */}
          <div style={{ gridColumn: 'span 2' }}>
            <h4 style={{ fontSize: 12, fontWeight: 800, marginBottom: 20, color: '#fff', letterSpacing: '2px', textTransform: 'uppercase' }}>Our Offices</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {locations.map((loc, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(226,0,16,0.07)',
                    border: '1px solid rgba(226,0,16,0.2)',
                    borderRadius: 12,
                    padding: '20px 24px',
                  }}
                >
                  {/* City header */}
                  <div style={{ marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(226,0,16,0.2)' }}>
                    <p style={{ fontSize: 13, fontWeight: 900, color: '#E20010', margin: 0, letterSpacing: '2px', textTransform: 'uppercase' }}>{loc.city}</p>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', margin: '4px 0 0' }}>{loc.country}</p>
                  </div>

                  {/* Details */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    
                    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <MapPin size={13} style={{ color: '#E20010', marginTop: 2, flexShrink: 0 }} />
                      <div>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.6 }}>{loc.address}</p>
                        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', margin: '4px 0 0' }}>{loc.pobox}</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <Phone size={13} style={{ color: '#E20010', marginTop: 2, flexShrink: 0 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <a href={`tel:${loc.phone.replace(/\s/g, '')}`} style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }} className="hover:text-red-400">{loc.phone}</a>
                        {loc.phone2 && <a href={`tel:${loc.phone2.replace(/\s/g, '')}`} style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }} className="hover:text-red-400">{loc.phone2}</a>}
                        <a href={`https://wa.me/${loc.gsm.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }} className="hover:text-red-400">📱 {loc.gsm}</a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <Mail size={13} style={{ color: '#E20010', flexShrink: 0 }} />
                      <a href={`mailto:${loc.email}`} style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', textDecoration: 'none', wordBreak: 'break-all' }} className="hover:text-red-400">{loc.email}</a>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 24 }} />

        {/* Bottom */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, letterSpacing: '0.5px' }}>
            © {currentYear} Mactech Building Materials Trading LLC. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(item => (
              <a key={item} href="#" style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }} className="hover:text-white">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}