import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaShippingFast, FaMapMarkerAlt, FaBoxOpen, FaClipboardList,
    FaQuestionCircle, FaChevronDown, FaSearch, FaHistory
} from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./OrdersAndShipping.css";



const trackSteps = [
    { id: 1, title: "Order Placed", date: "Jan 24, 2026", status: "completed" },
    { id: 2, title: "Processing", date: "Jan 25, 2026", status: "completed" },
    { id: 3, title: "Shipped", date: "Jan 26, 2026", status: "current" },
    { id: 4, title: "Out for Delivery", date: "Pending", status: "upcoming" },
    { id: 5, title: "Delivered", date: "Pending", status: "upcoming" },
];

const shippingFaqs = [
    {
        id: 1,
        question: "How long does shipping standardly take?",
        answer: "Standard shipping usually takes 3-5 business days depending on your location. Express delivery is available for most metropolitan areas."
    },
    {
        id: 2,
        question: "Do you offer international shipping?",
        answer: "Currently, we operate locally within Pakistan. We are working on expanding our logistics to support international orders soon!"
    },
    {
        id: 3,
        question: "Can I change my delivery address after shipping?",
        answer: "Once an order is shipped, we cannot change the address. However, you can contact the courier partner directly using your tracking ID for rerouting options."
    }
];

const OrdersAndShipping = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [trackingId, setTrackingId] = useState("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="shipping-page-wrapper">
            <Header />

            <main className="shipping-main">
                {/* HERO */}
                <section className="shipping-hero">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="shipping-hero-content"
                    >
                        <div className="shipping-badge"><FaShippingFast /> Logistics & Support</div>
                        <h1>Orders & Shipping</h1>
                        <p>Track your parcels and learn everything about our delivery process.</p>
                    </motion.div>
                </section>

                <div className="shipping-content-container">
                    <div className="shipping-layout-grid">

                        {/* LEFT: TRACKING & INFO */}
                        <div className="shipping-info-column">
                            <motion.section
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="tracking-look-card"
                            >
                                <div className="card-header-modern">
                                    <FaSearch />
                                    <h3>Track Your Parcel</h3>
                                </div>
                                <div className="tracking-input-box">
                                    <input
                                        type="text"
                                        placeholder="Enter Tracking ID (e.g. RK-10234)"
                                        value={trackingId}
                                        onChange={(e) => setTrackingId(e.target.value)}
                                    />
                                    <button className="track-btn-premium">Track Now</button>
                                </div>

                                <div className="tracking-timeline">
                                    {trackSteps.map((step, index) => (
                                        <div key={step.id} className={`timeline-step ${step.status}`}>
                                            <div className="step-marker">
                                                <div className="marker-dot"></div>
                                                {index !== trackSteps.length - 1 && <div className="marker-line"></div>}
                                            </div>
                                            <div className="step-content">
                                                <h4>{step.title}</h4>
                                                <span>{step.date}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>

                            <motion.section
                                variants={itemVariants}
                                className="shipping-policies-card"
                            >
                                <h3>Our Shipping Policies</h3>
                                <div className="policy-item">
                                    <div className="policy-icon"><FaBoxOpen /></div>
                                    <div className="policy-text">
                                        <strong>Standard Delivery</strong>
                                        <p>Free for orders above Rs. 5,000. Usually delivered in 3-5 days.</p>
                                    </div>
                                </div>
                                <div className="policy-item">
                                    <div className="policy-icon"><FaHistory /></div>
                                    <div className="policy-text">
                                        <strong>Real-time Updates</strong>
                                        <p>Receive SMS and Email notifications at every step of the journey.</p>
                                    </div>
                                </div>
                            </motion.section>
                        </div>

                        {/* RIGHT: FAQS & CONTACT */}
                        <div className="shipping-faq-column">
                            <section className="shipping-faqs">
                                <div className="section-header-simple">
                                    <FaQuestionCircle />
                                    <h2>Shipping FAQs</h2>
                                </div>

                                <div className="shipping-accordion">
                                    {shippingFaqs.map((faq) => (
                                        <div key={faq.id} className={`ship-faq-item ${activeFaq === faq.id ? 'active' : ''}`}>
                                            <button onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}>
                                                <span>{faq.question}</span>
                                                <FaChevronDown />
                                            </button>
                                            <AnimatePresence>
                                                {activeFaq === faq.id && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="ship-faq-answer"
                                                    >
                                                        <p>{faq.answer}</p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <div className="shipping-cta-card">
                                <h3>Still have questions?</h3>
                                <p>Our logistics team is available to help you with your deliveries.</p>
                                <button className="contact-logistic-btn">Contact Logistics</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default OrdersAndShipping;
