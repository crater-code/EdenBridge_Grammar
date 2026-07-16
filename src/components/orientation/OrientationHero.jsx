import React from 'react'
import { motion } from 'framer-motion'
import orientationBg from '../Orientation.png'

export default function OrientationHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${orientationBg})`,
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-[#092012]/80" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-[#cba641] mb-6 sm:mb-8 leading-tight px-4"
        >
          Orientation Phase
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-[#f2e6b1] mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed font-light px-4"
        >
          Exploring Interests and Discovering Your Path
        </motion.p>
      </div>
    </section>
  )
}

