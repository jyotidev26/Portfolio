'use client';

import React from 'react';
import Link from 'next/link';
import { MOCK_DOCTORS, MOCK_SLOTS, MOCK_TESTIMONIALS } from '@/lib/mockData';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Star, Award, Calendar, Clock, ShieldCheck, MapPin, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  const { lang, t } = useLanguage();
  const doctor = MOCK_DOCTORS.find(d => d.id === params.id) || MOCK_DOCTORS[0];

  const name = lang === 'bn' ? doctor.name_bn : doctor.name_en;
  const specialty = lang === 'bn' ? doctor.specialty_bn : doctor.specialty_en;
  const bio = lang === 'bn' ? doctor.bio_bn : doctor.bio_en;

  const slots = MOCK_SLOTS.filter(s => s.doctor_id === doctor.id);

  return (
    <main className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <Link href="/doctors" className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Doctors</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Doctor Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm sticky top-28 text-center">
            <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden mb-4 border-2 border-teal-100 shadow-md">
              <img src={doctor.photo_url} alt={name} className="w-full h-full object-cover" />
            </div>

            <div className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{doctor.rating} Rating (48 Patients Tested)</span>
            </div>

            <h1 className="text-2xl font-black text-slate-900 mb-1">{name}</h1>
            <p className="text-xs font-bold text-teal-700 mb-2">{specialty}</p>
            <p className="text-xs text-slate-500 font-medium mb-6">{doctor.qualification}</p>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-left text-xs space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-500">Experience:</span>
                <span className="font-bold text-slate-800">{doctor.years_experience} Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Consultation Fee:</span>
                <span className="font-bold text-teal-800 text-sm">৳{doctor.consultation_fee}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">BMDC Reg No:</span>
                <span className="font-bold text-slate-800 font-mono">A-74892</span>
              </div>
            </div>

            <Link
              href={`/book-appointment?doctor=${doctor.id}`}
              className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-teal-700/20 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{t('book_appointment')}</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Bio, Slots & Patient Reviews */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Bio Box */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Doctor Biography & Clinical Focus</h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium mb-6">{bio}</p>

            <h3 className="text-sm font-bold text-slate-800 mb-3">Key Areas of Clinical Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                <span>Specialized Diagnostic Evaluations</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                <span>Preventative Health & Management</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                <span>Laparoscopic & Advanced Procedures</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                <span>Patient-Centered Personal Consultation</span>
              </div>
            </div>
          </div>

          {/* Slots Calendar */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Available Time Slots for Sunday, Aug 16, 2026</h2>
            <p className="text-xs text-slate-500 mb-6">Select a slot to proceed directly to instant online booking</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {slots.map(slot => (
                <Link
                  key={slot.id}
                  href={`/book-appointment?doctor=${doctor.id}&slot=${slot.id}`}
                  className="p-3.5 bg-slate-50 hover:bg-teal-700 hover:text-white border border-slate-200 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 transition-all group"
                >
                  <Clock className="w-4 h-4 text-teal-700 group-hover:text-white" />
                  <span>{slot.time}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Patient Reviews */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Patient Reviews for {name}</h2>
            
            <div className="space-y-4">
              {MOCK_TESTIMONIALS.map(t => (
                <div key={t.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-800">{t.patient_name}</span>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 italic">"{t.comment_en}"</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </main>
  );
}
