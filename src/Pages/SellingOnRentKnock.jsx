import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaStore, FaRocket, FaChartLine, FaCheckCircle,
    FaQuestionCircle, FaChevronDown, FaTools, FaHandshake
} from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./SellingOnRentKnock.css";

const sellerSteps = [
    {
        id: 1,
        title: "Create Your Shop",
        desc: "Register your business and setup your shop profile in minutes.",
        icon: <FaStore />
    },
    {
        id: 2,
        title: "List Products",
        desc: "Upload high-quality images and detailed descriptions of your items.",
        icon: <FaTools />
    },
    {
        id: 3,
        title: "Start Earning",
        desc: "Manage orders, ship to customers, and grow your brand with us.",
        icon: <FaRocket />
    }
];

const sellerFaqs = [
    {
        id: 1,
        question: "What are the requirements to sell on RentKnock?",
        answer: "You need a valid identity document (CNIC), a physical address for pick-ups, and a bank account for receiving payments."
    },
    {
        id: 2,
        question: "How much commission does RentKnock charge?",
        answer: "We offer competitive rates starting from 5% per successful sale. There are no registration or listing fees."
    },
    {
        id: 3,
        question: "When do I get paid for my sales?",
        answer: "Payments are processed weekly. Your earnings for the week are transferred to your bank account every Monday."
    }
];

const SellingOnRentKnock = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="selling-page-wrapper">
            <Header />

            <main className="selling-main">
                {/* HERO */}
                <section className="selling-hero">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="selling-hero-content"
                    >
                        <div className="selling-badge"><FaHandshake /> Partner with Us</div>
                        <h1>Grow Your Business with RentKnock</h1>
                        <p>Join Pakistan's fastest growing community of sellers and reach millions of customers today.</p>
                        <button className="start-selling-hero-btn">Start Selling Now</button>
                    </motion.div>
                </section>

                <div className="selling-container">

                    {/* STEPS SECTION */}
                    <section className="selling-steps-section">
                        <div className="section-header-modern">
                            <h2>3 Easy Steps to Start</h2>
                            <p>Everything you need to kickstart your journey as a merchant.</p>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="seller-steps-grid"
                        >
                            {sellerSteps.map((step) => (
                                <motion.div
                                    key={step.id}
                                    variants={itemVariants}
                                    className="seller-step-card"
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="seller-step-icon">{step.icon}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>

                    <div className="selling-content-split">
                        {/* BENEFITS */}
                        <motion.section
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="seller-benefits-card"
                        >
                            <div className="card-header-modern">
                                <FaChartLine />
                                <h3>Why Sell on RentKnock?</h3>
                            </div>
                            <ul className="benefit-list">
                                <li><FaCheckCircle /> Access to Millions of Potential Buyers</li>
                                <li><FaCheckCircle /> Powerful Seller Dashboard & Analytics</li>
                                <li><FaCheckCircle /> Fast & Secure Weekly Payments</li>
                                <li><FaCheckCircle /> Comprehensive Logistics Support</li>
                                <li><FaCheckCircle /> 24/7 Seller Success Team</li>
                            </ul>
                            <div className="seller-cta-box">
                                <button className="become-partner-btn">Become a Partner</button>
                            </div>
                        </motion.section>

                        {/* SELLER FAQS */}
                        <section className="seller-faq-section">
                            <div className="section-header-simple">
                                <FaQuestionCircle />
                                <h2>Seller FAQs</h2>
                            </div>

                            <div className="seller-accordion">
                                {sellerFaqs.map((faq) => (
                                    <div key={faq.id} className={`sell-faq-item ${activeFaq === faq.id ? 'active' : ''}`}>
                                        <button onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}>
                                            <span>{faq.question}</span>
                                            <FaChevronDown />
                                        </button>
                                        <AnimatePresence>
                                            {activeFaq === faq.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="sell-faq-answer"
                                                >
                                                    <p>{faq.answer}</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SellingOnRentKnock;
