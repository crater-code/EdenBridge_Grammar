import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Footer from '../components/Footer';
import './Policies.css';

function Policies() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const policies = [
    {
      title: 'Safeguarding Policy',
      filename: 'Safeguarding Policy.pdf',
      description: 'Child protection and safety measures',
      icon: '🛡️',
      color: '#CBA641'
    },
    {
      title: 'Data Protection Policy',
      filename: 'Data Protection Policy .pdf',
      description: 'Privacy and data security guidelines',
      icon: '🔒',
      color: '#F2E6B1'
    },
    {
      title: 'Code of Conduct',
      filename: 'Code of Conduct .pdf',
      description: 'Student behavior expectations and disciplinary procedures',
      icon: '⚖️',
      color: '#CBA641'
    },
    {
      title: 'Assessment Policy',
      filename: 'Assessment Policy.pdf',
      description: 'Assessment, grading, and academic standards',
      icon: '📊',
      color: '#F2E6B1'
    },
    {
      title: 'Teaching and Learning Policy',
      filename: 'Teaching and learning Policy.pdf',
      description: 'Educational approach and instructional standards',
      icon: '📚',
      color: '#CBA641'
    },
    {
      title: 'Digital Citizenship & AI Policy',
      filename: 'Digital Citizenship, AI & Internet Policy .pdf',
      description: 'Guidelines for responsible digital citizenship and AI use',
      icon: '🌐',
      color: '#F2E6B1'
    },
    {
      title: 'Parent Guide: Internet Safety & AI',
      filename: 'Parent Guide to Internet Safety, AI & Digital Learning Policy.pdf',
      description: 'Parent resources for digital safety and AI learning',
      icon: '👨‍👩‍👧',
      color: '#CBA641'
    },
    {
      title: 'Student Guide: Digital Safety',
      filename: 'Student Guide to Internet Safety, AI & Digital Citizenship.pdf',
      description: 'Student handbook for internet safety and digital citizenship',
      icon: '🎓',
      color: '#F2E6B1'
    }
  ];

  const handlePolicyClick = (filename) => {
    window.open(`/policies/${filename}`, '_blank');
  };

  return (
    <div className="policies-page">
      <Navbar />
      <ParticleBackground />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="gradient-orb orb-1"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="gradient-orb orb-2"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Mouse follower */}
      <motion.div
        className="mouse-follower"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
      />

      <div className="policies-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="policies-header"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              type: "spring", 
              stiffness: 200,
              delay: 0.2 
            }}
            className="policies-icon-large"
          >
            <motion.span
              animate={{ 
                rotateY: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ display: 'inline-block' }}
            >
              📋
            </motion.span>
          </motion.div>
          
          <motion.h1 
            className="policies-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {['P', 'o', 'l', 'i', 'c', 'i', 'e', 's', ' ', '&', ' ', 'G', 'o', 'v', 'e', 'r', 'n', 'a', 'n', 'c', 'e'].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.03 }}
                whileHover={{ 
                  scale: 1.2, 
                  color: '#F2E6B1',
                  textShadow: '0 0 20px rgba(242, 230, 177, 0.8)'
                }}
                style={{ display: 'inline-block' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            className="policies-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            All official school policies are available below. Click on any document to view or download the full policy.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="policies-grid"
        >
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.6 + index * 0.15,
                type: "spring",
                stiffness: 80
              }}
              className="policy-card"
              onClick={() => handlePolicyClick(policy.filename)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                scale: 1.08,
                rotateY: 8,
                z: 50,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000
              }}
            >
              <motion.div 
                className="policy-card-bg"
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              <motion.div 
                className="policy-card-inner"
                animate={{
                  rotateY: hoveredIndex === index ? 5 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="policy-number"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    opacity: hoveredIndex === index ? 0.3 : 0.1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>
                
                <motion.div 
                  className="policy-icon-wrapper"
                  animate={{
                    rotate: hoveredIndex === index ? [0, -10, 10, -10, 0] : 0,
                    scale: hoveredIndex === index ? 1.15 : 1,
                    y: hoveredIndex === index ? -10 : 0,
                  }}
                  transition={{ 
                    duration: 0.5,
                    rotate: { duration: 0.6 }
                  }}
                >
                  <motion.div 
                    className="policy-icon"
                    animate={{
                      rotateY: hoveredIndex === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {policy.icon}
                  </motion.div>
                  
                  {/* Orbiting particles */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <>
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="orbit-particle"
                            initial={{ scale: 0 }}
                            animate={{
                              scale: [0, 1, 0],
                              rotate: 360,
                              x: [0, Math.cos(i * 120 * Math.PI / 180) * 50],
                              y: [0, Math.sin(i * 120 * Math.PI / 180) * 50],
                            }}
                            exit={{ scale: 0 }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.h3 
                  className="policy-title"
                  animate={{
                    color: hoveredIndex === index ? '#F2E6B1' : '#CBA641',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {policy.title}
                </motion.h3>
                
                <motion.p 
                  className="policy-description"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0.9,
                  }}
                >
                  {policy.description}
                </motion.p>

                <motion.div 
                  className="policy-arrow"
                  animate={{
                    x: hoveredIndex === index ? 15 : 0,
                    scale: hoveredIndex === index ? 1.3 : 1,
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  →
                </motion.div>

                {/* Animated border */}
                <motion.div
                  className="policy-border"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Glow effect */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="policy-glow"
                      style={{
                        background: `radial-gradient(circle at center, ${policy.color}40, transparent 70%)`
                      }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Shine effect */}
              <motion.div
                className="policy-shine"
                animate={{
                  x: hoveredIndex === index ? ['0%', '200%'] : '0%',
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="policies-note"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          >
            📞
          </motion.div>
          <p>
            For any questions regarding our policies, please contact us at{' '}
            <motion.a 
              href="https://wa.me/923336274343" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              +92 333 6274343
            </motion.a>
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default Policies;
