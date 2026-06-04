'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Mail, ArrowUp, Heart } from 'lucide-react';
import GitHubIcon from './GitHubIcon';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: GitHubIcon, href: 'https://github.com/Aravid2316', label: 'GitHub', id: 'footer-github' },
  { icon: ExternalLink, href: 'https://www.linkedin.com/in/aravindan-g-03564320a', label: 'LinkedIn', id: 'footer-linkedin' },
  { icon: Mail, href: 'mailto:aravindaravindan231@gmail.com', label: 'Email', id: 'footer-email' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#0F172A] border-t border-white/5 overflow-hidden">
      {/* Top gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#2DD4BF]/40 to-transparent" />

      <div className="container-xl py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#2DD4BF] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#14B8A6]/30">
                AG
              </div>
              <span className="font-bold text-white">Aravindan G</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Frontend Developer building scalable web and mobile experiences with React, Next.js, and React Native.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.id}
                    id={s.id}
                    href={s.href}
                    target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/8 transition-all duration-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )})}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
              Built With
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion',
              ].map((tech) => (
                <span key={tech} className="tech-badge text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <a href="#contact" id="footer-cta" className="btn-primary text-sm py-2.5 px-5 inline-flex">
                Hire Me
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-slate-500 text-sm flex flex-wrap items-center gap-1.5 max-w-full"
          >
            © {new Date().getFullYear()} Aravindan G. Made with
            <Heart size={13} className="text-red-400 fill-red-400" />
            and a lot of TypeScript.
          </motion.p>

          <button
            id="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex-shrink-0 flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
          >
            Back to top
            <span className="w-7 h-7 rounded-lg glass flex items-center justify-center group-hover:bg-white/8 transition-all group-hover:-translate-y-0.5">
              <ArrowUp size={13} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
