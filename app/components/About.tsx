'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Smartphone, Users, Zap } from 'lucide-react';

const stats = [
  { value: '4+', label: 'Years Experience', icon: Code2, color: 'from-[#14B8A6] to-[#2DD4BF]' },
  { value: '2', label: 'Production Apps', icon: Smartphone, color: 'from-[#2DD4BF] to-[#67E8F9]' },
  { value: '∞', label: 'Components Built', icon: Zap, color: 'from-[#67E8F9] to-[#14B8A6]' },
  { value: '100%', label: 'Team Collaboration', icon: Users, color: 'from-[#14B8A6] to-[#67E8F9]' },
];

const highlights = [
  { text: 'React.js & Next.js', color: 'text-[#2DD4BF]' },
  { text: 'TypeScript', color: 'text-[#67E8F9]' },
  { text: 'React Native', color: 'text-[#2DD4BF]' },
  { text: 'Tailwind CSS', color: 'text-[#14B8A6]' },
  { text: 'Strapi CMS', color: 'text-[#67E8F9]' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding bg-[#0F172A] relative overflow-hidden">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="orb w-[500px] h-[500px] bg-[#14B8A6]/8 -right-32 top-0 pointer-events-none"
      />

      <div className="container-xl" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-4 mx-auto inline-flex">About Me</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Crafting <span className="gradient-text">Digital Experiences</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6 text-center lg:text-left w-full max-w-3xl mx-auto lg:mx-0"
          >
            {/* Decorative line */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-[#14B8A6]/60 to-transparent" />
              <span className="text-xs font-semibold text-[#67E8F9] tracking-widest uppercase">
                Who I Am
              </span>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed">
              I&apos;m a <span className="text-white font-semibold">Frontend Developer</span> with{' '}
              <span className="text-[#67E8F9] font-semibold">4 years of experience</span>{' '}
              building high-performance web and mobile applications used by thousands of users.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I specialize in creating scalable, maintainable, and user-centric digital experiences
              using modern frontend technologies.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Throughout my career, I&apos;ve contributed to large-scale production applications in
              the travel technology domain, developing reusable component architectures, integrating
              REST APIs, optimizing application performance, and delivering seamless user
              experiences across web and mobile platforms.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I work closely with designers, product managers, QA engineers, and backend teams to
              transform complex business requirements into intuitive, reliable, and accessible
              products.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My experience spans both customer-facing applications and internal systems, with a
              strong focus on code quality, scalability, and long-term maintainability.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My core expertise includes React.js, Next.js, TypeScript, React Native, Tailwind CSS,
              and modern frontend development practices. I&apos;m passionate about building
              products that not only look great but also deliver measurable business value and
              exceptional user experiences.
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
            <div className="pt-2 flex justify-center lg:justify-start">
              <a href="#contact" id="about-contact-cta" className="btn-primary inline-flex justify-center">
                Let&apos;s Build Something Great
              </a>
            </div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
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
