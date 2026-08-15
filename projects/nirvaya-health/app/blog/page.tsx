'use client';

import React from 'react';
import Link from 'next/link';
import { MOCK_BLOG_POSTS } from '@/lib/mockData';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const { lang, t } = useLanguage();

  return (
    <main className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
          Health & Wellness Journal
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-3">Health Tips & Medical Insights</h1>
        <p className="text-xs text-slate-600 font-medium">
          Expert medical articles written by our senior doctors to help you and your family live a healthier life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MOCK_BLOG_POSTS.map(post => (
          <article key={post.slug} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 mb-4">
                <span className="bg-teal-50 text-teal-800 font-bold px-3 py-1 rounded-full border border-teal-100">{post.category}</span>
                <span>{post.date}</span>
                <span>• {post.read_time}</span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-3">
                {lang === 'bn' ? post.title_bn : post.title_en}
              </h2>

              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-6">
                {lang === 'bn' ? post.summary_bn : post.summary_en}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-teal-700" />
                <span>{post.author}</span>
              </span>

              <Link
                href={`/blog/${post.slug}`}
                className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

    </main>
  );
}
