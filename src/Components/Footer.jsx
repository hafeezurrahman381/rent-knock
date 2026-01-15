import React from "react";
import "../Components/Footer.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <h2 className="app-logo">RentKnow</h2>

          <div className="contact">
            <div className="cont">Contact Us</div>
             <FaWhatsapp className="wats-logo"  />
            <p>Whats App</p>
            <p className="phone-29">+1 202-918-2132</p>
            <FaPhoneAlt className="call-logp" />
            <p>Call Us</p>
            <p className="phone-49">+1 202-918-2132</p>
          </div>

          <div className="app">
            <p className="title">Download App</p>
            <div className="app-buttons">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Play Store"
              />
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h4>Most Popular Categories</h4>
          <ul>
            <li>Staples</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li>Baby Care</li>
            <li>Vegetables & Fruits</li>
            <li>Snacks & Foods</li>
            <li>Dairy & Bakery</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>Customer Services</h4>
          <ul>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>E-waste Policy</li>
            <li>Cancellation & Return Policy</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 All rights reserved. Brainex world Pvt Ltd.
      </div>
    </footer>
  );
};

export default Footer;
