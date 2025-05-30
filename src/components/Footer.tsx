import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center text-purple-300 py-6 border-t border-purple-800 bg-black text-sm">
            &copy; {new Date().getFullYear()} Rehmat Khalid. Crafted with 💜 using Next.js & Tailwind CSS.
        </footer>
    )
}

export default Footer