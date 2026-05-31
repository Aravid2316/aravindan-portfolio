'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';
import GitHubIcon from './GitHubIcon';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });


  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ background: '#060f20' }}
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="orb w-[500px] h-[500px] bg-indigo-600/10 right-0 top-0 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="orb w-[400px] h-[400px] bg-purple-600/8 -left-20 bottom-0 pointer-events-none"
      />

      <div className="container-xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4 mx-auto inline-flex">Get In Touch</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let&apos;s Build Something{' '}
            <span className="gradient-text">Great Together</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">
            Open to frontend engineering opportunities, exciting projects, and meaningful collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="glass rounded-3xl p-8 h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's Connect
            </h3>

            <div className="space-y-5">
              <a
                href="mailto:aravindaravindan231@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>aravindaravindan231@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/aravindan-g-03564320a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <ExternalLink size={20} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/Aravid2316"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <GitHubIcon className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>

            <p className="text-slate-400 mt-8 leading-relaxed">
              I'm open to discussing frontend development opportunities,
              collaborations, and exciting projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
