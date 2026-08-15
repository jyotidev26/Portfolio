'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Award, Calendar, ChevronRight } from 'lucide-react';
import { Doctor } from '@/lib/mockData';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  const { lang, t } = useLanguage();

  const name = lang === 'bn' ? doctor.name_bn : doctor.name_en;
  const specialty = lang === 'bn' ? doctor.specialty_bn : doctor.specialty_en;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all overflow-hidden flex flex-col group">
      
      {/* Doctor Photo Frame */}
      <div className="relative h-60 w-full bg-slate-100 overflow-hidden">
        <img
          src={doctor.photo_url}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-slate-800 shadow flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{doctor.rating}</span>
        </div>
        <div className="absolute bottom-3 left-3 bg-teal-900/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-semibold">
          {specialty}
        </div>
      </div>

      {/* Doctor Details Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">
            {name}
          </h3>
          <p className="text-xs font-medium text-slate-500 mb-3">{doctor.qualification}</p>

          <div className="flex items-center gap-4 text-xs text-slate-600 mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <div className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-teal-700" />
              <span>{doctor.years_experience} {t('years_exp')}</span>
            </div>
            <div className="ml-auto font-bold text-teal-800">
              ৳{doctor.consultation_fee}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
          <Link
            href={`/doctors/${doctor.id}`}
            className="w-full py-2.5 px-3 rounded-xl border border-slate-200 hover:border-teal-700 text-slate-700 hover:text-teal-700 text-xs font-bold text-center flex items-center justify-center gap-1 transition-all"
          >
            <span>{t('view_profile')}</span>
          </Link>

          <Link
            href={`/book-appointment?doctor=${doctor.id}`}
            className="w-full py-2.5 px-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-md shadow-teal-700/20 transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t('book_now')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
