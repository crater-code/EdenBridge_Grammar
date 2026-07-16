import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import NeuralDiagram from '../neural-diagram-3d/NeuralDiagram'

export default function DirectionPhaseOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#cba641] to-[#cba641] mb-4 sm:mb-6">
            Phase Overview
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#cba641] to-[#cba641] mx-auto mb-8" />
        </motion.div>

        {/* What This Phase Is About */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-[#cba641]/30 p-4 sm:p-6 lg:p-8">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#cba641] to-[#cba641] mb-3 sm:mb-4 lg:mb-6"
              >
                What This Phase Is About
              </motion.h3>
              
              <div className="space-y-4 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-base sm:text-lg lg:text-xl text-gray-300 text-justify"
                >
                  The Direction Phase represents the final and most purposeful stage of the Edenbridge journey. 
                  Here, learning sharpens into clarity, independence deepens into leadership, and preparation becomes tangible.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-base sm:text-lg lg:text-xl text-gray-300 text-justify"
                >
                  Students operate with increasing autonomy, engaging in advanced academic study alongside high-level 
                  applied projects, mentorship, and real-world challenges. Subject mastery is strengthened to meet 
                  international standards, while Quests evolve into substantial, portfolio-worthy work that demonstrates 
                  capability beyond examinations.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-base sm:text-lg lg:text-xl text-gray-300 text-justify"
                >
                  This phase focuses explicitly on transition—into university, enterprise, leadership, and responsible 
                  adulthood. Students refine their identity, clarify their strengths, and make informed decisions about 
                  pathways aligned to both ambition and values.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-gradient-to-r from-[#cba641]/20 to-[#cba641]/20 rounded-xl p-4 lg:p-6 mt-6 border border-[#cba641]/30"
                >
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 text-justify">
                    By the end of the Direction Phase, learners are not only academically prepared—they are 
                    intellectually confident, ethically grounded, technologically fluent, and ready to step beyond 
                    the classroom with competence and purpose.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Neural Diagram 3D */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] flex items-center justify-center order-1 lg:order-2"
          >
            <NeuralDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

