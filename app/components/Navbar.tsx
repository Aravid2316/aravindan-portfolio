'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const headerOffset = 120;
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.slice().reverse()) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= headerOffset && rect.bottom > headerOffset) {
          setActiveSection(id);
          return;
        }
      }

      if (window.scrollY < 80) {
        setActiveSection('');
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-2xl bg-[#0F172A]/80 border-b border-white/5 shadow-2xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#2DD4BF] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#14B8A6]/30 group-hover:shadow-[#2DD4BF]/60 transition-all duration-300 group-hover:scale-105">
              AG
              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-semibold text-white/80 hidden sm:block tracking-tight group-hover:text-white transition-colors">
              Aravindan<span className="text-[#2DD4BF]"> G</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-white/8"
                      transition={{ type: 'spring', duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/Aravindan-G-Resume.pdf"
              download
              id="nav-resume-btn"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-[#14B8A6]/40 text-[#2DD4BF] text-sm font-medium hover:bg-[#14B8A6]/10 hover:border-[#2DD4BF]/60 hover:text-[#67E8F9] transition-all duration-200"
            >
              <Download size={13} />
              Resume
            </a>
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden backdrop-blur-2xl bg-[#0F172A]/95 border-b border-white/5 overflow-hidden"
            >
            <div className="container-xl py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-300 hover:text-white hover:bg-white/5 transition-all px-4 py-3 rounded-lg font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-2 border-t border-white/5 mt-1">
                <a
                  href="/Aravindan-G-Resume.pdf"
                  download
                  className="flex items-center gap-2 text-[#2DD4BF] px-4 py-3 hover:text-[#67E8F9] transition-colors font-medium"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
