import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Target, Eye, Heart, Shield, Users, Award, TrendingUp, Linkedin, Mail } from 'lucide-react';
import { team } from '../data/siteData';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';

const timeline = [
  { year: '2009', title: 'Founded in Harare', description: 'Credence Electrical Engineers established with a vision to deliver excellence in electrical engineering across Zimbabwe.' },
  { year: '2012', title: 'Solar Division Launch', description: 'Expanded into renewable energy solutions, becoming one of the first to offer comprehensive solar installation services.' },
  { year: '2016', title: '200th Project Milestone', description: 'Completed our 200th project, spanning residential, commercial, and industrial installations.' },
  { year: '2020', title: 'Nationwide Expansion', description: 'Extended operations beyond Harare to serve clients across all provinces of Zimbabwe.' },
  { year: '2023', title: '500+ Projects Completed', description: 'Reached a landmark 500 completed projects with a 98% client satisfaction rate.' },
  { year: '2026', title: 'Innovation Forward', description: 'Investing in smart electrical solutions and sustainable energy technologies for the future.' },
];

const values = [
  { icon: Shield, title: 'Safety First', description: 'Every project begins and ends with safety. We maintain zero-tolerance for shortcuts.' },
  { icon: Award, title: 'Excellence', description: 'We don\'t just meet standards — we set them. Quality is embedded in everything we do.' },
  { icon: Heart, title: 'Integrity', description: 'Honest pricing, transparent communication, and ethical business practices always.' },
  { icon: TrendingUp, title: 'Innovation', description: 'Embracing new technologies and methods to deliver cutting-edge electrical solutions.' },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-credence-black">
          {/* Vision: Aerial shot of electrical infrastructure or team working on a large project */}
          <motion.div style={{ y: heroY }} className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1769523147596-09bc6974e113?w=1920&q=80"
              alt="About Credence Electrical"
              className="w-full h-full object-cover opacity-25"
              loading="eager"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-credence-black via-credence-black/90 to-credence-black/70" />
          <div className="absolute inset-0 grain-overlay" />
        </div>

        <div className="container-custom relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-credence-red font-heading font-semibold text-sm uppercase tracking-widest mb-6">
              <Zap className="w-4 h-4" /> About Credence
            </span>
            <h1 className="font-heading font-extrabold text-4xl lg:text-6xl text-white leading-tight mb-6">
              Engineering <span className="gradient-text">Zimbabwe's</span>
              <br />Electrical Future
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              For over 15 years, we've been the trusted hands behind Zimbabwe's electrical infrastructure — powering homes, businesses, and communities with unwavering dedication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section - Split layout */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <AnimatedSection variant="fadeLeft" className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 text-credence-red font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                <span className="w-8 h-[2px] bg-credence-red" /> Our Story
              </span>
              <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-credence-black mb-6">
                From Humble Beginnings to Industry Leaders
              </h2>
              <div className="space-y-4 text-credence-gray-dark leading-relaxed">
                <p>
                  Credence Electrical Engineers was born from a simple belief: every Zimbabwean deserves access to safe, reliable, and professionally installed electrical systems. Founded in 2009 in Harare, we started with a small team and a big vision.
                </p>
                <p>
                  Today, we are one of Zimbabwe's most trusted electrical engineering firms, with over 500 completed projects spanning residential homes, commercial complexes, industrial facilities, and solar energy installations. Our team of 50+ certified engineers and technicians brings decades of combined experience to every project.
                </p>
                <p>
                  What sets us apart is our commitment to doing things right — every wire, every connection, every system is installed to the highest standards. Because when it comes to electricity, there's no room for compromise.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeRight" className="lg:col-span-2">
              <div className="relative">
                {/* Vision: Professional portrait of company founder or team in branded gear */}
                <div className="rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1602652897853-c0d370f7cc7a?w=600&q=80"
                    alt="Credence Electrical leadership"
                    className="w-full h-[450px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-credence-red text-white rounded-2xl p-6 shadow-xl">
                  <p className="font-heading font-extrabold text-2xl">"Let There Be Light"</p>
                  <p className="text-white/70 text-sm mt-1">— Our founding motto</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 bg-credence-black relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection variant="fadeLeft">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10 h-full">
                <div className="w-14 h-14 rounded-xl bg-credence-red/20 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-credence-red" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">Our Mission</h3>
                <p className="text-white/60 leading-relaxed">
                  To deliver safe, reliable, and innovative electrical engineering solutions that empower Zimbabwe's homes, businesses, and infrastructure — while maintaining the highest standards of quality, safety, and customer satisfaction.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fadeRight">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10 h-full">
                <div className="w-14 h-14 rounded-xl bg-credence-yellow/20 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-credence-yellow" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">Our Vision</h3>
                <p className="text-white/60 leading-relaxed">
                  To be the most trusted and innovative electrical engineering firm in Southern Africa, leading the transition to sustainable energy solutions and setting the benchmark for excellence in the industry.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-credence-red font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              <span className="w-8 h-[2px] bg-credence-red" /> Core Values <span className="w-8 h-[2px] bg-credence-red" />
            </span>
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-credence-black">
              What Drives <span className="gradient-text">Us</span>
            </h2>
          </AnimatedSection>
          <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={i}>
                  <div className="text-center p-8 rounded-2xl bg-credence-gray hover-lift">
                    <div className="w-16 h-16 rounded-2xl bg-credence-red/10 flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-8 h-8 text-credence-red" />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-credence-gray-dark text-sm leading-relaxed">{value.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-credence-gray">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-credence-black">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-credence-red/20" />
            {timeline.map((item, i) => (
              <AnimatedSection key={i} variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'} delay={i * 0.1}>
                <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-credence-red border-4 border-white z-10" />
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="text-credence-red font-heading font-extrabold text-xl">{item.year}</span>
                    <h3 className="font-heading font-bold text-lg text-credence-black mt-1">{item.title}</h3>
                    <p className="text-credence-gray-dark text-sm mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-credence-red font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              <span className="w-8 h-[2px] bg-credence-red" /> Our Team <span className="w-8 h-[2px] bg-credence-red" />
            </span>
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-credence-black">
              Meet the <span className="gradient-text">Experts</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <StaggerItem key={i}>
                <div className="group hover-lift">
                  {/* Vision: Professional headshots of team members */}
                  <div className="relative rounded-2xl overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-credence-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <div className="flex gap-2">
                        <a href="#" className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-credence-red transition-colors">
                          <Linkedin className="w-4 h-4 text-white" />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-credence-red transition-colors">
                          <Mail className="w-4 h-4 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg">{member.name}</h3>
                  <p className="text-credence-red text-sm font-semibold">{member.role}</p>
                  <p className="text-credence-gray-dark text-sm mt-2">{member.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-credence-red relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-white mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-white/80 max-w-lg mx-auto mb-8">
              We're always looking for talented engineers and technicians to join the Credence family.
            </p>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 bg-white text-credence-red px-8 py-4 rounded-xl font-heading font-bold hover:bg-gray-100 transition-colors magnetic-btn"
            >
              View Careers <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
