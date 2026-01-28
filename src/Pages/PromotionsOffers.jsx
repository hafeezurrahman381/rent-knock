import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaPercentage, FaTag, FaGift, FaCalendarAlt,
    FaQuestionCircle, FaChevronDown, FaBullhorn, FaTicketAlt
} from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./PromotionsOffers.css";

const currentDeals = [
    { id: 1, title: "Summer Sale 2026", discount: "Up to 50% OFF", validity: "Ends July 15", color: "#F07809" },
    { id: 2, title: "New User Special", discount: "Extra Rs. 500 OFF", validity: "Limited Time", color: "#1e9e5a" },
    { id: 3, title: "Flash Weekend", discount: "Flat 20% OFF", validity: "Every Sat-Sun", color: "#2d7ef7" },
];

const promoFaqs = [
    {
        id: 1,
        question: "Where do I enter my coupon code?",
        answer: "You can enter your coupon code on the checkout page under the 'Order Summary' section before finalizing your payment."
    },
    {
        id: 2,
        question: "Can I use multiple coupons on one order?",
        answer: "No, currently our system only supports one coupon code per transaction to ensure fair usage of promotions."
    },
    {
        id: 3,
        question: "Why is my promo code not working?",
        answer: "Please ensure the code hasn't expired, is entered correctly, and your order meets the minimum spend requirements stated in the promotion terms."
    }
];

const PromotionsOffers = () => {
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
        <div className="promo-page-wrapper">
            <Header />

            <main className="promo-main">
                {/* HERO */}
                <section className="promo-hero">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="promo-hero-content"
                    >
                        <div className="promo-badge"><FaBullhorn /> Exclusive Deals</div>
                        <h1>Promotions & Special Offers</h1>
                        <p>Save big on your favorite items with our seasonal discounts, flash sales, and exclusive personalized coupons.</p>
                    </motion.div>
                </section>

                <div className="promo-container">
                    {/* CURRENT DEALS GRID */}
                    <section className="deals-section">
                        <div className="section-header-modern">
                            <h2>Active Promotions</h2>
                            <p>Check out our latest offers available for you right now.</p>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="deals-grid"
                        >
                            {currentDeals.map((deal) => (
                                <motion.div
                                    key={deal.id}
                                    variants={itemVariants}
                                    className="deal-card-premium"
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="deal-icon-box" style={{ background: `${deal.color}15`, color: deal.color }}>
                                        <FaTag />
                                    </div>
                                    <div className="deal-content">
                                        <h3>{deal.title}</h3>
                                        <div className="discount-tag" style={{ color: deal.color }}>{deal.discount}</div>
                                        <div className="validity-info">
                                            <FaCalendarAlt /> {deal.validity}
                                        </div>
                                    </div>
                                    <button className="claim-deal-btn">Shop Now</button>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>

                    <div className="promo-bottom-grid">
                        {/* COUPON INSTRUCTIONS */}
                        <motion.section
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="coupon-info-card"
                        >
                            <div className="card-header-modern">
                                <FaTicketAlt />
                                <h3>How to use Coupons?</h3>
                            </div>
                            <div className="instruction-item">
                                <div className="inst-num">1</div>
                                <p>Add items to your shopping cart.</p>
                            </div>
                            <div className="instruction-item">
                                <div className="inst-num">2</div>
                                <p>Proceed to the secure checkout page.</p>
                            </div>
                            <div className="instruction-item">
                                <div className="inst-num">3</div>
                                <p>Enter code in 'Promotion Code' field.</p>
                            </div>
                            <div className="instruction-item">
                                <div className="inst-num">4</div>
                                <p>Enjoy your instant discount!</p>
                            </div>
                        </motion.section>

                        {/* PROMO FAQS */}
                        <section className="promo-faq-section">
                            <div className="section-header-simple">
                                <FaQuestionCircle />
                                <h2>Reward FAQs</h2>
                            </div>

                            <div className="promo-accordion">
                                {promoFaqs.map((faq) => (
                                    <div key={faq.id} className={`promo-faq-item ${activeFaq === faq.id ? 'active' : ''}`}>
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
                                                    className="promo-faq-answer"
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

                    {/* NEWSLETTER CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="newsletter-banner"
                    >
                        <FaGift className="bg-gift-icon" />
                        <div className="news-text">
                            <h3>Don't miss a single deal!</h3>
                            <p>Subscribe to our newsletter and get new offers directly in your inbox.</p>
                        </div>
                        <div className="news-form">
                            <input type="email" placeholder="Enter your email" />
                            <button>Subscribe</button>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PromotionsOffers;
