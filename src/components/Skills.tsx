import React from 'react'

const Skills = () => {
    return (
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
    )
}

export default Skills