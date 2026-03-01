import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, Phone, Mail, ChevronDown, ArrowRight, Zap } from 'lucide-react';
import { navLinks } from '../../data/siteData';
import SearchModal from '../ui/SearchModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Top Bar */}
      <div className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'opacity-0 -translate-y-full' : 'opacity-100'}`}>
        <div className="bg-credence-black/90 backdrop-blur-md text-white/80 text-sm">
          <div className="container-custom flex items-center justify-between py-2">
            <div className="flex items-center gap-6">
              <a href="tel:0774852376" className="flex items-center gap-2 hover:text-credence-red transition-colors">
                <Phone className="w-3.5 h-3.5" /> 077 485 2376
              </a>
              <a href="mailto:Info@credenceelectrical.co.zw" className="flex items-center gap-2 hover:text-credence-red transition-colors">
                <Mail className="w-3.5 h-3.5" /> Info@credenceelectrical.co.zw
              </a>
            </div>
            <p className="font-heading text-xs tracking-widest uppercase">Let There Be Light ⚡</p>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'top-0' : 'lg:top-[36px] top-0'}`}>
        <div className={`transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5' 
            : 'bg-transparent'
        }`}>
          <div className="container-custom flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 relative z-50">
              <div className={`flex items-center gap-2 transition-colors duration-300`}>
                <div className="relative">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${scrolled ? 'bg-credence-red' : 'bg-credence-red'}`}>
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  {/* Animated ring */}
                  <div className="absolute inset-0 rounded-xl border-2 border-credence-red/40 animate-pulse-glow" />
                </div>
                <div>
                  <span className={`font-heading font-extrabold text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-credence-black' : 'text-white'}`}>
                    Cred<span className="text-credence-red">ence</span>
                  </span>
                  <span className={`block text-[9px] tracking-[0.2em] uppercase font-body transition-colors duration-300 -mt-1 ${scrolled ? 'text-credence-gray-dark' : 'text-white/60'}`}>
                    Electrical Engineers
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {navLinks.map((link, i) => (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(i)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.children ? (
                    <button className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      scrolled ? 'text-credence-black hover:text-credence-red hover:bg-gray-50' : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}>
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === i ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        scrolled ? 'text-credence-black hover:text-credence-red hover:bg-gray-50' : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden py-2"
                      >
                        {link.children.map((child, j) => (
                          <Link
                            key={j}
                            to={child.path}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-credence-gray group transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-credence-red/10 flex items-center justify-center group-hover:bg-credence-red/20 transition-colors">
                              <ArrowRight className="w-3.5 h-3.5 text-credence-red" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-credence-black group-hover:text-credence-red transition-colors font-heading">
                                {child.label}
                              </p>
                              <p className="text-xs text-credence-gray-dark">{child.description}</p>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  scrolled ? 'hover:bg-gray-100 text-credence-black' : 'hover:bg-white/10 text-white'
                }`}
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                to="/quote"
                className="hidden md:flex items-center gap-2 bg-credence-red text-white px-5 py-2.5 rounded-xl font-heading font-semibold text-sm hover:bg-credence-red-dark transition-colors magnetic-btn"
              >
                Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 relative z-50 ${
                  mobileOpen ? 'text-white' : scrolled ? 'text-credence-black hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            <div className="absolute inset-0 bg-credence-black" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute inset-0 pt-20 overflow-y-auto"
            >
              <div className="px-6 py-8 space-y-4">
                {navLinks.map((link, i) => (
                  <div key={i}>
                    {link.children ? (
                      <>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === i ? null : i)}
                          className="w-full flex items-center justify-between py-3 text-white font-heading font-semibold text-lg border-b border-white/10"
                        >
                          {link.label}
                          <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === i ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="py-2 pl-4 space-y-1">
                                {link.children.map((child, j) => (
                                  <Link
                                    key={j}
                                    to={child.path}
                                    className="flex items-center gap-3 py-3 text-white/70 hover:text-credence-red transition-colors"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-credence-red" />
                                    <span className="font-medium">{child.label}</span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className="block py-3 text-white font-heading font-semibold text-lg border-b border-white/10"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-6 space-y-4">
                  <Link
                    to="/quote"
                    className="flex items-center justify-center gap-2 bg-credence-red text-white py-4 rounded-xl font-heading font-bold text-lg w-full"
                  >
                    Get Free Quote <ArrowRight className="w-5 h-5" />
                  </Link>
                  <div className="flex flex-col gap-3 pt-4">
                    <a href="tel:0774852376" className="flex items-center gap-2 text-white/60 text-sm">
                      <Phone className="w-4 h-4" /> 077 485 2376
                    </a>
                    <a href="mailto:Info@credenceelectrical.co.zw" className="flex items-center gap-2 text-white/60 text-sm">
                      <Mail className="w-4 h-4" /> Info@credenceelectrical.co.zw
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
