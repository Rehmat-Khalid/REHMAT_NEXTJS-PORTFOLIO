import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import React from 'react';


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
