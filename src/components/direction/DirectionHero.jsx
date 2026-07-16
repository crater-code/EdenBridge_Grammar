import React from 'react'
import { motion } from 'framer-motion'
import directionBg from '../direction.png'

export default function DirectionHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${directionBg})`,
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-[#1c2e26]/80" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-[#cba641] mb-6 sm:mb-8 leading-tight px-4"
        >
          Direction Phase
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-[#cba641] mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light px-4"
        >
          The final and most purposeful stage of the Edenbridge journey. Here, learning sharpens into clarity, 
          independence deepens into leadership, and preparation becomes tangible.
        </motion.p>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-[#cba641] mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed font-light px-4"
        >
          Ready to lead with purpose
        </motion.p>
      </div>
    </section>
  )
}

