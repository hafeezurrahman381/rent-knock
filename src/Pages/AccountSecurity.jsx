import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaUserShield, FaLock, FaKey, FaShieldAlt,
    FaChevronRight, FaMobileAlt, FaEnvelope, FaFingerprint
} from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./AccountSecurity.css";

const securityFeatures = [
    {
        id: 1,
        icon: <FaLock />,
        title: "Password & Sign-in",
        desc: "Update your password and manage login methods.",
        color: "#F07809"
    },
    {
        id: 2,
        icon: <FaMobileAlt />,
        title: "Two-Step Verification",
        desc: "Add an extra layer of security to your account.",
        color: "#1e9e5a"
    },
    {
        id: 3,
        icon: <FaFingerprint />,
        title: "Biometric Login",
        desc: "Use your device's fingerprint or face unlock.",
        color: "#2d7ef7"
    }
];

const AccountSecurity = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <div className="security-page-wrapper">
            <Header />

            <main className="security-main">
                {/* HERO */}
                <section className="security-hero">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="security-hero-content"
                    >
                        <div className="security-badge"><FaUserShield /> Security Center</div>
                        <h1>Account & Security</h1>
                        <p>Manage your account settings, privacy, and security preferences to keep your data safe.</p>
                    </motion.div>
                </section>

                <div className="security-container">
                    <div className="security-layout">

                        {/* LEFT: SETTINGS GRID */}
                        <div className="security-options-grid">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="options-grid"
                            >
                                {securityFeatures.map((feat) => (
                                    <motion.div
                                        key={feat.id}
                                        variants={itemVariants}
                                        className="security-feat-card"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="feat-icon" style={{ color: feat.color, background: `${feat.color}15` }}>
                                            {feat.icon}
                                        </div>
                                        <div className="feat-info">
                                            <h3>{feat.title}</h3>
                                            <p>{feat.desc}</p>
                                        </div>
                                        <FaChevronRight className="arrow-icon" />
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.section
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="security-details-section"
                            >
                                <h2>Account Information</h2>
                                <div className="info-list-modern">
                                    <div className="info-item">
                                        <div className="info-label">Email Address</div>
                                        <div className="info-value">user@example.com</div>
                                        <button className="edit-link">Change</button>
                                    </div>
                                    <div className="info-item">
                                        <div className="info-label">Phone Number</div>
                                        <div className="info-value">+92 300 1234567</div>
                                        <button className="edit-link">Verify</button>
                                    </div>
                                    <div className="info-item">
                                        <div className="info-label">Account Identification</div>
                                        <div className="info-value">RK-USR-9982</div>
                                    </div>
                                </div>
                            </motion.section>
                        </div>

                        {/* RIGHT: SIDEBAR INFO */}
                        <aside className="security-sidebar">
                            <div className="security-status-card">
                                <h3>Account Status</h3>
                                <div className="status-indicator">
                                    <div className="pulse-dot"></div>
                                    <span>High Security Level</span>
                                </div>
                                <p>Your account is well protected. We recommend updating your password every 90 days.</p>
                                <div className="progress-bar-container">
                                    <div className="progress-fill" style={{ width: '85%' }}></div>
                                </div>
                                <span className="percent">85% Secure</span>
                            </div>

                            <div className="login-activity-card">
                                <div className="card-top">
                                    <FaKey />
                                    <h3>Recent Activity</h3>
                                </div>
                                <div className="activity-item">
                                    <strong>Chrome on Windows</strong>
                                    <span>Lahore, Pakistan • Just now</span>
                                </div>
                                <div className="activity-item">
                                    <strong>Safari on iPhone</strong>
                                    <span>Karachi, Pakistan • 2 hours ago</span>
                                </div>
                                <button className="see-all-btn">Log out all sessions</button>
                            </div>
                        </aside>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AccountSecurity;
