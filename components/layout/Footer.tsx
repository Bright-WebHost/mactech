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
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: 8, 
                background: '#fff', 
                color: '#E20010', 
                fontWeight: 800, 
                fontSize: 'clamp(11px, 2.5vw, 14px)', 
                padding: 'clamp(12px, 3vw, 16px) clamp(20px, 5vw, 32px)', 
                borderRadius: 8, 
                textDecoration: 'none', 
                letterSpacing: '1.5px', 
                textTransform: 'uppercase', 
                transition: 'all .3s', 
                flexShrink: 0 
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(40px, 8vw, 60px)', marginBottom: 'clamp(40px, 8vw, 60px)' }}>
          
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'clamp(12px, 4vw, 20px)', background: '#fff', padding: 'clamp(6px, 2vw, 10px) clamp(10px, 3vw, 15px)', borderRadius: 8, width: 'fit-content' }}>
              {/* Added a white background to the logo container to ensure it's visible against the dark footer */}
              <Image 
                src="/mactech-logo.avif" 
                alt="Mactech Logo" 
                width={120} 
                height={40}
                style={{ objectFit: 'contain', width: 'clamp(80px, 20vw, 120px)', height: 'auto' }}
              />
            </div>
            <p style={{ fontSize: 'clamp(12px, 2.5vw, 14px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 'clamp(16px, 4vw, 24px)' }}>
              ISO 9001 certified industrial & building materials supplier serving Oman and UAE. Your trusted partner for fasteners, PPE, welding, tools and more.
            </p>
            <div style={{ display: 'flex', gap: 'clamp(8px, 2vw, 12px)', flexWrap: 'wrap' }}>
              <a href="https://wa.me/96897984810" target="_blank" rel="noopener noreferrer" style={{ width: 'clamp(32px, 8vw, 40px)', height: 'clamp(32px, 8vw, 40px)', borderRadius: '50%', background: 'rgba(226,0,16,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#E20010', fontSize: 'clamp(14px, 4vw, 18px)', transition: 'all .3s' }} className="hover:bg-red-600 hover:text-white">💬</a>
              <a href="tel:+96824218110" style={{ width: 'clamp(32px, 8vw, 40px)', height: 'clamp(32px, 8vw, 40px)', borderRadius: '50%', background: 'rgba(226,0,16,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#E20010', transition: 'all .3s' }} className="hover:bg-red-600 hover:text-white"><Phone size={16} /></a>
              <a href="mailto:info@mactechoman.com" style={{ width: 'clamp(32px, 8vw, 40px)', height: 'clamp(32px, 8vw, 40px)', borderRadius: '50%', background: 'rgba(226,0,16,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#E20010', transition: 'all .3s' }} className="hover:bg-red-600 hover:text-white"><Mail size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 'clamp(12px, 3vw, 14px)', fontWeight: 800, marginBottom: 'clamp(16px, 4vw, 24px)', color: '#fff', letterSpacing: '2px', textTransform: 'uppercase' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 3vw, 16px)' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: 'clamp(12px, 2.5vw, 14px)', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color .3s', display: 'inline-flex', alignItems: 'center', gap: 8 }} className="hover:text-red-500">
                    <span style={{ color: '#E20010', fontSize: 10 }}>▶</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices Section - Responsive layout */}
          <div style={{ gridColumn: 'auto' }}>
            <h4 style={{ fontSize: 'clamp(12px, 3vw, 14px)', fontWeight: 800, marginBottom: 'clamp(16px, 4vw, 24px)', color: '#fff', letterSpacing: '2px', textTransform: 'uppercase' }}>Our Offices</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(24px, 5vw, 40px)' }}>
              {locations.map((location, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(226,0,16,0.25)' }}
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(226,0,16,0.12) 0%, rgba(226,0,16,0.05) 100%)', 
                    padding: 'clamp(28px, 6vw, 45px) clamp(24px, 6vw, 40px)', 
                    borderRadius: 14,
                    border: '1px solid rgba(226,0,16,0.3)',
                    transition: 'all .3s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                  }}
                >
                  {/* Location Header */}
                  <div style={{ marginBottom: 'clamp(20px, 5vw, 32px)', paddingBottom: 'clamp(12px, 3vw, 20px)', borderBottom: '2px solid rgba(226,0,16,0.4)' }}>
                    <h5 style={{ fontSize: 'clamp(14px, 4vw, 16px)', fontWeight: 900, color: '#E20010', margin: 0, letterSpacing: '2px', textTransform: 'uppercase' }}>
                      {location.city}
                    </h5>
                    <p style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', color: 'rgba(255,255,255,0.5)', margin: 'clamp(4px, 1.5vw, 8px) 0 0 0', letterSpacing: '0.5px' }}>
                      {location.country}
                    </p>
                  </div>

                  {/* Address Section */}
                  <div style={{ marginBottom: 'clamp(20px, 5vw, 32px)' }}>
                    <div style={{ display: 'flex', gap: 'clamp(10px, 3vw, 14px)', alignItems: 'flex-start' }}>
                      <div style={{ background: 'rgba(226,0,16,0.2)', padding: 'clamp(6px, 2vw, 10px)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 'clamp(32px, 8vw, 40px)', minHeight: 'clamp(32px, 8vw, 40px)', flexShrink: 0 }}>
                        <MapPin size={16} style={{ color: '#E20010' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 'clamp(9px, 2.5vw, 11px)', color: 'rgba(255,255,255,0.5)', fontWeight: 700, letterSpacing: '1.2px', marginBottom: 'clamp(6px, 2vw, 10px)', textTransform: 'uppercase' }}>Address</div>
                        <div style={{ fontSize: 'clamp(12px, 3vw, 14px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontWeight: 500, marginBottom: 'clamp(8px, 2vw, 12px)' }}>
                          {location.address}
                        </div>
                        <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
                          {location.pobox}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone Section */}
                  <div style={{ marginBottom: 'clamp(20px, 5vw, 32px)' }}>
                    <div style={{ display: 'flex', gap: 'clamp(10px, 3vw, 14px)', alignItems: 'flex-start' }}>
                      <div style={{ background: 'rgba(226,0,16,0.2)', padding: 'clamp(6px, 2vw, 10px)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 'clamp(32px, 8vw, 40px)', minHeight: 'clamp(32px, 8vw, 40px)', flexShrink: 0 }}>
                        <Phone size={16} style={{ color: '#E20010' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 'clamp(9px, 2.5vw, 11px)', color: 'rgba(255,255,255,0.5)', fontWeight: 700, letterSpacing: '1.2px', marginBottom: 'clamp(8px, 2vw, 10px)', textTransform: 'uppercase' }}>Phone</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 1.5vw, 8px)' }}>
                          <a href={`tel:${location.phone.replace(/\s/g, '')}`} style={{ fontSize: 'clamp(12px, 3vw, 14px)', color: '#fff', textDecoration: 'none', fontWeight: 600, transition: 'color .2s' }} className="hover:text-red-400">
                            {location.phone}
                          </a>
                          {location.phone2 && (
                            <a href={`tel:${location.phone2.replace(/\s/g, '')}`} style={{ fontSize: 'clamp(12px, 3vw, 14px)', color: '#fff', textDecoration: 'none', fontWeight: 600, transition: 'color .2s' }} className="hover:text-red-400">
                              {location.phone2}
                            </a>
                          )}
                          <a href={`https://wa.me/${location.gsm.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color .2s' }} className="hover:text-red-400">
                            📱 {location.gsm}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email Section */}
                  <div>
                    <div style={{ display: 'flex', gap: 'clamp(10px, 3vw, 14px)', alignItems: 'flex-start' }}>
                      <div style={{ background: 'rgba(226,0,16,0.2)', padding: 'clamp(6px, 2vw, 10px)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 'clamp(32px, 8vw, 40px)', minHeight: 'clamp(32px, 8vw, 40px)', flexShrink: 0 }}>
                        <Mail size={16} style={{ color: '#E20010' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 'clamp(9px, 2.5vw, 11px)', color: 'rgba(255,255,255,0.5)', fontWeight: 700, letterSpacing: '1.2px', marginBottom: 'clamp(6px, 2vw, 10px)', textTransform: 'uppercase' }}>Email</div>
                        <a href={`mailto:${location.email}`} style={{ fontSize: 'clamp(12px, 3vw, 14px)', color: '#fff', textDecoration: 'none', fontWeight: 600, wordBreak: 'break-all', transition: 'color .2s' }} className="hover:text-red-400">
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
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: 'clamp(20px, 5vw, 32px)' }} />

        {/* Bottom Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'clamp(12px, 3vw, 20px)' }}>
          <div style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>
            © {currentYear} Mactech Building Materials Trading LLC. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 'clamp(12px, 4vw, 24px)', flexWrap: 'wrap' }}>
            <a href="#" style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color .3s' }} className="hover:text-white">Privacy Policy</a>
            <a href="#" style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color .3s' }} className="hover:text-white">Terms of Service</a>
            <a href="#" style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color .3s' }} className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}