import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
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
    )
}

export default Header