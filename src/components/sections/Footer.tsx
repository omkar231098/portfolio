'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUp, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-[#050609] py-14 transition-colors">
      {/* Top subtle glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Brand info */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center shadow-sm">
              <Image
                src="/favicon.svg"
                alt="OD Monogram"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white text-base tracking-tight">
                {personalInfo.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-white/50 font-mono">
                {personalInfo.title}
              </p>
            </div>
          </div>

          {/* Center Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-white/[0.03] hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-white/60 hover:text-slate-950 dark:hover:text-white transition-colors shadow-sm dark:shadow-none"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-white/[0.03] hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-white/60 hover:text-slate-950 dark:hover:text-white transition-colors shadow-sm dark:shadow-none"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-white dark:bg-white/[0.03] hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-white/60 hover:text-slate-950 dark:hover:text-white transition-colors shadow-sm dark:shadow-none"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-white/[0.03] hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-white/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-sm dark:shadow-none"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          {/* Right Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-white/[0.03] hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-white/70 hover:text-slate-950 dark:hover:text-white transition-all group shadow-sm dark:shadow-none"
            aria-label="Scroll to top"
            type="button"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>

        </div>

        {/* Bottom copyright & status row */}
        <div className="mt-10 pt-6 border-t border-slate-200/80 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-white/40">
          <p>© 2026 Omkar Dhanave. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Built with Next.js, React, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
