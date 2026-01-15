import React from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaQuestionCircle,
  FaClock,
} from "react-icons/fa";
import "../Pages/Help.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Help = () => {
  return (
    <>
      
<Header />
      <main className="help-page">
        
        <div className="help-header">
          <h1>Help & Support</h1>
          <p>We are here to help you anytime</p>
        </div>

        <div className="help-section">
          <h2>Contact Us</h2>

          <div className="help-options">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noreferrer"
              className="help-box whatsapp"
            >
              <FaWhatsapp />
              <span>WhatsApp Support</span>
            </a>

            <a href="tel:+923001234567" className="help-box phone">
              <FaPhoneAlt />
              <span>Call Us</span>
            </a>

            <a href="mailto:support@example.com" className="help-box email">
              <FaEnvelope />
              <span>Email Support</span>
            </a>
          </div>
        </div>

        <div className="help-section">
          <h2>
            <FaQuestionCircle /> Frequently Asked Questions
          </h2>

          <div className="faq">
            <p><strong>Q:</strong> How can I create an account?</p>
            <p><strong>A:</strong> Click on signup and fill your details.</p>

            <p><strong>Q:</strong> I forgot my password?</p>
            <p><strong>A:</strong> Use the “Forgot Password” option.</p>
          </div>
        </div>

        <div className="help-section">
          <h2>
            <FaClock /> Working Hours
          </h2>
          <p>Monday – Friday</p>
          <p>09:00 AM – 06:00 PM</p>
        </div>
      </main>
       <div>
      <Footer />
      </div>
    </>
  );
};

export default Help;


