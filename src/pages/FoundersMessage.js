import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './TeamPages.css';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Footer from '../components/Footer';

function FoundersMessage() {
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
            Message from the CEO & Founder
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="team-text-content"
          >
            <p className="team-text">
              At Edenbridge Grammar, our mission is to nurture students whose education is Allah‑centric 
              and Akhirah‑focused. Every dimension of learning is designed to strengthen īmān, refine conduct, 
              and prepare our learners to live with dignity and purpose in this world while striving for 
              success in the Hereafter.
            </p>

            <p className="team-text">
              Our students grow by learning the seventy‑seven branches of īmān, befriending the one hundred 
              and fourteen surahs of the Qur'an, and studying the Seerah of the Prophet ﷺ as a living guide. 
              Alongside this spiritual foundation, they engage deeply with classic Islamic texts while also 
              studying classical Occidental works, so they can carry wisdom into the challenges of the modern age.
            </p>

            <p className="team-text">
              We believe true excellence lies in harmonizing timeless guidance with contemporary skills. 
              That is why our curriculum integrates entrepreneurship, leadership, and artificial intelligence—ensuring 
              that our graduates are spiritually conscious, academically grounded, and practically equipped to 
              serve humanity with creativity and confidence.
            </p>

            <p className="team-text">
              In a world rushing toward distractions, we remind our students that the real person is not 
              defined by the rush but by the soul that pauses, reflects, and lives with sincerity. At 
              Edenbridge Grammar, we cater to that deeper self—the one that seeks Allah and strives for 
              the Akhirah.
            </p>

            <p className="team-text">
              This is not merely an institution; it is a mission to raise believers who leave behind a 
              legacy of benefit. Every effort we make is intended to be a source of Sadaqa‑e‑Jariyya, 
              continuing to inspire and uplift generations long after us.
            </p>

            <div className="founder-signature">
              <p className="founder-name">Mujeeb Tariq</p>
              <p className="founder-title">CEO & Founder</p>
              <p className="founder-email">
                <a href="mailto:mujeebtariq007@gmail.com">mujeebtariq007@gmail.com</a>
              </p>
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

export default FoundersMessage;
