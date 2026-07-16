import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Study.css';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Footer from '../components/Footer';

function Study() {
  return (
    <div className="study-page">
      <Navbar />
      <ParticleBackground />
      
      <motion.div 
        className="gradient-bg"
      />

      <section className="study-hero">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="study-content"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="study-title"
          >
            Study at Edenbridge
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="study-text-content"
          >
            <p className="study-text">
              At Edenbridge Grammar, we offer a transformative educational experience that goes beyond 
              traditional schooling. Our curriculum is designed to nurture curious minds, develop critical 
              thinking, and prepare students for the challenges of tomorrow.
            </p>

            <h3 className="study-section-title">Our Programs</h3>
            
            <div className="programs-grid">
              <div className="program-card">
                <h4>Early Years Foundation</h4>
                <p>Building strong foundations through play-based learning and character development.</p>
              </div>
              
              <div className="program-card">
                <h4>Primary Education</h4>
                <p>Comprehensive curriculum combining academic excellence with Islamic values.</p>
              </div>
              
              <div className="program-card">
                <h4>Secondary School</h4>
                <p>Advanced learning with AI-enhanced personalization and career guidance.</p>
              </div>
              
              <div className="program-card">
                <h4>Orientation Phase</h4>
                <p>Discover your passion and explore diverse fields to find your calling.</p>
              </div>
            </div>

            <h3 className="study-section-title">Why Choose Edenbridge?</h3>
            
            <ul className="study-list">
              <li>AI-supported personalized learning paths</li>
              <li>Strong Islamic values and character development</li>
              <li>Experienced and dedicated teaching staff</li>
              <li>Modern facilities and learning resources</li>
              <li>Focus on critical thinking and problem-solving</li>
              <li>Preparation for real-world challenges</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="study-cta"
          >
            <Link to="/" className="back-home-btn">
              Back to Home
            </Link>
            <a 
              href="https://wa.me/923336274343" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Apply Now
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default Study;
