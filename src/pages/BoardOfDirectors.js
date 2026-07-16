import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './TeamPages.css';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Footer from '../components/Footer';

function BoardOfDirectors() {
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
            Board of Directors
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="board-container"
          >
            {/* Featured Leadership - Mujeeb and Tirzah */}
            <div className="featured-leaders">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="leader-card featured"
              >
                <div className="leader-image-container">
                  <img src="/mujeeb.jpg" alt="Mujeeb Tariq" className="leader-image" />
                </div>
                <div className="leader-info">
                  <h3 className="leader-name">Mujeeb Tariq</h3>
                  <p className="leader-title">CEO & Founder</p>
                  <p className="leader-description">
                    A visionary education leader with over 20 years of international experience, 
                    focused on preparing students for a rapidly changing world.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="leader-card featured"
              >
                <div className="leader-image-container">
                  <img src="/tirzah.jpg" alt="Tirzah Elese" className="leader-image" />
                </div>
                <div className="leader-info">
                  <h3 className="leader-name">Tirzah Elese</h3>
                  <p className="leader-title">Director of Education</p>
                  <p className="leader-description">
                    A British-born education consultant with 15 years of experience, committed to 
                    nurturing academic excellence, Islamic values, and global citizenship.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Other Board Members */}
            <div className="board-members-grid">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="leader-card"
              >
                <div className="leader-image-container">
                  <img src="/naveed.jpg" alt="Naveed Ahmed" className="leader-image" />
                </div>
                <div className="leader-info">
                  <h3 className="leader-name">Naveed Ahmed</h3>
                  <p className="leader-title">Education Advisor</p>
                  <p className="leader-description">
                    With decades of global education expertise, he guides students toward top 
                    international universities with clarity and purpose.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="leader-card"
              >
                <div className="leader-image-container">
                  <img src="/aj.png" alt="Dr. AJ Khan" className="leader-image" />
                </div>
                <div className="leader-info">
                  <h3 className="leader-name">Dr. AJ Khan</h3>
                  <p className="leader-title">Dean of Internationalisation</p>
                  <p className="leader-description">
                    Dean of Internationalisation and Associate Professor at the University of Leicester, 
                    with strong expertise in leadership, data strategy, and global education development.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.0 }}
                className="leader-card"
              >
                <div className="leader-image-container">
                  <img src="/dr.jpg" alt="Dr. Hassan Ali" className="leader-image" />
                </div>
                <div className="leader-info">
                  <h3 className="leader-name">Dr. Hassan Ali</h3>
                  <p className="leader-title">Medical & Islamic Studies Advisor</p>
                  <p className="leader-description">
                    A Harvard-educated physician and scholar of Islamic studies, blending modern science, 
                    ethical leadership, and spiritual values to support holistic education.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="team-cta"
          >
            <Link to="/" className="back-home-btn">Back to Home</Link>
            <a href="https://wa.me/923336274343" target="_blank" rel="noopener noreferrer" className="contact-btn">
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default BoardOfDirectors;
