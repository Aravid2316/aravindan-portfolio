'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowDown, ExternalLink, Mail, Download, Sparkles } from 'lucide-react';
import GitHubIcon from './GitHubIcon';



const socials = [
  {
    icon: GitHubIcon,
    href: 'https://github.com/Aravid2316',
    label: 'GitHub',
    id: 'hero-github-link',
  },
  {
    icon: ExternalLink,
    href: 'https://www.linkedin.com/in/aravindan-g-03564320a',
    label: 'LinkedIn',
    id: 'hero-linkedin-link',
  },
  {
    icon: Mail,
    href: 'mailto:aravindaravindan231@gmail.com',
    label: 'Email',
    id: 'hero-email-link',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item: Variants  = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start pt-12 sm:pt-14 pb-12 bg-[#0F172A]"
    >
      {/* Background Orbs */}
      <div aria-hidden="true" className="pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="orb w-[600px] h-[600px] bg-[#14B8A6]/20 -top-40 -left-32"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="orb w-[500px] h-[500px] bg-[#2DD4BF]/20 top-20 -right-32"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="orb w-[400px] h-[400px] bg-[#67E8F9]/15 bottom-10 left-1/4"
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0F172A] to-transparent" />
      </div>

      {/* Content */}
      <div className="container-xl relative z-10 pt-16 pb-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Status badge */}
          <motion.div variants={item} className="flex justify-center mb-8">
            <div className="section-label">
              <Sparkles size={12} />
              Let&apos;s Create Exceptional Experiences
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-4 leading-none"
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">Aravindan G</span>
          </motion.h1>

          {/* Role */}
          <motion.div variants={item} className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#2DD4BF]" />
            <p className="text-xl sm:text-2xl font-semibold text-[#2DD4BF] tracking-wide">
              Frontend Developer
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#2DD4BF]" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-4"
          >
            Building scalable web and mobile experiences with{' '}
            <span className="text-[#2DD4BF] font-medium">React</span>,{' '}
            <span className="text-[#67E8F9] font-medium">Next.js</span>,{' '}
            <span className="text-[#2DD4BF] font-medium">TypeScript</span>, and{' '}
            <span className="text-[#67E8F9] font-medium">React Native</span>.
          </motion.p>

          <motion.p
            variants={item}
            className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed mb-10"
          >
            4 years of experience crafting production-grade applications — from
            travel platforms to cross-platform mobile apps — with a passion for
            performance and clean UI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a href="#projects" id="hero-view-work-btn" className="btn-primary w-full sm:w-auto justify-center">
              View My Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="/Aravindan-G-Resume.pdf"
              download
              id="hero-download-resume-btn"
              className="btn-outline w-full sm:w-auto justify-center"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a href="#contact" id="hero-contact-btn" className="btn-outline w-full sm:w-auto justify-center">
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={item} className="flex items-center justify-center gap-4 mb-12">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  id={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group w-11 h-11 rounded-xl glass glass-hover flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-8 bg-gradient-to-b from-[#14B8A6] to-transparent"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
