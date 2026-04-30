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
      
      {/* Moved the Red CTA Box to the top.
        Using negative top margin to make it overlap the section above it slightly, 
        which is a very common and modern design pattern for footer CTAs.
      */}
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 8vw', position: 'relative', top: '-40px', zIndex: 10 }}>
        <motion.div 
          whileHover={{ boxShadow: '0 20px 40px rgba(226,0,16,0.3)' }} 
          style={{ 
            background: 'linear-gradient(135deg, #E20010 0%, #ff3b47 100%)', 
            padding: '40px', 
            borderRadius: 16, 
            transition: 'box-shadow .3s',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 250 }}>
              <h3 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 900, marginBottom: 8, color: '#fff', letterSpacing: '-0.5px' }}>Get in Touch</h3>
              <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: 'rgba(255,255,255,0.9)', margin: 0 }}>Contact us today for custom specifications, technical support, and supply solutions.</p>
            </div>
            <Link 
              href="/contact" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: 8, 
                background: '#fff', 
                color: '#E20010', 
                fontWeight: 800, 
                fontSize: 14, 
                padding: '16px 32px', 
                borderRadius: 8, 
                textDecoration: 'none', 
                letterSpacing: '1.5px', 
                textTransform: 'uppercase', 
                transition: 'all .3s', 
                flexShrink: 0 
              }} 
              className="hover:scale-105 hover:shadow-lg"
            >
              Contact Us <ArrowRight size={18} strokeWidth={3} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div style={{ padding: '20px 8vw 40px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 60, marginBottom: 60 }}>
          
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20, background: '#fff', padding: '10px 15px', borderRadius: 8, width: 'fit-content' }}>
              {/* Added a white background to the logo container to ensure it's visible against the dark footer */}
              <Image 
                src="/mactech-logo.avif" 
                alt="Mactech Logo" 
                width={120} 
                height={40}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
              ISO 9001 certified industrial & building materials supplier serving Oman and UAE. Your trusted partner for fasteners, PPE, welding, tools and more.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://wa.me/96897984810" target="_blank" rel="noopener noreferrer" style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(226,0,16,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#E20010', fontSize: 18, transition: 'all .3s' }} className="hover:bg-red-600 hover:text-white">💬</a>
              <a href="tel:+96824218110" style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(226,0,16,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#E20010', transition: 'all .3s' }} className="hover:bg-red-600 hover:text-white"><Phone size={18} /></a>
              <a href="mailto:info@mactechoman.com" style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(226,0,16,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#E20010', transition: 'all .3s' }} className="hover:bg-red-600 hover:text-white"><Mail size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 24, color: '#fff', letterSpacing: '2px', textTransform: 'uppercase' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color .3s', display: 'inline-flex', alignItems: 'center', gap: 8 }} className="hover:text-red-500">
                    <span style={{ color: '#E20010', fontSize: 10 }}>▶</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices Section - Spans full width for better readability */}
          <div style={{ gridColumn: 'span 2' }}>
            <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 24, color: '#fff', letterSpacing: '2px', textTransform: 'uppercase' }}>Our Offices</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40 }}>
              {locations.map((location, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(226,0,16,0.25)' }}
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(226,0,16,0.12) 0%, rgba(226,0,16,0.05) 100%)', 
                    padding: '45px 40px', 
                    borderRadius: 14,
                    border: '1px solid rgba(226,0,16,0.3)',
                    transition: 'all .3s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                  }}
                >
                  {/* Location Header */}
                  <div style={{ marginBottom: 32, paddingBottom: 20, borderBottom: '2px solid rgba(226,0,16,0.4)' }}>
                    <h5 style={{ fontSize: 16, fontWeight: 900, color: '#E20010', margin: 0, letterSpacing: '2px', textTransform: 'uppercase' }}>
                      {location.city}
                    </h5>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', margin: '8px 0 0 0', letterSpacing: '0.5px' }}>
                      {location.country}
                    </p>
                  </div>

                  {/* Address Section */}
                  <div style={{ marginBottom: 32 }}>
                    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div style={{ background: 'rgba(226,0,16,0.2)', padding: 10, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 40, minHeight: 40, flexShrink: 0 }}>
                        <MapPin size={18} style={{ color: '#E20010' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 700, letterSpacing: '1.2px', marginBottom: 10, textTransform: 'uppercase' }}>Address</div>
                        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontWeight: 500, marginBottom: 12 }}>
                          {location.address}
                        </div>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
                          {location.pobox}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone Section */}
                  <div style={{ marginBottom: 32 }}>
                    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div style={{ background: 'rgba(226,0,16,0.2)', padding: 10, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 40, minHeight: 40, flexShrink: 0 }}>
                        <Phone size={18} style={{ color: '#E20010' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 700, letterSpacing: '1.2px', marginBottom: 10, textTransform: 'uppercase' }}>Phone</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                          <a href={`tel:${location.phone.replace(/\s/g, '')}`} style={{ fontSize: 14, color: '#fff', textDecoration: 'none', fontWeight: 600, transition: 'color .2s' }} className="hover:text-red-400">
                            {location.phone}
                          </a>
                          {location.phone2 && (
                            <a href={`tel:${location.phone2.replace(/\s/g, '')}`} style={{ fontSize: 14, color: '#fff', textDecoration: 'none', fontWeight: 600, transition: 'color .2s' }} className="hover:text-red-400">
                              {location.phone2}
                            </a>
                          )}
                          <a href={`https://wa.me/${location.gsm.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color .2s' }} className="hover:text-red-400">
                            📱 {location.gsm}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email Section */}
                  <div>
                    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div style={{ background: 'rgba(226,0,16,0.2)', padding: 10, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 40, minHeight: 40, flexShrink: 0 }}>
                        <Mail size={18} style={{ color: '#E20010' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 700, letterSpacing: '1.2px', marginBottom: 10, textTransform: 'uppercase' }}>Email</div>
                        <a href={`mailto:${location.email}`} style={{ fontSize: 14, color: '#fff', textDecoration: 'none', fontWeight: 600, wordBreak: 'break-all', transition: 'color .2s' }} className="hover:text-red-400">
                          {location.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: 32 }} />

        {/* Bottom Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>
            © {currentYear} Mactech Building Materials Trading LLC. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color .3s' }} className="hover:text-white">Privacy Policy</a>
            <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color .3s' }} className="hover:text-white">Terms of Service</a>
            <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color .3s' }} className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}