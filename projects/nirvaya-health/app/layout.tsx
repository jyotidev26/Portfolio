'use client';

import React, { useState } from 'react';
import '@/app/globals.css';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import EmergencyBanner from '@/components/EmergencyBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Nirvaya Health - Care You Can Trust | Multi-Specialty Clinic Dhaka</title>
        <meta name="description" content="Modern healthcare, specialist doctors, state-of-the-art diagnostics, and 24/7 emergency care in Dhaka, Bangladesh." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FAFAF9] text-slate-700 antialiased selection:bg-teal-700 selection:text-white flex flex-col min-h-screen">
        <LanguageProvider>
          <EmergencyBanner />
          <Header onOpenAuth={() => setAuthOpen(true)} />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
          <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
        </LanguageProvider>
      </body>
    </html>
  );
}
