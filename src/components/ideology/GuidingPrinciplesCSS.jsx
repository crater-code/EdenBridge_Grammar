import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Ideology.css'

export default function GuidingPrinciplesCSS() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const principles = [
    {
      icon: '🎯',
      title: 'Relevance Before Recall',
      description: 'Learning begins with meaning. Students engage with knowledge that connects to real challenges, making retention natural and understanding deep.',
    },
    {
      icon: '⚡',
      title: 'Mastery Over Coverage',
      description: 'Depth matters more than breadth. We prioritize true understanding and skill development over rushing through content.',
    },
    {
      icon: '🤲',
      title: 'Responsibility (Amanah)',
      description: 'Knowledge is a trust. Students learn to use their abilities ethically, contribute meaningfully, and lead with integrity.',
    }
  ]

  return (
    <section ref={ref} className="ideology-section ideology-section-dark">
      <div className="ideology-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="ideology-section-header"
        >
          <h2 className="ideology-section-title">Guiding Principles</h2>
          <div className="ideology-divider"></div>
        </motion.div>

        <div className="ideology-grid ideology-grid-3">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="ideology-card"
            >
              <div className="ideology-card-icon">{principle.icon}</div>
              <h3 className="ideology-card-title">{principle.title}</h3>
              <p className="ideology-card-desc">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
