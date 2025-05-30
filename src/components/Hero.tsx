'use client'

import { motion } from 'framer-motion'
import React from 'react'

const Hero = () => {
  return (

    < section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 py-20 bg-gradient-to-b from-black to-purple-950" >
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
    </section >
  )
}

export default Hero