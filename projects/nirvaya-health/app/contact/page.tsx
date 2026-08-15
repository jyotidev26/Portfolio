'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
      alert('Thank you! Your message has been sent to Nirvaya Health support team.');
    }, 1500);
  };

  const branches = [
    {
      name: 'Banani Flagship Branch (Main)',
      address: 'House 42, Road 11, Block D, Banani, Dhaka-1213',
      phone: '+880 2-9880000 / +880 1700-000000',
      hours: 'OPD & Lab: 8:00 AM – 10:00 PM (Everyday)'
    },
    {
      name: 'Dhanmondi Branch',
      address: 'House 15, Road 27 (Old), Dhanmondi, Dhaka-1209',
      phone: '+880 2-9110000 / +880 1711-000000',
      hours: 'OPD & Diagnostic: 8:00 AM – 9:00 PM'
    },
    {
      name: 'Uttara Branch',
      address: 'Sector 3, Jasimuddin Avenue, Uttara, Dhaka-1230',
      phone: '+880 2-8950000 / +880 1722-000000',
      hours: 'OPD & Diagnostic: 8:00 AM – 9:00 PM'
    }
  ];

  return (
    <main className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-3">Contact Nirvaya Health</h1>
        <p className="text-xs text-slate-600 font-medium">
          Have a question about appointments, diagnostics, or health services? Send us a message or visit our clinic.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        
        {/* Left: Contact Form */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Send Us a Direct Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Mohammad Ali"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-700 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-700 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Message / Inquiry Details *</label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="How can our clinical support team assist you?"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-700 font-medium"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-teal-700/20 flex items-center justify-center gap-2"
            >
              {submitted ? <span>Sending Message...</span> : <><Send className="w-4 h-4" /><span>Send Message</span></>}
            </button>
          </form>
        </div>

        {/* Right: Embedded Map & Main Branch Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 text-xs">
            <h3 className="text-base font-bold text-slate-900">Main Office & OPD Clinic</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
              <span>House 42, Road 11, Block D, Banani, Dhaka-1213, Bangladesh</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-teal-700 shrink-0" />
              <span>+880 2-9880000 / +880 1700-000000</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-teal-700 shrink-0" />
              <span>info@nirvayahealth.com.bd</span>
            </div>
            <div className="flex items-center gap-3 text-amber-800 font-bold bg-amber-50 p-2.5 rounded-xl border border-amber-100">
              <Clock className="w-4 h-4 shrink-0" />
              <span>24/7 Emergency & Ambulance Helpline Active</span>
            </div>
          </div>

          <div className="w-full h-64 bg-slate-200 rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.045233156037!2d90.40713097598177!3d23.781404187515087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70b8d5a8df7%3A0xb35a09280a9d8213!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Google Map Banani"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Multi-Branch Locations */}
      <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Nirvaya Health Branch Network</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {branches.map((b, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-xs">
              <h3 className="font-bold text-slate-900 text-sm mb-2 text-teal-800">{b.name}</h3>
              <p className="text-slate-600 mb-2">{b.address}</p>
              <p className="font-semibold text-slate-800 mb-1">{b.phone}</p>
              <p className="text-amber-700 font-medium">{b.hours}</p>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
