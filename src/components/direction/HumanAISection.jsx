import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function HumanAISection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#cba641] to-[#cba641] mb-6">
            Human-Led. AI-Enhanced.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#cba641] to-[#cba641] mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-[#cba641]/30 p-6 lg:p-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg lg:text-xl text-gray-300 text-justify mb-6"
              >
                At Edenbridge Grammar, technology strengthens learning—it does not replace human guidance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-r from-[#cba641]/20 to-[#cba641]/20 rounded-xl p-4 lg:p-6 mb-6 border border-[#cba641]/30"
              >
                <h3 className="text-xl lg:text-2xl font-bold text-[#cba641] mb-4">We operate on a simple principle:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#cba641] rounded-full flex items-center justify-center text-black font-bold text-lg lg:text-xl">
                      80%
                    </div>
                    <p className="text-gray-300 text-base lg:text-lg">
                      Human mentorship, inquiry, discussion, and applied learning
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#cba641] rounded-full flex items-center justify-center text-black font-bold text-lg lg:text-xl">
                      20%
                    </div>
                    <p className="text-gray-300 text-base lg:text-lg">
                      Precision-guided academic progression through AI-supported platforms
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg lg:text-xl text-gray-300 text-justify"
              >
                Our ExelTutor academic system supports students in mastering core subjects with clarity and depth. 
                AI handles diagnostic assessment, adaptive practice, immediate feedback, and personalised progression 
                pathways—allowing educators to focus on mentoring, higher-order thinking, discussion, and real-world application.
              </motion.p>
            </div>
          </motion.div>

          {/* Right side - Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Human-led section */}
            <div className="bg-gradient-to-br from-[#cba641]/20 to-[#cba641]/20 rounded-2xl p-6 lg:p-8 border border-[#cba641]/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl lg:text-4xl">👨‍🏫</div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#cba641]">Human-Led</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2 text-sm lg:text-base">
                  <span className="text-[#cba641] mt-1">•</span>
                  <span>Mentorship & Guidance</span>
                </li>
                <li className="flex items-start gap-2 text-sm lg:text-base">
                  <span className="text-[#cba641] mt-1">•</span>
                  <span>Critical Thinking Development</span>
                </li>
                <li className="flex items-start gap-2 text-sm lg:text-base">
                  <span className="text-[#cba641] mt-1">•</span>
                  <span>Real-world Application</span>
                </li>
                <li className="flex items-start gap-2 text-sm lg:text-base">
                  <span className="text-[#cba641] mt-1">•</span>
                  <span>Discussion & Inquiry</span>
                </li>
              </ul>
            </div>

            {/* AI-enhanced section */}
            <div className="bg-gradient-to-br from-[#cba641]/20 to-[#cba641]/20 rounded-2xl p-6 lg:p-8 border border-[#cba641]/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl lg:text-4xl">🤖</div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#cba641]">AI-Enhanced</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2 text-sm lg:text-base">
                  <span className="text-[#cba641] mt-1">•</span>
                  <span>Diagnostic Assessment</span>
                </li>
                <li className="flex items-start gap-2 text-sm lg:text-base">
                  <span className="text-[#cba641] mt-1">•</span>
                  <span>Adaptive Practice</span>
                </li>
                <li className="flex items-start gap-2 text-sm lg:text-base">
                  <span className="text-[#cba641] mt-1">•</span>
                  <span>Immediate Feedback</span>
                </li>
                <li className="flex items-start gap-2 text-sm lg:text-base">
                  <span className="text-[#cba641] mt-1">•</span>
                  <span>Personalised Progression</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

