import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function TeachersCentralSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-[#cba641] font-serif italic max-w-4xl mx-auto leading-relaxed">
            Teachers remain central. AI increases precision.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

