'use client';

import React, { useState } from 'react';
import { X, Mail, Lock, LogIn, Chrome } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    setTimeout(() => {
      setLoading(false);
      setMessage('✅ Successfully logged in! Redirecting to Patient Dashboard...');
      setTimeout(() => {
        onClose();
        window.location.href = '/dashboard';
      }, 1000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative border border-slate-100 animate-in fade-in zoom-in duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-slate-800">Patient Portal Login</h2>
          <p className="text-xs text-slate-500 mt-1">Access your appointments, health records & prescriptions</p>
        </div>

        {message && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold rounded-xl text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="patient@example.com"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-700 font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-700 font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm py-3 rounded-xl shadow-md shadow-teal-700/20 flex items-center justify-center gap-2 transition-all"
          >
            {loading ? (
              <span>Logging in...</span>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                <span>Sign In to Dashboard</span>
              </>
            )}
          </button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-[11px] font-bold text-slate-400 uppercase">Or Continue With</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        <button
          onClick={handleLogin}
          className="w-full border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          <Chrome className="w-4 h-4 text-rose-500" />
          <span>Sign In with Google</span>
        </button>

        <div className="mt-6 text-center text-xs text-slate-500">
          <span>Don't have an account? </span>
          <button onClick={handleLogin} className="text-teal-700 font-bold hover:underline">
            Register Guest Profile
          </button>
        </div>

      </div>
    </div>
  );
}
