import React, { useState } from "react";
import "../Pages/ForgotPin.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { createForgotPinModel } from "../Models/forgotPin";
import { forgotPin, resetPin } from "../services/authService";
import forget from "../assets/forget.jpg"; // Same image import as SignUp
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPin, setNewPin] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
 const [showPin, setShowPin] = useState(false);
   const navigate = useNavigate();


  // ================= SEND OTP =================
  const handleSendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });
    try {
      const payload = createForgotPinModel({ email });
      const res = await forgotPin(payload);
      setMessage({ text: res.message || "OTP sent successfully", type: "success" });
      setStep(2);
    } catch (error) {
      setMessage({ text: error.message || "Failed to send OTP", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  // ================= RESET PIN =================
  const handleResetPin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });
    try {
      const payload = { email, otp, newPin };
      const res = await resetPin(payload);
      setMessage({ text: res.message || "PIN reset successfully", type: "success" });
      setStep(1);

      setEmail(""); setOtp(""); setNewPin("");
       setTimeout(() => {
        navigate("/"); // Home page ka route
      }, 2000);
     
    } catch (error) {
      setMessage({ text: error.message || "Reset PIN failed", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page-full">
      <Header />
      <div className="main-center-div">
        <div className="auth-split-card">
          
          {/* LEFT SIDE: Same as Login/Signup */}
          <div className="left-image-section">
            
              
            <img src={forget} alt="Branding" className="side-bg-img" />
          </div>

          {/* RIGHT SIDE: Forgot Pin Form */}
          <div className="right-form-section">
            <div className="form-header">
               <h2 className="auth-title">Forgot PIN</h2>
               <p className="auth-subtitle">Enter your details to reset your security PIN</p>
            </div>

            <div className="forgot-form-body">
              {message.text && (
                <div className={`message-alert ${message.type}`}>
                  {message.text}
                </div>
              )}

              {step === 1 && (
                <form onSubmit={handleSendEmail} className="fade-in">
                  <div className="input-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter your registered email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="submit-btn-styled" disabled={loading}>
                    {loading ? "Sending OTP..." : "Send OTP"}
                  </button>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleResetPin} className="fade-in">
                  <div className="input-group password-group">
  <label>OTP Code</label>
  <div className="password-wrapper">
    <input
      type={showOtp ? "text" : "password"}
      placeholder="Enter 6-digit OTP"
      value={otp}
      onChange={(e) => setOtp(e.target.value)}
      required
    />
    <span onClick={() => setShowOtp(!showOtp)}>
      {showOtp ? <FaEyeSlash /> : <FaEye />}
    </span>
  </div>
</div>

<div className="input-group password-group">
  <label>New Security PIN</label>
  <div className="password-wrapper">
    <input
      type={showPin ? "text" : "password"}
      placeholder="Enter New 6-Digit PIN"
      value={newPin}
      onChange={(e) => setNewPin(e.target.value)}
      required
    />
    <span onClick={() => setShowPin(!showPin)}>
      {showPin ? <FaEyeSlash /> : <FaEye />}
    </span>
  </div>
</div>

                  <button type="submit" className="submit-btn-styled" disabled={loading}>
                    {loading ? "Resetting..." : "Reset PIN"}
                  </button>
                </form>
              )}
              
              <div className="social-footer">
                 <button onClick={() => window.history.back()} className="back-link-btn">
                    Back to Login
                 </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;




