import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp, FaPhoneAlt, FaEnvelope, FaQuestionCircle, FaClock,
  FaSearch, FaChevronDown, FaShippingFast, FaUndo, FaShieldAlt,
  FaUserCircle, FaMapMarkerAlt, FaComments, FaStore
} from "react-icons/fa";
import "../Pages/Help.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const faqs = [
  {
    id: 1,
    question: "How can I track my order status?",
    answer: "You can track your order by going to the 'History' page. Simply copy your Order ID and use our real-time tracker to see your shipment's progress."
  },
  {
    id: 2,
    question: "What is your return policy?",
    answer: "We offer a 7-day hassle-free return policy. If you're not satisfied with your purchase, you can initiate a return directly from the order details section."
  },
  {
    id: 3,
    question: "How do I create a shop as a seller?",
    answer: "To become a seller, go to the 'Create Shop' page from your profile menu. Fill in your business details and verify your identity to start listing items."
  },
  {
    id: 4,
    question: "Is my payment information secure?",
    answer: "Absolutely. We use industry-standard encryption to protect your data. We never store your full card details on our servers."
  },
  {
    id: 5,
    question: "How can I contact a seller directly?",
    answer: "On every product page, there is a 'Contact Seller' button. You can send them a direct message to ask about product details or availability."
  }
];

const helpCategories = [
  { id: 1, icon: <FaShippingFast />, title: "Orders & Shipping", desc: "Track, change, or cancel orders" },
  { id: 2, icon: <FaUndo />, title: "Returns & Refunds", desc: "Start a return or check refund status" },
  { id: 3, icon: <FaUserCircle />, title: "Account & Security", desc: "Manage profile and security settings" },
  { id: 4, icon: <FaShieldAlt />, title: "Payments & Pricing", desc: "Troubleshoot payment issues" },
  { id: 5, icon: <FaStore />, title: "Selling on RentKnock", desc: "Setup your shop and list products" },
  { id: 6, icon: <FaComments />, title: "Promotions & Offers", desc: "Learn about discounts and coupons" },
  { id: 7, icon: <FaShieldAlt />, title: "Privacy & Legal", desc: "Terms of use and privacy policy" },
  { id: 8, icon: <FaSearch />, title: "Technical Support", desc: "Issues with app or website" },
];

const Help = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryClick = (id) => {
    if (id === 1) {
      navigate("/orders-shipping");
    } else if (id === 2) {
      navigate("/returns-refunds");
    } else if (id === 3) {
      navigate("/account-security");
    } else if (id === 4) {
      navigate("/payments-pricing");
    } else if (id === 5) {
      navigate("/selling");
    } else if (id === 6) {
      navigate("/promotions");
    } else if (id === 7) {
      navigate("/privacy-legal");
    } else if (id === 8) {
      navigate("/tech-support");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="help-page-wrapper">
      <Header />

      <main className="help-main-content">
        {/* HERO SECTION */}
        <section className="help-hero">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="help-hero-inner"
          >
            <div className="help-badge">Support Center</div>
            <h1>How can we help you today?</h1>
            <div className="help-search-container">
              <FaSearch className="h-search-icon" />
              <input
                type="text"
                placeholder="Search for questions, topics, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </section>

        <div className="help-container">
          {/* CATEGORIES GRID */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="help-categories-grid"
          >
            {helpCategories.map((cat) => (
              <motion.div
                key={cat.id}
                variants={itemVariants}
                className="help-cat-card"
                whileHover={{ y: -10 }}
                onClick={() => handleCategoryClick(cat.id)}
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="cat-icon-box"
                >
                  {cat.icon}
                </motion.div>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </motion.div>
            ))}
          </motion.section>

          {/* FAQ SECTION */}
          <section className="help-faq-section">
            <div className="section-header-modern">
              <h2><FaQuestionCircle /> Popular Questions</h2>
              <p>Common questions answered by our support experts.</p>
            </div>

            <div className="faq-accordion">
              <AnimatePresence>
                {filteredFaqs.map((faq) => (
                  <motion.div
                    key={faq.id}
                    className={`faq-item ${activeFaq === faq.id ? 'active' : ''}`}
                    layout
                  >
                    <button className="faq-question" onClick={() => toggleFaq(faq.id)}>
                      <span>{faq.question}</span>
                      <FaChevronDown className="faq-chevron" />
                    </button>
                    {activeFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="faq-answer"
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section className="help-contact-section">
            <div className="contact-card-premium">
              <div className="contact-info-side">
                <h2>Still need help?</h2>
                <p>Our dedicated support team is available 24/7 to assist you with any inquiries.</p>
                <div className="working-hours-pill">
                  <FaClock /> <span>Mon - Fri • 09:00 AM - 06:00 PM</span>
                </div>
              </div>

              <div className="contact-methods-grid">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://wa.me/923001234567"
                  className="contact-method-box wa"
                >
                  <FaWhatsapp />
                  <div className="method-text">
                    <strong>WhatsApp</strong>
                    <span>Live Chat Support</span>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="mailto:support@rentknock.com"
                  className="contact-method-box mail"
                >
                  <FaEnvelope />
                  <div className="method-text">
                    <strong>Email</strong>
                    <span>Get a reply in 24h</span>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="tel:+923001234567"
                  className="contact-method-box call"
                >
                  <FaPhoneAlt />
                  <div className="method-text">
                    <strong>Call Us</strong>
                    <span>Instant Voice Support</span>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="contact-method-box office"
                >
                  <FaMapMarkerAlt />
                  <div className="method-text">
                    <strong>Our Office</strong>
                    <span>Faisalabad, Pakistan</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Help;



