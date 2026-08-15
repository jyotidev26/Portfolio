'use client';

import React from 'react';
import { MOCK_SERVICES } from '@/lib/mockData';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
  return (
    <main className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
          Medical Departments
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-3">Specialties & Clinical Services</h1>
        <p className="text-xs text-slate-600 font-medium">
          Comprehensive multi-specialty care equipped with modern diagnostic units, expert consultants, and patient-first treatment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_SERVICES.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

    </main>
  );
}
