import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CurriculumHighlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [flippedCard, setFlippedCard] = useState(null)

  const highlights = [
    {
      title: 'ECO & Regenerative Earth Innovation Hub',
      description: 'Students investigate real environmental challenges and design sustainable solutions.',
      icon: '🌱',
      details: 'Through science, systems thinking, and ethical stewardship, they learn to innovate responsibly and contribute to a healthier planet.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Enterprise Innovation Hub',
      description: 'Ideas turn into action. Students explore entrepreneurship, financial literacy, and value creation.',
      icon: '🚀',
      details: 'Building confidence, resilience, and the mindset to create opportunity rather than wait for it.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Literature & The Arts Innovation Hub',
      description: 'Voice gains power through literature, philosophy, and creative expression.',
      icon: '📖',
      details: 'Students analyse, interpret, and create meaningful work—developing cultural awareness and confident communication.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Technology & AI Innovation Hub',
      description: 'Students move from consumers to creators of technology.',
      icon: '🤖',
      details: 'Through coding, AI exploration, and digital ethics, they develop computational thinking and responsible innovation skills.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Design Systems Innovation Hub',
      description: 'Complex problems are mapped, designed, and improved.',
      icon: '🎨',
      details: 'Students learn systems thinking, engineering principles, and iterative design - building precision, strategy, and real-world problem-solving ability.',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Digital Communications & Media Innovation Hub',
      description: 'Ideas are crafted and shared with clarity.',
      icon: '📺',
      details: 'Through media production, journalism, and digital storytelling, students develop persuasive communication and critical media literacy.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Islamic & Spirituality Innovation Hub',
      description: 'Faith is explored as lived practice.',
      icon: '🌙',
      details: 'Students deepen Qur\'anic understanding, ethical reasoning, and character development—integrating spiritual grounding with leadership and contribution.',
      color: 'from-emerald-500 to-green-600'
    }
  ]

  return (
    <section ref={ref} className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#cba641] mb-4 sm:mb-6">
            Innovation Hubs
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Swapping Traditional Classrooms for Innovation Hubs
          </p>
          <div className="w-24 h-1 bg-[#cba641] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {highlights.slice(0, 4).map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={isInView ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="perspective-1000 h-80"
            >
              <motion.div
                className="relative w-full h-full cursor-pointer"
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-2xl border border-[#cba641]/30 p-6 flex flex-col items-center justify-center text-center hover:border-[#cba641]/60 hover:shadow-lg hover:shadow-[#cba641]/20 transition-all duration-300"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="text-6xl mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#cba641] to-[#f2e6b1] mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                  <div className="mt-4 text-[#f2e6b1] text-sm">
                    Click to learn more →
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${highlight.color} rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-300`}
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {highlight.details}
                  </p>
                  <div className="mt-4 text-white/70 text-sm">
                    Click to flip back
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Second row for remaining 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 max-w-4xl mx-auto">
          {highlights.slice(4).map((highlight, index) => (
            <motion.div
              key={index + 4}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={isInView ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="perspective-1000 h-80"
            >
              <motion.div
                className="relative w-full h-full cursor-pointer"
                onClick={() => setFlippedCard(flippedCard === (index + 4) ? null : (index + 4))}
                animate={{ rotateY: flippedCard === (index + 4) ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-2xl border border-[#cba641]/30 p-6 flex flex-col items-center justify-center text-center hover:border-[#cba641]/60 hover:shadow-lg hover:shadow-[#cba641]/20 transition-all duration-300"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="text-6xl mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#cba641] to-[#f2e6b1] mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                  <div className="mt-4 text-[#f2e6b1] text-sm">
                    Click to learn more →
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${highlight.color} rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-300`}
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {highlight.details}
                  </p>
                  <div className="mt-4 text-white/70 text-sm">
                    Click to flip back
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

