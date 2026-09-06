'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Layers, Terminal, Compass, Sparkles, MapPin } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import GlowCard from '@/components/ui/GlowCard';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT OMKAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            More than just code.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-white/60 max-w-2xl leading-relaxed">
            {personalInfo.aboutLead}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Profile Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-sm">
              {/* Subtle back ambient glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-purple-600/20 via-violet-500/15 to-emerald-500/15 blur-xl opacity-60 group-hover:opacity-90 transition duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0d0f17] p-2.5 shadow-xl dark:shadow-none">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-surface-200">
                  <Image
                    src="/images/profile.png"
                    alt="Omkar Dhanave — Full Stack Web Developer"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-[#090b10] via-transparent to-transparent opacity-60" />
                </div>

                {/* Profile Card Footer Badge */}
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Omkar Dhanave</h3>
                    <p className="text-xs text-slate-500 dark:text-white/50 font-mono">Full Stack Web Developer</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-mono bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Satara, India</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Story & Pillar Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="space-y-4 text-sm sm:text-base">
              {personalInfo.aboutParagraphs.map((para, i) => (
                <p key={i} className="text-slate-700 dark:text-white/75 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* 4 Authentic Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {personalInfo.pillars.map((pillar, index) => (
                <GlowCard key={index} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-600 dark:text-purple-400">
                      {index === 0 && <Layers className="w-4 h-4" />}
                      {index === 1 && <Terminal className="w-4 h-4" />}
                      {index === 2 && <Compass className="w-4 h-4" />}
                      {index === 3 && <Sparkles className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm tracking-tight mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
