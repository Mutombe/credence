import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Zap, CheckCircle2, Phone } from 'lucide-react';
import { services } from '../data/siteData';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);
  const currentIndex = services.findIndex((s) => s.id === id);
  const nextService = services[(currentIndex + 1) % services.length];
  const prevService = services[(currentIndex - 1 + services.length) % services.length];

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-credence-black via-credence-black/70 to-credence-black/30" />
          <div className="absolute inset-0 grain-overlay" />
        </div>
        <div className="container-custom relative z-10 pb-16 pt-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6 text-sm">
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${service.color}30` }}>
                <Icon className="w-8 h-8" style={{ color: service.color }} />
              </div>
              <div>
                <span className="text-credence-red font-heading font-semibold text-sm uppercase tracking-widest">{String(currentIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}</span>
                <h1 className="font-heading font-extrabold text-3xl lg:text-5xl text-white">{service.title}</h1>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <AnimatedSection className="lg:col-span-2">
              <h2 className="font-heading font-bold text-2xl mb-4">Overview</h2>
              <p className="text-credence-gray-dark text-lg leading-relaxed mb-8">{service.longDescription}</p>
              <p className="text-credence-gray-dark leading-relaxed mb-8">
                At Credence Electrical, we approach every {service.shortTitle.toLowerCase()} project with precision engineering and a commitment to safety. Our certified technicians use only the highest quality materials and follow strict compliance protocols to ensure your installation stands the test of time.
              </p>
              <p className="text-credence-gray-dark leading-relaxed mb-8">
                Whether it's a small residential project or a large-scale commercial installation, our team brings the same level of expertise and dedication. We handle everything from initial design and planning through to final commissioning and handover.
              </p>

              <h3 className="font-heading font-bold text-xl mb-4">Our Process</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {['Consultation & Assessment', 'Design & Planning', 'Material Procurement', 'Professional Installation', 'Testing & Commissioning', 'Handover & Support'].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 bg-credence-gray rounded-xl p-4">
                    <span className="w-8 h-8 rounded-lg bg-credence-red text-white flex items-center justify-center font-heading font-bold text-sm shrink-0">
                      {i + 1}
                    </span>
                    <span className="font-medium text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeRight" className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Features card */}
                <div className="bg-credence-gray rounded-2xl p-6">
                  <h3 className="font-heading font-bold text-lg mb-4">What's Included</h3>
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-credence-red shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-credence-black text-white rounded-2xl p-6">
                  <h3 className="font-heading font-bold text-lg mb-2">Get a Free Quote</h3>
                  <p className="text-white/60 text-sm mb-4">Send us your plans for a no-obligation quotation.</p>
                  <Link to="/quote" className="w-full flex items-center justify-center gap-2 bg-credence-red text-white py-3 rounded-xl font-heading font-bold text-sm magnetic-btn">
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:0774852376" className="w-full flex items-center justify-center gap-2 border border-white/20 text-white py-3 rounded-xl font-heading font-semibold text-sm mt-3 hover:bg-white/10 transition-colors">
                    <Phone className="w-4 h-4" /> 077 485 2376
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-gray-100">
        <div className="container-custom grid grid-cols-2">
          <Link to={`/services/${prevService.id}`} className="group py-8 pr-4 border-r border-gray-100 hover:bg-credence-gray/50 transition-colors">
            <span className="text-xs text-credence-gray-dark uppercase tracking-wider">Previous</span>
            <p className="font-heading font-bold text-lg group-hover:text-credence-red transition-colors mt-1">{prevService.shortTitle}</p>
          </Link>
          <Link to={`/services/${nextService.id}`} className="group py-8 pl-4 text-right hover:bg-credence-gray/50 transition-colors">
            <span className="text-xs text-credence-gray-dark uppercase tracking-wider">Next</span>
            <p className="font-heading font-bold text-lg group-hover:text-credence-red transition-colors mt-1">{nextService.shortTitle}</p>
          </Link>
        </div>
      </section>
    </>
  );
}
