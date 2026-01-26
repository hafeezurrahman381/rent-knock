import React, { useState, useContext } from "react";
import { FaUser, FaStore, FaGoogle, FaArrowRight, FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { signupUser } from "../services/authService";
import { AuthContext } from "../context/AuthContext";
import { createSignupModel } from "../Models/signupModel";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import signupImg from "../assets/signup.jpg";
import "../Pages/SignUp.css";

function SignUp() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [activeTab1, setActiveTab1] = useState("signup");
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState("individual");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
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
    avatar: null,
  });

  const [message, setMessage] = useState({ text: "", type: "" });
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (name === "avatar") {
      const file = files[0];
      setFormData({ ...formData, avatar: file });
      setAvatarPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: "PINs do not match!", type: "error" });
      return;
    }

    let payload = createSignupModel(formData, activeTab);

    if (activeTab === "individual") {
      delete payload.shopName;
      delete payload.shopCategory;
      delete payload.shopOwnerNumber;
      delete payload.shopAddress;
      delete payload.businessType;
    }

    delete payload.avatar;

    try {
      setLoading(true);
      await signupUser(payload);

      // User data set karein
      const userData = { fullName: formData.fullName, email: formData.email };
      
      localStorage.setItem("currentUser", JSON.stringify(userData));
      login(userData); // Update Context if exists

      // 🚨 Sab se zaroori line: NavBar ko signal bhejna
      window.dispatchEvent(new Event("userLogin"));

      setMessage({ text: "Signup Successful!", type: "success" });
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setMessage({ text: error.message || "Signup Failed", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page-full">
      <Header />
      <div className="main-center-div-4">
        <div className="auth-split-card-1">
          <div className="left-image-section-2">
            <img src={signupImg} alt="Branding" className="signup" />
          </div>

          <div className="right-form-section-3">
            <div className="top-tabs">
              <button
                className={`tab ${activeTab1 === "signup" ? "active" : ""}`}
                type="button"
                onClick={() => setActiveTab1("signup")}
              >
                Sign Up
              </button>
              <button
                className={`tab ${activeTab1 === "signin" ? "active" : ""}`}
                type="button"
                onClick={() => { setActiveTab1("signin"); navigate("/login"); }}
              >
                Sign In
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {message.text && <div className={`message ${message.type}`}>{message.text}</div>}

              {step === 1 && (
                <div className="fade-in">
                  <div className="account-type-toggle">
                    <button type="button" className={activeTab === "individual" ? "active" : ""} onClick={() => setActiveTab("individual")}><FaUser /> Individual</button>
                    <button type="button" className={activeTab === "shop" ? "active" : ""} onClick={() => setActiveTab("shop")}><FaStore /> Business</button>
                  </div>

                  <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Aldrego" required />
                  </div>
                  <div className="input-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required />
                  </div>
                  <div className="input-group">
                    <label>PIN (6 digits)</label>
                    <div className="password-field">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••"
                        maxLength={6}
                        required
                      />
                      <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                  <div className="input-group">
                    <label>Confirm PIN</label>
                    <div className="password-field">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="••••••"
                        maxLength={6}
                        required
                      />
                      <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>

                  <button type="button" className="next-btn-styled" onClick={handleNext}>
                    Next Step <FaArrowRight />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="fade-in step-2-container">
                  <div className="input-group">
                    <label>Mobile Number</label>
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="+92 3XX XXXXXXX" required />
                  </div>
                  <div className="input-group">
                    <label>City</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
                  </div>
                  <div className="input-group">
                    <label>Complete Address</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="House/Street" required />
                  </div>

                  {activeTab === "shop" && (
                    <div className="business-fields">
                      <div className="input-group">
                        <label>Shop Name</label>
                        <input type="text" name="shopName" value={formData.shopName} onChange={handleChange} />
                      </div>
                      <div className="input-group">
                        <label>Shop Category</label>
                        <select name="shopCategory" value={formData.shopCategory} onChange={handleChange}>
                          <option value="">Select Category</option>
                          <option value="Grocery">Grocery</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Medical">Medical</option>
                        </select>
                      </div>
                      <div className="input-group">
                        <label>Business Type</label>
                        <select name="businessType" value={formData.businessType} onChange={handleChange}>
                          <option value="">Select Type</option>
                          <option value="Sole Proprietorship">Sole Proprietorship</option>
                          <option value="Partnership">Partnership</option>
                        </select>
                      </div>
                      <div className="input-group">
                        <label>Shop Owner Number</label>
                        <input type="tel" name="shopOwnerNumber" value={formData.shopOwnerNumber} onChange={handleChange} />
                      </div>
                      <div className="input-group">
                        <label>Shop Address</label>
                        <input type="text" name="shopAddress" value={formData.shopAddress} onChange={handleChange} />
                      </div>
                    </div>
                  )}

                  <div className="checkbox-group">
                    <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required />
                    <label>I agree to the <Link to="/terms">Terms & Conditions</Link></label>
                  </div>

                  <div className="action-buttons">
                    <button type="button" className="back-arrow-btn" onClick={() => setStep(1)}><FaArrowLeft /></button>
                   <button
                      type="submit"
                      className="submit-btn-styled"
                      disabled={loading}
                    >
                      {loading ? <span className="loader"></span> : "Create Account"}
                    </button>
                  </div>
                </div>
              )}

              <div className="social-footer">
                <button type="button" className="google-btn">
                  <FaGoogle className="google-icon" /> <span>Continue with Google</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
