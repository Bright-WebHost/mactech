'use client'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP } from '@/lib/constants'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP}?text=Hello%20Mactech%2C%20I%27d%20like%20to%20inquire%20about%20your%20products.`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <MessageCircle size={26} className="text-white" />
      </motion.div>
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
    </motion.a>
  )
}
