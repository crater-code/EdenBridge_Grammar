import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import NeuralDiagram from '../neural-diagram-3d/NeuralDiagram'

export default function PhaseOverview() {
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
                  The Orientation Phase marks a shift from guided exploration to increasing intellectual 
                  independence and strategic thinking.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-base sm:text-lg lg:text-xl text-gray-300 text-justify"
                >
                  For learners aged <span className="text-[#cba641] font-semibold">10–14</span>, academic depth intensifies. 
                  Subject expertise becomes more defined, critical thinking sharpens, and learners begin navigating 
                  complex ideas across disciplines. Concepts are no longer simply explored—they are analysed, 
                  debated, and applied to authentic challenges.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-base sm:text-lg lg:text-xl text-gray-300 text-justify"
                >
                  Extended Quests evolve into interdisciplinary projects requiring research, collaboration, 
                  evidence, and presentation. Learners engage with real-world issues—sustainability, governance, 
                  technology, culture, ethics—developing the ability to connect knowledge across contexts.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-base sm:text-lg lg:text-xl text-gray-300 text-justify"
                >
                  Technology is used intentionally to enhance precision, research capability, and personalised 
                  progression, while educators mentor learners in managing time, challenge, and responsibility.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="bg-gradient-to-r from-[#cba641]/20 to-[#cba641]/20 rounded-xl p-4 lg:p-6 mt-6 border border-[#cba641]/30"
                >
                  <p className="text-[#cba641] font-semibold mb-3 text-sm lg:text-base">
                    This is the phase where learners begin to ask bigger questions:
                  </p>
                  <ul className="space-y-2">
                    {['Who am I becoming?', 'What strengths define me?', 'Where can I contribute meaningfully?'].map((question, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                        className="flex items-start gap-2 text-gray-300 text-sm lg:text-base"
                      >
                        <span className="text-[#cba641] mt-1">•</span>
                        <span>{question}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className="text-gray-300 mt-4 italic text-sm lg:text-base"
                  >
                    Academic mastery and identity formation move forward together.
                  </motion.p>
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

        {/* Lifelong Outcomes & Key Competencies - Card Layout */}
        <div className="mt-16 lg:mt-20 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-8 lg:mb-12"
          >
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-serif text-[#cba641] mb-4">
              Outcomes & Competencies
            </h3>
            <div className="w-24 h-0.5 bg-[#cba641]/40 mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Lifelong Outcomes Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-black/40 backdrop-blur-md rounded-2xl border border-[#cba641]/30 p-6 lg:p-8 hover:border-[#cba641]/50 transition-all duration-300"
            >
              <h4 className="text-lg sm:text-xl lg:text-2xl font-serif text-[#cba641] mb-3 sm:mb-4 lg:mb-6">Lifelong Outcomes</h4>
              
              <div className="space-y-4 leading-relaxed">
                <p className="text-lg lg:text-xl text-gray-300 text-justify">
                  By the end of the Orientation Phase, learners demonstrate measurable academic competence 
                  alongside emerging leadership and agency.
                </p>
                
                <p className="text-lg lg:text-xl text-gray-300 text-justify">
                  Learners begin to take ownership of their learning pathways. They understand how their 
                  strengths connect to future opportunities. They build portfolios of applied work that 
                  demonstrate real capability—not just grades.
                </p>
                
                <div className="pt-4 mt-4 border-t border-[#cba641]/20">
                  <p className="text-[#cba641] font-medium mb-3 text-sm lg:text-base">
                    They leave this phase with clarity:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-300 text-sm lg:text-base">
                      <span className="text-[#cba641] mt-1">•</span>
                      <span>Clarity about their abilities</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300 text-sm lg:text-base">
                      <span className="text-[#cba641] mt-1">•</span>
                      <span>Clarity about their values</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300 text-sm lg:text-base">
                      <span className="text-[#cba641] mt-1">•</span>
                      <span>Clarity about the responsibility that comes with both</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Key Competencies Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-black/40 backdrop-blur-md rounded-2xl border border-[#cba641]/30 p-6 lg:p-8 hover:border-[#cba641]/50 transition-all duration-300"
            >
              <h4 className="text-lg sm:text-xl lg:text-2xl font-serif text-[#cba641] mb-3 sm:mb-4 lg:mb-6">Key Competencies</h4>
              
              <div className="space-y-3">
                {[
                  'Strong subject foundations aligned with international standards',
                  'The ability to think critically and evaluate evidence',
                  'Research fluency and structured academic writing',
                  'Confidence in presenting and defending ideas',
                  'Ethical reasoning rooted in Islamic values',
                  'The capacity to collaborate across perspectives and cultures',
                  'Intelligent and responsible use of technology'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    className="flex items-start gap-3 py-2 border-l-2 border-[#cba641]/30 pl-4 hover:border-[#cba641]/60 transition-all duration-300"
                  >
                    <span className="text-[#cba641] mt-1">•</span>
                    <span className="text-gray-300 leading-relaxed text-sm lg:text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

