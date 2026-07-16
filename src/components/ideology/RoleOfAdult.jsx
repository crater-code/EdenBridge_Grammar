import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import designImg from './design.jpeg'
import mentorImg from './mentor.jpeg'
import thinkingImg from './thinking .jpeg'

export default function RoleOfAdult() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentRole, setCurrentRole] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const roles = [
    {
      title: 'Mentor',
      description: 'Educators guide students through complexity, offering wisdom, encouragement, and personalized support on their learning journey.',
      image: mentorImg
    },
    {
      title: 'Designer',
      description: 'Teachers craft meaningful learning experiences, curating challenges that spark curiosity and connect to real-world contexts.',
      image: designImg
    },
    {
      title: 'Thinking Companion',
      description: 'Teachers engage in dialogue, ask powerful questions, and help students develop critical thinking and metacognitive skills.',
      image: thinkingImg
    }
  ]

  const nextRole = () => {
    setCurrentRole((prev) => (prev + 1) % roles.length)
  }

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isPaused, roles.length])

  return (
    <section ref={ref} className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#c9a961] mb-3 sm:mb-4 px-4">
            Role of the Adult
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-4">
            Teachers as designers, mentors, and thinking companions
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#c9a961] mx-auto mt-3 sm:mt-4"></div>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl border border-[#c9a961]/30 cursor-pointer overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex items-center justify-center"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onClick={nextRole}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${roles[currentRole].image})` }}
              />
              
              {/* Content */}
              <div className="relative z-10 px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#c9a961] mb-6 sm:mb-8 text-center">
                  {roles[currentRole].title}
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                  {roles[currentRole].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
