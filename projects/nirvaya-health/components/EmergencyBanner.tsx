'use client';

import React from 'react';
import { PhoneCall, ShieldAlert } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function EmergencyBanner() {
  const { t } = useLanguage();

  return (
    <div className="bg-emergency text-white py-2 px-4 shadow-md sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs md:text-sm font-semibold">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 animate-pulse text-amber-300" />
          <span>{t('emergency_title')}</span>
          <span className="bg-white/20 px-2 py-0.5 rounded text-white font-mono font-bold">+880 1700-000000</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-white/90">Ambulance & Trauma Response Unit</span>
          <a
            href="tel:+8801700000000"
            className="bg-white text-emergency hover:bg-amber-100 px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold transition-all shadow"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            {t('call_now')}
          </a>
        </div>
      </div>
    </div>
  );
}
