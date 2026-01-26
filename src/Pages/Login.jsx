import React, { useState, useContext } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../Pages/Login.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { createLoginModel } from "../Models/loginModel";
import { loginUser } from "../services/authService";
import { AuthContext } from "../context/AuthContext";
import loginImg from "../assets/login.jpg"; // Renamed to avoid conflict with login context

function Login() {
  const [showPin, setShowPin] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({ pin: "" });
  const [message, setMessage] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.pin) {
      setMessage({ text: "Please enter PIN", type: "error" });
      return;
    }

    try {
      setLoading(true);
      const payload = createLoginModel(formData);
      const data = await loginUser(payload);

      // ✅ 1. Backend response se user data extract karna
      // Backend aksar 'data.data.user' ya 'data.user' bhejta hai
      const userFromAPI = data.data?.user || data.user || data;

      // ✅ 2. Proper structure mein data save karna (taaki NavBar ko fullName mil sakay)
      const userData = {
        fullName: userFromAPI.fullName || userFromAPI.name || "User", 
        email: userFromAPI.email || "",
      };

      localStorage.setItem("currentUser", JSON.stringify(userData));
      localStorage.setItem("token", data.token || data.data?.token || "dummy-token");

      // ✅ 3. Navbar ko batana ke user login ho gaya hai
      login(userData); // Update Context
      window.dispatchEvent(new Event("userLogin")); // Important for NavBar Update

      setMessage({ text: "Login Successful!", type: "success" });
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      console.error("Login detail error:", error);
      setMessage({ text: error.message || "Login Failed!", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="login-wrapper">
        <div className="login-image">
          <img src={loginImg} alt="login" />
        </div>
        <div className="login-form">
          <h2>Sign In</h2>
          {message.text && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <label>PIN</label>
            <div className="password-field">
              <input
                type={showPin ? "text" : "password"}
                name="pin"
                value={formData.pin}
                onChange={handleChange}
                placeholder="Enter your PIN"
              />
              <span className="toggle-pin" onClick={() => setShowPin(!showPin)}>
                {showPin ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <span className="forgot" onClick={() => navigate("/forget")}>
              Forgot PIN?
            </span>
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
            <button type="button" className="google-btn">
              <FaGoogle /> Continue with Google
            </button>
            <p className="signup-text">
              New to RentKnock?
              <span onClick={() => navigate("/signup")}> Create Account</span>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;









