import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaStore, FaIdCard, FaCheckCircle, FaCloudUploadAlt, FaTimes } from "react-icons/fa";
import "./ShopVerification.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const UploadBox = ({ label, type, icon: Icon, preview, onFileChange, onRemove, variants }) => (
  <motion.div className="upload-section" variants={variants}>
    <label className="upload-label">
      <Icon className="label-icon" />
      <span>{label}</span>
    </label>
    <div className={`upload-glow-card ${preview ? "has-file" : ""}`}>
      <AnimatePresence mode="wait">
        {!preview ? (
          <motion.label
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="file-input-wrapper"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaCloudUploadAlt className="upload-placeholder-icon" />
            <p>Click to upload image</p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => onFileChange(e, type)}
              hidden
            />
          </motion.label>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="preview-container"
          >
            <img src={preview} alt={label} className="preview-image" />
            <button className="remove-btn" type="button" onClick={() => onRemove(type)}>
              <FaTimes />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
);

const ShopVerification = () => {
  const navigate = useNavigate();

  const [files, setFiles] = useState({
    shopImage: null,
    cnicFront: null,
    cnicBack: null,
  });

  const [previews, setPreviews] = useState({
    shopImage: null,
    cnicFront: null,
    cnicBack: null,
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setFiles((prev) => ({ ...prev, [type]: file }));
      setPreviews((prev) => ({ ...prev, [type]: URL.createObjectURL(file) }));
    }
  };

  const removeFile = (type) => {
    setFiles((prev) => ({ ...prev, [type]: null }));
    setPreviews((prev) => ({ ...prev, [type]: null }));
  };

  const handleSubmit = () => {
    if (!files.shopImage || !files.cnicFront || !files.cnicBack) {
      alert("Please upload all required documents");
      return;
    }
    setShowSuccess(true);
  };

  const handleFinalRedirect = () => {
    navigate("/shopdashboard");
  };

  return (
    <div className="verify-page-wrapper">
      <Header />

      <main className="verify-container">
        <div className="background-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>

        <motion.div
          className="verify-glass-card"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <header className="verify-header">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
              className="icon-badge"
            >
              <FaStore />
            </motion.div>
            <h1>Shop Verification</h1>
            <p>Join RentKnock professional sellers ecosystem</p>
          </header>

          <div className="upload-grid">
            <UploadBox
              label="Shop Front Picture"
              type="shopImage"
              icon={FaStore}
              preview={previews.shopImage}
              onFileChange={handleFileChange}
              onRemove={removeFile}
              variants={itemVariants}
            />
            <UploadBox
              label="CNIC Front Side"
              type="cnicFront"
              icon={FaIdCard}
              preview={previews.cnicFront}
              onFileChange={handleFileChange}
              onRemove={removeFile}
              variants={itemVariants}
            />
            <UploadBox
              label="CNIC Back Side"
              type="cnicBack"
              icon={FaIdCard}
              preview={previews.cnicBack}
              onFileChange={handleFileChange}
              onRemove={removeFile}
              variants={itemVariants}
            />
          </div>

          <motion.button
            className="submit-btn-premium"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(255, 122, 0, 0.4)" }}
            whileTap={{ scale: 0.97 }}
            onClick={handleSubmit}
          >
            <FaCheckCircle className="btn-icon" />
            <span>Verify & Access Dashboard</span>
          </motion.button>
        </motion.div>

        {/* SUCCESS MODAL */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="success-modal"
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <div className="success-icon-wrapper">
                  <motion.div
                    initial={{ rotate: -45, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <FaCheckCircle className="success-main-icon" />
                  </motion.div>
                </div>

                <h2>Submission Success! 🎉</h2>
                <p>Your documents have been uploaded successfully. Our team will verify your shop within 24 hours.</p>

                <motion.button
                  className="modal-redirect-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleFinalRedirect}
                >
                  Go to Shop Dashboard
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


export default ShopVerification;
