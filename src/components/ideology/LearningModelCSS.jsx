import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Ideology.css'

export default function LearningModelCSS() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="ideology-section ideology-section-dark">
      <div className="ideology-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="ideology-section-header"
        >
          <h2 className="ideology-section-title">20/80 Learning Model</h2>
          <p className="ideology-section-subtitle">
            Human connection drives learning, enhanced by precision technology
          </p>
        </motion.div>

        <div className="learning-model-visual">
          <div className="learning-model-bar">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '80%' } : { width: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="learning-model-segment learning-model-human"
            >
              <span className="learning-model-percentage">80%</span>
              <span className="learning-model-label">Human-Led</span>
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '20%' } : { width: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="learning-model-segment learning-model-ai"
            >
              <span className="learning-model-percentage">20%</span>
              <span className="learning-model-label">AI</span>
            </motion.div>
          </div>
        </div>

        <div className="ideology-grid ideology-grid-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="learning-model-card learning-model-card-human"
          >
            <div className="learning-model-header">
              <span className="learning-model-header-icon">👥</span>
              <div className="learning-model-header-text">
                <div className="learning-model-header-percentage">80%</div>
                <h3 className="learning-model-header-title">Human Mentorship</h3>
              </div>
            </div>
            
            <div className="learning-model-items">
              {[
                { icon: '💬', text: 'Inquiry discussions' },
                { icon: '🎯', text: 'Project work' },
                { icon: '🧭', text: 'Mentorship' },
                { icon: '🤝', text: 'Collaboration' },
                { icon: '⚖️', text: 'Ethical reasoning' },
                { icon: '💡', text: 'Critical thinking' }
              ].map((item, index) => (
                <div key={index} className="learning-model-item">
                  <span className="learning-model-item-icon">{item.icon}</span>
                  <span className="learning-model-item-text">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="learning-model-card learning-model-card-ai"
          >
            <div className="learning-model-header">
              <span className="learning-model-header-icon">🤖</span>
              <div className="learning-model-header-text">
                <div className="learning-model-header-percentage">20%</div>
                <h3 className="learning-model-header-title">AI-Supported Mastery</h3>
              </div>
            </div>
            
            <div className="learning-model-items">
              {[
                { icon: '📊', text: 'Diagnostics' },
                { icon: '🎯', text: 'Adaptive paths' },
                { icon: '⚡', text: 'Instant feedback' },
                { icon: '📈', text: 'Personalization' },
                { icon: '🔍', text: 'Gap analysis' },
                { icon: '✅', text: 'Mastery tracking' }
              ].map((item, index) => (
                <div key={index} className="learning-model-item">
                  <span className="learning-model-item-icon">{item.icon}</span>
                  <span className="learning-model-item-text">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="learning-model-quote"
        >
          <p>"Technology strengthens learning—it does not replace human guidance"</p>
        </motion.div>
      </div>
    </section>
  )
}
