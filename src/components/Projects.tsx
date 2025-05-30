import React from 'react'

const Projects = () => {
    return (
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
    )
}

export default Projects