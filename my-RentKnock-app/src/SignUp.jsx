import React, { useState } from "react";
import { FaUser, FaStore, FaGoogle } from "react-icons/fa";
import "./SignUp.css";

import { createSignupModel } from "./Models/signupModel";
import { signupUser } from "./services/authService";
import Header from "./Header";
import Footer from "./Footer";

function SignUp() {
  const [activeTab, setActiveTab] = useState("individual");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    city: "",
    address: "",
    shopName: "",
    shopCategory: "",
    shopOwnerNumber: "",
    shopAddress: "",
    businessType: "",
    agreeTerms: false,
    avatar: null, // added for avatar
  });

  const [message, setMessage] = useState({ text: "", type: "" });
  const [avatarPreview, setAvatarPreview] = useState(null); // for preview

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "avatar") {
      const file = files[0];
      setFormData({ ...formData, avatar: file });
      setAvatarPreview(URL.createObjectURL(file));
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: "Passwords do not match!", type: "error" });
      return;
    }

    if (!formData.agreeTerms) {
      setMessage({
        text: "You must agree to the Terms & Conditions and Privacy Policy.",
        type: "error",
      });
      return;
    }

    const payload = createSignupModel(formData, activeTab);
    console.log("Payload to send:", payload);

    try {
      const data = await signupUser(payload);
      console.log("API Response:", data);
      setMessage({ text: "Signup Successful!", type: "success" });

      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        city: "",
        address: "",
        shopName: "",
        shopCategory: "",
        shopOwnerNumber: "",
        shopAddress: "",
        businessType: "",
        agreeTerms: false,
        avatar: null,
      });
      setAvatarPreview(null);
    } catch (error) {
      console.error(error);
      setMessage({ text: error.message || "Signup Failed. Try again.", type: "error" });
    }
  };

  return (
    <div>
      <Header />

      <div className="signup-container">
        <h2>Signup</h2>

        {message.text && <div className={`message ${message.type}`}>{message.text}</div>}

        <div className="tabs">
          <button
            className={activeTab === "individual" ? "active" : ""}
            onClick={() => setActiveTab("individual")}
          >
            <FaUser style={{ marginRight: "5px" }} /> Individual
          </button>
          <button
            className={activeTab === "shop" ? "active" : ""}
            onClick={() => setActiveTab("shop")}
          >
            <FaStore style={{ marginRight: "5px" }} /> Shop / Business
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Avatar Upload */}
          <div className="form-group">
            <label>Profile Avatar</label>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleChange}
            />
            {avatarPreview && (
              <div className="avatar-preview">
                <img src={avatarPreview} alt="Avatar Preview" width="100" />
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="+92 311 5845181"
              required
            />
          </div>

          <div className="form-group">
            <label>PIN / Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a strong PIN"
              maxLength={6}
              pattern="\d{6}"
              required
            />
          </div>
          <small className="pin-note">* PIN must be 6 digits</small>

          <div className="form-group">
            <label>Confirm PIN</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your PIN"
              maxLength={6}
              pattern="\d{6}"
              required
            />
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Select City"
              required
            />
          </div>

          <div className="form-group">
            <label>Complete Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Full Street / House Info"
              required
            />
          </div>

          {activeTab === "shop" && (
            <>
              <h3>Business Details</h3>
              <div className="form-group">
                <label>Shop / Business Name</label>
                <input
                  type="text"
                  name="shopName"
                  value={formData.shopName}
                  onChange={handleChange}
                  placeholder="Enter shop or business name"
                />
              </div>
              <div className="form-group">
                <label>Shop Category</label>
                <select
                  name="shopCategory"
                  value={formData.shopCategory}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Shop Owner Number</label>
                <input
                  type="tel"
                  name="shopOwnerNumber"
                  value={formData.shopOwnerNumber}
                  onChange={handleChange}
                  placeholder="+92...(Business Contact)"
                />
              </div>
              <div className="form-group">
                <label>Shop Address</label>
                <input
                  type="text"
                  name="shopAddress"
                  value={formData.shopAddress}
                  onChange={handleChange}
                  placeholder="Enter shop location"
                />
              </div>
              <div className="form-group">
                <label>Business Registration Type</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                >
                  <option value="">Select type</option>
                  <option value="Sole Proprietorship">Sole Proprietorship</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Private Limited">Private Limited</option>
                </select>
              </div>
            </>
          )}

          <div className="form-group checkbox">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <label>
              I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
            </label>
          </div>

          <div className="create-account">
            <button type="submit">Create Account</button>
          </div>

          <button type="button" className="google-account">
            <FaGoogle style={{ marginRight: "5px" }} /> Continue with Google
          </button>

          <div className="login-container">
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignUp;







