'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, Calendar, User, Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
  onOpenAuth: () => void;
}

export default function Header({ onOpenAuth }: HeaderProps) {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('nav_home') },
    { href: '/doctors', label: t('nav_doctors') },
    { href: '/services', label: t('nav_services') },
    { href: '/about', label: t('nav_about') },
    { href: '/contact', label: t('nav_contact') },
    { href: '/blog', label: t('nav_blog') },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-[37px] z-40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-700 to-sky-400 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-black text-slate-800 tracking-tight block leading-none">
              Nirvaya <span className="text-teal-700">Health</span>
            </span>
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest block mt-1">
              {t('tagline')}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-teal-700 border-b-2 border-teal-700 py-1'
                    : 'text-slate-600 hover:text-teal-700'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Action Group */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageToggle />

          <button
            onClick={onOpenAuth}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-teal-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-xl transition-all"
          >
            <User className="w-4 h-4 text-teal-700" />
            <span>{t('nav_dashboard')}</span>
          </button>

          <Link
            href="/book-appointment"
            className="bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md shadow-teal-700/20 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>{t('book_appointment')}</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <LanguageToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-700 hover:text-teal-700 focus:outline-none"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-semibold text-slate-700 hover:text-teal-700 py-2 border-b border-slate-100"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenAuth();
              }}
              className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-800 text-sm font-bold py-2.5 rounded-xl"
            >
              <User className="w-4 h-4 text-teal-700" />
              <span>{t('nav_dashboard')}</span>
            </button>
            <Link
              href="/book-appointment"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-teal-700 text-white text-sm font-bold py-2.5 rounded-xl text-center shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>{t('book_appointment')}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
