import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Footer from '../components/Footer';
import './ApplyNow.css';

function ApplyNow() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to PHP backend
      const response = await fetch('/api/submit-application.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setLoading(false);
        setSubmitted(true);
        console.log('Application submitted successfully:', result);
      } else {
        setLoading(false);
        alert('Error: ' + result.message);
        console.error('Submission error:', result);
      }
    } catch (error) {
      setLoading(false);
      alert('Failed to submit application. Please try again or contact us directly.');
      console.error('Network error:', error);
    }
  };

  return (
    <div className="apply-page">
      <Navbar />
      <ParticleBackground />
      
      <motion.div className="gradient-bg" />

      <section className="apply-hero">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="apply-content"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="apply-title"
          >
            Apply Now
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="apply-subtitle"
          >
            Begin your child's journey to excellence. Fill out the form below and our admissions team will contact you shortly.
          </motion.p>

          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="apply-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="parentName">Parent/Guardian Name *</label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="childAge">Child's Age *</label>
                  <select
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select age range</option>
                    <option value="3-5">3-5 years (Early Years)</option>
                    <option value="6-8">6-8 years (Foundation Phase)</option>
                    <option value="9-11">9-11 years (Formation Phase)</option>
                    <option value="12-14">12-14 years (Orientation Phase)</option>
                    <option value="15-18">15-18 years (Direction Phase)</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your child's interests, any special requirements, or questions you may have..."
                ></textarea>
              </div>

              <div className="form-actions">
                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </motion.button>
              </div>

              <p className="form-note">
                * Required fields. Your information will be kept confidential and used only for admission purposes.
              </p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="success-message"
            >
              <div className="success-icon">✓</div>
              <h2>Application Submitted Successfully!</h2>
              <p>
                Thank you for your interest in Edenbridge Grammar. Our admissions team will review your application and contact you within 24-48 hours.
              </p>
              <div className="success-actions">
                <motion.a
                  href="https://wa.me/923336274343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Chat on WhatsApp
                </motion.a>
                <motion.button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      parentName: '',
                      email: '',
                      phone: '',
                      childAge: '',
                      message: ''
                    });
                  }}
                  className="another-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit Another Application
                </motion.button>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="contact-info"
          >
            <div className="info-card">
              <span className="info-icon">📧</span>
              <div>
                <h4>Email Us</h4>
                <a href="mailto:info@edenbridgegrammar.com">info@edenbridgegrammar.com</a>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">📞</span>
              <div>
                <h4>Call Us</h4>
                <a href="tel:+923336274343">+92 333 6274343</a>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">💬</span>
              <div>
                <h4>WhatsApp</h4>
                <a href="https://wa.me/923336274343" target="_blank" rel="noopener noreferrer">Chat Now</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default ApplyNow;
