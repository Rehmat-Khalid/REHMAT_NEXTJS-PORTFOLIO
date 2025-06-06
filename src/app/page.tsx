'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 flex flex-wrap md:flex-nowrap justify-between items-center px-6 py-4 bg-black/90 backdrop-blur shadow-md border-b border-purple-600">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-purple-400 tracking-wide mb-2 md:mb-0">Rehmat Khalid</h1>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-base sm:text-lg">
          <Link href="#" className="hover:text-purple-300 transition">Home</Link>
          <Link href="#skills" className="hover:text-purple-300 transition">Skills</Link>
          <Link href="#projects" className="hover:text-purple-300 transition">Projects</Link>
          <Link href="#contact" className="hover:text-purple-300 transition">Contact</Link>
          <Link href="https://github.com/Rehmat-Khalid" target="_blank" className="hover:text-purple-300 transition">GitHub</Link>
          <Link href="https://www.linkedin.com/in/rehmatkhalid" target="_blank" className="hover:text-purple-300 transition">LinkedIn</Link>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <details className="relative">
            <summary className="cursor-pointer text-purple-300">Menu</summary>
            <div className="absolute right-0 mt-2 bg-black border border-purple-600 rounded-lg shadow-lg p-4 z-50 flex flex-col space-y-3 text-sm">
              <Link href="#" className="hover:text-purple-300">Home</Link>
              <Link href="#skills" className="hover:text-purple-300">Skills</Link>
              <Link href="#projects" className="hover:text-purple-300">Projects</Link>
              <Link href="#contact" className="hover:text-purple-300">Contact</Link>
              <Link href="https://github.com/Rehmat-Khalid" target="_blank" className="hover:text-purple-300">GitHub</Link>
              <Link href="https://www.linkedin.com/in/rehmatkhalid" target="_blank" className="hover:text-purple-300">LinkedIn</Link>
            </div>
          </details>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 py-20 bg-gradient-to-b from-black to-purple-950">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-purple-400 mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I&apos;m Rehmat Khalid
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-2xl max-w-3xl text-purple-100 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A passionate Full-Stack Developer and future Cloud Applied Generative AI Engineer from Karachi, Pakistan.
          I completed my IT course at Governor House Karachi and currently study at Karachi University.
          I always strive to deliver my best. Insha&apos;Allah, my goal is to become one of the top IT experts in the world.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-20 bg-gradient-to-b from-black to-purple-950">
        <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-300">My Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center text-purple-100 font-medium">
          {[
            'HTML', 'CSS', 'JavaScript', 'TypeScript',
            'React', 'Tailwind CSS', 'Node.js', 'Next.js',
            'Python', 'Data Entry', 'Graphic Design', 'Figma'
          ].map((skill, index) => (
            <div key={index} className="bg-black rounded-xl shadow-md hover:shadow-purple-500/30 p-4 border border-purple-700">
              {skill}
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-purple-200 text-sm">
          I am an expert in programming languages and experienced in design and data operations.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20 bg-[#0a0a0a]">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-300">My Projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Growth Mindset App', url: 'https://rk-growthmindsetapp-3kvzrsxqyduqkr7jsfg8qu.streamlit.app/' },
            { title: 'CV Generator', url: 'https://rk-milestone1-2.vercel.app/' },
            { title: 'Personal Library', url: 'https://rk-personallibrarymanager.streamlit.app/' },
            { title: 'Unit Convertor', url: 'https://rk-unitconvertor-fhwjappjayzypf5ovcnpqx.streamlit.app/' },
            { title: 'Secure Data', url: 'https://rk-assignment-5.streamlit.app/' },
            { title: 'HTML CSS Portfolio', url: 'https://rk-html-css-portfolio-j9tj.vercel.app/' },
            { title: 'Custom CSS Portfolio', url: 'https://custom-css-responsive-portfolio.vercel.app/' },
            { title: 'Furniture Website', url: 'https://furniroweb-main-main.vercel.app/' },
            { title: 'Password Strength Meter', url: 'https://rk-passwordstrengthmeter.streamlit.app/' }
          ].map((project, index) => (
            <a key={index} href={project.url} target="_blank" className="bg-black p-6 rounded-xl shadow-lg border border-purple-700 hover:shadow-purple-500/50 hover:bg-purple-950 transition">
              <h4 className="text-xl font-semibold mb-2 text-purple-400">{project.title}</h4>
              <p className="text-sm text-purple-200 break-words">{project.url}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-gradient-to-b from-black to-purple-950">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-purple-300">Contact Me</h3>
        <p className="text-center text-purple-100 mb-6 text-base sm:text-lg">
          I&apos;m open to collaboration, internships, or projects. Let&apos;s connect!
        </p>
        <div className="flex flex-col items-center gap-3 text-base sm:text-lg">
          <Link href="mailto:rehmatkhalid11@gmail.com" className="text-purple-400 hover:underline">rehmatkhalid11@gmail.com</Link>
          <Link href="https://github.com/Rehmat-Khalid" target="_blank" className="text-purple-400 hover:underline">GitHub Profile</Link>
          <Link href="https://www.linkedin.com/in/rehmatkhalid" target="_blank" className="text-purple-400 hover:underline">LinkedIn Profile</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-purple-300 py-6 border-t border-purple-800 bg-black text-sm">
        &copy; {new Date().getFullYear()} Rehmat Khalid. Crafted with 💜 using Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}
