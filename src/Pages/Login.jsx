import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../Pages/Login.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { createLoginModel } from "../Models/loginModel";
import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    pin: "",
  });

  const [message, setMessage] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    if (!formData.pin) {
      setMessage({ text: "Please enter PIN", type: "error" });
      return;
    }

    setLoading(true);

    try {
      const payload = createLoginModel(formData);
      const data = await loginUser(payload);

      console.log("Login API Response:", data);

      // 🔐 token save
      localStorage.setItem("token", data.token || "dummy-token");

      setMessage({ text: "Login Successful!", type: "success" });

      // ✅ DIRECT CREATE STORE NAVIGATION
      setTimeout(() => {
        navigate("/create-store");
      }, 1000);

    } catch (error) {
      setMessage({
        text: error.message || "Login Failed. Redirecting to Signup...",
        type: "error",
      });

      setTimeout(() => {
        navigate("/signup");
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="signin-container">
        <h2>Sign In</h2>

        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>PIN</label>
            <input
              type="password"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
              placeholder="Enter your PIN"
              required
            />
          </div>

          <span className="f-pin" onClick={() => navigate("/forget")}>
            Forgot PIN?
          </span>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <button type="button" className="google-btn">
            <FaGoogle style={{ marginRight: "5px" }} />
            Continue with Google
          </button>

          <div className="login-container">
            <p>
              New to RentKnock?{" "}
              <span onClick={() => navigate("/signup")}>
                Create Account
              </span>
            </p>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Login;





