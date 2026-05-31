'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Clock, Laptop, Smartphone, Code2, GitBranch,
  Database, Layers, Zap, Users,
} from 'lucide-react';

const achievements = [
  {
    icon: Clock,
    value: '4+',
    title: 'Years of Professional Experience',
    description: 'Consistently delivering production-grade applications since 2021.',
    gradient: 'from-indigo-500 to-purple-600',
    glow: 'rgba(99,102,241,0.25)',
  },
  {
    icon: Laptop,
    value: '1',
    title: 'Production Web Application',
    description: 'Contributed to a large-scale travel platform used by thousands daily.',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59,130,246,0.25)',
  },
  {
    icon: Smartphone,
    value: '1',
    title: 'Production Mobile Application',
    description: 'Built and shipped features on a cross-platform React Native app.',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'rgba(168,85,247,0.25)',
  },
  {
    icon: Code2,
    value: '2',
    title: 'React & Next.js Expertise',
    description: 'Deep expertise in React ecosystem — hooks, SSR, SSG, and performance.',
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'rgba(6,182,212,0.25)',
  },
  {
    icon: GitBranch,
    value: '∞',
    title: 'React Native Experience',
    description: 'Built native iOS & Android features with smooth UX and performance.',
    gradient: 'from-fuchsia-500 to-purple-500',
    glow: 'rgba(217,70,239,0.25)',
  },
  {
    icon: Database,
    value: 'CMS',
    title: 'CMS Integration Experience',
    description: 'Integrated Strapi CMS for content-driven pages and dynamic routing.',
    gradient: 'from-violet-500 to-indigo-500',
    glow: 'rgba(139,92,246,0.25)',
  },
  {
    icon: Layers,
    value: '100+',
    title: 'Reusable Component Architecture',
    description: 'Built and maintained design-system-level component libraries.',
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16,185,129,0.25)',
  },
  {
    icon: Zap,
    value: 'LCP',
    title: 'Performance Optimization',
    description: 'Improved Core Web Vitals, bundle sizes, and rendering performance.',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'rgba(245,158,11,0.25)',
  },
  {
    icon: Users,
    value: '✓',
    title: 'Cross-Functional Collaboration',
    description: 'Worked with designers, QA, backend engineers, and product managers.',
    gradient: 'from-rose-500 to-pink-500',
    glow: 'rgba(244,63,94,0.25)',
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" className="section-padding bg-[#040d1a] relative overflow-hidden">
      {/* Background */}
      <div
        aria-hidden="true"
        className="orb w-[500px] h-[500px] bg-purple-600/8 left-1/4 top-1/2 -translate-y-1/2 pointer-events-none"
      />

      <div className="container-xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4 mx-auto inline-flex">Milestones</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">
            Four years of meaningful contributions to real products that ship to production.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass glass-hover rounded-2xl p-6 group relative overflow-hidden"
            >
              {/* Glow effect */}
              <div
                className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                style={{ background: a.glow }}
              />

              {/* Icon + Value row */}
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${a.gradient} flex items-center justify-center shadow-lg`}
                >
                  <a.icon size={18} className="text-white" />
                </div>
                <span
                  className={`text-2xl font-extrabold bg-gradient-to-r ${a.gradient} bg-clip-text text-transparent`}
                >
                  {a.value}
                </span>
              </div>

              {/* Title + Description */}
              <div className="relative z-10">
                <h3 className="font-bold text-white text-sm leading-snug mb-2">
                  {a.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">{a.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
