import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Footer from '../components/Footer';
import './FAQ.css';

function FAQ() {
  const [flippedCards, setFlippedCards] = useState({});
  const [modalIndex, setModalIndex] = useState(null);

  const phoneNumber = '+923336274343';

  const faqs = [
    {
      question: "What kind of school is Edenbridge Grammar?",
      shortAnswer: "A values-anchored, academically rigorous, and future-ready school focused on holistic child development.",
      fullAnswer: "Edenbridge Grammar is a values-anchored, academically rigorous, and future-ready school. We focus on building strong learning foundations while supporting the holistic development of each child—intellectually, emotionally, and morally. Our approach combines high academic standards, character formation, ethical conduct, and thoughtful preparation for the modern world."
    },
    {
      question: "What curriculum does Edenbridge Grammar follow?",
      shortAnswer: "The Exel Integrated Curriculum (EIC) combining England, Finland, and IB philosophy with AI-supported learning.",
      fullAnswer: "Edenbridge Grammar delivers the Exel Integrated Curriculum (EIC), a carefully designed and contemporary curriculum that draws on the strongest elements of the National Curricula of England and Finland, alongside the International Baccalaureate philosophy. The EIC ensures academic rigour while remaining responsive to how children learn best. Learning is delivered through expert-led teaching supported by a personalised, AI-informed learning platform."
    },
    {
      question: "How does Edenbridge Grammar approach character and values?",
      shortAnswer: "Character education is embedded in daily learning, rooted in Qur'anic values like Amanah, Adab, and Ihsan.",
      fullAnswer: "Character education at Edenbridge Grammar is embedded into everyday learning rather than taught as a separate subject. Rooted in Qur'anic values, character is developed through practice, reflection, and responsibility. We intentionally cultivate Trust and responsibility (Amanah), Respect, honesty, and dignity (Adab), Compassion and gratitude, and Excellence with humility (Ihsan)."
    },
    {
      question: "Is Edenbridge Grammar a religious school?",
      shortAnswer: "We are a faith-informed school where Qur'anic values guide ethics while teaching emphasizes strong academics.",
      fullAnswer: "Edenbridge Grammar is a faith-informed school. Qur'anic values guide our ethics, conduct, and worldview, while teaching is grounded in strong academics, critical inquiry, and respect for every learner. We believe that excellence in education and strength of character go hand in hand, and that faith is best expressed through integrity and action."
    },
    {
      question: "How does Edenbridge Grammar use technology?",
      shortAnswer: "Tech-advanced but values-guided, teaching both digital literacy and when not to use technology.",
      fullAnswer: "Edenbridge Grammar is a tech-advanced but values-guided school. Technology is used to support inquiry, creativity, understanding, and digital literacy. Students are also taught when and how not to use technology, ensuring balance, focus, and ethical digital behaviour."
    },
    {
      question: "How does the school ensure academic excellence?",
      shortAnswer: "Through clear goals, strong teaching, continuous assessment, and meaningful feedback with structured support.",
      fullAnswer: "Academic excellence at Edenbridge Grammar is built on clear learning goals, strong teaching practices, continuous assessment, and meaningful feedback. High expectations are paired with structured support. We prioritise depth of understanding over speed, pressure, or surface-level performance."
    },
    {
      question: "How are teachers selected and supported?",
      shortAnswer: "Selected for competence and values alignment, with ongoing training, mentoring, and feedback.",
      fullAnswer: "Teachers at Edenbridge Grammar are selected based on professional competence, alignment with the school's values, and a commitment to continuous learning. Teachers receive ongoing training, mentoring, and feedback to ensure consistently high-quality teaching and a supportive classroom environment."
    },
    {
      question: "How does the school handle discipline and behaviour?",
      shortAnswer: "Focus on reflection, responsibility, and growth. Corporal punishment and humiliation are strictly prohibited.",
      fullAnswer: "Discipline at Edenbridge Grammar focuses on reflection, responsibility, and growth in self-discipline. Students are guided to repair harm, learn from mistakes, and develop accountability. Corporal punishment and humiliation are strictly prohibited."
    },
    {
      question: "How does Edenbridge Grammar support different learning needs?",
      shortAnswer: "Through differentiated instruction, flexible strategies, and AI-informed tools with dignity and care.",
      fullAnswer: "We recognise that every child learns differently. Teachers use differentiated instruction, flexible strategies, and continuous observation supported by age-appropriate learning technologies. AI-informed tools help teachers personalise support while professional judgement remains central. All support is delivered with dignity and care."
    },
    {
      question: "What is the class size and learning environment like?",
      shortAnswer: "Manageable class sizes ensure individual attention in spaces designed for collaboration and exploration.",
      fullAnswer: "Edenbridge Grammar prioritises manageable class sizes to ensure individual attention, meaningful teacher–student interaction, and active participation. Learning extends beyond traditional classrooms into thoughtfully designed spaces that encourage collaboration, movement, and cross-disciplinary exploration."
    },
    {
      question: "How does the school communicate with parents?",
      shortAnswer: "Transparent communication with regular updates, meetings, and clear channels. Parents are partners.",
      fullAnswer: "We believe in transparent and respectful communication with parents. Families receive regular academic updates, opportunities for dialogue and meetings, and clear communication channels. Parents are viewed as partners in a child's growth and development."
    },
    {
      question: "How does Edenbridge Grammar ensure student safety?",
      shortAnswer: "Strict child protection policies, clear supervision protocols, and established reporting procedures.",
      fullAnswer: "Student safety is non-negotiable. The school follows strict child protection policies, clear supervision and safety protocols, and established procedures for reporting concerns. Every adult in the school community is responsible for student well-being."
    },
    {
      question: "What age groups does Edenbridge Grammar cater to?",
      shortAnswer: "Early Years, Primary Years, and Elementary Years—each developmentally designed.",
      fullAnswer: "Edenbridge Grammar currently offers education across Early Years, Primary Years, and Elementary Years. Each stage is developmentally designed to meet children where they are and guide them forward with purpose."
    },
    {
      question: "How does Edenbridge Grammar prepare children for the future?",
      shortAnswer: "Teaching critical thinking, clear communication, ethical action, and confident adaptation for life readiness.",
      fullAnswer: "We prepare students to think critically, communicate clearly, act ethically, and adapt confidently. Our focus extends beyond exams to life readiness, equipping students with the skills and character needed for an evolving world."
    },
    {
      question: "Is Edenbridge Grammar exam-focused?",
      shortAnswer: "We respect assessments but prioritize understanding, effort, and personal growth over exam pressure.",
      fullAnswer: "We respect the role of assessments but do not allow exams to define learning. Understanding, effort, and personal growth matter more than pressure, comparison, or narrow performance metrics."
    },
    {
      question: "How can parents apply for admission?",
      shortAnswer: "Contact the admissions team directly or arrange a campus visit for a clear, supportive process.",
      fullAnswer: "Parents can apply for admission by contacting the school directly to speak with the admissions team or by arranging a campus visit. Our admissions process is designed to be clear, supportive, and transparent."
    },
    {
      question: "What makes Edenbridge Grammar different from other schools?",
      shortAnswer: "We are intentional—every decision rooted in clear values and understanding of how children learn.",
      fullAnswer: "Edenbridge Grammar is different because we are intentional. Every decision—from curriculum design to student guidance—is rooted in clear values and a deep understanding of how children learn. We are explicit about why we educate, how children learn best, the role of values and ethics, and the responsible use of technology."
    }
  ];

  const toggleFlip = (index) => {
    console.log('Toggle flip called for index:', index);
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const openModal = (index) => {
    console.log('Open modal called for index:', index);
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(null);
  };

  const nextQuestion = () => {
    if (modalIndex < faqs.length - 1) {
      setModalIndex(modalIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (modalIndex > 0) {
      setModalIndex(modalIndex - 1);
    }
  };

  const handleCallClick = (e) => {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      e.preventDefault();
      alert(`Please call us at: ${phoneNumber}\n\nOr use your preferred calling app (Skype, Teams, WhatsApp, etc.)`);
    }
  };

  return (
    <div className="faq-page">
      <ParticleBackground />
      <Navbar />
      
      <section className="faq-hero">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="faq-hero-content"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="faq-title"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="faq-subtitle"
          >
            Find answers to common questions about Edenbridge Grammar
          </motion.p>
        </motion.div>
      </section>

      <section className="faq-content">
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="faq-card-wrapper"
            >
              <div className={`faq-card ${flippedCards[index] ? 'flipped' : ''}`}>
                <div className="faq-card-front">
                  <h3 className="faq-card-question">{faq.question}</h3>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFlip(index);
                    }} 
                    className="reveal-btn"
                    type="button"
                  >
                    Reveal the Answer
                  </button>
                </div>

                <div className="faq-card-back">
                  <h3 className="faq-card-question-back">{faq.question}</h3>
                  <p className="faq-card-short-answer">{faq.shortAnswer}</p>
                  <div className="faq-card-actions">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(index);
                      }} 
                      className="learn-more-card-btn"
                      type="button"
                    >
                      Learn More
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFlip(index);
                      }} 
                      className="flip-back-btn"
                      type="button"
                    >
                      ← Back
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {modalIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="faq-modal-overlay"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="faq-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={closeModal} className="modal-close">×</button>
              
              <div className="modal-navigation">
                <button onClick={prevQuestion} disabled={modalIndex === 0} className="modal-nav-btn">
                  ← Previous
                </button>
                <span className="modal-counter">{modalIndex + 1} / {faqs.length}</span>
                <button onClick={nextQuestion} disabled={modalIndex === faqs.length - 1} className="modal-nav-btn">
                  Next →
                </button>
              </div>

              <div className="modal-content-wrapper">
                <h2 className="modal-question">{faqs[modalIndex].question}</h2>
                <p className="modal-answer">{faqs[modalIndex].fullAnswer}</p>
                
                <a href={`tel:${phoneNumber}`} onClick={handleCallClick} className="modal-call-btn">
                  Contact Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default FAQ;
