'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="inline-flex items-center bg-slate-100 p-1 rounded-full border border-slate-200 shadow-inner">
      <Globe className="w-3.5 h-3.5 ml-1.5 text-slate-500" />
      <button
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
          lang === 'en'
            ? 'bg-teal-700 text-white shadow-sm'
            : 'text-slate-600 hover:text-teal-700'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('bn')}
        className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
          lang === 'bn'
            ? 'bg-teal-700 text-white shadow-sm'
            : 'text-slate-600 hover:text-teal-700'
        }`}
      >
        বাং
      </button>
    </div>
  );
}
