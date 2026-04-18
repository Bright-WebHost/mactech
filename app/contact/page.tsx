'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react'
import { LOCATIONS, WHATSAPP } from '@/lib/constants'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', product: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
  }

  return (
    <>
      <section className="relative min-h-[40vh] flex items-center bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-custom relative z-10 py-24">
          <p className="section-eyebrow">Get in Touch</p>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Contact <span className="text-gradient-blue">Mactech Oman</span>
          </h1>
          <p className="text-gray-muted text-lg max-w-xl">
            Request a product quote, check availability, or speak with our technical team. 
            We respond within 2 business hours.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Form - 3 cols */}
            <div className="lg:col-span-3">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send an Inquiry</h2>
                {status === 'sent' ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-white font-bold text-xl mb-2">Inquiry Received!</h3>
                    <p className="text-gray-muted">Our team will contact you within 2 business hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-gray-muted mb-2">Full Name *</label>
                        <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full bg-navy-800 border border-gray-border/40 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-accent focus:outline-none transition-colors placeholder-gray-muted/50" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-muted mb-2">Company</label>
                        <input value={form.company} onChange={e => setForm({...form, company: e.target.value})} className="w-full bg-navy-800 border border-gray-border/40 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-accent focus:outline-none transition-colors placeholder-gray-muted/50" placeholder="Company name" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-gray-muted mb-2">Phone *</label>
                        <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full bg-navy-800 border border-gray-border/40 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-accent focus:outline-none transition-colors placeholder-gray-muted/50" placeholder="+968 XXXX XXXX" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-muted mb-2">Email</label>
                        <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full bg-navy-800 border border-gray-border/40 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-accent focus:outline-none transition-colors placeholder-gray-muted/50" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-muted mb-2">Product / Category</label>
                      <select value={form.product} onChange={e => setForm({...form, product: e.target.value})} className="w-full bg-navy-800 border border-gray-border/40 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-accent focus:outline-none transition-colors">
                        <option value="">Select a product category...</option>
                        {['Fasteners','PPE & Safety','Welding Consumables','Hand Tools','Power Tools','Lifting Solutions','Pipes & Fittings','Abrasives & Adhesives','Construction Consumables','Other'].map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-muted mb-2">Message / Requirements *</label>
                      <textarea required rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full bg-navy-800 border border-gray-border/40 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-accent focus:outline-none transition-colors resize-none placeholder-gray-muted/50" placeholder="Describe your requirements, quantities, specifications..." />
                    </div>
                    <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center py-4">
                      {status === 'sending' ? 'Sending...' : <><Send size={16} /> Send Inquiry</>}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact info - 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="block glass-card p-6 border-green-500/30 hover:border-green-500/60 transition-all bg-green-500/5">
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle className="text-green-400" size={22} />
                  <span className="text-white font-semibold">WhatsApp Us</span>
                </div>
                <p className="text-gray-muted text-sm">Fastest response — chat with us directly on WhatsApp</p>
              </a>

              {LOCATIONS.map((loc) => (
                <div key={loc.city} className="glass-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="text-blue-accent" size={16} />
                    <h3 className="text-white font-semibold">{loc.city}</h3>
                    {loc.primary && <span className="text-xs bg-blue-accent/20 text-blue-accent px-2 py-0.5 rounded-full">Main Branch</span>}
                  </div>
                  <p className="text-gray-muted text-xs mb-3 leading-relaxed">{loc.address}</p>
                  <a href={`tel:${loc.phone}`} className="flex items-center gap-2 text-gray-300 text-sm hover:text-blue-accent transition-colors">
                    <Phone size={13} /> {loc.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
