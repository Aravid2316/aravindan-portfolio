'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const responsibilities = [
  'Developed and maintained React.js and Next.js web applications serving thousands of users daily.',
  'Built reusable UI component libraries that accelerated team development velocity.',
  'Integrated REST APIs and Strapi CMS for dynamic, content-driven features.',
  'Developed and maintained React Native mobile applications for iOS and Android.',
  'Collaborated with designers, QA, backend engineers, and product teams to deliver features on time.',
  'Implemented performance optimizations — lazy loading, code splitting, image optimization.',
  'Contributed to production releases, feature development, and critical bug fixes.',
  'Participated in code reviews, design discussions, and sprint planning sessions.',
];

const techUsed = [
  'React.js', 'Next.js', 'TypeScript', 'React Native',
  'Tailwind CSS', 'Strapi CMS', 'REST APIs', 'Jotai',
  'Context API', 'GitHub', 'NGINX',
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-padding bg-[#0F172A] relative overflow-hidden">
      {/* Background */}
      <div
        aria-hidden="true"
        className="orb w-[400px] h-[400px] bg-[#67E8F9]/8 -right-20 bottom-0 pointer-events-none"
      />

      <div className="container-xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-4 mx-auto inline-flex">Professional Journey</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-12">
            {/* Vertical line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
              className="timeline-line"
            />

            {/* Timeline Node */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute left-0 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#2DD4BF] shadow-lg shadow-[#14B8A6]/50 -translate-x-1/2"
            >
              <div className="absolute inset-0 rounded-full bg-[#14B8A6]/30 animate-ping" />
            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="glass rounded-3xl p-6 sm:p-8 mb-8"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#14B8A6] to-[#2DD4BF] flex items-center justify-center shadow-lg shadow-[#14B8A6]/30 flex-shrink-0">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Frontend Developer</h3>
                    <p className="text-[#2DD4BF] font-semibold mt-0.5">Pickyourtrail</p>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-2">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar size={13} />
                    <span>4 Years</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin size={13} />
                    <span>Chennai, India</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#14B8A6]/15 border border-[#14B8A6]/30 text-[#2DD4BF] text-xs font-semibold">
                    Full-Time
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                  Key Responsibilities
                </p>
                <ul className="space-y-3">
                  {responsibilities.map((resp, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                      className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                    >
                      <ChevronRight
                        size={14}
                        className="text-[#2DD4BF] flex-shrink-0 mt-0.5"
                      />
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/5 mb-6" />

              {/* Tech Used */}
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {techUsed.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* End node */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1 }}
              className="absolute left-0 bottom-6 w-3 h-3 rounded-full bg-white/20 -translate-x-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
