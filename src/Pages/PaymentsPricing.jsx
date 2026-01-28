import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaCreditCard, FaMoneyBillWave, FaShieldAlt, FaQuestionCircle,
    FaChevronDown, FaWallet, FaReceipt, FaCheckCircle
} from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./PaymentsPricing.css";

const paymentMethods = [
    { id: 1, type: "Visa / Mastercard", label: "Debit/Credit Card", icon: <FaCreditCard />, preferred: true },
    { id: 2, type: "EasyPaisa / JazzCash", label: "Mobile Wallets", icon: <FaWallet />, preferred: false },
    { id: 3, type: "Cash on Delivery", label: "Pay at Doorstep", icon: <FaMoneyBillWave />, preferred: false },
];

const paymentFaqs = [
    {
        id: 1,
        question: "Is my payment information secure?",
        answer: "Yes, we use industry-standard SSL encryption and secure payment gateways. We never store your full card details on our servers."
    },
    {
        id: 2,
        question: "Do you offer installments?",
        answer: "Currently, we support full payments. We are partnering with banks to bring 'Buy Now Pay Later' options very soon."
    },
    {
        id: 3,
        question: "Are there any hidden service charges?",
        answer: "No, the price you see on the checkout page is final. Any applicable delivery fees are clearly mentioned before you pay."
    }
];

const PaymentsPricing = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="payments-page-wrapper">
            <Header />

            <main className="payments-main">
                {/* HERO */}
                <section className="payments-hero">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="payments-hero-content"
                    >
                        <div className="payments-badge"><FaShieldAlt /> Secure Transactions</div>
                        <h1>Payments & Pricing</h1>
                        <p>Transparent pricing and secure payment options for a worry-free shopping experience.</p>
                    </motion.div>
                </section>

                <div className="payments-container">
                    <div className="payments-layout-grid">

                        {/* LEFT: METHODS & INFO */}
                        <div className="payments-info-column">
                            <motion.section
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="payment-methods-card"
                            >
                                <div className="card-header-modern">
                                    <FaCreditCard />
                                    <h3>Supported Payment Methods</h3>
                                </div>

                                <div className="methods-list">
                                    {paymentMethods.map((method) => (
                                        <div key={method.id} className="method-item-premium">
                                            <div className="method-icon-box">{method.icon}</div>
                                            <div className="method-text">
                                                <strong>{method.type}</strong>
                                                <span>{method.label}</span>
                                            </div>
                                            {method.preferred && <div className="preferred-badge">Recommended</div>}
                                        </div>
                                    ))}
                                </div>
                            </motion.section>

                            <motion.section
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                className="pricing-transparency-card"
                            >
                                <div className="card-header-modern">
                                    <FaReceipt />
                                    <h3>Pricing Transparency</h3>
                                </div>
                                <div className="transparency-grid">
                                    <div className="trans-item">
                                        <FaCheckCircle />
                                        <span>No Hidden Fees</span>
                                    </div>
                                    <div className="trans-item">
                                        <FaCheckCircle />
                                        <span>Real-time Tax Calculation</span>
                                    </div>
                                    <div className="trans-item">
                                        <FaCheckCircle />
                                        <span>Detailed Invoices</span>
                                    </div>
                                </div>
                            </motion.section>
                        </div>

                        {/* RIGHT: FAQS & TRUST */}
                        <aside className="payments-side-column">
                            <section className="payments-faqs">
                                <div className="section-header-simple">
                                    <FaQuestionCircle />
                                    <h2>Payment FAQs</h2>
                                </div>

                                <div className="payments-accordion">
                                    {paymentFaqs.map((faq) => (
                                        <div key={faq.id} className={`pay-faq-item ${activeFaq === faq.id ? 'active' : ''}`}>
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
                                                        className="pay-faq-answer"
                                                    >
                                                        <p>{faq.answer}</p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <div className="payment-security-cta">
                                <FaShieldAlt className="shield-bg-icon" />
                                <h3>Bank Level Security</h3>
                                <p>We use 256-bit encryption to ensure your data stays private and protected.</p>
                                <div className="secure-logos">
                                    {/* These would be small partner logos in a real app */}
                                    <span>PCI-DSS</span>
                                    <span>SSL SECURE</span>
                                </div>
                            </div>
                        </aside>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PaymentsPricing;
