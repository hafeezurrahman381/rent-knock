import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaUndo, FaClipboardCheck, FaBoxOpen, FaHandHoldingUsd,
    FaQuestionCircle, FaChevronDown, FaHistory, FaShieldAlt
} from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./ReturnsAndRefunds.css";

const returnSteps = [
    { id: 1, title: "Initiate Return", desc: "Go to your order history and select 'Request Return'.", icon: <FaClipboardCheck /> },
    { id: 2, title: "Pack Items", desc: "Place items back in original packaging with all tags.", icon: <FaBoxOpen /> },
    { id: 3, title: "Courier Pickup", desc: "A courier partner will collect the parcel from your doorstep.", icon: <FaUndo /> },
    { id: 4, title: "Refund Processed", desc: "Your refund will be issued within 5-7 business days.", icon: <FaHandHoldingUsd /> },
];

const refundFaqs = [
    {
        id: 1,
        question: "How long does it take to receive a refund?",
        answer: "Once we receive and inspect your return, the refund is processed within 5-7 business days. It may take longer depending on your bank's processing time."
    },
    {
        id: 2,
        question: "Can I return an item without the original tags?",
        answer: "No, all items must be returned in their original condition with all tags and packaging intact to qualify for a refund."
    },
    {
        id: 3,
        question: "Is there a return shipping fee?",
        answer: "If the return is due to a faulty or incorrect item, shipping is free. For other reasons, a small delivery fee will be deducted from your refund."
    }
];

const ReturnsAndRefunds = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <div className="returns-page-wrapper">
            <Header />

            <main className="returns-main">
                {/* HERO */}
                <section className="returns-hero">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="returns-hero-content"
                    >
                        <div className="returns-badge"><FaUndo /> Returns & Refunds</div>
                        <h1>Hassle-Free Returns</h1>
                        <p>Not satisfied with your purchase? Don't worry, we make the return process simple and transparent.</p>
                    </motion.div>
                </section>

                <div className="returns-container">
                    {/* STEPS GRID */}
                    <section className="returns-steps-section">
                        <div className="section-header-modern">
                            <h2>How it Works</h2>
                            <p>Follow these 4 simple steps to return your items.</p>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="returns-steps-grid"
                        >
                            {returnSteps.map((step) => (
                                <motion.div
                                    key={step.id}
                                    variants={itemVariants}
                                    className="step-card-premium"
                                >
                                    <div className="step-number">{step.id}</div>
                                    <div className="step-icon-premium">{step.icon}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>

                    <div className="returns-bottom-grid">
                        {/* POLICIES */}
                        <motion.section
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="returns-policy-card"
                        >
                            <div className="policy-header">
                                <FaShieldAlt />
                                <h3>Our Return Policy</h3>
                            </div>
                            <ul className="policy-list">
                                <li>7-day return window from delivery date.</li>
                                <li>Items must be unused and in original condition.</li>
                                <li>Refunds are issued to the original payment method.</li>
                                <li>Hygiene products (e.g. innerwear) are non-returnable.</li>
                            </ul>
                            <button className="download-policy-btn">Download Full Policy</button>
                        </motion.section>

                        {/* FAQS */}
                        <section className="returns-faq-section">
                            <div className="section-header-simple">
                                <FaQuestionCircle />
                                <h3>Common Questions</h3>
                            </div>

                            <div className="returns-accordion">
                                {refundFaqs.map((faq) => (
                                    <div key={faq.id} className={`ret-faq-item ${activeFaq === faq.id ? 'active' : ''}`}>
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
                                                    className="ret-faq-answer"
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

export default ReturnsAndRefunds;
