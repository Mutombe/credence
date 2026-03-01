import React from 'react';
import { useState } from 'react';
import { Toaster } from 'sonner';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../ui/ScrollToTop';
import { CookieConsent, PolicyModal } from '../ui/Modals';

export default function Layout({ children }) {
  const [policyModal, setPolicyModal] = useState({ open: false, type: 'privacy' });

  return (
    <>
      <ScrollToTop />
      <Toaster
        position="top-right"
        toastOptions={{
          style: { fontFamily: 'Plus Jakarta Sans, sans-serif' },
        }}
      />
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer onOpenPolicy={(type) => setPolicyModal({ open: true, type })} />
      <CookieConsent />
      <PolicyModal
        type={policyModal.type}
        isOpen={policyModal.open}
        onClose={() => setPolicyModal({ open: false, type: policyModal.type })}
      />
    </>
  );
}
