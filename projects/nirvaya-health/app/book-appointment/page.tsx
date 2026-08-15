'use client';

import React, { Suspense } from 'react';
import BookingWizard from '@/components/BookingWizard';

export default function BookAppointmentPage() {
  return (
    <main className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
          Online Patient Booking
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-2">Book Doctor Appointment</h1>
        <p className="text-xs text-slate-600 font-medium">
          Select specialty, doctor, date slot, patient details, and choose instant online bKash/Nagad payment or pay cash at clinic.
        </p>
      </div>

      <Suspense fallback={<div className="text-center py-12 text-xs font-bold text-slate-400">Loading Appointment Booking System...</div>}>
        <BookingWizard />
      </Suspense>

    </main>
  );
}
