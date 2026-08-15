'use client';

import React from 'react';
import Link from 'next/link';
import { MOCK_SERVICES, MOCK_DOCTORS } from '@/lib/mockData';
import DoctorCard from '@/components/DoctorCard';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Calendar, HelpCircle, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { lang, t } = useLanguage();
  const service = MOCK_SERVICES.find(s => s.slug === params.slug) || MOCK_SERVICES[0];

  const name = lang === 'bn' ? service.name_bn : service.name_en;
  const desc = lang === 'bn' ? service.description_bn : service.description_en;

  const relatedDoctors = MOCK_DOCTORS.filter(d =>
    d.specialty_en.toLowerCase().includes(service.slug.toLowerCase()) ||
    service.slug.includes(d.specialty_en.toLowerCase())
  );

  const faqs = [
    {
      q: 'Do I need a doctor referral to visit this department?',
      a: 'No, you can directly book an appointment with any senior consultant in this specialty online.'
    },
    {
      q: 'What diagnostic reports should I bring for my first consultation?',
      a: 'Please bring any recent blood tests, X-rays, ECGs, or previous prescriptions related to your condition.'
    },
    {
      q: 'Are diagnostic tests done on the same day?',
      a: 'Yes, our automated pathology lab and digital imaging department operate 24/7 in Banani.'
    }
  ];

  return (
    <main className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <Link href="/services" className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Services</span>
      </Link>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-teal-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl">
        <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-950/80 px-3.5 py-1.5 rounded-full border border-sky-800/60 mb-4 inline-block">
          {service.department}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black mb-4">{name}</h1>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed mb-8 font-medium">{desc}</p>
        
        <Link
          href={`/book-appointment?specialty=${service.slug}`}
          className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg inline-flex items-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment in {name}</span>
        </Link>
      </div>

      {/* Related Doctors */}
      <div className="mb-16">
        <h2 className="text-2xl font-black text-slate-900 mb-6">Specialists Available in {name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(relatedDoctors.length > 0 ? relatedDoctors : MOCK_DOCTORS.slice(0, 2)).map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm max-w-3xl mx-auto">
        <div className="flex items-center gap-2 text-teal-700 mb-6">
          <HelpCircle className="w-6 h-6" />
          <h2 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-sm font-bold text-slate-800 mb-1.5">{faq.q}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
