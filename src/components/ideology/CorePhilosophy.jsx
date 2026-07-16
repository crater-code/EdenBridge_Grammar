import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CorePhilosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const philosophies = [
    {
      icon: '🎯',
      title: 'Clarity of Identity',
      description: 'Students discover who they are, what they value, and how their strengths connect to meaningful contribution.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🧠',
      title: 'Intellectual Depth',
      description: 'Learning goes beyond memorization to critical thinking, evidence-based reasoning, and disciplined inquiry.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '⚖️',
      title: 'Ethical Grounding',
      description: 'Rooted in Islamic values, students develop moral clarity, responsibility, and the courage to lead with integrity.',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      icon: '🌍',
      title: 'Real-World Impact',
      description: 'Knowledge is applied to authentic challenges, preparing learners to contribute meaningfully to society.',
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section ref={ref} className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#c9a961] mb-3 sm:mb-4 px-4">
            Core Philosophy
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#c9a961] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl border border-[#c9a961]/30 p-4 sm:p-6 h-full hover:border-[#c9a961]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#c9a961]/20">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#c9a961] mb-2 sm:mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
