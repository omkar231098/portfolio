'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Milestone, Calendar } from 'lucide-react';
import { journeyMilestones } from '@/data/portfolioData';
import GlowCard from '@/components/ui/GlowCard';

export default function JourneySection() {
  return (
    <section id="journey" className="relative py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs font-mono mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>GROWTH TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            My Journey
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-white/60 max-w-xl leading-relaxed">
            The engineering path and practical milestones that shaped my development expertise.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Central Connecting Line */}
          <div className="absolute top-4 bottom-4 left-6 sm:left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-purple-500 via-violet-400 to-transparent opacity-40 dark:opacity-30" />

          <div className="space-y-12">
            {journeyMilestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0"
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-4 w-6 h-6 rounded-full border-2 border-purple-500 bg-white dark:bg-[#07080b] flex items-center justify-center z-20 shadow-[0_0_12px_rgba(168,85,247,0.4)]">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>

                  {/* Left Side (Desktop) */}
                  <div className={`w-full sm:w-1/2 pl-14 sm:pl-0 ${isEven ? 'sm:pr-10 sm:text-right' : 'sm:order-2 sm:pl-10'}`}>
                    <GlowCard className="p-6">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs font-mono mb-3 ${isEven ? 'sm:ml-auto' : ''}`}>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-500 dark:text-white/50 mb-3">
                        {item.organization}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                        {item.tags.map((tag, tIndex) => (
                          <span
                            key={tIndex}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 text-slate-600 dark:text-white/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </GlowCard>
                  </div>

                  {/* Empty Spacer Column on Desktop */}
                  <div className={`hidden sm:block w-1/2 ${isEven ? 'order-2 pl-10' : 'order-1 pr-10'}`} />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
