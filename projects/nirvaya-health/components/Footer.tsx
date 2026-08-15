'use client';

import React from 'react';
import Link from 'next/link';
import { Activity, MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Mission */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-teal-700 flex items-center justify-center text-white font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white">Nirvaya <span className="text-sky-400">Health</span></span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              A modern multi-specialty medical center in Dhaka providing patient-first healthcare, advanced diagnostics, and 24/7 emergency response.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-3 py-1.5 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>BMDC & HIPAA Compliant Data Privacy</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><Link href="/doctors" className="hover:text-sky-400 transition-colors">Find a Specialist Doctor</Link></li>
              <li><Link href="/services" className="hover:text-sky-400 transition-colors">Medical Departments</Link></li>
              <li><Link href="/book-appointment" className="hover:text-sky-400 transition-colors">Online Appointment Booking</Link></li>
              <li><Link href="/about" className="hover:text-sky-400 transition-colors">Clinic History & Accreditations</Link></li>
              <li><Link href="/contact" className="hover:text-sky-400 transition-colors">Branch Locations & Maps</Link></li>
              <li><Link href="/blog" className="hover:text-sky-400 transition-colors">Health & Wellness Blog</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact & Working Hours */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Contact & Hours</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>House 42, Road 11, Block D, Banani, Dhaka-1213, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>+880 2-9880000 / +880 1700-000000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>info@nirvayahealth.com.bd</span>
              </li>
              <li className="flex items-center gap-2.5 text-amber-300 font-semibold pt-1">
                <Clock className="w-4 h-4 shrink-0" />
                <span>OPD: 8:00 AM – 10:00 PM (Everyday)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Map Embed Placeholder */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Main Clinic Location</h4>
            <div className="w-full h-36 bg-slate-800 rounded-xl overflow-hidden relative border border-slate-700 flex items-center justify-center text-xs text-slate-400">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.045233156037!2d90.40713097598177!3d23.781404187515087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70b8d5a8df7%3A0xb35a09280a9d8213!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Nirvaya Health Banani Clinic Map"
                className="opacity-80 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>{t('footer_copy')}</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with care for patients in Bangladesh</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}
