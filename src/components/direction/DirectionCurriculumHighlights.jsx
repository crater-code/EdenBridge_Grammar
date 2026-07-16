import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function DirectionCurriculumHighlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [flippedCard, setFlippedCard] = useState(null)

  const highlights = [
    {
      title: 'ECO & Regenerative Earth Innovation Hub',
      description: 'Students design and lead advanced sustainability initiatives, analysing environmental systems, policy, and innovation models.',
      icon: '🌱',
      details: 'They produce research, prototypes, or community impact projects that demonstrate scientific depth and ethical stewardship at a pre-university level.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Enterprise Innovation Hub',
      description: 'Students build viable ventures, social enterprises, or scalable project models.',
      icon: '🚀',
      details: 'They develop advanced financial literacy, market analysis, strategic planning, and leadership skills—leaving with real-world experience in value creation and economic contribution.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Literature & The Arts Innovation Hub',
      description: 'Students critically engage with global literature, philosophy, and artistic traditions while producing original, portfolio-level creative work.',
      icon: '📖',
      details: 'They refine analytical writing, cultural critique, and expressive voice—preparing for higher education and intellectual discourse.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Technology & AI Innovation Hub',
      description: 'Students explore advanced coding, data systems, AI ethics, and emerging technologies.',
      icon: '🤖',
      details: 'They design and evaluate intelligent systems, understand algorithmic impact, and develop technological solutions with responsibility and strategic insight.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Design Systems Innovation Hub',
      description: 'Students apply high-level systems thinking to complex social, technological, or environmental challenges.',
      icon: '🎨',
      details: 'Through engineering design, architecture concepts, and strategic modelling, they produce solutions that balance innovation, feasibility, and societal impact.',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Digital Communications & Media Innovation Hub',
      description: 'Students produce professional-level media, journalism, campaigns, and digital content.',
      icon: '📺',
      details: 'They analyse influence, audience psychology, narrative power, and ethical communication—developing a strong public voice and media credibility.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Islamic & Spirituality Innovation Hub',
      description: 'Students deepen their understanding of Qur\'anic scholarship, ethics, leadership, and applied spirituality.',
      icon: '🌙',
      details: 'They explore contemporary issues through an Islamic lens, developing moral reasoning, intellectual clarity, and the confidence to lead with integrity in complex environments.',
      color: 'from-emerald-500 to-green-600'
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
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#cba641] to-[#cba641] mb-6">
            Innovation Hubs
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Swapping Traditional Classrooms for Innovation Hubs - Direction Phase (15–19)
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#cba641] to-[#cba641] mx-auto" />
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
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#cba641] to-[#cba641] mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                  <div className="mt-4 text-[#cba641] text-sm">
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
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#cba641] to-[#cba641] mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                  <div className="mt-4 text-[#cba641] text-sm">
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

