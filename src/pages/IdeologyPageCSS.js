import Navbar from '../components/Navbar'
import ParticleBackground from '../components/ParticleBackground'
import Footer from '../components/Footer'
import IdeologyHeroCSS from '../components/ideology/IdeologyHeroCSS'
import CorePhilosophyCSS from '../components/ideology/CorePhilosophyCSS'
import LearningModelCSS from '../components/ideology/LearningModelCSS'
import GuidingPrinciplesCSS from '../components/ideology/GuidingPrinciplesCSS'
import RoleOfAdultCSS from '../components/ideology/RoleOfAdultCSS'
import { motion } from 'framer-motion'

function IdeologyPageCSS() {
  return (
    <div style={{ 
      position: 'relative', 
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at top, #233e2b 0%, #092012 50%, #000000 100%)',
      overflow: 'hidden'
    }}>
      <div style={{
        content: '',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(circle at 20% 30%, rgba(203, 166, 65, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(35, 62, 43, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(203, 166, 65, 0.2) 0%, transparent 50%)
        `,
        animation: 'gradientShift 15s ease infinite',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <style>{`
        @keyframes gradientShift {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
      <ParticleBackground />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <IdeologyHeroCSS />
        <CorePhilosophyCSS />
        <LearningModelCSS />
        <GuidingPrinciplesCSS />
        <RoleOfAdultCSS />
        
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
    </div>
  )
}

export default IdeologyPageCSS
