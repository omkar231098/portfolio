'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { educationData } from '@/data/portfolioData';
import GlowCard from '@/components/ui/GlowCard';

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education & Qualifications
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-white/60 max-w-xl leading-relaxed">
            Rigorous technical training, software immersion, and foundational engineering education.
          </p>
        </div>

        {/* 2x2 Grid of Polished Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowCard className="p-6 sm:p-7 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs font-mono">
                      <Calendar className="w-3 h-3" />
                      <span>{item.period}</span>
                    </div>

                    <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-white/60 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:border-purple-500/30 transition-colors shadow-sm dark:shadow-none">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {item.degree}
                  </h3>

                  <p className="text-sm font-medium text-slate-800 dark:text-white/90 mb-3">
                    {item.institution}
                  </p>

                  {item.description && (
                    <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-white/40 font-mono">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>{item.location}</span>
                  </div>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Verified
                  </span>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
