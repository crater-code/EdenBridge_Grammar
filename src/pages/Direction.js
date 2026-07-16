import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Footer from '../components/Footer';
import NeuralDiagram from '../components/neural-diagram-3d/NeuralDiagram';
import './PhasesCommon.css';
import DirectionImage from '../assets/Direction.jpeg';

function Direction() {
  const [expandedHub, setExpandedHub] = React.useState(null);
  const [animating, setAnimating] = React.useState({});

  const toggleHub = (index) => {
    setAnimating(prev => ({ ...prev, [index]: true }));
    setExpandedHub(expandedHub === index ? null : index);
  };

  return (
    <div className="phase-page">
      <Navbar />
      <ParticleBackground />

      <div className="phase-hero-bg" style={{
        backgroundImage: `url(${DirectionImage})`,
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
            Direction Phase
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="phase-hero-subtitle"
          >
            Focused Learning for Future Success
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
                The Direction Phase represents the culmination of the educational journey at Edenbridge Grammar. 
                Students focus on their chosen paths with clarity and purpose, preparing for higher education 
                and meaningful careers.
              </p>

              <p className="phase-text">
                With a clear sense of direction, students engage in advanced learning, specialized studies, 
                and real-world applications. We provide mentorship, career guidance, and opportunities to 
                develop expertise in their chosen fields while maintaining strong values and ethical foundations.
              </p>

              <p className="phase-text">
                This phase emphasizes depth over breadth, allowing students to pursue their passions with 
                intensity and focus. Through project-based learning, research opportunities, and industry 
                connections, students build portfolios that demonstrate real-world competence.
              </p>

              <p className="phase-text">
                Students develop specialized expertise, engage with cutting-edge knowledge in their fields, 
                and prepare for the challenges of university and professional life. They emerge as confident, 
                capable individuals ready to make meaningful contributions to society.
              </p>

              <div className="phase-highlight">
                <p className="phase-highlight-text">
                  <em>Graduates of the Direction Phase leave with university-ready academic credentials, 
                  professional portfolios, and the confidence to pursue their chosen paths with purpose.</em>
                </p>
                <p className="phase-highlight-text">
                  <em>They are equipped not just with knowledge, but with the wisdom to use it responsibly, 
                  the character to lead with integrity, and the skills to thrive in an ever-changing world.</em>
                </p>
              </div>
            </div>

            <div className="phase-diagram-column">
              <NeuralDiagram />
              <p className="phase-diagram-label">Neural Development</p>
              <p className="phase-diagram-sublabel">Specialized expertise and professional readiness</p>
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
                Graduates of the Direction Phase leave with university-ready academic credentials, 
                professional portfolios, and the confidence to pursue their chosen paths with purpose.
              </p>

              <p className="phase-text">
                They have developed deep expertise in their chosen fields, demonstrated through research 
                projects, internships, and real-world applications. They possess the academic rigor, 
                ethical foundation, and practical skills needed to excel in higher education and beyond.
              </p>

              <div className="phase-highlight">
                <p className="phase-highlight-text">
                  <strong>They leave this phase with:</strong>
                </p>
                <ul className="phase-outcome-list">
                  <li>University-level academic credentials and qualifications</li>
                  <li>Professional portfolios demonstrating real-world competence</li>
                  <li>Clear career pathways and university acceptances</li>
                  <li>Leadership experience and community impact</li>
                  <li>Strong Islamic character and ethical reasoning</li>
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
                <li>Specialized Expertise - Deep knowledge in chosen fields of study</li>
                <li>Research Excellence - University-level research and analytical skills</li>
                <li>Professional Readiness - Industry connections and practical experience</li>
                <li>Leadership & Agency - Ability to lead projects and inspire others</li>
                <li>Global Perspective - Understanding of international contexts and cultures</li>
                <li>Ethical Leadership - Values-driven decision making in complex situations</li>
                <li>Innovation & Entrepreneurship - Creating solutions to real-world problems</li>
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
                  front: 'Students design and lead advanced sustainability initiatives.',
                  back: 'Students design and lead advanced sustainability initiatives, analysing environmental systems, policy, and innovation models. They produce research, prototypes, or community impact projects that demonstrate scientific depth and ethical stewardship at a pre-university level.'
                },
                { 
                  icon: '🚀', 
                  title: 'Enterprise Innovation Hub', 
                  front: 'Students build viable ventures and social enterprises.',
                  back: 'Students build viable ventures, social enterprises, or scalable project models. They develop advanced financial literacy, market analysis, strategic planning, and leadership skills—leaving with real-world experience in value creation and economic contribution.'
                },
                { 
                  icon: '📖', 
                  title: 'Literature & The Arts Innovation Hub', 
                  front: 'Students critically engage with global literature and philosophy.',
                  back: 'Students critically engage with global literature, philosophy, and artistic traditions while producing original, portfolio-level creative work. They refine analytical writing, cultural critique, and expressive voice—preparing for higher education and intellectual discourse.'
                },
                { 
                  icon: '🤖', 
                  title: 'Technology & AI Innovation Hub', 
                  front: 'Students explore advanced coding and AI ethics.',
                  back: 'Students explore advanced coding, data systems, AI ethics, and emerging technologies. They design and evaluate intelligent systems, understand algorithmic impact, and develop technological solutions with responsibility and strategic insight.'
                },
                { 
                  icon: '🏗', 
                  title: 'Design Systems Innovation Hub', 
                  front: 'Students apply high-level systems thinking to complex challenges.',
                  back: 'Students apply high-level systems thinking to complex social, technological, or environmental challenges. Through engineering design, architecture concepts, and strategic modelling, they produce solutions that balance innovation, feasibility, and societal impact.'
                },
                { 
                  icon: '🎙', 
                  title: 'Digital Communications & Media Innovation Hub', 
                  front: 'Students produce professional-level media and journalism.',
                  back: 'Students produce professional-level media, journalism, campaigns, and digital content. They analyse influence, audience psychology, narrative power, and ethical communication—developing a strong public voice and media credibility.'
                },
                { 
                  icon: '🌙', 
                  title: 'Islamic & Spirituality Innovation Hub', 
                  front: 'Students deepen Qur\'anic scholarship and ethical leadership.',
                  back: 'Students deepen their understanding of Qur\'anic scholarship, ethics, leadership, and applied spirituality. They explore contemporary issues through an Islamic lens, developing moral reasoning, intellectual clarity, and the confidence to lead with integrity in complex environments.'
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
                      transformStyle: animating[index] ? 'preserve-3d' : 'flat',
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      minHeight: '280px'
                    }}
                    animate={{ rotateY: expandedHub === index ? 180 : 0 }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                    onAnimationComplete={() => setAnimating(prev => ({ ...prev, [index]: false }))}
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

export default Direction;

