'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, CheckCircle, ArrowUpRight } from 'lucide-react';
import { projectsData } from '@/data/portfolioData';
import GlowCard from '@/components/ui/GlowCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED PORTFOLIO</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                Selected Work
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-white/60 max-w-xl leading-relaxed">
                Full-stack web applications featuring real-world architectures, responsive interfaces, and production deployments.
              </p>
            </div>
            <a
              href="https://github.com/omkar231098"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group"
            >
              <span>Explore all GitHub repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Project Editorial Case Studies */}
        <div className="space-y-16">
          {projectsData.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <GlowCard className="p-6 sm:p-8 lg:p-10 group">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Visual Media Column */}
                    <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-[#07090e] shadow-xl dark:shadow-2xl">
                        {/* Aspect ratio container */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden">
                          <Image
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                        </div>

                        {/* Top bar indicator */}
                        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span>{project.category}</span>
                        </div>
                      </div>
                    </div>

                    {/* Editorial Content Column */}
                    <div className={`lg:col-span-5 flex flex-col justify-between ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div>
                        {/* Category badge */}
                        <span className="text-xs font-mono uppercase tracking-widest text-purple-600 dark:text-purple-400 font-semibold mb-2 block">
                          Case Study // 0{index + 1}
                        </span>

                        {/* Project Title */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed mb-6">
                          {project.longDescription}
                        </p>

                        {/* Feature Highlights */}
                        <div className="space-y-2 mb-6">
                          {project.highlights.map((highlight, hIndex) => (
                            <div key={hIndex} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-white/75">
                              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span className="leading-snug">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-1.5 mb-8">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/10">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-white/90 dark:text-black font-semibold text-xs sm:text-sm transition-all shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                          >
                            <span>Live Deployment</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white text-xs sm:text-sm font-medium border border-slate-200 dark:border-white/10 transition-all"
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>
                      </div>

                    </div>

                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        {/* View All Projects Interaction */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/omkar231098?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white dark:bg-white/[0.03] hover:bg-slate-50 dark:hover:bg-white/[0.07] border border-slate-200 dark:border-white/10 hover:border-purple-500/40 text-sm font-medium text-slate-800 dark:text-white transition-all group shadow-sm dark:shadow-lg"
          >
            <Github className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>View All Repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-white/50 group-hover:text-purple-600 dark:group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
