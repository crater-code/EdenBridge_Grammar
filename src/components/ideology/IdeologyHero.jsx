import { motion } from 'framer-motion'

export default function IdeologyHero() {
  return (
    <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 px-4 sm:px-6 pb-8 sm:pb-12">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-6 sm:mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-6 sm:mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37] to-[#c9a961] rounded-full blur-xl opacity-50"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-[#d4af37] to-[#c9a961] rounded-full flex items-center justify-center text-3xl sm:text-4xl md:text-5xl">
                🌟
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#c9a961] mb-4 sm:mb-6 leading-tight px-4"
        >
          Our Ideology
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 sm:mb-4 max-w-4xl mx-auto leading-relaxed px-4"
        >
          Beyond Schooling
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-[#c9a961]/80 mb-8 sm:mb-12 max-w-3xl mx-auto italic px-4"
        >
          Learning is most powerful when mastery and meaning develop together
        </motion.p>
      </div>
    </section>
  )
}
