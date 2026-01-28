import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaShieldAlt, FaGavel, FaFileContract, FaLock,
    FaQuestionCircle, FaChevronDown, FaBalanceScale, FaUserLock
} from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./PrivacyLegal.css";

const legalSections = [
    {
        id: 1,
        title: "Privacy Policy",
        desc: "How we collect, use, and protect your personal data.",
        icon: <FaUserLock />,
        content: "We take your privacy seriously. Your data is encrypted and never sold to third parties. We collect only what's necessary for a smooth shopping experience."
    },
    {
        id: 2,
        title: "Terms of Service",
        desc: "The rules and regulations for using our marketplace.",
        icon: <FaFileContract />,
        content: "By using RentKnock, you agree to our community standards, payment terms, and seller policies designed to keep the platform fair for everyone."
    },
    {
        id: 3,
        title: "Data Protection",
        desc: "Your rights under international data protection laws.",
        icon: <FaShieldAlt />,
        content: "You have the right to access, correct, or delete your personal information at any time. We comply with modern GDPR and local data laws."
    }
];

const legalFaqs = [
    {
        id: 1,
        question: "How do you protect my payment data?",
        answer: "All transactions are processed through 256-bit SSL encrypted channels. We are PCI-DSS compliant and do not store full card information."
    },
    {
        id: 2,
        question: "Can I request my account data to be deleted?",
        answer: "Yes, you can request full account deletion through your profile settings or by contacting our support team directly."
    },
    {
        id: 3,
        question: "What happens if there's a dispute between buyer and seller?",
        answer: "RentKnock acts as a mediator. Our Resolution Center handles legal disputes based on our established Terms of Service."
    }
];

const PrivacyLegal = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <div className="legal-page-wrapper">
            <Header />

            <main className="legal-main">
                {/* HERO */}
                <section className="legal-hero">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="legal-hero-content"
                    >
                        <div className="legal-badge"><FaBalanceScale /> Trust & Transparency</div>
                        <h1>Privacy & Legal Center</h1>
                        <p>Your trust is our priority. Explore our comprehensive legal documentation and privacy standards.</p>
                    </motion.div>
                </section>

                <div className="legal-container">
                    {/* MAIN SECTIONS */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="legal-blocks-grid"
                    >
                        {legalSections.map((section) => (
                            <motion.div
                                key={section.id}
                                variants={itemVariants}
                                className="legal-block-card"
                            >
                                <div className="legal-icon-circle">{section.icon}</div>
                                <h3>{section.title}</h3>
                                <p>{section.desc}</p>
                                <div className="legal-mini-content">{section.content}</div>
                                <button className="read-full-btn">Read Full Document</button>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="legal-bottom-layout">
                        {/* COMPLIANCE CARD */}
                        <motion.section
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="compliance-card"
                        >
                            <div className="card-header-modern">
                                <FaGavel />
                                <h3>Legal Compliance</h3>
                            </div>
                            <p>RentKnock is fully registered and operates under the local jurisdiction laws of Pakistan. We ensure all transactions and interactions meet strict legal criteria.</p>
                            <div className="compliance-tags">
                                <span>SECURED BY SSL</span>
                                <span>GDPR COMPLIANT</span>
                                <span>PCI-DSS</span>
                            </div>
                            <button className="contact-legal-btn">Contact Legal Team</button>
                        </motion.section>

                        {/* LEGAL FAQS */}
                        <section className="legal-faq-section">
                            <div className="section-header-simple">
                                <FaQuestionCircle />
                                <h2>Legal FAQ</h2>
                            </div>

                            <div className="legal-accordion">
                                {legalFaqs.map((faq) => (
                                    <div key={faq.id} className={`leg-faq-item ${activeFaq === faq.id ? 'active' : ''}`}>
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
                                                    className="leg-faq-answer"
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

export default PrivacyLegal;
