'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import FeaturedWork from './components/FeaturedWork';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedWork />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
