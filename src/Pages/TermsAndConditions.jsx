import React from "react";
import "../Pages/TermsAndConditions.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const TermsAndConditions = () => {
  return (
    <div>
      <Header />
    
    <div className="terms-container">
      <div className="terms-card">
        <h1>Terms & Conditions</h1>
        <p className="updated">Last updated: January 2026</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to our platform. By accessing or using our services, you
            agree to be bound by these Terms and Conditions.
          </p>
        </section>

        <section>
          <h2>2. User Account</h2>
          <ul>
            <li>You must provide correct and complete information.</li>
            <li>You are responsible for maintaining account security.</li>
            <li>You must not share your login details.</li>
          </ul>
        </section>

        <section>
          <h2>3. Store & Seller Policy</h2>
          <ul>
            <li>Sellers must provide genuine products.</li>
            <li>Fake or illegal items are strictly prohibited.</li>
            <li>Violation may result in account suspension.</li>
          </ul>
        </section>

        <section>
          <h2>4. Orders & Payments</h2>
          <p>
            All orders are subject to availability and confirmation. Prices may
            change without prior notice.
          </p>
        </section>

        <section>
          <h2>5. Returns & Refunds</h2>
          <p>
            Return and refund policies depend on seller agreement and product
            category.
          </p>
        </section>

        <section>
          <h2>6. Privacy Policy</h2>
          <p>
            Your personal data is protected and used according to our Privacy
            Policy.
          </p>
        </section>

        <section>
          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to update these terms at any time without prior
            notice.
          </p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about these Terms & Conditions, please
            contact our support team.
          </p>
        </section>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default TermsAndConditions;

