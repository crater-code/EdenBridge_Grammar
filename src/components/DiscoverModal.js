import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './DiscoverModal.css';

function DiscoverModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="modal-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>×</button>
          
          <div className="modal-icon">
            <div className="target-icon">🎯</div>
          </div>

          <h2 className="modal-title">Discover Your Passion</h2>
          
          <p className="modal-description">
            Explore diverse fields and find your calling. The Orientation Phase is 
            your gateway to discovering what truly inspires you and sets your path 
            for future success.
          </p>

          <div className="modal-buttons">
            <motion.a
              href="https://wa.me/923336274343"
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn modal-btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.a>
            
            <Link
              to="/our-ideology"
              className="modal-btn modal-btn-secondary"
              onClick={onClose}
            >
              Learn More
            </Link>
          </div>

          <div className="modal-footer">
            <div className="modal-contact">
              <span className="contact-icon">✉️</span>
              <span>info@edenbridgegrammar.com</span>
            </div>
            <div className="modal-contact">
              <span className="contact-icon">📞</span>
              <span>Schedule a Consultation</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default DiscoverModal;
