import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function KeyFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      title: 'Career Exploration',
      description: 'Exposure to various career paths through workshops, guest speakers, and field visits.',
      icon: '🎯',
      color: 'from-green-500 to-emerald-600',
      details: ['Industry Workshops', 'Guest Speakers', 'Field Visits', 'Career Fairs']
    },
    {
      title: 'Mentorship Programs',
      description: 'One-on-one guidance from experienced professionals and academic advisors.',
      icon: '🤝',
      color: 'from-emerald-500 to-green-600',
      details: ['Personal Mentors', 'Academic Advisors', 'Industry Experts', 'Peer Support']
    },
    {
      title: 'Project-Based Learning',
      description: 'Hands-on projects across multiple disciplines to discover interests and aptitudes.',
      icon: '🔬',
      color: 'from-yellow-500 to-green-600',
      details: ['Real Projects', 'Team Collaboration', 'Skill Building', 'Portfolio Development']
    }
  ]

  return (
    <section ref={ref} className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#cba641] to-[#f2e6b1] mb-6">
            Key Features
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#cba641] to-[#f2e6b1] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group perspective-1000"
            >
              <motion.div
                whileHover={{ rotateY: 10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative h-full bg-black/40 backdrop-blur-md rounded-2xl border border-[#cba641]/30 overflow-hidden hover:border-yellow-500/50 transition-all"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10 p-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-7xl mb-6"
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#cba641] to-[#f2e6b1] mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span className="text-sm text-gray-400">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className={`h-1 bg-gradient-to-r ${feature.color}`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

