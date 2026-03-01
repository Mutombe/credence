import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Shield, ChevronRight } from 'lucide-react';

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const accepted = localStorage.getItem('credence-cookies');
      if (!accepted) setShow(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const accept = () => {
    localStorage.setItem('credence-cookies', 'accepted');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50"
        >
          <div className="bg-credence-black text-white rounded-2xl p-6 shadow-2xl border border-white/10">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-credence-red/20 rounded-lg shrink-0">
                <Cookie className="w-5 h-5 text-credence-red" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg">Cookie Notice</h4>
                <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                  We use cookies to enhance your browsing experience and analyze site traffic. By continuing, you agree to our use of cookies.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={accept}
                className="flex-1 bg-credence-red text-white py-2.5 px-4 rounded-xl font-heading font-semibold text-sm hover:bg-credence-red-dark transition-colors magnetic-btn"
              >
                Accept All
              </button>
              <button
                onClick={() => setShow(false)}
                className="py-2.5 px-4 rounded-xl font-heading font-semibold text-sm border border-white/20 hover:bg-white/10 transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function PolicyModal({ type, isOpen, onClose }) {
  const content = {
    privacy: {
      title: 'Privacy Policy',
      icon: Shield,
      sections: [
        { heading: 'Information We Collect', body: 'We collect information you provide directly, such as your name, email address, phone number, and project details when you submit a contact form or request a quotation. We also automatically collect certain technical information including your IP address, browser type, and browsing patterns on our website.' },
        { heading: 'How We Use Your Information', body: 'Your information is used to respond to enquiries, provide quotations, deliver our electrical engineering services, improve our website experience, and send relevant communications about our services (with your consent).' },
        { heading: 'Data Protection', body: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and accessed only by authorized personnel.' },
        { heading: 'Your Rights', body: 'You have the right to access, correct, or delete your personal data. You may also withdraw consent for communications at any time. Contact us at Info@credenceelectrical.co.zw to exercise these rights.' },
        { heading: 'Contact', body: 'For privacy-related enquiries, please contact our data protection team at Info@credenceelectrical.co.zw or call 077 485 2376.' },
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      icon: Cookie,
      sections: [
        { heading: 'What Are Cookies', body: 'Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.' },
        { heading: 'Essential Cookies', body: 'These cookies are necessary for the website to function properly. They enable core functionality such as page navigation and access to secure areas.' },
        { heading: 'Analytics Cookies', body: 'We use analytics cookies to understand how visitors interact with our website. This data helps us improve our services and user experience.' },
        { heading: 'Managing Cookies', body: 'You can control and delete cookies through your browser settings. Note that disabling certain cookies may affect website functionality.' },
      ],
    },
  };

  const data = content[type] || content.privacy;
  const Icon = data.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-4 md:inset-auto md:top-[5%] md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl md:max-h-[90vh] z-[91] overflow-y-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl">
              <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-credence-red/10 rounded-lg">
                    <Icon className="w-5 h-5 text-credence-red" />
                  </div>
                  <h3 className="font-heading font-bold text-xl">{data.title}</h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-sm text-credence-gray-dark">
                  Last updated: February 2026 — Credence Electrical Engineers (Pvt) Ltd
                </p>
                {data.sections.map((section, i) => (
                  <div key={i}>
                    <h4 className="font-heading font-semibold text-lg mb-2 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-credence-red" />
                      {section.heading}
                    </h4>
                    <p className="text-credence-gray-dark leading-relaxed pl-6">{section.body}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 px-6 py-4">
                <button
                  onClick={onClose}
                  className="w-full bg-credence-black text-white py-3 rounded-xl font-heading font-semibold hover:bg-credence-dark transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
