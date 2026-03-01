import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const searchableContent = [
  { title: 'House Wiring & Tubing', path: '/services/house-wiring', section: 'Services', keywords: 'wiring tubing conduit residential house electrical installation' },
  { title: 'Solar System Installation', path: '/services/solar-installation', section: 'Services', keywords: 'solar panels photovoltaic energy sun renewable inverter battery' },
  { title: 'Line Construction', path: '/services/line-construction', section: 'Services', keywords: 'power line overhead underground cable construction poles' },
  { title: 'Fault Finding & Maintenance', path: '/services/fault-finding', section: 'Services', keywords: 'fault finding diagnostic repair maintenance emergency electrical' },
  { title: 'Electrical Consultancy', path: '/services/electrical-consultancy', section: 'Services', keywords: 'consultancy consulting design advisory engineering' },
  { title: 'Material Supply', path: '/services/material-supply', section: 'Services', keywords: 'material supply cables switchgear components equipment' },
  { title: 'Deck Tubing', path: '/services/deck-tubing', section: 'Services', keywords: 'deck tubing outdoor patio garden lighting' },
  { title: 'Commercial & Industrial', path: '/services/commercial-electrical', section: 'Services', keywords: 'commercial industrial factory warehouse 3-phase automation' },
  { title: 'About Credence Electrical', path: '/about', section: 'Company', keywords: 'about us company history mission values team zimbabwe harare' },
  { title: 'Our Team', path: '/about#team', section: 'Company', keywords: 'team engineers staff members experts professionals' },
  { title: 'Our Projects', path: '/projects', section: 'Portfolio', keywords: 'projects portfolio work completed installations case studies' },
  { title: 'Career Opportunities', path: '/careers', section: 'Careers', keywords: 'careers jobs hiring vacancies employment work opportunities' },
  { title: 'Blog & News', path: '/blog', section: 'Resources', keywords: 'blog news articles insights tips electrical solar' },
  { title: 'Contact Us', path: '/contact', section: 'Contact', keywords: 'contact us phone email address location harare get in touch' },
  { title: 'Get a Free Quote', path: '/quote', section: 'Contact', keywords: 'quote quotation estimate pricing cost free consultation' },
  { title: 'Home', path: '/', section: 'Navigation', keywords: 'home main landing page' },
  { title: 'Privacy Policy', path: '/#privacy', section: 'Legal', keywords: 'privacy policy data protection information' },
  { title: 'Cookie Policy', path: '/#cookies', section: 'Legal', keywords: 'cookies cookie policy browser tracking' },
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    return () => setQuery('');
  }, [isOpen]);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q) ||
        item.section.toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[10%] left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-[101]"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                <Search className="w-5 h-5 text-credence-gray-dark" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search pages, services, content..."
                  className="flex-1 text-lg font-body outline-none bg-transparent placeholder:text-gray-400"
                />
                <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {results.length > 0 && (
                <div className="max-h-[50vh] overflow-y-auto py-2">
                  {results.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(item.path)}
                      className="w-full flex items-center justify-between px-5 py-3 hover:bg-credence-gray transition-colors group text-left"
                    >
                      <div>
                        <p className="font-heading font-semibold text-credence-black group-hover:text-credence-red transition-colors">
                          {item.title}
                        </p>
                        <p className="text-sm text-credence-gray-dark">{item.section}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-credence-red group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              )}

              {query.length >= 2 && results.length === 0 && (
                <div className="py-12 text-center">
                  <p className="text-credence-gray-dark">No results found for "{query}"</p>
                  <p className="text-sm text-gray-400 mt-1">Try different keywords</p>
                </div>
              )}

              {query.length < 2 && (
                <div className="py-8 text-center">
                  <p className="text-sm text-gray-400">Start typing to search...</p>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <span className="px-2 py-1 text-xs bg-gray-100 rounded font-mono text-gray-500">ESC</span>
                    <span className="text-xs text-gray-400">to close</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
