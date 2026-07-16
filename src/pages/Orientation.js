import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Footer from '../components/Footer';
import NeuralDiagram from '../components/neural-diagram-3d/NeuralDiagram';
import './PhasesCommon.css';
import OrientationImage from '../assets/Orientation.jpeg';

function Orientation() {
  const [expandedHub, setExpandedHub] = React.useState(null);

  const toggleHub = (index) => {
    setExpandedHub(expandedHub === index ? null : index);
  };

  return (
    <div className="phase-page">
      <Navbar />
      <ParticleBackground />

      <div className="phase-hero-bg" style={{
        backgroundImage: `url(${OrientationImage})`,
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
            Orientation Phase
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="phase-hero-subtitle"
          >
            Exploring Interests and Discovering Your Path
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
                The Orientation Phase marks a shift from guided exploration to increasing intellectual 
                independence and strategic thinking. Academic depth intensifies as learners develop stronger 
                subject expertise and critical thinking capabilities.
              </p>

              <p className="phase-text">
                Subject expertise becomes more defined, critical thinking sharpens, and learners begin navigating 
                complex ideas across disciplines. Concepts are no longer simply explored—they are analysed, 
                debated, and applied to authentic challenges.
              </p>

              <p className="phase-text">
                Extended Quests evolve into interdisciplinary projects requiring research, collaboration, 
                evidence, and presentation. Learners engage with real-world issues—sustainability, governance, 
                technology, culture, ethics—developing the ability to connect knowledge across contexts.
              </p>

              <p className="phase-text">
                This is the phase where learners begin to ask bigger questions: Who am I becoming? What strengths 
                define me? Where can I contribute meaningfully? Academic mastery is paired with self-awareness, 
                ethical reasoning, and the capacity to lead with purpose.
              </p>

              <div className="phase-highlight">
                <p className="phase-highlight-text">
                  <em>By the end of the Orientation Phase, learners demonstrate measurable academic competence 
                  alongside emerging leadership and agency.</em>
                </p>
                <p className="phase-highlight-text">
                  <em>They leave this phase with clarity about their abilities, clarity about their values, 
                  and clarity about the responsibility that comes with both.</em>
                </p>
              </div>
            </div>

            <div className="phase-diagram-column">
              <NeuralDiagram />
              <p className="phase-diagram-label">Neural Development</p>
              <p className="phase-diagram-sublabel">Critical thinking and interdisciplinary exploration</p>
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
                By the end of the Orientation Phase, learners demonstrate measurable academic competence 
                alongside emerging leadership and agency.
              </p>

              <p className="phase-text">
                Learners begin to take ownership of their learning pathways. They understand how their 
                strengths connect to future opportunities. They build portfolios of applied work that 
                demonstrate real capability—not just grades.
              </p>

              <div className="phase-highlight">
                <p className="phase-highlight-text">
                  <strong>They leave this phase with clarity:</strong>
                </p>
                <ul className="phase-outcome-list">
                  <li>Clarity about their abilities</li>
                  <li>Clarity about their values</li>
                  <li>Clarity about the responsibility that comes with both</li>
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
                <li>Strong subject foundations aligned with international standards</li>
                <li>The ability to think critically and evaluate evidence</li>
                <li>Research fluency and structured academic writing</li>
                <li>Confidence in presenting and defending ideas</li>
                <li>Ethical reasoning rooted in Islamic values</li>
                <li>The capacity to collaborate across perspectives and cultures</li>
                <li>Intelligent and responsible use of technology</li>
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
              <h2 className="phase-hubs-title-horizontal">Innovation Hubs</h2>
              <p className="phase-hubs-subtitle-horizontal">Swapping Traditional Classrooms for Innovation Hubs</p>
            </div>
            
            <div className="phase-hubs-grid">
              {[
                { 
                  icon: '🌱', 
                  title: 'ECO & Regenerative Earth Innovation Hub', 
                  front: 'Students investigate real environmental challenges.',
                  back: 'Students investigate real environmental challenges and design sustainable solutions. Through science, systems thinking, and ethical stewardship, they learn to innovate responsibly and contribute to a healthier planet.'
                },
                { 
                  icon: '🚀', 
                  title: 'Enterprise Innovation Hub', 
                  front: 'Ideas turn into action.',
                  back: 'Ideas turn into action. Students explore entrepreneurship, financial literacy, and value creation - building confidence, resilience, and the mindset to create opportunity rather than wait for it.'
                },
                { 
                  icon: '📖', 
                  title: 'Literature & The Arts Innovation Hub', 
                  front: 'Voice gains power through literature and expression.',
                  back: 'Voice gains power through literature, philosophy, and creative expression. Students analyse, interpret, and create meaningful work—developing cultural awareness and confident communication.'
                },
                { 
                  icon: '🤖', 
                  title: 'Technology & AI Innovation Hub', 
                  front: 'Students move from consumers to creators.',
                  back: 'Students move from consumers to creators of technology. Through coding, AI exploration, and digital ethics, they develop computational thinking and responsible innovation skills.'
                },
                { 
                  icon: '🏗', 
                  title: 'Design Systems Innovation Hub', 
                  front: 'Complex problems are mapped and improved.',
                  back: 'Complex problems are mapped, designed, and improved. Students learn systems thinking, engineering principles, and iterative design - building precision, strategy, and real-world problem-solving ability.'
                },
                { 
                  icon: '🎙', 
                  title: 'Digital Communications & Media Innovation Hub', 
                  front: 'Ideas are crafted and shared with clarity.',
                  back: 'Ideas are crafted and shared with clarity. Through media production, journalism, and digital storytelling, students develop persuasive communication and critical media literacy.'
                },
                { 
                  icon: '🌙', 
                  title: 'Islamic & Spirituality Innovation Hub', 
                  front: 'Faith is explored as lived practice.',
                  back: 'Faith is explored as lived practice. Students deepen Qur\'anic understanding, ethical reasoning, and character development—integrating spiritual grounding with leadership and contribution.'
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
                      background: 'rgba(9, 32, 18, 0.85)',
                      border: '1px solid rgba(203, 166, 65, 0.3)',
                      borderRadius: '20px',
                      padding: '2rem 1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        fontSize: '3.5rem',
                        marginBottom: '1rem'
                      }}>
                        {hub.icon}
                      </div>
                      
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <h3 style={{
                          fontFamily: 'Playfair Display, serif',
                          fontSize: '1.3rem',
                          fontWeight: 200,
                          color: '#cba641',
                          marginBottom: '0.8rem',
                          textAlign: 'center',
                          lineHeight: '1.3'
                        }}>
                          {hub.title}
                        </h3>
                        
                        <p style={{
                          fontSize: '0.9rem',
                          lineHeight: '1.5',
                          color: '#e8e8e8',
                          textAlign: 'center',
                          marginBottom: '1rem'
                        }}>
                          {hub.front}
                        </p>
                      </div>
                      
                      <div style={{
                        fontSize: '0.85rem',
                        color: '#cba641',
                        fontWeight: 200,
                        marginTop: 'auto'
                      }}>
                        Click to learn more →
                      </div>
                    </div>

                    {/* Back of card */}
                    <div style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      background: 'rgba(203, 166, 65, 0.95)',
                      border: '1px solid rgba(203, 166, 65, 0.5)',
                      borderRadius: '20px',
                      padding: '2rem 1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        fontSize: '2.5rem',
                        marginBottom: '0.8rem'
                      }}>
                        {hub.icon}
                      </div>
                      
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <h3 style={{
                          fontFamily: 'Playfair Display, serif',
                          fontSize: '1.2rem',
                          fontWeight: 200,
                          color: '#092012',
                          marginBottom: '0.8rem',
                          textAlign: 'center',
                          lineHeight: '1.3'
                        }}>
                          {hub.title}
                        </h3>
                        
                        <p style={{
                          fontSize: '0.85rem',
                          lineHeight: '1.6',
                          color: '#092012',
                          textAlign: 'center',
                          marginBottom: '0.8rem'
                        }}>
                          {hub.back}
                        </p>
                      </div>
                      
                      <div style={{
                        fontSize: '0.85rem',
                        color: '#092012',
                        fontWeight: 200,
                        marginTop: 'auto'
                      }}>
                        Click to flip back
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

export default Orientation;

