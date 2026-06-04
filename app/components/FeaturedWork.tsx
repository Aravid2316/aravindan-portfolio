'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, ChevronRight, Globe, Smartphone } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 'pyt-web',
    title: 'Pickyourtrail Web Platform',
    type: 'Travel Planning & Booking Platform',
    url: 'https://pickyourtrail.com',
    image: '/pyt-web.png',
    imageAlt: 'Pickyourtrail web platform interface',
    icon: Globe,
    gradient: 'from-[#14B8A6] via-[#2DD4BF] to-[#67E8F9]',
    accentColor: 'teal',
    overview:
      'A large-scale travel platform enabling users to discover, customize, and book complete travel experiences — from flights and hotels to curated holiday packages across 50+ destinations worldwide.',
    contributions: [
      'Built pixel-perfect React.js and Next.js user interfaces from Figma designs.',
      'Developed a reusable component library accelerating feature delivery across teams.',
      'Integrated REST APIs and Strapi CMS for dynamic, content-driven pages.',
      'Optimized Core Web Vitals — improving LCP and reducing bundle size by 30%.',
      'Collaborated with cross-functional teams on production releases and feature development.',
      'Implemented server-side rendering (SSR) for SEO-critical pages.',
    ],
    tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Strapi CMS', 'REST APIs'],
  },
  {
    id: 'pyt-mobile',
    title: 'Pickyourtrail Mobile App',
    type: 'Travel Planning & Booking Mobile App',
    url: 'https://pickyourtrail.com',
    image: '/pyt-mobile.png',
    imageAlt: 'Pickyourtrail mobile application',
    icon: Smartphone,
    gradient: 'from-[#2DD4BF] via-[#67E8F9] to-[#14B8A6]',
    accentColor: 'cyan',
    overview:
      'A cross-platform mobile application for iOS and Android, empowering travelers to plan, manage, and book their trips seamlessly. Built with React Native for a native-like experience.',
    contributions: [
      'Developed new features and screens in React Native from design specs.',
      'Built a reusable mobile UI component library for consistency across the app.',
      'Integrated third-party services: payment gateways, maps, and analytics.',
      'Optimized app performance — reduced render time and improved scroll smoothness.',
      'Fixed production issues and participated in App Store / Play Store releases.',
      'Collaborated with design and backend teams on API contracts and UX improvements.',
    ],
    tech: ['React Native', 'TypeScript', 'Jotai', 'REST APIs', 'iOS', 'Android'],
  },
];

export default function FeaturedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section-padding relative overflow-hidden" style={{ background: '#0F172A' }}>
      {/* Background */}
      <div
        aria-hidden="true"
        className="orb w-[500px] h-[500px] bg-[#14B8A6]/8 left-1/2 -translate-x-1/2 -top-20 pointer-events-none"
      />

      <div className="container-xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-4 mx-auto inline-flex">Case Studies</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">
            Production applications I&apos;ve contributed to, used by real travelers every day.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((project, projectIdx) => (
            <motion.article
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + projectIdx * 0.15 }}
              className="glass rounded-3xl overflow-hidden"
            >
              {/* Image Banner */}
              <div className="relative h-60 sm:h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-30`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />

                {/* Project type badge */}
                <div className="absolute top-4 left-4">
                  <div className="section-label text-xs">
                    <project.icon size={11} />
                    {project.type}
                  </div>
                </div>

                {/* Link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`${project.id}-link`}
                  className="absolute top-4 right-4 w-9 h-9 rounded-xl glass flex items-center justify-center text-white hover:bg-white/20 transition-all"
                  aria-label={`Visit ${project.title}`}
                >
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Title */}
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{project.overview}</p>
                </div>

                {/* Two column layout */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contributions */}
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                      My Contributions
                    </p>
                    <ul className="space-y-3">
                      {project.contributions.map((contrib, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
                        >
                          <ChevronRight size={13} className="text-[#2DD4BF] flex-shrink-0 mt-0.5" />
                          {contrib}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech */}
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`${project.id}-visit-btn`}
                        className="btn-primary inline-flex"
                      >
                        Visit Platform
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
