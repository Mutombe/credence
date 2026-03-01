import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Phone, Mail, MapPin, ArrowRight, ArrowUpRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

export default function Footer({ onOpenPolicy }) {
  const year = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'House Wiring', path: '/services/house-wiring' },
        { label: 'Solar Installation', path: '/services/solar-installation' },
        { label: 'Line Construction', path: '/services/line-construction' },
        { label: 'Fault Finding', path: '/services/fault-finding' },
        { label: 'Consultancy', path: '/services/electrical-consultancy' },
        { label: 'Material Supply', path: '/services/material-supply' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Projects', path: '/projects' },
        { label: 'Careers', path: '/careers' },
        { label: 'Blog', path: '/blog' },
        { label: 'Contact', path: '/contact' },
        { label: 'Get a Quote', path: '/quote' },
      ],
    },
  ];

  return (
    <footer className="relative bg-credence-black text-white overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-credence-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-credence-blue/5 rounded-full blur-3xl" />

      {/* CTA Band */}
      <div className="relative border-b border-white/10">
        <div className="container-custom py-16 lg:py-20">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <h3 className="font-heading font-extrabold text-3xl lg:text-5xl leading-tight">
                  Ready to <span className="gradient-text">power up</span>
                  <br />your next project?
                </h3>
                <p className="text-white/50 mt-3 text-lg max-w-md">
                  Get a free quotation — just send your plans and we'll handle the rest.
                </p>
              </div>
              <Link
                to="/quote"
                className="group flex items-center gap-4 bg-credence-red text-white px-8 py-5 rounded-2xl font-heading font-bold text-lg hover:bg-credence-red-dark transition-all magnetic-btn shrink-0"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-credence-red flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl">Cred<span className="text-credence-red">ence</span></span>
                <span className="block text-[9px] tracking-[0.2em] uppercase text-white/40 -mt-1">Electrical Engineers</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Zimbabwe's trusted electrical engineering partner. From wiring to solar, we deliver excellence in every connection.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-credence-red hover:border-credence-red transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group, i) => (
            <div key={i}>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white/40 mb-5">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-credence-red transition-colors text-sm flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-3 transition-all duration-300 overflow-hidden">
                        <ArrowRight className="w-3 h-3" />
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white/40 mb-5">Get In Touch</h4>
            <div className="space-y-4">
              <a href="tel:0774852376" className="flex items-center gap-3 text-white/60 hover:text-credence-red transition-colors text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><Phone className="w-4 h-4" /></div>
                077 485 2376
              </a>
              <a href="mailto:Info@credenceelectrical.co.zw" className="flex items-center gap-3 text-white/60 hover:text-credence-red transition-colors text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><Mail className="w-4 h-4" /></div>
                Info@credenceelectrical.co.zw
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0"><MapPin className="w-4 h-4" /></div>
                Harare, Zimbabwe
              </div>
              <a href="https://credenceelectrical.co.zw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/60 hover:text-credence-red transition-colors text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><ArrowUpRight className="w-4 h-4" /></div>
                credenceelectrical.co.zw
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {year} Credence Electrical Engineers (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenPolicy?.('privacy')}
              className="text-white/40 hover:text-credence-red text-sm transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenPolicy?.('cookies')}
              className="text-white/40 hover:text-credence-red text-sm transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
