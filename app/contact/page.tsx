'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react'
import { LOCATIONS, WHATSAPP } from '@/lib/constants'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactPage() {
  const [state, handleSubmit] = useForm('mlgazrrd')
  const [form, setForm] = useState({ name: '', phone: '', email: '', product: '', message: '' })

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
            Connect with our team to discuss your construction supply needs, check availability, or speak with our technical experts. 
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
                {/* Heading forced to white */}
                <h2 className="text-2xl font-bold text-white mb-6">Send an Inquiry</h2>
                
                {state.succeeded ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-white font-bold text-xl mb-2">Inquiry Received!</h3>
                    <p className="text-gray-muted">Our team will contact you within 2 business hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
                      <input required name="name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full bg-navy-800 border border-gray-border/40 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-accent focus:outline-none transition-colors placeholder-gray-muted/50" placeholder="Your name" />
                      <ValidationError field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Phone *</label>
                        <input required type="tel" name="phone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full bg-navy-800 border border-gray-border/40 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-accent focus:outline-none transition-colors placeholder-gray-muted/50" placeholder="+968 XXXX XXXX" />
                        <ValidationError field="phone" errors={state.errors} className="text-red-400 text-xs mt-1" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Email</label>
                        <input type="email" name="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full bg-navy-800 border border-gray-border/40 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-accent focus:outline-none transition-colors placeholder-gray-muted/50" placeholder="your@email.com" />
                        <ValidationError field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Product / Category</label>
                      <select name="product" value={form.product} onChange={e => setForm({...form, product: e.target.value})} className="w-full bg-navy-800 border border-gray-border/40 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-accent focus:outline-none transition-colors">
                        <option value="" className="bg-navy-900">Select a product category...</option>
                        {['Fasteners','PPE & Safety','Welding Consumables','Hand Tools','Power Tools','Lifting Solutions','Pipes & Fittings','Abrasives & Adhesives','Construction Consumables','Other'].map(p => <option key={p} value={p} className="bg-navy-900">{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Message / Requirements *</label>
                      <textarea required name="message" rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full bg-navy-800 border border-gray-border/40 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-accent focus:outline-none transition-colors resize-none placeholder-gray-muted/50" placeholder="Describe your requirements, quantities, specifications..." />
                      <ValidationError field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                    </div>
                    <button type="submit" disabled={state.submitting} className="btn-primary w-full justify-center py-4">
                      {state.submitting ? 'Sending...' : <><Send size={16} className="mr-2" /> Send Inquiry</>}
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

      {/* Google Maps Section */}
      <section className="w-full h-[500px] lg:h-[600px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13236.853924417459!2d58.3602822!3d23.5756279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e0020decb842d%3A0xa099574878fb17ac!2zTUFDVEVDSCBCdWlsZGluZyBNYXRlcmlhbHMgVHJhZGluZyBMTEMgKNmF2YrZgyDYqtmK2YMg2YTYqtis2KfYsdipINmF2YjYp9ivINin2YTYqNmG2KfYoSDYtCDZhSDZhSk!5e1!3m2!1sen!2sin!4v1777524591254!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}