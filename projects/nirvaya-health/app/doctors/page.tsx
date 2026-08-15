'use client';

import React, { useState } from 'react';
import { MOCK_DOCTORS } from '@/lib/mockData';
import DoctorCard from '@/components/DoctorCard';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Search, Filter, Stethoscope } from 'lucide-react';

export default function DoctorsPage() {
  const { lang, t } = useLanguage();
  const [search, setSearch] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const specialties = ['all', 'Cardiology', 'Dermatology', 'Pediatrics', 'Orthopedics', 'Dental', 'Gynecology'];

  const filteredDoctors = MOCK_DOCTORS.filter(doctor => {
    const matchesSearch =
      doctor.name_en.toLowerCase().includes(search.toLowerCase()) ||
      doctor.name_bn.includes(search) ||
      doctor.specialty_en.toLowerCase().includes(search.toLowerCase());

    const matchesSpecialty =
      selectedSpecialty === 'all' ||
      doctor.specialty_en.toLowerCase() === selectedSpecialty.toLowerCase();

    return matchesSearch && matchesSpecialty;
  });

  return (
    <main className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
          Medical Faculty
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-3">Find a Specialist Doctor</h1>
        <p className="text-xs text-slate-600 font-medium">
          Browse our team of senior consultants, view qualifications, and check instant appointment slot availability.
        </p>
      </div>

      {/* Search & Filter Controls Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={t('search_placeholder')}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-teal-700"
          />
        </div>

        {/* Specialty Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <Filter className="w-4 h-4 text-slate-400 mr-1 hidden sm:inline" />
          {specialties.map(spec => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all capitalize ${
                selectedSpecialty === spec
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {spec === 'all' ? t('filter_all') : spec}
            </button>
          ))}
        </div>
      </div>

      {/* Doctors Grid */}
      {filteredDoctors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-md mx-auto my-8">
          <Stethoscope className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800 mb-1">No Doctors Found</h3>
          <p className="text-xs text-slate-500 mb-4">Try searching with a different doctor name or clearing specialty filters.</p>
          <button
            onClick={() => { setSearch(''); setSelectedSpecialty('all'); }}
            className="bg-teal-700 text-white text-xs font-bold px-4 py-2 rounded-xl"
          >
            Reset Filters
          </button>
        </div>
      )}

    </main>
  );
}
