import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Play, Zap, Sun, Home, Cable, Search, Wrench, Lightbulb, ChevronDown, ChevronRight, Star, Quote, Phone, CheckCircle2, Shield, Clock, Award, Users } from 'lucide-react';
import { services, stats, testimonials, projects, faqs } from '../data/siteData';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';

/* ─── HERO SECTION ─── */
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-credence-black">
        {/* Vision: Dark industrial electrical background with dramatic lighting - switchgear room or power infrastructure at night */}
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1685720543547-cc4873188c75?w=1920&q=80"
            alt="Electrical engineering"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
        </motion.div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-credence-black via-credence-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-credence-black via-transparent to-credence-black/50" />
        {/* Animated mesh */}
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        {/* Grain texture */}
        <div className="absolute inset-0 grain-overlay" />
      </div>

      {/* Geometric decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 border border-credence-red/10 rounded-full animate-rotate-slow hidden lg:block" />
      <div className="absolute bottom-20 right-1/4 w-48 h-48 border border-white/5 rounded-full animate-rotate-slow hidden lg:block" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-credence-red rounded-full animate-pulse-glow hidden lg:block" />
      <div className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-credence-yellow rounded-full animate-float hidden lg:block" />

      {/* Content */}
      <motion.div style={{ opacity, scale }} className="relative z-10 container-custom pt-32 pb-20 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/80 text-sm font-medium">Zimbabwe's Premier Electrical Engineers</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.05] mb-6"
            >
              Let There
              <br />
              Be <span className="gradient-text">Light</span>
              <span className="inline-block w-3 h-3 bg-credence-red rounded-full ml-2 animate-pulse-glow" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/60 text-lg lg:text-xl max-w-xl mb-8 leading-relaxed font-light"
            >
              From house wiring to solar installations, from line construction to electrical consultancy — we engineer the power that drives Zimbabwe forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/quote"
                className="group inline-flex items-center justify-center gap-3 bg-credence-red text-white px-8 py-4 rounded-xl font-heading font-bold text-base hover:bg-credence-red-dark transition-all magnetic-btn"
              >
                Get Free Quotation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 rounded-xl font-heading font-semibold text-base hover:bg-white/10 transition-all"
              >
                Our Services
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10"
            >
              {[
                { icon: Shield, label: 'Licensed & Insured' },
                { icon: Clock, label: 'Since 2009' },
                { icon: Award, label: '500+ Projects' },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex items-center gap-2 text-white/50 text-sm">
                  <Icon className="w-4 h-4 text-credence-red" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - floating stats card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main image card */}
              {/* Vision: An electrician in professional gear working on a modern switchboard or solar panel */}
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1771591123716-e678d551c9e6?w=700&q=80"
                  alt="Credence Electrical team at work"
                  className="w-full h-[500px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-credence-black/80 via-transparent to-transparent rounded-3xl" />
              </div>

              {/* Floating stat card 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-8 top-1/4 bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-credence-red/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-credence-red" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-extrabold text-white">500+</p>
                    <p className="text-white/60 text-sm">Projects Done</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat card 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 bottom-1/4 bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-credence-yellow/20 flex items-center justify-center">
                    <Sun className="w-6 h-6 text-credence-yellow" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-extrabold text-white">98%</p>
                    <p className="text-white/60 text-sm">Satisfaction</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase font-heading">Scroll</span>
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── MARQUEE BAND ─── */
function MarqueeBand() {
  const items = ['Electrical Engineering', 'Solar Installation', 'House Wiring', 'Line Construction', 'Fault Finding', 'Consultancy', 'Material Supply'];
  return (
    <div className="bg-credence-red py-4 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-white font-heading font-bold text-sm uppercase tracking-widest flex items-center gap-3">
            <Zap className="w-4 h-4" /> {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── SERVICES SECTION ─── */
function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-credence-red/3 rounded-full blur-3xl" />
      <div className="container-custom relative">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-credence-red font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-[2px] bg-credence-red" /> What We Do <span className="w-8 h-[2px] bg-credence-red" />
          </span>
          <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-credence-black mb-4">
            Comprehensive Electrical <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-credence-gray-dark max-w-2xl mx-auto text-lg">
            From residential to industrial, we deliver world-class electrical services across Zimbabwe.
          </p>
        </AnimatedSection>

        <StaggerContainer staggerDelay={0.08} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 8).map((service, i) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <Link
                  to={`/services/${service.id}`}
                  className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-credence-red/20 hover-lift relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-credence-red/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-credence-red transition-colors">
                    {service.shortTitle}
                  </h3>
                  <p className="text-credence-gray-dark text-sm leading-relaxed line-clamp-3 mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-credence-red text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection delay={0.3} className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-credence-black text-white px-8 py-4 rounded-xl font-heading font-bold hover:bg-credence-dark transition-colors magnetic-btn"
          >
            View All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── ABOUT PREVIEW ─── */
function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 bg-credence-gray relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <svg className="absolute top-0 right-0 w-[600px] h-[600px] text-credence-red/5" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" stroke="currentColor" fill="none" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" fill="none" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="40" stroke="currentColor" fill="none" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Stack */}
          <AnimatedSection variant="fadeLeft">
            <div className="relative">
              {/* Vision: Professional team photo in front of electrical equipment / job site */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1622611935038-1c4caa0db5d2?w=700&q=80"
                  alt="Credence team working on electrical project"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              {/* Overlapping secondary image */}
              {/* Vision: Close-up of hands working on wiring or a solar panel installation */}
              <div className="absolute -bottom-8 -right-4 lg:-right-8 w-48 lg:w-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=400&q=80"
                  alt="Solar panel installation"
                  className="w-full h-36 lg:h-44 object-cover"
                  loading="lazy"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -top-4 -left-4 lg:-left-8 bg-credence-red text-white rounded-2xl p-5 shadow-xl">
                <p className="font-heading font-extrabold text-3xl">15+</p>
                <p className="text-sm text-white/80">Years</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection variant="fadeRight">
            <span className="inline-flex items-center gap-2 text-credence-red font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              <span className="w-8 h-[2px] bg-credence-red" /> About Us
            </span>
            <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-credence-black mb-6 leading-tight">
              Powering Zimbabwe with <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-credence-gray-dark text-lg leading-relaxed mb-6">
              Credence Electrical Engineers is a leading electrical engineering firm delivering exceptional quality across residential, commercial, and industrial projects. With over 15 years of experience, we've illuminated homes, powered industries, and connected communities across Zimbabwe.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: CheckCircle2, text: 'Fully Licensed & Certified' },
                { icon: Users, text: '50+ Expert Engineers' },
                { icon: Shield, text: 'Safety-First Approach' },
                { icon: Award, text: 'Award-Winning Service' },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-credence-red shrink-0" />
                  <span className="text-credence-black font-medium text-sm">{text}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 bg-credence-black text-white px-7 py-3.5 rounded-xl font-heading font-bold hover:bg-credence-dark transition-colors magnetic-btn"
            >
              Discover Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── STATS COUNTER ─── */
function StatsCounter() {
  return (
    <section className="relative py-20 bg-credence-black overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="absolute inset-0 grain-overlay" />

      <div className="container-custom relative z-10">
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StaggerItem key={i} className="text-center">
              <CountUp target={stat.number} suffix={stat.suffix} />
              <p className="text-white/50 text-sm font-medium mt-2 uppercase tracking-wider">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function CountUp({ target, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const num = parseInt(target.replace(/\D/g, ''));

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(num / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, num]);

  return (
    <div ref={ref}>
      <span className="font-heading font-extrabold text-4xl lg:text-6xl text-white">
        {count}{target.includes('+') ? '+' : ''}{suffix}
      </span>
    </div>
  );
}

/* ─── PROJECTS SHOWCASE ─── */
function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Residential', 'Solar', 'Commercial', 'Infrastructure', 'Industrial'];
  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-credence-red font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-[2px] bg-credence-red" /> Our Portfolio <span className="w-8 h-[2px] bg-credence-red" />
          </span>
          <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-credence-black mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-heading font-semibold transition-all ${
                activeFilter === cat
                  ? 'bg-credence-red text-white'
                  : 'bg-credence-gray text-credence-gray-dark hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Project Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Link to="/projects" className="group block relative rounded-2xl overflow-hidden hover-lift">
                  {/* Vision: Actual project photos - completed installations, solar arrays, power lines */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-credence-black via-credence-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-credence-red/90 text-white text-xs font-heading font-semibold px-3 py-1 rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-white mb-1">{project.title}</h3>
                    <p className="text-white/60 text-sm">{project.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatedSection delay={0.3} className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 border-2 border-credence-black text-credence-black px-8 py-4 rounded-xl font-heading font-bold hover:bg-credence-black hover:text-white transition-all"
          >
            View All Projects <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-credence-black relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-credence-red/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-credence-red font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-[2px] bg-credence-red" /> Testimonials <span className="w-8 h-[2px] bg-credence-red" />
          </span>
          <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-white">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <Quote className="w-12 h-12 text-credence-red/30 mx-auto mb-6" />
              <p className="text-white/80 text-xl lg:text-2xl leading-relaxed font-light mb-8 italic">
                "{testimonials[active].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-credence-red/30"
                  loading="lazy"
                />
                <div className="text-left">
                  <p className="text-white font-heading font-bold">{testimonials[active].name}</p>
                  <p className="text-white/50 text-sm">{testimonials[active].role}, {testimonials[active].company}</p>
                </div>
              </div>
              <div className="flex justify-center gap-1 mt-4">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-credence-yellow fill-credence-yellow" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === active ? 'bg-credence-red w-8' : 'bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ SECTION ─── */
function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 lg:py-32 bg-credence-gray relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection variant="fadeLeft">
            <span className="inline-flex items-center gap-2 text-credence-red font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              <span className="w-8 h-[2px] bg-credence-red" /> FAQ
            </span>
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-credence-black mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-credence-gray-dark text-lg mb-8">
              Everything you need to know about our services. Can't find what you're looking for? Contact us directly.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-credence-red font-heading font-semibold hover:gap-3 transition-all">
              <Phone className="w-4 h-4" /> Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <AnimatedSection variant="fadeRight">
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-xl overflow-hidden transition-all ${open === i ? 'shadow-lg' : 'shadow-sm'}`}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-heading font-semibold text-credence-black pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-credence-red shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-credence-gray-dark leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── HOME PAGE ─── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeBand />
      <ServicesSection />
      <AboutPreview />
      <StatsCounter />
      <ProjectsShowcase />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
