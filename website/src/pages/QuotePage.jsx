import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Send, FileText, Phone, CheckCircle2, Zap, ArrowRight, Upload } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    serviceType: '', projectType: '', location: '', timeline: '',
    budget: '', description: '', plans: false,
  });

  const serviceTypes = ['House Wiring & Tubing', 'Solar Installation', 'Line Construction', 'Fault Finding & Repair', 'Electrical Consultancy', 'Material Supply', 'Deck Tubing', 'Commercial & Industrial', 'Other'];
  const projectTypes = ['New Build', 'Renovation', 'Repair / Maintenance', 'Upgrade', 'Inspection', 'Other'];
  const timelines = ['Urgent (ASAP)', 'Within 1 Month', '1-3 Months', '3-6 Months', 'Flexible'];
  const budgets = ['Under $500', '$500 - $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000+', 'Need Guidance'];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Quote request submitted successfully! Our team will contact you within 24 hours with a detailed quotation.');
  };

  return (
    <>
      {/* Hero - Distinctive split design */}
      <section className="relative min-h-[45vh] flex items-center bg-credence-red overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="absolute right-0 top-0 w-1/3 h-full bg-credence-black/20 hidden lg:block" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }} />
        <div className="container-custom relative z-10 pt-32 pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 text-white/80 font-heading font-semibold text-sm uppercase tracking-widest mb-6">
              <FileText className="w-4 h-4" /> Free Quotation
            </span>
            <h1 className="font-heading font-extrabold text-4xl lg:text-6xl text-white mb-6">
              Get Your Free <br />Quote Today
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              Send us your project details or building plans and receive a comprehensive, no-obligation quotation within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom max-w-4xl">
          {/* Progress */}
          <AnimatedSection className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm transition-all ${step >= s ? 'bg-credence-red text-white' : 'bg-credence-gray text-credence-gray-dark'}`}>
                    {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                  </div>
                  {s < 3 && <div className={`w-12 sm:w-20 h-0.5 transition-colors ${step > s ? 'bg-credence-red' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>
            <div className="text-center">
              <h2 className="font-heading font-bold text-xl">
                {step === 1 ? 'Your Details' : step === 2 ? 'Project Information' : 'Additional Details'}
              </h2>
              <p className="text-credence-gray-dark text-sm mt-1">Step {step} of 3</p>
            </div>
          </AnimatedSection>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
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
                    <label className="block text-sm font-semibold mb-2 font-heading">Phone *</label>
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-credence-red focus:ring-2 focus:ring-credence-red/20 outline-none transition-all text-sm" placeholder="077 XXX XXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 font-heading">Company (Optional)</label>
                    <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-credence-red focus:ring-2 focus:ring-credence-red/20 outline-none transition-all text-sm" placeholder="Company name" />
                  </div>
                </div>
                <div className="flex justify-end pt-4">
                  <button type="button" onClick={() => setStep(2)} className="inline-flex items-center gap-2 bg-credence-red text-white px-8 py-3.5 rounded-xl font-heading font-bold magnetic-btn">
                    Next Step <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Project Info */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2 font-heading">Service Type *</label>
                  <div className="grid sm:grid-cols-3 gap-2">
                    {serviceTypes.map((s) => (
                      <button key={s} type="button" onClick={() => setForm({ ...form, serviceType: s })} className={`px-4 py-3 rounded-xl text-sm font-medium transition-all border ${form.serviceType === s ? 'bg-credence-red text-white border-credence-red' : 'bg-white border-gray-200 hover:border-credence-red/50'}`}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2 font-heading">Project Type</label>
                    <select value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-credence-red outline-none text-sm bg-white">
                      <option value="">Select...</option>
                      {projectTypes.map((p) => <option key={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 font-heading">Location</label>
                    <input type="text" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-credence-red outline-none text-sm" placeholder="e.g., Borrowdale, Harare" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2 font-heading">Timeline</label>
                    <select value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-credence-red outline-none text-sm bg-white">
                      <option value="">Select...</option>
                      {timelines.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 font-heading">Budget Range</label>
                    <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-credence-red outline-none text-sm bg-white">
                      <option value="">Select...</option>
                      {budgets.map((b) => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <button type="button" onClick={() => setStep(1)} className="px-6 py-3.5 rounded-xl font-heading font-semibold text-sm border border-gray-200 hover:bg-gray-50 transition-colors">
                    Back
                  </button>
                  <button type="button" onClick={() => setStep(3)} className="inline-flex items-center gap-2 bg-credence-red text-white px-8 py-3.5 rounded-xl font-heading font-bold magnetic-btn">
                    Next Step <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Details */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2 font-heading">Project Description *</label>
                  <textarea required rows={6} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-credence-red focus:ring-2 focus:ring-credence-red/20 outline-none text-sm resize-none" placeholder="Describe your project in detail. Include dimensions, room count, or any specific requirements..." />
                </div>
                <div className="bg-credence-gray rounded-2xl p-6 border-2 border-dashed border-gray-300 text-center">
                  <Upload className="w-8 h-8 text-credence-gray-dark mx-auto mb-2" />
                  <p className="font-heading font-semibold text-sm mb-1">Upload Building Plans (Optional)</p>
                  <p className="text-credence-gray-dark text-xs">Send your plans to Info@credenceelectrical.co.zw for the most accurate quote</p>
                </div>
                <div className="flex justify-between pt-4">
                  <button type="button" onClick={() => setStep(2)} className="px-6 py-3.5 rounded-xl font-heading font-semibold text-sm border border-gray-200 hover:bg-gray-50 transition-colors">
                    Back
                  </button>
                  <button type="submit" className="inline-flex items-center gap-2 bg-credence-red text-white px-8 py-3.5 rounded-xl font-heading font-bold magnetic-btn">
                    Submit Quote Request <Send className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </form>

          {/* Contact alternative */}
          <div className="mt-12 text-center bg-credence-gray rounded-2xl p-8">
            <p className="text-credence-gray-dark mb-2">Prefer to talk to someone?</p>
            <a href="tel:0774852376" className="inline-flex items-center gap-2 text-credence-red font-heading font-bold text-lg">
              <Phone className="w-5 h-5" /> 077 485 2376
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
