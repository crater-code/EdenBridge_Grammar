import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Ideology.css'

export default function CorePhilosophyCSS() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const philosophies = [
    {
      icon: '🎯',
      title: 'Clarity of Identity',
      description: 'Students discover who they are, what they value, and how their strengths connect to meaningful contribution.',
    },
    {
      icon: '🧠',
      title: 'Intellectual Depth',
      description: 'Learning goes beyond memorization to critical thinking, evidence-based reasoning, and disciplined inquiry.',
    },
    {
      icon: '⚖️',
      title: 'Ethical Grounding',
      description: 'Rooted in Islamic values, students develop moral clarity, responsibility, and the courage to lead with integrity.',
    },
    {
      icon: '🌍',
      title: 'Real-World Impact',
      description: 'Knowledge is applied to authentic challenges, preparing learners to contribute meaningfully to society.',
    }
  ]

  return (
    <section ref={ref} className="ideology-section">
      <div className="ideology-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="ideology-section-header"
        >
          <h2 className="ideology-section-title">Core Philosophy</h2>
          <div className="ideology-divider"></div>
        </motion.div>

        <div className="ideology-grid ideology-grid-4">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="ideology-card"
            >
              <div className="ideology-card-icon">{item.icon}</div>
              <h3 className="ideology-card-title">{item.title}</h3>
              <p className="ideology-card-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
