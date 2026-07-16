import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function DiscoverPassion() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Final Statement from PhaseOverview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center py-12 mb-16 border-t border-b border-[#cba641]/20"
        >
          <p className="text-xl md:text-2xl text-[#cba641] font-serif italic max-w-4xl mx-auto leading-relaxed">
            The Orientation Phase prepares learners not only for examinations, but for purposeful 
            direction in an increasingly complex world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Animated gradient background */}
          <motion.div
            animate={{
              background: [
                'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(234, 179, 8, 0.2) 100%)',
                'linear-gradient(135deg, rgba(234, 179, 8, 0.2) 0%, rgba(22, 163, 74, 0.2) 100%)',
                'linear-gradient(135deg, rgba(22, 163, 74, 0.2) 0%, rgba(34, 197, 94, 0.2) 100%)',
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
          />

          {/* Glass morphism effect */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xl border border-white/10" />

          {/* Decorative glowing orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-green-500/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/30 rounded-full blur-3xl"
          />

          <div className="relative z-10 p-12 md:p-20 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
              className="inline-block mb-8"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-yellow-600 rounded-full flex items-center justify-center text-5xl shadow-2xl shadow-green-500/50">
                🎯
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-yellow-400 mb-6"
            >
              Discover Your Passion
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Explore diverse fields and find your calling. The Orientation Phase is your gateway to 
              discovering what truly inspires you and sets your path for future success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 60px rgba(34, 197, 94, 0.8)' 
                }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-xl shadow-2xl shadow-green-500/50 hover:from-green-400 hover:to-emerald-500 transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Start Your Journey</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 60px rgba(234, 179, 8, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-transparent border-2 border-yellow-500 text-yellow-300 font-bold text-lg rounded-xl hover:bg-yellow-500/20 transition-all shadow-2xl shadow-yellow-500/30"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-16 pt-8 border-t border-white/10"
            >
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400">
                <motion.div 
                  whileHover={{ scale: 1.1, color: '#22c55e' }}
                  className="flex items-center gap-3 cursor-pointer transition-colors"
                >
                  <span className="text-3xl">📧</span>
                  <span>info@edenbridgegrammar.com</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1, color: '#eab308' }}
                  className="flex items-center gap-3 cursor-pointer transition-colors"
                >
                  <span className="text-3xl">📞</span>
                  <span>Schedule a Consultation</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

