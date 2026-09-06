'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, FileDown, Terminal, Code2, Cpu, Check, Copy } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<'profile' | 'stack' | 'terminal'>('profile');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const codeSnippets = {
    profile: `// Omkar Dhanave: Full Stack Web Developer
const developer = {
  name: "Omkar Dhanave",
  role: "Full Stack Web Developer",
  focus: ["JavaScript", "Node.js", "React", "Next.js"],
  strengths: [
    "Scalable RESTful Architecture",
    "Clean Modular State Management",
    "Database Persistence (MongoDB & SQL)"
  ],
  status: "Available for new opportunities",
  location: "Satara, Maharashtra, India"
};

export default developer;`,
    stack: `// Core Engineering Stack
export const TechStack = {
  runtime: ["Node.js", "Express.js", "JavaScript ES6+"],
  client: ["React.js", "Next.js", "Tailwind CSS"],
  persistence: ["MongoDB Atlas", "Mongoose", "MySQL"],
  cloudDeploy: ["AWS", "Vercel", "Netlify", "Git/GitHub"],
  architecturalPillars: [
    "Type-Safe Interfaces",
    "Zero-Bloat Components",
    "Security-First JWT/Auth"
  ]
};`,
    terminal: `$ node --version
v20.11.1
$ git status
On branch main (production-ready)
All checks passed: 0 vulnerabilities, 100% test passing.
$ ping omkardhanave.vercel.app
64 bytes: icmp_seq=1 ttl=58 time=18.4 ms
Status: ONLINE — Ready for engineering collaboration.`
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-purple-500/10 via-violet-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[100px] pointer-events-none -z-10" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-medium tracking-wide mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px] tracking-wider uppercase font-semibold">
                {personalInfo.status}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
              Building digital experiences{' '}
              <span className="bg-gradient-to-r from-violet-700 via-purple-600 to-indigo-600 dark:from-white dark:via-purple-200 dark:to-purple-400 bg-clip-text text-transparent">
                that actually matter.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-white/70 leading-relaxed max-w-xl mb-8">
              Hi, I&apos;m <strong className="text-slate-900 dark:text-white font-semibold">Omkar Dhanave</strong> — a Full Stack Web Developer focused on building modern, scalable, and user-friendly web applications across the JavaScript ecosystem.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <Link
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-white/90 dark:text-black font-semibold text-sm transition-all shadow-[0_4px_15px_rgba(0,0,0,0.12)] dark:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-surface-100 hover:bg-slate-50 dark:hover:bg-surface-50 text-slate-800 dark:text-white font-medium text-sm border border-slate-200 dark:border-white/10 transition-all shadow-sm"
              >
                <span>Let&apos;s Connect</span>
              </Link>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/70 dark:bg-transparent hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-white/80 hover:text-slate-950 dark:hover:text-white text-sm font-medium border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none transition-all"
              >
                <FileDown className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Highlights / Tech Strip */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/10 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-white/50 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                JavaScript & Node.js
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                React & Next.js
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                MongoDB Atlas & SQL
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Digital HUD Workspace Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative group rounded-2xl p-[1px] bg-gradient-to-b from-purple-500/20 via-slate-300/40 dark:via-white/5 to-purple-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              <div className="relative rounded-2xl bg-white dark:bg-[#0a0c12] backdrop-blur-xl p-5 border border-slate-200 dark:border-white/10 overflow-hidden text-slate-900 dark:text-white">
                
                {/* HUD Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-500 dark:text-white/40">omkar-terminal // 2026</span>
                  </div>
                  <button
                    onClick={copyCode}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 text-[11px] font-mono text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-colors"
                    title="Copy snippet"
                  >
                    {copiedSnippet ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 pt-3 pb-2">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      activeTab === 'profile'
                        ? 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 font-semibold'
                        : 'text-slate-600 dark:text-white/50 hover:text-slate-900 dark:hover:text-white/80 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Developer.ts</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      activeTab === 'stack'
                        ? 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 font-semibold'
                        : 'text-slate-600 dark:text-white/50 hover:text-slate-900 dark:hover:text-white/80 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Stack.config</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      activeTab === 'terminal'
                        ? 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 font-semibold'
                        : 'text-slate-600 dark:text-white/50 hover:text-slate-900 dark:hover:text-white/80 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Shell</span>
                  </button>
                </div>

                {/* Code Window */}
                <div className="mt-3 p-4 rounded-xl bg-slate-50 dark:bg-[#06070a] border border-slate-200/80 dark:border-white/5 font-mono text-xs text-slate-800 dark:text-white/80 leading-relaxed overflow-x-auto min-h-[260px] max-h-[300px]">
                  <pre className="text-slate-800 dark:text-white/80 font-mono text-[12px] leading-5 whitespace-pre">
                    {codeSnippets[activeTab]}
                  </pre>
                </div>

                {/* Live System Telemetry Strip */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-white/40">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>API Gateway: ACTIVE</span>
                  </div>
                  <div>Stack: MERN & Next.js</div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
