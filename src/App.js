import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import './App.css';
import Scene3D from './components/Scene3D';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import DiscoverModal from './components/DiscoverModal';
import Footer from './components/Footer';
import SEO from './components/SEO';
import CoreValues3D from './components/CoreValues3D';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);
  const { scrollYProgress } = useScroll();
  const videoRef = React.useRef(null);
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay failed:', err);
      });
    }
  }, []);

  return (
    <div className="app">
      <SEO 
        title="Edenbridge Grammar School - Excellence in Education"
        description="Edenbridge Grammar School offers a values-anchored, academically rigorous education with the Exel Integrated Curriculum. Discover our Foundation, Formation, Orientation, and Direction phases for holistic student development."
        keywords="Edenbridge Grammar School, grammar school Pakistan, best school, education, academic excellence, Exel Integrated Curriculum, Foundation Phase, Formation Phase, Orientation Phase, Direction Phase, values-based education, holistic learning, student development, Islamic education, AI-enhanced learning"
        url="https://edenbridgegrammar.edu"
      />
      <DiscoverModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Navbar />
      <ParticleBackground />
      
      <motion.div 
        className="gradient-bg"
        style={{ y: backgroundY }}
      />

      <section className="hero-section" id="home">
        <video 
          ref={videoRef}
          className="hero-background-video" 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-split-container">
          <motion.div 
            className="hero-content-left"
            style={{ opacity, scale }}
          >
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.3,
                type: "spring",
                stiffness: 80
              }}
              className="hero-title"
            >
              Edenbridge Grammar
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.5,
                type: "spring",
                stiffness: 80
              }}
              className="hero-subtitle"
            >
              Beyond Schooling
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="hero-description"
            >
              <p>
                A forward-thinking Islamic and educational institution serving Islamabad and Rawalpindi that rejects the outdated "factory model" of schooling.
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.9,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 60px rgba(203, 166, 65, 0.9), 0 0 120px rgba(242, 230, 177, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              className="cta-button"
              onClick={() => setShowModal(true)}
            >
              <span className="button-text">Discover More</span>
            </motion.button>
          </motion.div>

          <motion.div 
            className="hero-3d-right"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <Scene3D mousePosition={mousePosition} scrollProgress={scrollYProgress} />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="model-hint"
            >
              Hover over neurons to illuminate • Drag to rotate
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="parallel-sections-wrapper">
        <section className="content-section parallel-section" id="who-we-are">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="content-card"
          >
            <div className="section-title-wrapper">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="section-title"
              >
                Who We Are?
              </motion.h2>
            </div>
            
            <div className="section-content-wrapper">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="section-text"
              >
                Edenbridge Grammar School reimagines education for a changing world.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="section-text"
              >
                As a future-focused learning ecosystem in Pakistan, we blend academic excellence, applied learning, 
                and AI-enhanced personalisation within a values-led Islamic framework—nurturing strong foundations 
                from the Early Years and preparing students to think independently, grow with purpose, and succeed 
                in the future.
              </motion.p>
            </div>
          </motion.div>
        </section>

        <section className="content-section parallel-section" id="what-we-do">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="content-card"
          >
            <div className="section-title-wrapper">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="section-title"
              >
                Why and What We Are
              </motion.h2>
            </div>
            
            <div className="section-content-wrapper">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="section-text"
              >
                We reject the outdated "factory model" of schooling and instead build a system designed 
                for human excellence. Our approach blends AI-supported personalized learning with deep 
                classical inquiry, rooted in Qur'anic understanding and prophetic character development.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
                className="section-text"
              >
                We provide a holistic education that makes students resilient, adaptable, and ready to 
                lead in an unpredictable future, combining traditional wisdom with cutting-edge technology.
              </motion.p>
            </div>
          </motion.div>
        </section>
      </section>

      <section className="content-section" id="our-story">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="content-card"
        >
          <div className="section-title-wrapper">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Our Story
            </motion.h2>
          </div>
          
          <div className="section-content-wrapper">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="section-text"
            >
              Edenbridge Grammar was born from a vision to transform education in Pakistan. We saw 
              the limitations of traditional schooling systems and recognized the need for an institution 
              that could prepare students for the challenges of tomorrow while staying true to Islamic values.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="section-text"
            >
              Our journey began with a simple question: How can we create an educational environment 
              that nurtures both the mind and the soul? This question led us to develop a unique 
              approach that combines the best of classical Islamic education with modern pedagogical 
              innovations and AI-powered personalization.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="section-text"
            >
              Today, we continue to evolve and grow, always keeping our students at the center of 
              everything we do. Our story is one of innovation, dedication, and unwavering commitment 
              to educational excellence.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <CoreValues3D />

      <section className="final-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="final-content"
        >
          <h2 className="final-title">Ready to Join Our Community?</h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'inline-block' }}
          >
            <Link
              to="/apply-now"
              className="cta-button secondary"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              <span className="button-text">Enroll Today</span>
              <span className="button-glow"></span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
