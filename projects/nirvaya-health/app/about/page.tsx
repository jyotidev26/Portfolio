'use client';

import React from 'react';
import { Award, ShieldCheck, HeartPulse, Building2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Hero Banner */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
          Our Heritage & Mission
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">About Nirvaya Health</h1>
        <p className="text-sm text-slate-600 leading-relaxed font-medium">
          Founded in 2010 in Banani, Dhaka, Nirvaya Health was created with a clear vision: to bring patient-first, compassionate, world-standard healthcare to families in Bangladesh.
        </p>
      </div>

      {/* Mission & Vision Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
            <HeartPulse className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h2>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            To provide ethical, high-precision medical diagnosis and treatment using modern clinical technology, eliminating unnecessary waiting times and prioritizing patient dignity.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center mb-4">
            <Building2 className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h2>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            To be recognized as the premier multi-specialty outpatient and diagnostic center in Dhaka, trusted by over 100,000 families across Bangladesh.
          </p>
        </div>
      </div>

      {/* Accreditation Badges */}
      <div className="bg-slate-900 text-white rounded-3xl p-10 mb-20 text-center">
        <h2 className="text-2xl font-black mb-6">Accreditations & Certifications</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-bold">
          <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700">
            <ShieldCheck className="w-8 h-8 text-sky-400 mx-auto mb-2" />
            <span>BMDC Registered Consultants</span>
          </div>
          <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700">
            <Award className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <span>ISO 9001:2015 Diagnostic Quality</span>
          </div>
          <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700">
            <CheckCircle2 className="w-8 h-8 text-amber-400 mx-auto mb-2" />
            <span>24/7 Automated Pathology Lab</span>
          </div>
          <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700">
            <ShieldCheck className="w-8 h-8 text-teal-400 mx-auto mb-2" />
            <span>HIPAA Compliant Patient Privacy</span>
          </div>
        </div>
      </div>

      {/* Facility Gallery */}
      <div>
        <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Facility & Infrastructure Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80" alt="Reception Desk" className="w-full h-52 object-cover rounded-2xl border" />
          <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&auto=format&fit=crop&q=80" alt="Consultation Room" className="w-full h-52 object-cover rounded-2xl border" />
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=80" alt="Diagnostic Equipment" className="w-full h-52 object-cover rounded-2xl border" />
        </div>
      </div>

    </main>
  );
}
