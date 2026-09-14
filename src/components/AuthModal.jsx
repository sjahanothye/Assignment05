import React, { useState } from 'react';
import { X, Lock, Mail, User } from 'lucide-react';
import { toast } from 'react-toastify';
import Logo from './Logo';

export default function AuthModal({ isOpen, onClose, initialMode = 'signin' }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (mode === 'signup' && !name) {
      toast.error('Please enter your name');
      return;
    }

    toast.success(
      mode === 'signup'
        ? `🎉 Account created! Welcome, ${name || 'Developer'}!`
        : `👋 Welcome back!`
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-md rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl">
        
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <Logo />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            {mode === 'signup' ? 'Create an Account' : 'Welcome Back'}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {mode === 'signup'
              ? 'Join to save and export your developer stacks.'
              : 'Enter your details to sign in.'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-[#E0287D]"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="developer@example.com"
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-[#E0287D]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-[#E0287D]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg font-semibold text-xs text-white bg-[#E0287D] hover:bg-[#c91e6c] shadow-sm transition-all mt-2"
          >
            {mode === 'signup' ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        {/* Toggle Mode */}
        <div className="mt-4 text-center text-xs text-slate-500">
          {mode === 'signup' ? (
            <p>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('signin')}
                className="text-[#E0287D] font-semibold underline ml-1"
              >
                Sign In
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('signup')}
                className="text-[#E0287D] font-semibold underline ml-1"
              >
                Sign Up
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
