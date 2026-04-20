'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, MapPin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: '#111', color: '#fff', fontFamily: "'Plus Jakarta Sans', sans-serif", position: 'relative' }}>
      
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
              <h3 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 900, marginBottom: 8, color: '#fff', letterSpacing: '-0.5px' }}>Need a Quote?</h3>
              <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: 'rgba(255,255,255,0.9)', margin: 0 }}>Contact us today for custom quotes and technical consultation.</p>
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
              Get Quote <ArrowRight size={18} strokeWidth={3} />
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
              ISO 9001 certified industrial & building materials supplier in Oman. Your trusted partner for fasteners, PPE, welding, tools and more.
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

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 24, color: '#fff', letterSpacing: '2px', textTransform: 'uppercase' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <motion.div whileHover={{ x: 4 }} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(226,0,16,0.1)', padding: 8, borderRadius: 6 }}>
                  <Phone size={16} style={{ color: '#E20010', flexShrink: 0 }} />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', marginBottom: 4 }}>PHONE</div>
                  <a href="tel:+96824218110" style={{ fontSize: 14, color: '#fff', textDecoration: 'none', fontWeight: 600 }} >+968 2421 8110</a>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(226,0,16,0.1)', padding: 8, borderRadius: 6 }}>
                  <MapPin size={16} style={{ color: '#E20010', flexShrink: 0 }} />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', marginBottom: 4 }}>ADDRESS</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>Ghala Industrial Area<br/>Muscat, Oman</div>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(226,0,16,0.1)', padding: 8, borderRadius: 6 }}>
                  <Mail size={16} style={{ color: '#E20010', flexShrink: 0 }} />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', marginBottom: 4 }}>EMAIL</div>
                  <a href="mailto:info@mactechoman.com" style={{ fontSize: 14, color: '#fff', textDecoration: 'none', fontWeight: 600 }}>info@mactechoman.com</a>
                </div>
              </motion.div>
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