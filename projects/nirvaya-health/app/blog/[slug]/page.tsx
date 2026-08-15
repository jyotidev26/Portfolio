'use client';

import React from 'react';
import Link from 'next/link';
import { MOCK_BLOG_POSTS } from '@/lib/mockData';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { User, Calendar, Clock, ArrowLeft } from 'lucide-react';

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const { lang } = useLanguage();
  const post = MOCK_BLOG_POSTS.find(p => p.slug === params.slug) || MOCK_BLOG_POSTS[0];

  const title = lang === 'bn' ? post.title_bn : post.title_en;
  const content = lang === 'bn' ? post.content_bn : post.content_en;

  return (
    <main className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Health Journal</span>
      </Link>

      <article className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
        <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100 mb-4 inline-block">
          {post.category}
        </span>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mb-4 leading-snug">{title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pb-6 mb-8 border-b border-slate-200">
          <span className="flex items-center gap-1.5 text-slate-800 font-bold">
            <User className="w-4 h-4 text-teal-700" /> {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-slate-400" /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-400" /> {post.read_time}
          </span>
        </div>

        <div className="prose text-sm text-slate-700 leading-relaxed space-y-4 font-medium">
          <p>{content}</p>
          <p>
            Consulting a specialist at Nirvaya Health ensures early diagnosis and personal guidance tailored to your medical history. Our Banani OPD clinic operates 7 days a week for comprehensive care.
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-bold text-slate-600">Need personalized medical advice?</span>
          <Link
            href="/book-appointment"
            className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md"
          >
            Book Appointment with {post.author}
          </Link>
        </div>
      </article>

    </main>
  );
}
