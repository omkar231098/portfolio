'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import ThemeToggle from '@/components/ui/ThemeToggle';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#journey' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav
            className={`flex items-center justify-between px-4 py-2.5 sm:px-5 sm:py-3 rounded-full transition-all duration-300 ${
              isScrolled
                ? 'bg-white/85 dark:bg-[#0b0d14]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
                : 'bg-white/60 dark:bg-[#0b0d14]/40 backdrop-blur-sm border border-slate-200/60 dark:border-white/5'
            }`}
          >
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group outline-none"
              aria-label="Omkar Dhanave Home"
            >
              <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-surface-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-purple-500/50">
                <Image
                  src="/favicon.svg"
                  alt="OD Monogram"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  Omkar Dhanave
                </span>
                <span className="text-[11px] text-slate-500 dark:text-white/50 tracking-wider font-mono uppercase">
                  Full Stack Dev
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 px-2 py-1 rounded-full">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                      isActive
                        ? 'text-slate-950 dark:text-white font-semibold'
                        : 'text-slate-600 hover:text-slate-950 dark:text-white/60 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-white dark:bg-white/10 border border-slate-200/80 dark:border-white/10 shadow-sm"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Theme Toggle Button */}
              <ThemeToggle />

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-700 dark:text-white/80 hover:text-slate-950 dark:hover:text-white rounded-full border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 bg-white dark:bg-white/[0.02] hover:bg-slate-50 dark:hover:bg-white/[0.05] shadow-sm dark:shadow-none transition-all"
              >
                <FileDown className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Resume</span>
              </a>

              <Link
                href="#contact"
                className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-white rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all shadow-[0_2px_10px_rgba(139,92,246,0.3)] hover:shadow-[0_4px_15px_rgba(139,92,246,0.5)]"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Actions: Theme Toggle + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 dark:text-white/70 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors border border-slate-200 dark:border-white/10"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 p-5 rounded-2xl bg-white/95 dark:bg-[#0d1017]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-white/80 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-800 dark:text-white/90 border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5"
                >
                  <FileDown className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Download Resume</span>
                </a>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-indigo-600"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
