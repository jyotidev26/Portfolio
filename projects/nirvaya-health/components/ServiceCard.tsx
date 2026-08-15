'use client';

import React from 'react';
import Link from 'next/link';
import { Service } from '@/lib/mockData';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { HeartPulse, Sparkles, Baby, Activity, Smile, UserCheck, Stethoscope, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { lang } = useLanguage();

  const name = lang === 'bn' ? service.name_bn : service.name_en;
  const desc = lang === 'bn' ? service.description_bn : service.description_en;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-teal-700" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-sky-500" />;
      case 'Baby': return <Baby className="w-6 h-6 text-amber-500" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-600" />;
      case 'Smile': return <Smile className="w-6 h-6 text-indigo-500" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-rose-500" />;
      default: return <Stethoscope className="w-6 h-6 text-teal-700" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all flex flex-col justify-between group">
      <div>
        <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          {renderIcon(service.icon)}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
          {service.department}
        </span>
        <h3 className="text-lg font-bold text-slate-800 group-hover:text-teal-700 transition-colors mb-2">
          {name}
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed mb-6">
          {desc}
        </p>
      </div>

      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 group/link pt-3 border-t border-slate-100"
      >
        <span>Learn More Department Details</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
