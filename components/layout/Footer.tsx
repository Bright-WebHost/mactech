'use client'

import Link from 'next/link'
import { ArrowRight, Phone, MapPin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: '#111', color: '#fff', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Main Footer Content */}
      <div style={{ padding: '80px 8vw 40px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 60, marginBottom: 60 }}>
          {/* Company Info */}
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 900, marginBottom: 16, color: '#E20010' }}>Mactech Oman</h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 20 }}>
              ISO 9001 certified industrial & building materials supplier in Oman. Your trusted partner for fasteners, PPE, welding, tools and more.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://wa.me/96897984810" target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(226,0,16,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#E20010', fontSize: 16, transition: 'all .3s' }} className="hover:bg-red-600 hover:text-white">💬</a>
              <a href="tel:+96824218110" style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(226,0,16,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#E20010', transition: 'all .3s' }} className="hover:bg-red-600 hover:text-white"><Phone size={16} /></a>
              <a href="mailto:info@mactechoman.com" style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(226,0,16,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#E20010', transition: 'all .3s' }} className="hover:bg-red-600 hover:text-white"><Mail size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 20, color: '#fff', letterSpacing: '2px', textTransform: 'uppercase' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color .3s', display: 'inline-flex', alignItems: 'center', gap: 6 }} className="hover:text-red-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 20, color: '#fff', letterSpacing: '2px', textTransform: 'uppercase' }}>Our Products</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Fasteners', href: '/products/fasteners' },
                { label: 'Welding Consumables', href: '/products/welding-consumables' },
                { label: 'Safety PPE', href: '/products/ppe-safety' },
                { label: 'Power Tools', href: '/products/power-tools' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color .3s' }} className="hover:text-red-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 20, color: '#fff', letterSpacing: '2px', textTransform: 'uppercase' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <motion.div whileHover={{ x: 4 }} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <Phone size={16} style={{ color: '#E20010', marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', marginBottom: 4 }}>PHONE</div>
                  <a href="tel:+96824218110" style={{ fontSize: 13, color: '#fff', textDecoration: 'none', fontWeight: 600 }} >+968 2421 8110</a>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: '#E20010', marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', marginBottom: 4 }}>ADDRESS</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>Ghala Industrial Area<br/>Muscat, Oman</div>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <Mail size={16} style={{ color: '#E20010', marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', marginBottom: 4 }}>EMAIL</div>
                  <a href="mailto:info@mactechoman.com" style={{ fontSize: 13, color: '#fff', textDecoration: 'none', fontWeight: 600 }}>info@mactechoman.com</a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div whileHover={{ boxShadow: '0 20px 40px rgba(226,0,16,0.2)' }} style={{ background: 'linear-gradient(135deg, #E20010 0%, #ff3b47 100%)', padding: '32px 40px', borderRadius: 12, marginBottom: 40, transition: 'box-shadow .3s' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 250 }}>
              <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 6, color: '#fff' }}>Need a Quote?</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.9)', margin: 0 }}>Contact us today for custom quotes and technical consultation.</p>
            </div>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#E20010', fontWeight: 700, fontSize: 12, padding: '12px 28px', borderRadius: 6, textDecoration: 'none', letterSpacing: '1.5px', textTransform: 'uppercase', transition: 'all .3s', flexShrink: 0 }} className="hover:scale-105 hover:shadow-lg">
              Get Quote <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: 32 }} />

        {/* Bottom Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>
            © {currentYear} Mactech Building Materials Trading LLC. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <a href="#" style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color .3s' }} className="hover:text-white">Privacy Policy</a>
            <a href="#" style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color .3s' }} className="hover:text-white">Terms of Service</a>
            <a href="#" style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color .3s' }} className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}