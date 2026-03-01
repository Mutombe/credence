import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Phone, Mail, MapPin, Clock, Send, ArrowUpRight, Zap, MessageSquare } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success('Message sent successfully! We will get back to you within 24 hours.');
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
      setSending(false);
    }, 1500);
  };

  const contactInfo = [
    { icon: Phone, label: 'Call Us', value: '077 485 2376', href: 'tel:0774852376', description: 'Mon-Fri, 7am-6pm' },
    { icon: Mail, label: 'Email Us', value: 'Info@credenceelectrical.co.zw', href: 'mailto:Info@credenceelectrical.co.zw', description: 'We reply within 24 hours' },
    { icon: MapPin, label: 'Visit Us', value: 'Harare, Zimbabwe', href: '#', description: 'By appointment' },
    { icon: Clock, label: 'Working Hours', value: 'Mon - Sat: 7AM - 6PM', href: '#', description: 'Emergency: 24/7' },
  ];

  return (
    <>
      {/* Hero - Full width split */}
      <section className="relative min-h-[50vh] flex items-center bg-credence-black overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="container-custom relative z-10 pt-32 pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 text-credence-red font-heading font-semibold text-sm uppercase tracking-widest mb-6">
              <MessageSquare className="w-4 h-4" /> Get In Touch
            </span>
            <h1 className="font-heading font-extrabold text-4xl lg:text-6xl text-white mb-6">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Whether you need a quotation, have a question, or want to discuss a project — we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-10">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <a href={item.href} className="block bg-white rounded-2xl p-6 shadow-xl shadow-black/5 border border-gray-100 hover-lift group">
                    <div className="w-12 h-12 rounded-xl bg-credence-red/10 flex items-center justify-center mb-4 group-hover:bg-credence-red/20 transition-colors">
                      <Icon className="w-6 h-6 text-credence-red" />
                    </div>
                    <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-credence-gray-dark mb-1">{item.label}</h3>
                    <p className="font-semibold text-credence-black group-hover:text-credence-red transition-colors text-sm">{item.value}</p>
                    <p className="text-xs text-credence-gray-dark mt-1">{item.description}</p>
                  </a>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            <AnimatedSection variant="fadeLeft" className="lg:col-span-3">
              <h2 className="font-heading font-extrabold text-2xl lg:text-3xl mb-2">Send Us a Message</h2>
              <p className="text-credence-gray-dark mb-8">Fill out the form and we'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2 font-heading">Full Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-credence-red focus:ring-2 focus:ring-credence-red/20 outline-none transition-all text-sm" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 font-heading">Email *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-credence-red focus:ring-2 focus:ring-credence-red/20 outline-none transition-all text-sm" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2 font-heading">Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-credence-red focus:ring-2 focus:ring-credence-red/20 outline-none transition-all text-sm" placeholder="077 XXX XXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 font-heading">Service Interest</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-credence-red focus:ring-2 focus:ring-credence-red/20 outline-none transition-all text-sm bg-white">
                      <option value="">Select a service</option>
                      <option>House Wiring & Tubing</option>
                      <option>Solar Installation</option>
                      <option>Line Construction</option>
                      <option>Fault Finding</option>
                      <option>Consultancy</option>
                      <option>Material Supply</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 font-heading">Message *</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-credence-red focus:ring-2 focus:ring-credence-red/20 outline-none transition-all text-sm resize-none" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" disabled={sending} className="inline-flex items-center gap-2 bg-credence-red text-white px-8 py-4 rounded-xl font-heading font-bold hover:bg-credence-red-dark transition-colors disabled:opacity-60 magnetic-btn">
                  {sending ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection variant="fadeRight" className="lg:col-span-2">
              <div className="sticky top-28">
                {/* Map placeholder */}
                {/* Vision: Google Maps embed of Harare office location */}
                <div className="rounded-2xl overflow-hidden h-80 bg-credence-gray flex items-center justify-center mb-6 border border-gray-200">
                  <div className="text-center p-8">
                    <MapPin className="w-10 h-10 text-credence-red mx-auto mb-3" />
                    <p className="font-heading font-bold text-lg">Harare, Zimbabwe</p>
                    <p className="text-credence-gray-dark text-sm mt-1">Credence Electrical Engineers</p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-credence-red text-sm font-semibold mt-3">
                      Open in Maps <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="bg-credence-black text-white rounded-2xl p-6">
                  <h3 className="font-heading font-bold text-lg mb-3">Emergency Callout</h3>
                  <p className="text-white/60 text-sm mb-4">Electrical emergency? Our team is available 24/7 for urgent fault finding and repairs.</p>
                  <a href="tel:0774852376" className="flex items-center justify-center gap-2 bg-credence-red text-white py-3 rounded-xl font-heading font-bold text-sm w-full magnetic-btn">
                    <Phone className="w-4 h-4" /> Call Emergency Line
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
