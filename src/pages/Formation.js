import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Footer from '../components/Footer';
import NeuralDiagram from '../components/NeuralDiagram';
import './PhasesCommon.css';
import FormationImage from '../assets/Formation.jpeg';

function Formation() {
  const [expandedHub, setExpandedHub] = React.useState(null);

  const toggleHub = (index) => {
    setExpandedHub(expandedHub === index ? null : index);
  };

  return (
    <div className="phase-page">
      <Navbar />
      <ParticleBackground />

      <div className="phase-hero-bg" style={{
        backgroundImage: `url(${FormationImage})`,
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
            Formation Phase
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="phase-hero-subtitle"
          >
            Where Curiosity Matures Into Capability
          </motion.p>
        </motion.div>
      </section>

      <section className="phase-main-section">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="phase-main-card"
        >
          <h2 className="phase-overview-title">Phase Overview</h2>
          
          <div className="phase-two-column">
            <div className="phase-text-column">
              <h3 className="phase-subtitle">What This Phase Is About</h3>
              
              <p className="phase-text">
                The Formation Phase is where curiosity matures into capability, and learning takes powerful, 
                confident shape. In this phase, children do not simply follow age-based expectations—they are 
                invited to think beyond them.
              </p>

              <p className="phase-text">
                Learners engage with complex concepts often years above traditional benchmarks, not through 
                acceleration alone, but through depth, application, and sustained exploration. Play evolves 
                into purposeful, challenge-led learning.
              </p>

              <p className="phase-text">
                Through extended Quests and long-term projects, students wrestle with real questions, test ideas, 
                refine thinking, and apply advanced academic concepts in meaningful contexts. Literacy becomes 
                analytical, numeracy becomes strategic, and thinking becomes increasingly deliberate and structured.
              </p>

              <p className="phase-text">
                Rather than learning in fragments, students connect ideas across disciplines. They release 
                sophisticated vocabulary, experiment with higher-level mathematical reasoning, explore scientific 
                principles through investigation, and articulate their thinking with growing precision and independence.
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
              <p className="phase-diagram-sublabel">Curiosity maturing into capability and mastery</p>
              <p className="phase-diagram-note">Drag to rotate • Scroll to zoom</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="phase-main-section">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="phase-main-card"
        >
          <h2 className="phase-overview-title">Outcomes & Competencies</h2>
          
          <div className="phase-outcomes-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="phase-outcome-card"
            >
              <h3 className="phase-outcome-title">Lifelong Outcomes</h3>
              
              <p className="phase-text">
                Students who complete the Formation Phase emerge with advanced academic foundations and the 
                confidence to engage with complex ideas. They demonstrate mastery in core subjects while 
                developing critical thinking and problem-solving capabilities.
              </p>

              <p className="phase-text">
                By prioritising depth over speed, students build robust understanding that prepares them for 
                increasingly sophisticated learning. They develop resilience, intellectual curiosity, and the 
                ability to work independently and collaboratively.
              </p>

              <div className="phase-highlight">
                <p className="phase-highlight-text">
                  <strong>They leave this phase with:</strong>
                </p>
                <ul className="phase-outcome-list">
                  <li>Advanced literacy and numeracy skills beyond grade level</li>
                  <li>Ability to think critically and solve complex problems</li>
                  <li>Strong research and inquiry capabilities</li>
                  <li>Confidence in presenting ideas and defending arguments</li>
                  <li>Deep understanding of Islamic values and character</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="phase-outcome-card"
            >
              <h3 className="phase-outcome-title">Key Competencies</h3>
              
              <ul className="phase-competency-list">
                <li>Depth Over Acceleration - Mastery of complex concepts through sustained exploration</li>
                <li>Quest-Based Learning - Extended projects that integrate multiple disciplines</li>
                <li>Critical Thinking - Analysis, evaluation, and synthesis of ideas</li>
                <li>Academic Excellence - Advanced skills in literacy, numeracy, and sciences</li>
                <li>Collaborative Intelligence - Working effectively with peers and mentors</li>
                <li>Islamic Character - Values-driven decision making and ethical reasoning</li>
                <li>Technology Integration - Purposeful use of AI and digital tools</li>
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
          viewport={{ once: true, amount: 0.3 }}
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
                  front: 'Where curiosity matures into investigation.',
                  back: 'Where curiosity matures into investigation, and ambitious projects bring complex scientific ideas to life through research, experimentation, and real-world application.'
                },
                { 
                  icon: '🎨', 
                  title: 'Creative Expression', 
                  front: 'Where imagination evolves into voice.',
                  back: 'Where imagination evolves into voice—through poetry, art, design, and performance that explore meaning, identity, and perspective with growing depth.'
                },
                { 
                  icon: '📚', 
                  title: 'Literacy', 
                  front: 'Where language becomes precision and power.',
                  back: 'Where language becomes precision and power—grammar, vocabulary, analysis, and storytelling developing confident readers, writers, speakers, and presenters.'
                },
                { 
                  icon: '➗', 
                  title: 'Mathematics', 
                  front: 'Where fluency meets reasoning.',
                  back: 'Where fluency meets reasoning—students explore patterns, strategy, and conceptual depth, applying mathematics to solve increasingly complex, real-world problems.'
                },
                { 
                  icon: '🌙', 
                  title: 'Urdu & Qur\'an', 
                  front: 'Connecting to literary heritage and deepening faith.',
                  back: 'Where Urdu connects learners to a rich literary heritage of poets and scholars, refining expression and cultural depth. Through the Qur\'an, students deepen understanding, character, and spiritual awareness—learning to live their faith with reflection and purpose.'
                },
                { 
                  icon: '💻', 
                  title: 'Digital Communication, AI & Technology', 
                  front: 'Where technology becomes a tool for thinking.',
                  back: 'Where technology becomes a tool for thinking—students learn to research intelligently, communicate responsibly, create digitally, and understand the systems shaping their future.'
                },
                { 
                  icon: '🏃', 
                  title: 'Physical & Social Development', 
                  front: 'Where strength, resilience, and teamwork grow.',
                  back: 'Where strength, resilience, teamwork, and emotional intelligence grow - building confident individuals who understand discipline, cooperation, and healthy living.'
                }
              ].map((hub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  style={{ 
                    perspective: '1000px', 
                    height: '100%',
                    minHeight: '280px',
                    width: '100%'
                  }}
                >
                  <motion.div
                    onClick={() => toggleHub(index)}
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
                      padding: 'clamp(1.2rem, 3vw, 2rem) clamp(1rem, 2.5vw, 1.5rem)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                        marginBottom: 'clamp(0.6rem, 2vw, 1rem)'
                      }}>
                        {hub.icon}
                      </div>
                      
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <h3 style={{
                          fontFamily: 'Playfair Display, serif',
                          fontSize: 'clamp(0.95rem, 3vw, 1.3rem)',
                          fontWeight: 200,
                          color: '#cba641',
                          marginBottom: 'clamp(0.5rem, 1.5vw, 0.8rem)',
                          textAlign: 'center',
                          lineHeight: '1.3'
                        }}>
                          {hub.title}
                        </h3>
                        
                        <p style={{
                          fontSize: 'clamp(0.75rem, 2.5vw, 0.9rem)',
                          lineHeight: '1.4',
                          color: '#e8e8e8',
                          textAlign: 'center',
                          marginBottom: 'clamp(0.6rem, 1.5vw, 1rem)'
                        }}>
                          {hub.front}
                        </p>
                      </div>
                      
                      <div style={{
                        fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
                        color: '#cba641',
                        fontWeight: 200,
                        marginTop: 'auto'
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
                      padding: 'clamp(1.2rem, 3vw, 2rem) clamp(1rem, 2.5vw, 1.5rem)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        fontSize: 'clamp(1.8rem, 7vw, 2.5rem)',
                        marginBottom: 'clamp(0.5rem, 1.5vw, 0.8rem)'
                      }}>
                        {hub.icon}
                      </div>
                      
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <h3 style={{
                          fontFamily: 'Playfair Display, serif',
                          fontSize: 'clamp(0.9rem, 2.8vw, 1.2rem)',
                          fontWeight: 200,
                          color: '#092012',
                          marginBottom: 'clamp(0.5rem, 1.5vw, 0.8rem)',
                          textAlign: 'center',
                          lineHeight: '1.3'
                        }}>
                          {hub.title}
                        </h3>
                        
                        <p style={{
                          fontSize: 'clamp(0.7rem, 2.3vw, 0.85rem)',
                          lineHeight: '1.5',
                          color: '#092012',
                          textAlign: 'center',
                          marginBottom: 'clamp(0.5rem, 1.5vw, 0.8rem)'
                        }}>
                          {hub.back}
                        </p>
                      </div>
                      
                      <div style={{
                        fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
                        color: '#092012',
                        fontWeight: 200,
                        marginTop: 'auto'
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
            fontWeight: 200,
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
            fontWeight: 200,
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

export default Formation;

