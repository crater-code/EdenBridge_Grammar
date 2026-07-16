import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './TeamPages.css';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Footer from '../components/Footer';

function Careers() {
  return (
    <div className="team-page">
      <Navbar />
      <ParticleBackground />

      <section className="team-hero">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="team-content"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="team-title"
          >
            Careers
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="team-text-content"
          >
            <p className="team-text">
              Join our team of passionate educators and professionals who are committed to 
              transforming education in Pakistan. At Edenbridge Grammar, we believe that great 
              teachers and staff are the foundation of great education.
            </p>

            <h3 className="team-section-title">Why Work With Us?</h3>
            <ul className="team-list">
              <li>Be part of an innovative educational institution</li>
              <li>Work with cutting-edge AI-enhanced learning tools</li>
              <li>Contribute to meaningful change in students' lives</li>
              <li>Professional development and growth opportunities</li>
              <li>Collaborative and supportive work environment</li>
              <li>Competitive compensation and benefits</li>
            </ul>

            <p className="team-text">
              We are always looking for talented individuals who share our vision and values. 
              If you are passionate about education and want to make a difference, we would 
              love to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="team-cta"
          >
            <Link to="/" className="back-home-btn">Back to Home</Link>
            <a href="https://wa.me/923336274343" target="_blank" rel="noopener noreferrer" className="contact-btn">
              Apply Now
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default Careers;
