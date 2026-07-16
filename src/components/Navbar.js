import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [studyDropdownOpen, setStudyDropdownOpen] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const teamDropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Close mobile menu on scroll
      if (mobileMenuOpen && window.innerWidth <= 968) {
        setMobileMenuOpen(false);
        setStudyDropdownOpen(false);
        setTeamDropdownOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.navbar-menu') && !event.target.closest('.mobile-menu-toggle')) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = () => {
    if (window.innerWidth > 968) {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      setStudyDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 968) {
      dropdownTimeoutRef.current = setTimeout(() => {
        setStudyDropdownOpen(false);
      }, 300);
    }
  };

  const handleTeamMouseEnter = () => {
    if (window.innerWidth > 968) {
      if (teamDropdownTimeoutRef.current) {
        clearTimeout(teamDropdownTimeoutRef.current);
      }
      setTeamDropdownOpen(true);
    }
  };

  const handleTeamMouseLeave = () => {
    if (window.innerWidth > 968) {
      teamDropdownTimeoutRef.current = setTimeout(() => {
        setTeamDropdownOpen(false);
      }, 300);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setStudyDropdownOpen(false);
    setTeamDropdownOpen(false);
  };

  const toggleStudyDropdown = (e) => {
    e.stopPropagation();
    if (window.innerWidth <= 968) {
      setStudyDropdownOpen(!studyDropdownOpen);
      setTeamDropdownOpen(false);
    }
  };

  const toggleTeamDropdown = (e) => {
    e.stopPropagation();
    if (window.innerWidth <= 968) {
      setTeamDropdownOpen(!teamDropdownOpen);
      setStudyDropdownOpen(false);
    }
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <motion.div 
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
        >
          <img src="/logo.png" alt="Edenbridge Grammar" className="logo-image" />
          <div className="logo-text-container">
            <span className="logo-text">Edenbridge Grammar</span>
            <span className="logo-subtitle">Beyond Schooling</span>
          </div>
        </motion.div>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
        
        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/" onClick={closeMobileMenu}>Home</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/our-ideology" onClick={closeMobileMenu}>Our Ideology</Link>
          </motion.li>
          <motion.li 
            className="dropdown-menu-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="dropdown-trigger" onClick={toggleStudyDropdown}>
              Study
              <svg 
                className="dropdown-arrow" 
                width="12" 
                height="8" 
                viewBox="0 0 12 8" 
                fill="currentColor"
                style={{ transform: studyDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
              >
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </span>
            {studyDropdownOpen && (
              <div 
                className="dropdown-content"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/study/foundation-phase" onClick={closeMobileMenu}>Foundation Phase</Link>
                <Link to="/study/formation-phase" onClick={closeMobileMenu}>Formation Phase</Link>
                <Link to="/study/orientation-phase" onClick={closeMobileMenu}>Orientation Phase</Link>
                <Link to="/study/direction-phase" onClick={closeMobileMenu}>Direction Phase</Link>
                <div className="dropdown-divider"></div>
                <Link to="/study/learning-framework" onClick={closeMobileMenu}>Learning Framework</Link>
              </div>
            )}
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/faq" onClick={closeMobileMenu}>FAQs</Link>
          </motion.li>
          <motion.li 
            className="dropdown-menu-item"
            onMouseEnter={handleTeamMouseEnter}
            onMouseLeave={handleTeamMouseLeave}
          >
            <span className="dropdown-trigger" onClick={toggleTeamDropdown}>
              Team
              <svg 
                className="dropdown-arrow" 
                width="12" 
                height="8" 
                viewBox="0 0 12 8" 
                fill="currentColor"
                style={{ transform: teamDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
              >
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </span>
            {teamDropdownOpen && (
              <div 
                className="dropdown-content"
                onMouseEnter={handleTeamMouseEnter}
                onMouseLeave={handleTeamMouseLeave}
              >
                <Link to="/team/board-of-directors" onClick={closeMobileMenu}>Board of Directors</Link>
                <Link to="/team/founders-message" onClick={closeMobileMenu}>Founder's Message</Link>
                <Link to="/team/careers" onClick={closeMobileMenu}>Careers</Link>
              </div>
            )}
          </motion.li>
          
          <li className="mobile-cta-wrapper">
            <Link to="/apply-now" className="mobile-cta" onClick={closeMobileMenu}>
              Apply Now
            </Link>
          </li>
        </ul>

        <Link
          to="/apply-now"
          className="navbar-cta"
          style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        >
          Apply Now
        </Link>
      </div>
    </motion.nav>
  );
}

export default Navbar;
