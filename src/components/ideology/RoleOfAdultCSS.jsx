import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import designImg from './design.jpeg'
import mentorImg from './mentor.jpeg'
import thinkingImg from './thinking.jpeg'
import './Ideology.css'

export default function RoleOfAdultCSS() {
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
    <section ref={ref} className="ideology-section">
      <div className="ideology-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="ideology-section-header"
        >
          <h2 className="ideology-section-title">Role of the Adult</h2>
          <p className="ideology-section-subtitle">
            Teachers as designers, mentors, and thinking companions
          </p>
          <div className="ideology-divider"></div>
        </motion.div>

        <div className="role-slideshow-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="role-slide"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div 
                className="role-slide-bg"
                style={{ backgroundImage: `url(${roles[currentRole].image})` }}
              />
              
              <div className="role-slide-content">
                <h3 className="role-slide-title">
                  {roles[currentRole].title}
                </h3>
                <p className="role-slide-desc">
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
