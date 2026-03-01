import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { Briefcase, MapPin, Clock, ChevronDown, Send, Users, Heart, TrendingUp, Zap, ArrowRight } from 'lucide-react';
import { careers } from '../data/siteData';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';

const benefits = [
  { icon: TrendingUp, title: 'Growth', description: 'Career advancement and training opportunities' },
  { icon: Users, title: 'Team Culture', description: 'Collaborative and supportive environment' },
  { icon: Heart, title: 'Benefits', description: 'Competitive salary and health coverage' },
  { icon: Briefcase, title: 'Experience', description: 'Work on diverse, challenging projects' },
];

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState(null);
  const [applying, setApplying] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleApply = (e, jobId) => {
    e.preventDefault();
    toast.success('Application submitted! We will review and contact you soon.');
    setApplying(null);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center bg-credence-black overflow-hidden">
        <div className="absolute inset-0">
          {/* Vision: Team of electricians working together on a project, camaraderie */}
          <img src="https://images.unsplash.com/photo-1768158988512-ad31657fe5b8?w=1920&q=80" alt="Careers" className="w-full h-full object-cover opacity-15" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-credence-black to-credence-black/80" />
          <div className="absolute inset-0 mesh-gradient opacity-30" />
          <div className="absolute inset-0 grain-overlay" />
        </div>
        <div className="container-custom relative z-10 pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 text-credence-red font-heading font-semibold text-sm uppercase tracking-widest mb-6">
              <Briefcase className="w-4 h-4" /> Careers
            </span>
            <h1 className="font-heading font-extrabold text-4xl lg:text-6xl text-white mb-6">
              Build Your <span className="gradient-text">Future</span> With Us
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Join Zimbabwe's leading electrical engineering team and power the next generation of infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-custom">
          <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-16 relative z-10">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <StaggerItem key={i}>
                  <div className="bg-white rounded-2xl p-6 shadow-xl shadow-black/5 border border-gray-100 text-center hover-lift">
                    <div className="w-14 h-14 rounded-xl bg-credence-red/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-credence-red" />
                    </div>
                    <h3 className="font-heading font-bold mb-1">{b.title}</h3>
                    <p className="text-credence-gray-dark text-sm">{b.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 lg:py-28 bg-credence-gray">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl mb-2">Open Positions</h2>
            <p className="text-credence-gray-dark">Current opportunities to join the Credence team</p>
          </AnimatedSection>

          <div className="space-y-4">
            {careers.map((job) => (
              <AnimatedSection key={job.id}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <button onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)} className="w-full p-6 flex items-center justify-between text-left">
                    <div>
                      <h3 className="font-heading font-bold text-xl">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-credence-gray-dark">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {job.type}</span>
                        <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {job.department}</span>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-credence-gray-dark transition-transform ${expandedJob === job.id ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {expandedJob === job.id && (
                      <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                        <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                          <p className="text-credence-gray-dark mb-4">{job.description}</p>
                          <h4 className="font-heading font-semibold text-sm mb-2">Requirements:</h4>
                          <ul className="space-y-1 mb-6">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-credence-gray-dark">
                                <div className="w-1.5 h-1.5 rounded-full bg-credence-red" /> {req}
                              </li>
                            ))}
                          </ul>

                          {applying === job.id ? (
                            <form onSubmit={(e) => handleApply(e, job.id)} className="space-y-4 bg-credence-gray rounded-xl p-5">
                              <div className="grid sm:grid-cols-2 gap-4">
                                <input type="text" required placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-credence-red text-sm" />
                                <input type="email" required placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-credence-red text-sm" />
                              </div>
                              <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-credence-red text-sm" />
                              <textarea rows={3} placeholder="Tell us about yourself..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-credence-red text-sm resize-none" />
                              <div className="flex gap-3">
                                <button type="submit" className="bg-credence-red text-white px-6 py-2.5 rounded-xl font-heading font-bold text-sm magnetic-btn flex items-center gap-2">
                                  Submit <Send className="w-4 h-4" />
                                </button>
                                <button type="button" onClick={() => setApplying(null)} className="px-6 py-2.5 rounded-xl font-heading font-semibold text-sm border border-gray-200 hover:bg-gray-50 transition-colors">
                                  Cancel
                                </button>
                              </div>
                            </form>
                          ) : (
                            <button onClick={() => setApplying(job.id)} className="inline-flex items-center gap-2 bg-credence-red text-white px-6 py-3 rounded-xl font-heading font-bold text-sm magnetic-btn">
                              Apply Now <ArrowRight className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12 bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-credence-gray-dark mb-2">Don't see a role that fits?</p>
            <p className="font-heading font-bold text-lg mb-4">Send us your CV anyway — we're always looking for talent.</p>
            <a href="mailto:Info@credenceelectrical.co.zw" className="text-credence-red font-heading font-semibold hover:underline">
              Info@credenceelectrical.co.zw
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
