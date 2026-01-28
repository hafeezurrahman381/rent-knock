import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaTools, FaMicrochip, FaHeadset, FaExclamationTriangle,
    FaQuestionCircle, FaChevronDown, FaLaptopCode, FaSignal
} from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./TechnicalSupport.css";

const troubleshootSteps = [
    { id: 1, title: "Update Your Browser", desc: "Ensure you are using the latest version of Chrome or Safari for the best experience.", icon: <FaLaptopCode /> },
    { id: 2, title: "Clear Cache", desc: "Many UI issues are solved by clearing your browser's cookies and site data.", icon: <FaTools /> },
    { id: 3, title: "Check Connectivity", desc: "Verify your internet connection and disable any active VPNs.", icon: <FaSignal /> },
];

const techFaqs = [
    {
        id: 1,
        question: "The app is loading slowly, what should I do?",
        answer: "Try reloading the page. If the issue persists, check your internet connection or clear your browser cache. Browsing in incognito mode can also help identify if extensions are causing the slowdown."
    },
    {
        id: 2,
        question: "I am not receiving OTP emails.",
        answer: "Please check your spam or junk folder. Ensure your email address is correct in your profile. If still not received, wait 2 minutes and try the 'Resend OTP' option."
    },
    {
        id: 3,
        question: "Which devices are supported by RentKnock?",
        answer: "RentKnock is optimized for all modern smartphones, tablets, and desktop browsers including Chrome, Safari, and Edge."
    }
];

const TechnicalSupport = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <div className="tech-support-wrapper">
            <Header />

            <main className="tech-main">
                {/* HERO */}
                <section className="tech-hero">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="tech-hero-content"
                    >
                        <div className="tech-badge"><FaMicrochip /> Technical Systems</div>
                        <h1>Technical Support</h1>
                        <p>Experiencing glitches or have technical questions? Our engineering team is here to help.</p>
                    </motion.div>
                </section>

                <div className="tech-container">

                    {/* SYSTEM STATUS */}
                    <section className="system-status-banner">
                        <div className="status-indicator-box">
                            <div className="status-dot-pulse"></div>
                            <span>All Systems Operational</span>
                        </div>
                        <p>Our servers are running smoothly at 99.9% uptime.</p>
                    </section>

                    <div className="tech-content-grid">

                        {/* LEFT: TROUBLESHOOTING */}
                        <div className="troubleshoot-column">
                            <div className="section-header-modern">
                                <h2>Quick Troubleshooting</h2>
                                <p>Try these common fixes before reaching out to support.</p>
                            </div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="troubleshoot-grid"
                            >
                                {troubleshootSteps.map((step) => (
                                    <motion.div
                                        key={step.id}
                                        variants={itemVariants}
                                        className="trouble-card-premium"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="trouble-icon-box">{step.icon}</div>
                                        <div className="trouble-info">
                                            <h3>{step.title}</h3>
                                            <p>{step.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* RIGHT: FAQS & CONTACT */}
                        <aside className="tech-side-column">
                            <section className="tech-faqs">
                                <div className="section-header-simple">
                                    <FaQuestionCircle />
                                    <h2>Technical FAQ</h2>
                                </div>

                                <div className="tech-accordion">
                                    {techFaqs.map((faq) => (
                                        <div key={faq.id} className={`tech-faq-item ${activeFaq === faq.id ? 'active' : ''}`}>
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
                                                        className="tech-faq-answer"
                                                    >
                                                        <p>{faq.answer}</p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <div className="tech-contact-banner">
                                <FaHeadset className="bg-headset-icon" />
                                <h3>Still need help?</h3>
                                <p>Our technician is available for a live debugging session.</p>
                                <button className="chat-now-btn">Chat with an Expert</button>
                            </div>
                        </aside>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TechnicalSupport;
