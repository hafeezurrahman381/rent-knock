import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaPhone, FaStore, FaListAlt, FaCity, FaMapMarkerAlt, FaCheckCircle, FaExclamationTriangle, FaTimes, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import shop from "../assets/shop.jpg";
import "../Pages/CreateShop.css";

const CreateShop = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const [formData, setFormData] = useState({
    shopName: "",
    ownerName: "",
    phone: "",
    email: "",
    category: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step === 1 && (!formData.ownerName || !formData.phone)) {
      setShowError(true);
      return;
    }
    if (step === 2 && (!formData.shopName || !formData.category)) {
      setShowError(true);
      return;
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.city || !formData.address) {
      setShowError(true);
      return;
    }

    localStorage.setItem("myShop", JSON.stringify(formData));
    localStorage.setItem("userType", "store");
    setShowSuccess(true);
  };

  const handleRedirect = () => {
    navigate("/shopverify");
  };

  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="createshop-page-wrapper">
      <Header />

      <main className="createshop-main">
        <div className="createshop-container">
          <div className="createshop-glass-inner">

            {/* Left Side: Illustration Area */}
            <div className="createshop-side image-side">
              <motion.img
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                src={shop}
                alt="Create Shop"
              />
              <div className="image-overlay">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Expand Your Business
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Join the RentKnock community of professional sellers today.
                </motion.p>
              </div>
            </div>

            {/* Right Side: Form Area */}
            <div className="createshop-side form-side">
              <div className="stepper-modern">
                {[1, 2, 3].map((num) => (
                  <React.Fragment key={num}>
                    <div className={`step-node ${step >= num ? "active" : ""}`}>
                      {step > num ? <FaCheckCircle /> : num}
                    </div>
                    {num < 3 && <div className={`step-line ${step > num ? "active" : ""}`}></div>}
                  </React.Fragment>
                ))}
              </div>

              <div className="form-window">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    variants={pageVariants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="form-step-content"
                  >
                    <header className="step-header">
                      <h2>{step === 1 ? "Personal Info" : step === 2 ? "Shop Details" : "Final Location"}</h2>
                      <p>Step {step} of 3</p>
                    </header>

                    <form onSubmit={handleSubmit} className="premium-form">
                      {step === 1 && (
                        <div className="input-set">
                          <div className="premium-input-group">
                            <label><FaUser /> Owner Name</label>
                            <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} placeholder="Enter your full name" required />
                          </div>
                          <div className="premium-input-group">
                            <label><FaPhone /> Phone Number</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+92 3XX XXXXXXX" required />
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="button"
                            onClick={nextStep}
                            className="next-btn-premium"
                          >
                            Continue <FaArrowRight />
                          </motion.button>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="input-set">
                          <div className="premium-input-group">
                            <label><FaStore /> Shop Name</label>
                            <input type="text" name="shopName" value={formData.shopName} onChange={handleChange} placeholder="Ali's Tech Store" required />
                          </div>
                          <div className="premium-input-group">
                            <label><FaListAlt /> Category</label>
                            <select name="category" value={formData.category} onChange={handleChange} required>
                              <option value="">Select Category</option>
                              <option>Electronics</option>
                              <option>Fashion</option>
                              <option>Furniture</option>
                              <option>Grocery</option>
                              <option>Sports</option>
                            </select>
                          </div>
                          <div className="btn-group-modern">
                            <button type="button" onClick={prevStep} className="back-btn-modern"><FaArrowLeft /> Back</button>
                            <button type="button" onClick={nextStep} className="next-btn-premium">Next <FaArrowRight /></button>
                          </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div className="input-set">
                          <div className="premium-input-group">
                            <label><FaCity /> City</label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Lahore, Karachi, etc." required />
                          </div>
                          <div className="premium-input-group">
                            <label><FaMapMarkerAlt /> Shop Address</label>
                            <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Complete physical address" required></textarea>
                          </div>
                          <div className="btn-group-modern">
                            <button type="button" onClick={prevStep} className="back-btn-modern"><FaArrowLeft /> Back</button>
                            <button type="submit" className="finish-btn-premium">Finish & Create <FaCheckCircle /></button>
                          </div>
                        </div>
                      )}
                    </form>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* SUCCESS MODAL */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="success-modal createshop-modal" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}>
                <div className="modal-icon-glow"><FaCheckCircle className="modal-main-icon" /></div>
                <h2>Shop Created Successfully! 🎉</h2>
                <p>Welcome to RentKnock! Your shop is ready to go. Please verify your identity to start listing items.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRedirect}
                  className="modal-redirect-btn"
                >
                  Verify Your Shop Now
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ERROR MODAL */}
        <AnimatePresence>
          {showError && (
            <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowError(false)}>
              <motion.div className="error-modal createshop-modal" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
                <div className="modal-icon-glow error-glow"><FaExclamationTriangle className="modal-main-icon error-icon" /></div>
                <h2>Oops! Incomplete Form ⚠️</h2>
                <p>Please make sure all fields are filled correctly before moving to the next step.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowError(false)}
                  className="error-close-btn"
                >
                  Got it, let's fix
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default CreateShop;





