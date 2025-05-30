import Link from "next/link";

import React from 'react'

const Contact = () => {
    return (
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
    )
}

export default Contact