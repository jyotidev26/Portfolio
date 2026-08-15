'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { MOCK_DOCTORS, MOCK_SERVICES, MOCK_SLOTS, Doctor, Service, AppointmentSlot } from '@/lib/mockData';
import { processBkashPayment } from '@/lib/payments/bkash';
import { processNagadPayment } from '@/lib/payments/nagad';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Calendar, Clock, CheckCircle2, AlertCircle, ShieldCheck, User, Phone, Mail, FileText, CreditCard, ChevronRight } from 'lucide-react';

export default function BookingWizard() {
  const { lang, t } = useLanguage();
  const searchParams = useSearchParams();
  const initialDoctorId = searchParams.get('doctor');

  // Step State (1 to 5)
  const [step, setStep] = useState<number>(initialDoctorId ? 3 : 1);
  
  // Selection States
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(
    initialDoctorId ? MOCK_DOCTORS.find(d => d.id === initialDoctorId) || MOCK_DOCTORS[0] : null
  );
  const [selectedSlot, setSelectedSlot] = useState<AppointmentSlot | null>(null);

  // Patient Info Form State
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('+880 ');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [visitReason, setVisitReason] = useState('');

  // Payment Selection State
  const [paymentMethod, setPaymentMethod] = useState<'bkash' | 'nagad' | 'pay_at_clinic'>('pay_at_clinic');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState<any | null>(null);
  const [formError, setFormError] = useState('');

  // Available Doctors filtered by specialty
  const filteredDoctors = selectedSpecialty
    ? MOCK_DOCTORS.filter(d => d.specialty_en.toLowerCase().includes(selectedSpecialty.toLowerCase()))
    : MOCK_DOCTORS;

  // Slots for selected doctor
  const availableSlots = selectedDoctor
    ? MOCK_SLOTS.filter(s => s.doctor_id === selectedDoctor.id)
    : [];

  const handleStep4Next = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!patientName.trim()) {
      setFormError('Patient full name is required');
      return;
    }
    if (!patientPhone.trim() || patientPhone.length < 11) {
      setFormError('Please enter a valid Bangladesh phone number (+880 1XXXXXXXXX)');
      return;
    }
    if (!patientEmail.includes('@')) {
      setFormError('Please enter a valid email address');
      return;
    }
    if (!patientAge || parseInt(patientAge) <= 0) {
      setFormError('Please enter a valid patient age');
      return;
    }

    setStep(5);
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    setFormError('');

    try {
      let paymentDetails = null;

      if (paymentMethod === 'bkash') {
        paymentDetails = await processBkashPayment({
          appointmentId: 'APP-' + Date.now(),
          amount: selectedDoctor?.consultation_fee || 1200,
          customerPhone: patientPhone
        });
      } else if (paymentMethod === 'nagad') {
        paymentDetails = await processNagadPayment({
          appointmentId: 'APP-' + Date.now(),
          amount: selectedDoctor?.consultation_fee || 1200,
          customerPhone: patientPhone
        });
      }

      const appointmentId = 'NH-' + Math.floor(100000 + Math.random() * 900000);

      setBookingSuccess({
        appointmentId,
        patientName,
        doctorName: lang === 'bn' ? selectedDoctor?.name_bn : selectedDoctor?.name_en,
        specialty: lang === 'bn' ? selectedDoctor?.specialty_bn : selectedDoctor?.specialty_en,
        date: selectedSlot?.date || '2026-08-16',
        time: selectedSlot?.time || '10:00 AM',
        fee: selectedDoctor?.consultation_fee,
        paymentMethod,
        paymentStatus: paymentMethod === 'pay_at_clinic' ? 'pay_at_clinic' : 'paid',
        paymentMessage: paymentDetails?.message || 'Payment to be completed at clinic reception'
      });
    } catch (err) {
      setFormError('Failed to process appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (bookingSuccess) {
    return (
      <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-xl text-center max-w-2xl mx-auto my-8">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-black text-slate-800 mb-2">Appointment Confirmed!</h2>
        <p className="text-xs text-slate-500 mb-6">A confirmation SMS & email receipt has been dispatched to {patientPhone}</p>

        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-left text-xs space-y-3 mb-6 font-medium">
          <div className="flex justify-between border-b pb-2">
            <span className="text-slate-500">Appointment ID:</span>
            <span className="font-bold text-teal-800 font-mono text-sm">{bookingSuccess.appointmentId}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-slate-500">Patient Name:</span>
            <span className="font-bold text-slate-800">{bookingSuccess.patientName}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-slate-500">Doctor Specialist:</span>
            <span className="font-bold text-slate-800">{bookingSuccess.doctorName} ({bookingSuccess.specialty})</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-slate-500">Date & Time Slot:</span>
            <span className="font-bold text-slate-800">{bookingSuccess.date} at {bookingSuccess.time}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-slate-500">Consultation Fee:</span>
            <span className="font-bold text-teal-800">৳{bookingSuccess.fee}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Payment Status:</span>
            <span className="font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">{bookingSuccess.paymentStatus}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 mb-6">
          <ShieldCheck className="w-4 h-4 text-teal-700" />
          <span>HIPAA & BMDC Compliant Medical Booking System</span>
        </div>

        <button
          onClick={() => window.location.href = '/dashboard'}
          className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-teal-700/20"
        >
          View in Patient Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto my-6">
      
      {/* Wizard Step Progress Bar */}
      <div className="bg-slate-900 text-white p-6 grid grid-cols-5 gap-2 text-center text-xs font-bold border-b border-slate-800">
        <div className={step >= 1 ? 'text-sky-400' : 'text-slate-500'}>{t('step_1')}</div>
        <div className={step >= 2 ? 'text-sky-400' : 'text-slate-500'}>{t('step_2')}</div>
        <div className={step >= 3 ? 'text-sky-400' : 'text-slate-500'}>{t('step_3')}</div>
        <div className={step >= 4 ? 'text-sky-400' : 'text-slate-500'}>{t('step_4')}</div>
        <div className={step >= 5 ? 'text-sky-400' : 'text-slate-500'}>{t('step_5')}</div>
      </div>

      <div className="p-8">
        
        {/* STEP 1: Select Specialty */}
        {step === 1 && (
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Step 1: Choose Medical Specialty</h3>
            <p className="text-xs text-slate-500 mb-6">Select the medical department for your health concern</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {MOCK_SERVICES.map(service => (
                <button
                  key={service.id}
                  onClick={() => {
                    setSelectedSpecialty(service.name_en);
                    setStep(2);
                  }}
                  className="p-4 rounded-2xl border border-slate-200 hover:border-teal-700 hover:bg-teal-50/50 text-left transition-all group"
                >
                  <span className="text-xs font-bold uppercase text-teal-700 block mb-1">{service.department}</span>
                  <span className="text-base font-bold text-slate-800 group-hover:text-teal-800 block">
                    {lang === 'bn' ? service.name_bn : service.name_en}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Select Doctor */}
        {step === 2 && (
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Step 2: Choose Specialist Doctor</h3>
            <p className="text-xs text-slate-500 mb-6">Showing available senior consultants for {selectedSpecialty || 'All Specialties'}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {filteredDoctors.map(doctor => (
                <div
                  key={doctor.id}
                  onClick={() => {
                    setSelectedDoctor(doctor);
                    setStep(3);
                  }}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center gap-4 ${
                    selectedDoctor?.id === doctor.id
                      ? 'border-teal-700 bg-teal-50/60 ring-2 ring-teal-700/20'
                      : 'border-slate-200 hover:border-teal-300 hover:bg-slate-50'
                  }`}
                >
                  <img src={doctor.photo_url} alt={doctor.name_en} className="w-16 h-16 rounded-xl object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{lang === 'bn' ? doctor.name_bn : doctor.name_en}</h4>
                    <p className="text-xs text-teal-700 font-semibold">{lang === 'bn' ? doctor.specialty_bn : doctor.specialty_en}</p>
                    <p className="text-[11px] text-slate-500 font-medium">Fee: ৳{doctor.consultation_fee}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Select Date & Slot */}
        {step === 3 && (
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Step 3: Select Date & Available Time Slot</h3>
            <p className="text-xs text-slate-500 mb-6">Doctor: <strong>{lang === 'bn' ? selectedDoctor?.name_bn : selectedDoctor?.name_en}</strong> ({selectedDoctor?.specialty_en})</p>

            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-700 mb-2">Available Time Slots for Sunday, Aug 16, 2026</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {availableSlots.map(slot => (
                  <button
                    key={slot.id}
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
                      selectedSlot?.id === slot.id
                        ? 'bg-teal-700 text-white border-teal-700 shadow-md'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-teal-700'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>{slot.time}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              disabled={!selectedSlot}
              onClick={() => setStep(4)}
              className="bg-teal-700 hover:bg-teal-800 disabled:opacity-50 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md"
            >
              Continue to Patient Details
            </button>
          </div>
        )}

        {/* STEP 4: Patient Info Form */}
        {step === 4 && (
          <form onSubmit={handleStep4Next} className="space-y-4">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Step 4: Patient Information</h3>
            <p className="text-xs text-slate-500 mb-4">Please fill patient details accurately for prescription records</p>

            {formError && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Patient Full Name *</label>
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={e => setPatientName(e.target.value)}
                  placeholder="e.g. Mohammad Ali"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-700 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (+880 format) *</label>
                <input
                  type="text"
                  required
                  value={patientPhone}
                  onChange={e => setPatientPhone(e.target.value)}
                  placeholder="+880 1700000000"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-700 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={patientEmail}
                  onChange={e => setPatientEmail(e.target.value)}
                  placeholder="patient@example.com"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-700 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Patient Age (Years) *</label>
                <input
                  type="number"
                  required
                  value={patientAge}
                  onChange={e => setPatientAge(e.target.value)}
                  placeholder="34"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-700 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Reason for Visit / Health Symptoms</label>
              <textarea
                rows={3}
                value={visitReason}
                onChange={e => setVisitReason(e.target.value)}
                placeholder="Briefly describe health concerns..."
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-700 font-medium"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md"
            >
              Proceed to Payment Selection
            </button>
          </form>
        )}

        {/* STEP 5: Payment & Confirmation */}
        {step === 5 && (
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Step 5: Payment & Booking Confirmation</h3>
            <p className="text-xs text-slate-500 mb-6">Choose preferred payment method for consultation fee (৳{selectedDoctor?.consultation_fee})</p>

            <div className="space-y-3 mb-6">
              <label className={`p-4 rounded-2xl border flex items-center gap-4 cursor-pointer transition-all ${
                paymentMethod === 'pay_at_clinic' ? 'border-teal-700 bg-teal-50/60 ring-2 ring-teal-700/20' : 'border-slate-200'
              }`}>
                <input type="radio" name="pay" checked={paymentMethod === 'pay_at_clinic'} onChange={() => setPaymentMethod('pay_at_clinic')} />
                <div>
                  <span className="font-bold text-slate-800 text-sm block">{t('pay_clinic')}</span>
                  <span className="text-xs text-slate-500">Pay cash or card at Nirvaya Health clinic reception desk on arrival</span>
                </div>
              </label>

              <label className={`p-4 rounded-2xl border flex items-center gap-4 cursor-pointer transition-all ${
                paymentMethod === 'bkash' ? 'border-pink-600 bg-pink-50/60 ring-2 ring-pink-600/20' : 'border-slate-200'
              }`}>
                <input type="radio" name="pay" checked={paymentMethod === 'bkash'} onChange={() => setPaymentMethod('bkash')} />
                <div>
                  <span className="font-bold text-slate-800 text-sm block">{t('pay_bkash')}</span>
                  <span className="text-xs text-slate-500">Instant online checkout via bKash Mobile Wallet</span>
                </div>
              </label>

              <label className={`p-4 rounded-2xl border flex items-center gap-4 cursor-pointer transition-all ${
                paymentMethod === 'nagad' ? 'border-orange-600 bg-orange-50/60 ring-2 ring-orange-600/20' : 'border-slate-200'
              }`}>
                <input type="radio" name="pay" checked={paymentMethod === 'nagad'} onChange={() => setPaymentMethod('nagad')} />
                <div>
                  <span className="font-bold text-slate-800 text-sm block">{t('pay_nagad')}</span>
                  <span className="text-xs text-slate-500">Instant online checkout via Nagad Wallet</span>
                </div>
              </label>
            </div>

            <button
              onClick={handleFinalSubmit}
              disabled={isSubmitting}
              className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-teal-700/20 flex items-center justify-center gap-2"
            >
              {isSubmitting ? <span>Processing Payment & Securing Appointment...</span> : <span>Confirm & Complete Appointment</span>}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
