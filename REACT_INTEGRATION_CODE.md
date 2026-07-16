# React Integration with PHP Backend

## Update ApplyNow.js

Replace the `handleSubmit` function in `src/pages/ApplyNow.js` with this code:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    // Replace with your actual domain
    const API_URL = 'https://yourdomain.com/api/submit-application.php';
    
    const response = await fetch(API_URL, {
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
      
      // Optional: Send to WhatsApp as backup
      const message = `New Application Submitted!\n\nApplication ID: #${result.applicationId}\nParent Name: ${formData.parentName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nChild's Age: ${formData.childAge}\nMessage: ${formData.message}`;
      console.log('Application submitted successfully:', result);
      
      // Uncomment to open WhatsApp
      // const whatsappUrl = `https://wa.me/923336274343?text=${encodeURIComponent(message)}`;
      // window.open(whatsappUrl, '_blank');
    } else {
      throw new Error(result.message || 'Submission failed');
    }
  } catch (error) {
    setLoading(false);
    alert('Error submitting application: ' + error.message + '\n\nPlease try again or contact us directly at +92 333 6274343');
    console.error('Submission error:', error);
  }
};
```

## Complete Updated ApplyNow.js File

Here's the complete updated file with PHP backend integration:

```javascript
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

  // API Configuration
  const API_URL = process.env.REACT_APP_API_URL || 'https://yourdomain.com/api/submit-application.php';

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
      const response = await fetch(API_URL, {
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
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      setLoading(false);
      alert('Error submitting application: ' + error.message + '\n\nPlease try again or contact us directly at +92 333 6274343');
      console.error('Submission error:', error);
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
```

## Environment Variables

Create a `.env` file in your project root:

```env
REACT_APP_API_URL=https://yourdomain.com/api/submit-application.php
```

## Testing Locally

For local testing, you can use a proxy in `package.json`:

```json
{
  "proxy": "http://localhost:8000"
}
```

Then update API_URL to:
```javascript
const API_URL = '/api/submit-application.php';
```

## CORS Configuration

If you encounter CORS errors, ensure your PHP files have these headers:

```php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
```

For production, replace `*` with your actual domain:
```php
header('Access-Control-Allow-Origin: https://yourdomain.com');
```

## Error Handling

The code includes comprehensive error handling:
- Network errors
- Server errors
- Validation errors
- User-friendly error messages
- Fallback to WhatsApp contact

## Success Response

When successful, the API returns:
```json
{
  "success": true,
  "message": "Application submitted successfully",
  "applicationId": 123
}
```

## Error Response

When there's an error:
```json
{
  "success": false,
  "message": "Error description here"
}
```

---

**Ready to deploy!** Follow the BACKEND_SETUP_GUIDE.md to complete the setup.
