import React from "react";
import "../Pages/Privacy.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Privacy = () => {
  return (
    <div>
      <Header />
    
    <div className="privacy-container">
      <div className="privacy-card">
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: January 2026</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Your privacy is very important to us. This Privacy Policy explains
            how we collect, use, and protect your personal information.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <ul>
            <li>Personal details such as name, email, and phone number</li>
            <li>Account and login information</li>
            <li>Order, store, and transaction details</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To provide and improve our services</li>
            <li>To process orders and payments</li>
            <li>To communicate important updates</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>
            We take appropriate security measures to protect your personal data
            from unauthorized access or misuse.
          </p>
        </section>

        <section>
          <h2>5. Sharing of Information</h2>
          <p>
            We do not sell your personal data. Information may be shared only
            with trusted partners when required by law or service needs.
          </p>
        </section>

        <section>
          <h2>6. Cookies</h2>
          <p>
            We use cookies to enhance user experience and analyze platform
            performance.
          </p>
        </section>

        <section>
          <h2>7. Changes to Privacy Policy</h2>
          <p>
            This policy may be updated from time to time. Changes will be posted
            on this page.
          </p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            our support team.
          </p>
        </section>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Privacy;

