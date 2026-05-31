'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Smartphone, Users, Zap } from 'lucide-react';

const stats = [
  { value: '4+', label: 'Years Experience', icon: Code2, color: 'from-indigo-500 to-purple-500' },
  { value: '2', label: 'Production Apps', icon: Smartphone, color: 'from-purple-500 to-pink-500' },
  { value: '∞', label: 'Components Built', icon: Zap, color: 'from-cyan-500 to-blue-500' },
  { value: '100%', label: 'Team Collaboration', icon: Users, color: 'from-emerald-500 to-teal-500' },
];

const highlights = [
  { text: 'React.js & Next.js', color: 'text-indigo-300' },
  { text: 'TypeScript', color: 'text-purple-300' },
  { text: 'React Native', color: 'text-cyan-300' },
  { text: 'Tailwind CSS', color: 'text-emerald-300' },
  { text: 'Strapi CMS', color: 'text-pink-300' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding bg-[#040d1a] relative overflow-hidden">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="orb w-[500px] h-[500px] bg-indigo-600/8 -right-32 top-0 pointer-events-none"
      />

      <div className="container-xl" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4 mx-auto inline-flex">About Me</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Crafting <span className="gradient-text">Digital Experiences</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Decorative line */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/60 to-transparent" />
              <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase">
                Who I Am
              </span>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed">
              I&apos;m a <span className="text-white font-semibold">Frontend Developer</span> with{' '}
              <span className="text-indigo-300 font-semibold">4 years</span> of professional
              experience building scalable web and mobile applications that users love.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I&apos;ve worked on large-scale production applications in the{' '}
              <span className="text-white font-medium">travel industry</span>, building reusable
              component systems, integrating REST APIs, optimizing performance, and collaborating
              with cross-functional teams — designers, QA, backend engineers, and product managers.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My focus is always on writing clean, maintainable code that performs well and
              delivers exceptional user experiences across both web and mobile platforms.
            </p>

            {/* Tech stack pills */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {highlights.map((h) => (
                  <span
                    key={h.text}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium glass ${h.color} border border-white/5`}
                  >
                    {h.text}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a href="#contact" id="about-contact-cta" className="btn-primary inline-flex">
                Let&apos;s Work Together
              </a>
            </div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4 group"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                >
                  <stat.icon size={18} className="text-white" />
                </div>
                <div>
                  <div
                    className={`text-3xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 mt-0.5 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
