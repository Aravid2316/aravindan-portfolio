'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

type Category = 'All' | 'Frontend' | 'Mobile' | 'State' | 'CMS' | 'Tools';

const categories: Category[] = ['All', 'Frontend', 'Mobile', 'State', 'CMS', 'Tools'];

const skills = [
  // Frontend
  { name: 'React.js', category: 'Frontend', level: 95, color: '#61DAFB', icon: '⚛️' },
  { name: 'Next.js', category: 'Frontend', level: 92, color: '#ffffff', icon: '▲' },
  { name: 'TypeScript', category: 'Frontend', level: 88, color: '#3178C6', icon: '📘' },
  { name: 'JavaScript', category: 'Frontend', level: 93, color: '#F7DF1E', icon: '🟨' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 90, color: '#06B6D4', icon: '🌊' },
  { name: 'HTML5', category: 'Frontend', level: 97, color: '#E34F26', icon: '🧱' },
  { name: 'CSS3', category: 'Frontend', level: 90, color: '#1572B6', icon: '🎨' },
  // Mobile
  { name: 'React Native', category: 'Mobile', level: 85, color: '#61DAFB', icon: '📱' },
  // State
  { name: 'Jotai', category: 'State', level: 85, color: '#6366f1', icon: '⚡' },
  { name: 'Context API', category: 'State', level: 90, color: '#a855f7', icon: '🔗' },
  { name: 'Redux', category: 'State', level: 88, color: '#764ABC', icon: '🔁' },
  // CMS
  { name: 'Strapi CMS', category: 'CMS', level: 83, color: '#8C4BFF', icon: '📦' },
  // Tools
  { name: 'GitHub', category: 'Tools', level: 90, color: '#ffffff', icon: '🐙' },
  { name: 'NGINX', category: 'Tools', level: 72, color: '#009639', icon: '🛡️' },
  { name: 'Postman', category: 'Tools', level: 88, color: '#FF6C37', icon: '📮' },
  { name: 'Figma', category: 'Tools', level: 80, color: '#F24E1E', icon: '🎭' },
];

const categoryColors: Record<Category, string> = {
  All: 'from-[#14B8A6] to-[#2DD4BF]',
  Frontend: 'from-[#14B8A6] to-[#2DD4BF]',
  Mobile: 'from-[#2DD4BF] to-[#67E8F9]',
  State: 'from-[#67E8F9] to-[#14B8A6]',
  CMS: 'from-[#14B8A6] to-[#2DD4BF]',
  Tools: 'from-[#2DD4BF] to-[#67E8F9]',
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All' ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="section-padding relative overflow-hidden" style={{ background: '#0F172A' }}>
      {/* Background */}
      <div
        aria-hidden="true"
        className="orb w-[400px] h-[400px] bg-[#2DD4BF]/10 -left-20 top-1/4 pointer-events-none"
      />

      <div className="container-xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-4 mx-auto inline-flex">Technical Skills</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">
            A curated set of technologies I use to build world-class products.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
          role="tablist"
          aria-label="Skill categories"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              id={`skill-tab-${cat.toLowerCase()}`}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? `bg-gradient-to-r ${categoryColors[cat]} text-white shadow-lg shadow-[#14B8A6]/25`
                  : 'glass text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="glass glass-hover rounded-2xl p-5 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm truncate">{skill.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{skill.category}</p>
                </div>
                <span className="text-xs font-bold text-slate-400 tabular-nums">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.04, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { label: 'Languages & Frameworks', value: '7+' },
            { label: 'Development Tools', value: '6+' },
            { label: 'Years of Professional Use', value: '4+' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-extrabold gradient-text-warm mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
