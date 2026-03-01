import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Phone } from 'lucide-react';
import { services } from '../data/siteData';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';

export default function ServicesPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <>
      {/* Hero - Angled clip path design */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-credence-black">
          {/* Vision: Wide shot of power infrastructure - lines, pylons, electrical grid at golden hour */}
          <motion.div style={{ y: heroY }} className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1759109391537-ee5aec6f1775?w=1920&q=80"
              alt="Electrical services"
              className="w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-credence-black/80 to-credence-black" />
          <div className="absolute inset-0 mesh-gradient opacity-40" />
        </div>

        <div className="container-custom relative z-10 pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 text-credence-red font-heading font-semibold text-sm uppercase tracking-widest mb-6">
              <Zap className="w-4 h-4" /> Our Solutions
            </span>
            <h1 className="font-heading font-extrabold text-4xl lg:text-6xl text-white leading-tight mb-6">
              Electrical <span className="gradient-text">Solutions</span>
              <br />For Every Need
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Comprehensive electrical engineering services delivered with precision, safety, and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Alternating layout */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom space-y-24">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;
            return (
              <AnimatedSection key={service.id} variant={isEven ? 'fadeLeft' : 'fadeRight'}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:direction-rtl' : ''}`}>
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    {/* Vision: Service-specific imagery - wiring work, solar panels, power lines, etc */}
                    <div className="rounded-3xl overflow-hidden relative group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[350px] lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-credence-black/40 to-transparent" />
                      <div className="absolute top-6 left-6">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center glass" style={{ backgroundColor: `${service.color}20` }}>
                          <Icon className="w-7 h-7" style={{ color: service.color }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <span className="inline-block text-credence-red font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                      {String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                    </span>
                    <h2 className="font-heading font-extrabold text-2xl lg:text-4xl text-credence-black mb-4">
                      {service.title}
                    </h2>
                    <p className="text-credence-gray-dark text-lg leading-relaxed mb-6">
                      {service.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, j) => (
                        <span key={j} className="bg-credence-gray text-credence-black text-sm px-4 py-2 rounded-full font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/services/${service.id}`}
                      className="group inline-flex items-center gap-2 bg-credence-red text-white px-7 py-3.5 rounded-xl font-heading font-bold hover:bg-credence-red-dark transition-colors magnetic-btn"
                    >
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-credence-black relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-heading font-extrabold text-3xl text-white">
                Need a custom <span className="gradient-text">solution</span>?
              </h2>
              <p className="text-white/50 mt-2">Let's discuss your project requirements.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote" className="inline-flex items-center gap-2 bg-credence-red text-white px-8 py-4 rounded-xl font-heading font-bold magnetic-btn">
                Get Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:0774852376" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-heading font-semibold hover:bg-white/10 transition-colors">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
