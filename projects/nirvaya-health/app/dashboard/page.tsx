'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, User, Phone, CheckCircle2, AlertTriangle, XCircle, Plus, Edit, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function PatientDashboardPage() {
  const { t } = useLanguage();

  const [appointments, setAppointments] = useState([
    {
      id: 'NH-849201',
      doctorName: 'Dr. Tariq Rahman',
      specialty: 'Cardiology (হৃদরোগ)',
      date: 'Aug 16, 2026',
      time: '10:00 AM',
      fee: '৳1500',
      status: 'confirmed',
      paymentStatus: 'paid',
      paymentMethod: 'bKash'
    },
    {
      id: 'NH-591024',
      doctorName: 'Dr. Nusrat Jahan',
      specialty: 'Dermatology (চর্ম ও যৌনরোগ)',
      date: 'Aug 22, 2026',
      time: '02:00 PM',
      fee: '৳1200',
      status: 'pending',
      paymentStatus: 'pay_at_clinic',
      paymentMethod: 'pay_at_clinic'
    }
  ]);

  const handleCancel = (id: string) => {
    if (confirm('Are you sure you want to cancel this appointment?')) {
      setAppointments(prev =>
        prev.map(app => (app.id === id ? { ...app, status: 'cancelled' } : app))
      );
    }
  };

  return (
    <main className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Dashboard Top Banner */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-teal-700 text-white flex items-center justify-center text-xl font-bold">
            <User className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900">Welcome, Patient Mohammad Ali</h1>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Phone: +880 1711-223344 | Member ID: NH-PAT-4920</p>
          </div>
        </div>

        <Link
          href="/book-appointment"
          className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Book New Appointment</span>
        </Link>
      </div>

      {/* Appointments Section */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">Your Scheduled Appointments</h2>
          <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
            {appointments.length} Total Appointments
          </span>
        </div>

        <div className="space-y-4">
          {appointments.map(app => (
            <div key={app.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-teal-800 bg-white px-2.5 py-1 rounded-lg border border-slate-200">{app.id}</span>
                  {app.status === 'confirmed' && (
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Confirmed
                    </span>
                  )}
                  {app.status === 'pending' && (
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> Pending Confirmation
                    </span>
                  )}
                  {app.status === 'cancelled' && (
                    <span className="bg-rose-100 text-rose-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <XCircle className="w-3 h-3" /> Cancelled
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900">{app.doctorName}</h3>
                <p className="text-xs text-slate-500 font-medium">{app.specialty}</p>

                <div className="flex items-center gap-4 text-xs text-slate-600 mt-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-teal-700" /> {app.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-teal-700" /> {app.time}
                  </span>
                  <span className="font-bold text-teal-800">{app.fee}</span>
                </div>
              </div>

              {/* Actions */}
              {app.status !== 'cancelled' && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCancel(app.id)}
                    className="px-3.5 py-2 bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-rose-600 text-xs font-bold rounded-xl transition-all"
                  >
                    Cancel Appointment
                  </button>
                  <Link
                    href={`/book-appointment?doctor=doc-1`}
                    className="px-3.5 py-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-xl transition-all"
                  >
                    Reschedule
                  </Link>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
