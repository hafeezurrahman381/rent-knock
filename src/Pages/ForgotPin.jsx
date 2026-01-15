import React, { useState } from "react";
import "../Pages/ForgotPin.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { createForgotPinModel } from "../Models/forgotPin";
import { forgotPin, resetPin } from "../services/authService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPin, setNewPin] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);

  // ================= SEND OTP =================
  const handleSendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const payload = createForgotPinModel({ email });
      const res = await forgotPin(payload);

      setMessage({
        text: res.message || "OTP sent successfully",
        type: "success",
      });

      setStep(2);
    } catch (error) {
      setMessage({
        text: error.message || "Failed to send OTP",
        type: "error",
      });
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

      setMessage({
        text: res.message || "PIN reset successfully",
        type: "success",
      });

      // reset form
      setStep(1);
      setEmail("");
      setOtp("");
      setNewPin("");
    } catch (error) {
      setMessage({
        text: error.message || "Reset PIN failed",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="forgot-password-container">
        <h2>Forgot PIN</h2>

        {message.text && (
          <p className={`message ${message.type}`}>
            {message.text}
          </p>
        )}

        {step === 1 && (
          <form onSubmit={handleSendEmail}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
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

            <button type="submit" disabled={loading}>
              {loading ? "Resetting..." : "Reset PIN"}
            </button>
          </form>
        )}
      </div>

      <Footer />
    </>
  );
};

export default ForgotPassword;




