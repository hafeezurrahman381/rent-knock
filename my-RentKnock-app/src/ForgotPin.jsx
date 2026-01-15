import React, { useState } from "react";
import "./ForgotPin.css";
import Header from "./Header";
import Footer from "./Footer";
import { createForgotPinModel } from "./Models/forgotPin";
import { forgotPin, resetPin } from "./services/authService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPin, setNewPin] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  // ✅ SEND OTP
  const handleSendEmail = async (e) => {
    e.preventDefault();
    try {
      const payload = createForgotPinModel({ email });
      const res = await forgotPin(payload);
      setMessage(res.message);
      setStep(2);
    } catch (error) {
      setMessage(error.message);
    }
  };

  // ✅ RESET PIN
  const handleResetPin = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        email,
        otp,
        newPin,
      };

      const res = await resetPin(payload);
      setMessage(res.message || "PIN reset successfully");

      setStep(1);
      setEmail("");
      setOtp("");
      setNewPin("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <Header />

      <div className="forgot-password-container">
        <h2>Forgot PIN</h2>
        {message && <p>{message}</p>}

        {step === 1 && (
          <form onSubmit={handleSendEmail}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Send OTP</button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleResetPin}>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter New PIN"
              value={newPin}
              onChange={(e) => setNewPin(e.target.value)}
              required
            />
            <button type="submit">Reset PIN</button>
          </form>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ForgotPassword;



