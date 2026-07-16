import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function GuidingPrinciples() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const principles = [
    {
      icon: '🎯',
      title: 'Relevance Before Recall',
      description: 'Learning begins with meaning. Students engage with knowledge that connects to real challenges, making retention natural and understanding deep.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '⚡',
      title: 'Mastery Over Coverage',
      description: 'Depth matters more than breadth. We prioritize true understanding and skill development over rushing through content.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🤲',
      title: 'Responsibility (Amanah)',
      description: 'Knowledge is a trust. Students learn to use their abilities ethically, contribute meaningfully, and lead with integrity.',
      gradient: 'from-emerald-500 to-green-500'
    }
  ]

  return (
    <section ref={ref} className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#c9a961] mb-3 sm:mb-4 px-4">
            Guiding Principles
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#c9a961] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl border border-[#c9a961]/30 p-6 sm:p-8 h-full hover:border-[#c9a961]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#c9a961]/20">
                <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {principle.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#c9a961] mb-3 sm:mb-4 text-center">
                  {principle.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
