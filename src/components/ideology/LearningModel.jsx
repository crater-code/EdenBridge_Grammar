import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function LearningModel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-12 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#c9a961] mb-2">
            20/80 Learning Model
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Human connection drives learning, enhanced by precision technology
          </p>
        </motion.div>

        {/* Compact Visual Split */}
        <div className="max-w-5xl mx-auto mb-6">
          <div className="flex flex-row h-16 sm:h-20 rounded-xl overflow-hidden border border-[#c9a961]/30">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '80%' } : { width: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="bg-gradient-to-r from-[#d4af37] to-[#c9a961] flex items-center justify-center w-4/5"
            >
              <div className="text-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1c2e26]">80%</span>
                <span className="text-xs sm:text-sm md:text-base font-semibold text-[#1c2e26] ml-1 sm:ml-2">Human-Led</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '20%' } : { width: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center w-1/5"
            >
              <div className="text-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">20%</span>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-white ml-1 sm:ml-2">AI</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Compact Content Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-[#d4af37]/10 to-[#c9a961]/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-[#d4af37]/50 p-6 sm:p-8 hover:border-[#d4af37]/80 transition-all"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-4xl sm:text-5xl">👥</span>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#d4af37]">80%</div>
                <h3 className="text-lg sm:text-xl font-bold text-[#c9a961]">Human Mentorship</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: '💬', text: 'Inquiry discussions' },
                { icon: '🎯', text: 'Project work' },
                { icon: '🧭', text: 'Mentorship' },
                { icon: '🤝', text: 'Collaboration' },
                { icon: '⚖️', text: 'Ethical reasoning' },
                { icon: '💡', text: 'Critical thinking' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 text-gray-300 bg-black/20 rounded-lg p-3">
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <span className="text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-cyan-500/50 p-6 sm:p-8 hover:border-cyan-500/80 transition-all"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-4xl sm:text-5xl">🤖</span>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400">20%</div>
                <h3 className="text-lg sm:text-xl font-bold text-cyan-300">AI-Supported Mastery</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: '📊', text: 'Diagnostics' },
                { icon: '🎯', text: 'Adaptive paths' },
                { icon: '⚡', text: 'Instant feedback' },
                { icon: '📈', text: 'Personalization' },
                { icon: '🔍', text: 'Gap analysis' },
                { icon: '✅', text: 'Mastery tracking' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 text-gray-300 bg-black/20 rounded-lg p-3">
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <span className="text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 text-center"
        >
          <p className="text-base sm:text-lg text-gray-300 italic max-w-2xl mx-auto">
            "Technology strengthens learning—it does not replace human guidance"
          </p>
        </motion.div>
      </div>
    </section>
  )
}
