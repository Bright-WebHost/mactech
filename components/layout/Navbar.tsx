'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { NAV_LINKS, PHONE_MUSCAT, EMAIL, WHATSAPP } from '@/lib/constants'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 w-full flex flex-col">
        {/* Top Bar */}
        <div className="bg-[#0D1B2A] text-sm hidden lg:block">
          <div className="container-custom mx-auto flex items-center justify-between py-2">
            {/* Left side */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-gray-300">Need support? Call or WhatsApp:</span>
              <a href={`tel:${PHONE_MUSCAT.replace(/\s+/g, '')}`} className="text-[#E20010] hover:underline font-medium">
                {PHONE_MUSCAT}
              </a>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white">
                <div className="bg-green-600/20 p-1 rounded-full text-[#25D366]">
                  <FaWhatsapp size={14} />
                </div>
                <span className="font-medium text-[#25D366]">WhatsApp Support</span>
              </div>
              <a 
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-4 py-1.5 rounded-full font-medium hover:bg-[#20bd5a] transition-colors flex items-center gap-1 text-sm"
              >
                WhatsApp Us &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav className={`bg-white transition-all duration-300 ${isScrolled
            ? 'border-b border-gray-200 shadow-md'
            : 'border-b border-gray-100'
          }`}>
          <div className="container-custom flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="MACTECH Building Materials Trading LLC logo"
              width={56}
              height={56}
              className="h-12 w-auto object-contain"
              unoptimized
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors" style={{ background: '#E20010' }}>
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-red-600"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </nav>
    </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden overflow-y-auto bg-white"
          >
            <div className="pt-20 pb-8 px-6">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-lg font-medium text-gray-800 border-b border-gray-200 hover:text-red-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
              <div className="mt-6">
                <Link href="/contact" className="w-full justify-center inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg text-white transition-colors" style={{ background: '#E20010' }} onClick={() => setMobileOpen(false)}>
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
