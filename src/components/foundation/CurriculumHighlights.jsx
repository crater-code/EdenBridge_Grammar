import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './FoundationPhase.css'

export default function CurriculumHighlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [flippedCard, setFlippedCard] = useState(null)

  const highlights = [
    {
      title: 'Science & Inquiry',
      description: 'Where curiosity sparks questions, hands get busy, and children begin discovering how the world works through exploration and wonder.',
      icon: '🔬',
      details: 'Through hands-on investigation, children explore scientific principles, test ideas, and develop a love for discovery.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Creative Expression',
      description: 'Great artists and thinkers begin with imagination, movement, colour, sound, and joyful sensory discovery.',
      icon: '🎨',
      details: 'Children express themselves through art, music, drama, and creative play, building confidence and imagination.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Literacy',
      description: 'Great writers and poets begin with stories, talk, listening, and learning to give voice to their ideas.',
      icon: '📚',
      details: 'Through stories, rhymes, and language-rich activities, children develop reading, writing, and communication skills.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Mathematics',
      description: 'At five, numbers become tools for thinking—children explore patterns, puzzles, and big ideas that lay the foundations for advanced mathematics.',
      icon: '➗',
      details: 'Children develop number sense, problem-solving skills, and logical thinking through games and hands-on activities.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Humanities & Islamic Studies',
      description: 'Character comes first—guided by Qur\'anic stories, compassion, justice, and the example of lived faith.',
      icon: '🌙',
      details: 'Building moral foundations, empathy, and spiritual awareness through Islamic values and character development.',
      color: 'from-emerald-500 to-green-600'
    },
    {
      title: 'Technology',
      description: 'Curiosity sparks technology—children explore patterns, organise ideas, solve problems, and create with purpose.',
      icon: '💻',
      details: 'Age-appropriate introduction to technology, developing digital literacy and computational thinking.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Physical & Social Development',
      description: 'Strong futures begin with joy, movement, connection, and a secure sense of self.',
      icon: '🏃',
      details: 'Building motor skills, coordination, emotional regulation, and healthy habits through active play.',
      color: 'from-orange-500 to-red-600'
    }
  ]

  return (
    <section ref={ref} className="relative py-24 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#cba641] to-[#f2e6b1] mb-6">
            Learning Hubs
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Engaging Spaces for Young Learners to Explore and Grow
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#cba641] to-[#f2e6b1] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
              style={{ minHeight: '20rem' }}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
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
              style={{ minHeight: '20rem' }}
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

