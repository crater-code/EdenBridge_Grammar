import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Footer from '../components/Footer';
import AIModelsVisualization from '../components/AIModelsVisualization';

function LearningFramework() {
  return (
    <>
      <style>{`
        .lfw-page { 
          min-height: 100vh; 
          background: radial-gradient(ellipse at top, #233e2b 0%, #092012 50%, #000000 100%);
          position: relative;
          overflow-x: hidden;
        }
        .lfw-page::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(203, 166, 65, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(35, 62, 43, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(203, 166, 65, 0.2) 0%, transparent 50%);
          animation: gradientShift 15s ease infinite;
          z-index: 0;
          pointer-events: none;
        }
        @keyframes gradientShift {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        /* Hide scrollbar but keep functionality */
        .lfw-page::-webkit-scrollbar {
          display: none;
        }
        .lfw-page {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .lfw-hero { 
          position: relative; 
          min-height: 100vh;
          height: 100vh;
          display: flex; 
          align-items: center; 
          justify-content: center; 
          overflow: hidden; 
          padding: 8rem 2rem 4rem;
        }
        .lfw-hero-content { 
          position: relative; 
          z-index: 2; 
          text-align: center; 
          max-width: 1100px; 
          margin: 0 auto; 
        }
        .lfw-hero-title { 
          font-family: 'Playfair Display', serif; 
          font-size: clamp(2.5rem, 6vw, 4.5rem); 
          font-weight: 600; 
          color: #cba641; 
          margin-bottom: 2rem; 
          letter-spacing: 0.02em; 
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); 
          line-height: 1.2; 
        }
        .lfw-hero-subtitle { 
          font-family: 'Playfair Display', serif; 
          font-size: clamp(1.1rem, 2.2vw, 1.5rem); 
          font-weight: 200; 
          color: #f2e6b1; 
          letter-spacing: 0.03em; 
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); 
          line-height: 1.7; 
          margin-bottom: 1.5rem; 
        }
        .lfw-outcome-section { 
          padding: 6rem 2rem; 
          background: transparent;
          position: relative;
        }
        .lfw-outcome-container { 
          max-width: 1100px; 
          margin: 0 auto; 
          text-align: center; 
        }
        .lfw-outcome-box { 
          background: rgba(9, 32, 18, 0.6);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(203, 166, 65, 0.5); 
          border-radius: 25px; 
          padding: 4rem 3rem; 
          position: relative; 
          overflow: hidden; 
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        .lfw-outcome-box::before { 
          content: ''; 
          position: absolute; 
          top: 0; 
          left: 0; 
          right: 0; 
          height: 4px; 
          background: linear-gradient(90deg, #cba641, #f2e6b1, #cba641); 
        }
        .lfw-outcome-title { 
          font-family: 'Playfair Display', serif; 
          font-size: clamp(1.3rem, 2.5vw, 1.8rem); 
          font-weight: 600; 
          color: #cba641; 
          margin-bottom: 2rem; 
          text-transform: uppercase; 
          letter-spacing: 0.1em; 
        }
        .lfw-outcome-text { 
          font-family: 'Playfair Display', serif; 
          font-size: clamp(1rem, 2vw, 1.4rem); 
          font-weight: 300; 
          color: #f2e6b1; 
          line-height: 1.9; 
          letter-spacing: 0.02em; 
        }
        .lfw-ai-section { 
          padding: 4rem 2rem; 
          background: transparent;
          min-height: auto; 
          position: relative;
        }
        .lfw-ai-container { 
          max-width: 90%; 
          margin: 0 auto; 
          height: 70vh;
          max-height: 800px;
        }
        .lfw-ai-visualization { 
          background: transparent; 
          border: none; 
          border-radius: 0; 
          padding: 0; 
          backdrop-filter: none; 
          height: 70vh;
          max-height: 800px;
          width: 90%;
          margin: 0 auto;
        }
        .lfw-ai-visualization iframe { 
          height: 70vh !important;
          max-height: 800px !important;
        }
        @media (max-width: 1024px) {
          .lfw-hero { min-height: 100vh; padding: 6rem 1.5rem 3rem; }
          .lfw-outcome-section { padding: 5rem 1.5rem; }
          .lfw-ai-section { padding: 3rem 0; }
          .lfw-ai-container { height: 70vh; max-height: none; width: 100%; margin: 0; }
          .lfw-ai-visualization { height: 70vh; max-height: none; width: 100%; margin: 0; }
          .lfw-ai-visualization iframe { height: 70vh !important; max-height: none !important; }
        }
        @media (max-width: 768px) {
          .lfw-hero { min-height: 100vh; padding: 6rem 1rem 3rem; }
          .lfw-outcome-section { padding: 4rem 1rem; }
          .lfw-outcome-box { padding: 3rem 2rem; }
          .lfw-ai-section { padding: 2rem 0; }
          .lfw-ai-container { height: 75vh; max-height: none; width: 100%; margin: 0; }
          .lfw-ai-visualization { height: 75vh; max-height: none; width: 100%; margin: 0; }
          .lfw-ai-visualization iframe { height: 75vh !important; max-height: none !important; }
        }
        @media (max-width: 640px) {
          .lfw-hero { min-height: 100vh; padding: 5rem 1rem 2rem; }
          .lfw-outcome-section { padding: 3rem 1rem; }
          .lfw-outcome-box { padding: 2.5rem 1.5rem; }
          .lfw-ai-section { padding: 2rem 0; }
          .lfw-ai-container { height: 70vh; width: 100%; margin: 0; }
          .lfw-ai-visualization { height: 70vh; width: 100%; margin: 0; }
          .lfw-ai-visualization iframe { height: 70vh !important; }
        }
        @media (max-width: 480px) {
          .lfw-hero { min-height: 100vh; padding: 5rem 0.75rem 2rem; }
          .lfw-outcome-section { padding: 2.5rem 0.75rem; }
          .lfw-outcome-box { padding: 2rem 1.25rem; }
          .lfw-ai-section { padding: 2rem 0; }
          .lfw-ai-container { height: 65vh; width: 100%; margin: 0; }
          .lfw-ai-visualization { height: 65vh; width: 100%; margin: 0; }
          .lfw-ai-visualization iframe { height: 65vh !important; }
        }
        @media (max-width: 375px) {
          .lfw-hero { padding: 5rem 0.5rem 2rem; }
          .lfw-outcome-section { padding: 2rem 0.5rem; }
          .lfw-outcome-box { padding: 1.75rem 1rem; }
          .lfw-ai-section { padding: 2rem 0; }
          .lfw-ai-container { height: 60vh; width: 100%; margin: 0; }
          .lfw-ai-visualization { height: 60vh; width: 100%; margin: 0; }
          .lfw-ai-visualization iframe { height: 60vh !important; }
        }
      `}</style>

      <div className="lfw-page">
        <Navbar />
        <ParticleBackground />
        
        {/* Hero Section */}
        <section className="lfw-hero">
          <motion.div
            className="lfw-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="lfw-hero-title">Learning Framework</h1>
            <p className="lfw-hero-subtitle">
              Where human mentorship meets intelligent technology, and mastery meets meaning — 
              preparing learners not only for exams, but for life.
            </p>
          </motion.div>
        </section>

        {/* AI Models Visualization Section - Full Width & Height */}
        <section className="lfw-ai-section">
          <div className="lfw-ai-container">
            <motion.div
              className="lfw-ai-visualization"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <AIModelsVisualization />
            </motion.div>
          </div>
        </section>

        {/* Outcome Section */}
        <section className="lfw-outcome-section">
          <div className="lfw-outcome-container">
            <motion.div
              className="lfw-outcome-box"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="lfw-outcome-title">The Outcome</h3>
              <p className="lfw-outcome-text">
                Graduates shaped in strength, guided by faith, and refined by intellect — 
                prepared to excel in the world, lead with integrity, and live with purpose.
              </p>
            </motion.div>
            
            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'center',
                marginTop: '3rem',
                flexWrap: 'wrap'
              }}
            >
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-block',
                  padding: '1.2rem 3rem',
                  background: 'transparent',
                  border: '3px solid #cba641',
                  borderRadius: '15px',
                  color: '#cba641',
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  minWidth: '200px',
                  textAlign: 'center'
                }}
              >
                Back to Home
              </motion.a>
              
              <motion.a
                href="https://wa.me/923336274343"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(203, 166, 65, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-block',
                  padding: '1.2rem 3rem',
                  background: 'linear-gradient(135deg, #cba641, #f2e6b1)',
                  border: 'none',
                  borderRadius: '15px',
                  color: '#092012',
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  minWidth: '200px',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(203, 166, 65, 0.3)'
                }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default LearningFramework;
