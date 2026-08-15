'use client';

import React from 'react';
import Link from 'next/link';
import { MOCK_DOCTORS, MOCK_SERVICES, MOCK_TESTIMONIALS } from '@/lib/mockData';
import DoctorCard from '@/components/DoctorCard';
import ServiceCard from '@/components/ServiceCard';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Calendar, ShieldCheck, Award, Users, HeartPulse, Clock, Sparkles, CheckCircle2, Star, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main>
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-teal-50/60 via-white to-[#FAFAF9] pt-12 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-100/80 text-teal-800 border border-teal-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold mb-6">
                <Sparkles className="w-4 h-4 text-teal-700" />
                <span>Modern Multi-Specialty Medical Center in Banani, Dhaka</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
                {t('hero_title')}
              </h1>

              <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-xl font-medium">
                {t('hero_sub')}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/book-appointment"
                  className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm px-7 py-4 rounded-2xl shadow-xl shadow-teal-700/25 flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{t('book_appointment')}</span>
                </Link>

                <Link
                  href="/doctors"
                  className="bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm px-6 py-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2 transition-all"
                >
                  <span>{t('nav_doctors')}</span>
                  <ArrowRight className="w-4 h-4 text-teal-700" />
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-6 text-xs font-semibold text-slate-500 pt-6 border-t border-slate-200/80">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Instant Confirmation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Zero Waiting Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80"
                  alt="Nirvaya Health Medical Center"
                  className="w-full h-[420px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold">
                      <HeartPulse className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">24/7 OPD & Diagnostics</span>
                      <span className="text-[10px] text-slate-500 font-medium">House 42, Road 11, Banani, Dhaka</span>
                    </div>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase">Open Now</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST INDICATORS BAR */}
      <section className="bg-slate-900 text-white py-10 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-800">
              <Award className="w-7 h-7 text-sky-400 mx-auto mb-2" />
              <div className="text-2xl font-black text-white">{t('trust_exp')}</div>
              <p className="text-xs text-slate-400 font-medium mt-1">Serving Dhaka Since 2010</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-800">
              <Users className="w-7 h-7 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-black text-white">{t('trust_patients')}</div>
              <p className="text-xs text-slate-400 font-medium mt-1">High Patient Satisfaction</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-800">
              <HeartPulse className="w-7 h-7 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl font-black text-white">{t('trust_doctors')}</div>
              <p className="text-xs text-slate-400 font-medium mt-1">Senior Consultants</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-800">
              <ShieldCheck className="w-7 h-7 text-teal-400 mx-auto mb-2" />
              <div className="text-2xl font-black text-white">{t('trust_cert')}</div>
              <p className="text-xs text-slate-400 font-medium mt-1">Accredited Health Standards</p>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED SPECIALTIES GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Medical Departments
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-3 mb-3">Featured Specialties & Departments</h2>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            From routine health checks to specialized surgeries, our multidisciplinary team covers all major medical fields.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_SERVICES.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-100 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-3">{t('why_choose_title')}</h2>
            <p className="text-xs text-slate-600 font-medium">Patient care reimagined with modern efficiency and genuine compassion.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
              <div className="w-14 h-14 bg-teal-50 text-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{t('why_prop1_title')}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{t('why_prop1_desc')}</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
              <div className="w-14 h-14 bg-sky-50 text-sky-500 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{t('why_prop2_title')}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{t('why_prop2_desc')}</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{t('why_prop3_title')}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{t('why_prop3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED DOCTORS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
              Expert Team
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-3">{t('section_doctors_title')}</h2>
          </div>
          <Link href="/doctors" className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1">
            <span>View All Doctors & Availability</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_DOCTORS.slice(0, 3).map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </section>

      {/* PATIENT TESTIMONIALS */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-white mb-3">{t('section_testimonials_title')}</h2>
            <p className="text-xs text-slate-400">Real feedback from patients treated at Nirvaya Health Banani Clinic</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MOCK_TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-slate-800/70 p-6 rounded-3xl border border-slate-700/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed mb-6">
                    "{t.comment_en}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{t.patient_name}</span>
                  <span className="text-teal-400 font-medium">{t.doctor_name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
