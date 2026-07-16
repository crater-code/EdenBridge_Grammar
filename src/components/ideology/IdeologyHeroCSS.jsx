import { motion } from 'framer-motion'
import './Ideology.css'

export default function IdeologyHeroCSS() {
  return (
    <section className="ideology-hero-section">
      <div className="ideology-hero-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="ideology-icon-container"
        >
          <div className="ideology-icon-wrapper">
            <div className="ideology-icon-blur"></div>
            <div className="ideology-icon-main">
              🌟
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="ideology-hero-title"
        >
          Our Ideology
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="ideology-hero-subtitle"
        >
          Beyond Schooling
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="ideology-hero-tagline"
        >
          Learning is most powerful when mastery and meaning develop together
        </motion.p>
      </div>
    </section>
  )
}
