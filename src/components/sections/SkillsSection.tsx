'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Atom, 
  FileCode, 
  Palette, 
  Server, 
  Layers, 
  Workflow, 
  ShieldCheck, 
  Database, 
  Table, 
  Cloud, 
  GitBranch, 
  Send, 
  Globe,
  Cpu
} from 'lucide-react';
import { skillsData } from '@/data/portfolioData';
import GlowCard from '@/components/ui/GlowCard';

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud & Tools'] as const;
type CategoryType = (typeof categories)[number];

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-amber-500" />,
  Atom: <Atom className="w-5 h-5 text-cyan-500" />,
  FileCode: <FileCode className="w-5 h-5 text-orange-500" />,
  Palette: <Palette className="w-5 h-5 text-pink-500" />,
  Server: <Server className="w-5 h-5 text-emerald-500" />,
  Layers: <Layers className="w-5 h-5 text-violet-500" />,
  Workflow: <Workflow className="w-5 h-5 text-rose-500" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-indigo-500" />,
  Database: <Database className="w-5 h-5 text-green-500" />,
  Table: <Table className="w-5 h-5 text-blue-500" />,
  Cloud: <Cloud className="w-5 h-5 text-amber-600" />,
  GitBranch: <GitBranch className="w-5 h-5 text-rose-500" />,
  Send: <Send className="w-5 h-5 text-orange-500" />,
  Globe: <Globe className="w-5 h-5 text-teal-500" />,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-700 dark:text-violet-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering Toolkit
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-white/60 max-w-2xl leading-relaxed">
            Technologies, frameworks, and database architectures utilized across production and full-stack projects.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-sm">
            {categories.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all ${
                    isSelected
                      ? 'text-slate-950 dark:text-white bg-white dark:bg-white/10 shadow-sm border border-slate-200 dark:border-white/15'
                      : 'text-slate-600 hover:text-slate-950 dark:text-white/50 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <GlowCard className="p-5 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm dark:shadow-none">
                        {iconMap[skill.icon] || <Code2 className="w-5 h-5 text-purple-500" />}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-white/40 px-2 py-0.5 rounded-full border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02]">
                        {skill.category}
                      </span>
                    </div>

                    <h3 className="font-semibold text-slate-900 dark:text-white text-base tracking-tight mb-1.5 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-white/35 group-hover:text-slate-800 dark:group-hover:text-white/60 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Verified Production Skill</span>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
