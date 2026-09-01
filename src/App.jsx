import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PixelRacerShowcase from './components/PixelRacerShowcase';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <PixelRacerShowcase />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
