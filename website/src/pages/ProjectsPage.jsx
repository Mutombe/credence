import React from 'react';
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';
import { projects } from '../data/siteData';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <>
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-credence-black">
          {/* Vision: Dramatic shot of completed project - illuminated building at night */}
          <motion.div style={{ y: heroY }} className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1758545835990-9bddc9cc5d78?w=1920&q=80" alt="Our projects" className="w-full h-full object-cover opacity-20" loading="eager" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-credence-black to-credence-black/60" />
        </div>
        <div className="container-custom relative z-10 pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 text-credence-red font-heading font-semibold text-sm uppercase tracking-widest mb-6">
              <Zap className="w-4 h-4" /> Portfolio
            </span>
            <h1 className="font-heading font-extrabold text-4xl lg:text-6xl text-white mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">Over 500 projects completed across Zimbabwe — each one a testament to our commitment to excellence.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <AnimatedSection className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2.5 rounded-full text-sm font-heading font-semibold transition-all ${filter === cat ? 'bg-credence-red text-white' : 'bg-credence-gray text-credence-gray-dark hover:bg-gray-200'}`}>
                {cat}
              </button>
            ))}
          </AnimatedSection>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }}>
                  <div className="group rounded-3xl overflow-hidden hover-lift bg-white border border-gray-100">
                    <div className="relative overflow-hidden">
                      {/* Vision: Actual completed project photos */}
                      <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-credence-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-credence-red text-xs font-heading font-semibold uppercase tracking-wider">{project.category}</span>
                        <span className="text-credence-gray-dark text-xs">{project.year}</span>
                      </div>
                      <h3 className="font-heading font-bold text-lg group-hover:text-credence-red transition-colors">{project.title}</h3>
                      <p className="text-credence-gray-dark text-sm mt-2">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section id="case-studies" className="py-20 bg-credence-gray">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="font-heading font-extrabold text-3xl text-credence-black mb-4">
              More Projects <span className="gradient-text">Coming Soon</span>
            </h2>
            <p className="text-credence-gray-dark max-w-lg mx-auto">
              We're documenting our latest case studies. Check back soon for in-depth looks at our most impressive projects.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
