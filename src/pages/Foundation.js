import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Footer from '../components/Footer';
import NeuralDiagram from '../components/NeuralDiagram';
import './PhasesCommon.css';
import FoundationImage from '../assets/Foundation.jpeg';

function Foundation() {
  const [expandedHub, setExpandedHub] = React.useState(null);

  const toggleHub = (index) => {
    setExpandedHub(expandedHub === index ? null : index);
  };

  return (
    <div className="phase-page">
      <Navbar />
      <ParticleBackground />

      <div className="phase-hero-bg" style={{
        backgroundImage: `url(${FoundationImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -3,
        opacity: 0.85
      }}></div>

      <section className="phase-hero">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="phase-hero-content"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="phase-hero-title"
          >
            Foundation Phase
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="phase-hero-subtitle"
          >
            Where Identity, Curiosity, and Confidence Take Root
          </motion.p>
        </motion.div>
      </section>

      <section className="phase-main-section">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="phase-main-card"
        >
          <h2 className="phase-overview-title">Phase Overview</h2>
          
          <div className="phase-two-column">
            <div className="phase-text-column">
              <h3 className="phase-subtitle">What This Phase Is About</h3>
              
              <p className="phase-text">
                The Foundation Phase at Edenbridge Grammar is where identity, curiosity, and confidence take root. 
                This phase builds the foundations for deep learning through purposeful 
                play, exploration, and meaningful conversation.
              </p>

              <p className="phase-text">
                Learning begins with belonging and an understanding of 'Who I am'. Children enter rich, carefully 
                designed environments that invite them to build, question, create, test ideas, and make sense of 
                the world. Academic skills in literacy, numeracy, science, and communication are introduced naturally 
                yet with high challenge, introducing university level knowledge through strategically planned 
                experiential and play-based learning.
              </p>

              <p className="phase-text">
                Through extended Quests and long-term projects, students wrestle with real questions, test ideas, 
                refine thinking, and apply advanced academic concepts in meaningful contexts. Literacy becomes analytical, 
                numeracy becomes strategic, and thinking becomes increasingly deliberate and structured.
              </p>

              <p className="phase-text">
                Rather than learning in fragments, students connect ideas across disciplines. They release sophisticated 
                vocabulary, experiment with higher-level mathematical reasoning, explore scientific principles through 
                investigation, and articulate their thinking with growing precision and independence.
              </p>

              <div className="phase-highlight">
                <p className="phase-highlight-text">
                  <em>Expectations rise thoughtfully. Support remains personalised. Mastery is prioritised over speed.</em>
                </p>
                <p className="phase-highlight-text">
                  <em>The Formation Phase marks a defining shift between early childhood learning and the more structured, 
                  subject-driven learning that follows. It is where children begin to see themselves as capable thinkers, 
                  problem-solvers, and contributors who engage with complexity and thrive within it.</em>
                </p>
              </div>
            </div>

            <div className="phase-diagram-column">
              <NeuralDiagram />
              <p className="phase-diagram-label">Neural Development</p>
              <p className="phase-diagram-sublabel">Building foundations through play and exploration</p>
              <p className="phase-diagram-note">Drag to rotate • Scroll to zoom</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="phase-main-section">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="phase-main-card"
        >
          <h2 className="phase-overview-title">Outcomes & Competencies</h2>
          
          <div className="phase-outcomes-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="phase-outcome-card"
            >
              <h3 className="phase-outcome-title">Lifelong Outcomes</h3>
              
              <p className="phase-text">
                Children who move through the Foundation Phase leave with far more than early academic skills. 
                They develop a secure sense of identity and belonging, confidence in their ability to think 
                and solve problems, and strong early literacy and numeracy foundations.
              </p>

              <p className="phase-text">
                By prioritising mastery over speed, and depth over performance, children build neural pathways 
                for long-term learning. They learn how to persist, reflect, and adapt.
              </p>

              <div className="phase-highlight">
                <p className="phase-highlight-text">
                  <strong>They leave this phase with:</strong>
                </p>
                <ul className="phase-outcome-list">
                  <li>A secure sense of identity and belonging</li>
                  <li>Confidence in their ability to think and solve problems</li>
                  <li>Strong early literacy and numeracy foundations</li>
                  <li>Emotional regulation and resilience</li>
                  <li>Language to articulate their thinking</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="phase-outcome-card"
            >
              <h3 className="phase-outcome-title">Key Competencies</h3>
              
              <ul className="phase-competency-list">
                <li>Identity Before Acceleration - Children are anchored in belonging, purpose, and confidence</li>
                <li>Learning Through Environment - The environment is the curriculum</li>
                <li>Applied Learning Through Play - Cognitively demanding, inquiry-led, and mastery-focused</li>
                <li>Adult as Play Partner - Teachers join learning rather than dominate it</li>
                <li>Mastery Over Coverage - Time is flexible, understanding is non-negotiable</li>
                <li>Belonging → Mastery → Responsibility</li>
                <li>Human-Centred Technology - AI supports precision, but adults remain central</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="phase-main-section">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="phase-hubs-section">
            <div className="phase-hubs-header">
              <h2 className="phase-hubs-title-horizontal">Learning Hubs</h2>
              <p className="phase-hubs-subtitle-horizontal">Edenbridge Spaces for Young Learners to Explore and Grow</p>
            </div>
            
            <div className="phase-hubs-grid">
              {[
                { 
                  icon: '🔬', 
                  title: 'Science & Inquiry', 
                  front: 'Where curiosity sparks questions and hands get busy.',
                  back: 'Where curiosity sparks questions, hands get busy, and children begin discovering how the world works through exploration and wonder.'
                },
                { 
                  icon: '🎨', 
                  title: 'Creative Expression', 
                  front: 'Great artists begin with imagination and joyful discovery.',
                  back: 'Great artists and thinkers begin with imagination, movement, colour, sound, and joyful sensory discovery.'
                },
                { 
                  icon: '📚', 
                  title: 'Literacy', 
                  front: 'Great writers begin with stories and learning to give voice to ideas.',
                  back: 'Great writers and poets begin with stories, talk, listening, and learning to give voice to their ideas.'
                },
                { 
                  icon: '➗', 
                  title: 'Mathematics', 
                  front: 'Numbers become tools for thinking and exploring patterns.',
                  back: 'At five, numbers become tools for thinking—children explore patterns, puzzles, and big ideas that lay the foundations for advanced mathematics.'
                },
                { 
                  icon: '🌍', 
                  title: 'Humanities & Islamic Studies', 
                  front: 'Character comes first—guided by Qur\'anic stories and faith.',
                  back: 'Character comes first—guided by Qur\'anic stories, compassion, justice, and the example of lived faith.'
                },
                { 
                  icon: '💻', 
                  title: 'Technology', 
                  front: 'Curiosity sparks technology—exploring patterns and solving problems.',
                  back: 'Curiosity sparks technology—children explore patterns, organise ideas, solve problems, and create with purpose.'
                },
                { 
                  icon: '🏃', 
                  title: 'Physical & Social Development', 
                  front: 'Strong futures begin with joy, movement, and connection.',
                  back: 'Strong futures begin with joy, movement, connection, and a secure sense of self.'
                }
              ].map((hub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="hub-card-wrapper"
                  style={{ 
                    perspective: '1000px', 
                    height: '100%',
                    minHeight: '280px',
                    width: '100%'
                  }}
                >
                  <motion.div
                    onClick={() => toggleHub(index)}
                    className="hub-card-inner"
                    style={{ 
                      cursor: 'pointer',
                      transformStyle: 'preserve-3d',
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      minHeight: '280px',
                      
                      
                      
                      
                    }}
                    animate={{ rotateY: expandedHub === index ? 180 : 0 }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                  >
                    {/* Front of card */}
                    <div style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      background: 'rgba(9, 32, 18, 0.85)',
                      border: '1px solid rgba(203, 166, 65, 0.3)',
                      borderRadius: '15px',
                      padding: '1.5rem 1.2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                        marginBottom: '0.8rem'
                      }}>
                        {hub.icon}
                      </div>
                      
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <h3 style={{
                          fontFamily: 'Playfair Display, serif',
                          fontSize: 'clamp(0.95rem, 3vw, 1.3rem)',
                          fontWeight: 200,
                          color: '#cba641',
                          marginBottom: '0.6rem',
                          textAlign: 'center',
                          lineHeight: '1.3',
                          
                          
                        }}>
                          {hub.title}
                        </h3>
                        
                        <p style={{
                          fontSize: 'clamp(0.75rem, 2.5vw, 0.9rem)',
                          lineHeight: '1.4',
                          color: '#e8e8e8',
                          textAlign: 'center',
                          marginBottom: '0.8rem',
                          fontWeight: 200,
                          
                          
                        }}>
                          {hub.front}
                        </p>
                      </div>
                      
                      <div style={{
                        fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
                        color: '#cba641',
                        fontWeight: 200,
                        marginTop: 'auto',
                        
                        
                      }}>
                        Tap to learn more →
                      </div>
                    </div>

                    {/* Back of card */}
                    <div style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      background: 'rgba(203, 166, 65, 0.95)',
                      border: '1px solid rgba(203, 166, 65, 0.5)',
                      borderRadius: '15px',
                      padding: '1.5rem 1.2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        fontSize: 'clamp(1.8rem, 7vw, 2.5rem)',
                        marginBottom: '0.6rem'
                      }}>
                        {hub.icon}
                      </div>
                      
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <h3 style={{
                          fontFamily: 'Playfair Display, serif',
                          fontSize: 'clamp(0.9rem, 2.8vw, 1.2rem)',
                          fontWeight: 200,
                          color: '#092012',
                          marginBottom: '0.6rem',
                          textAlign: 'center',
                          lineHeight: '1.3',
                          
                          
                        }}>
                          {hub.title}
                        </h3>
                        
                        <p style={{
                          fontSize: 'clamp(0.7rem, 2.3vw, 0.85rem)',
                          lineHeight: '1.5',
                          color: '#092012',
                          textAlign: 'center',
                          marginBottom: '0.6rem',
                          fontWeight: 200,
                          
                          
                        }}>
                          {hub.back}
                        </p>
                      </div>
                      
                      <div style={{
                        fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
                        color: '#092012',
                        fontWeight: 200,
                        marginTop: 'auto',
                        
                        
                      }}>
                        Tap to flip back
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          padding: '4rem 2rem',
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

      <Footer />
    </div>
  );
}

export default Foundation;
