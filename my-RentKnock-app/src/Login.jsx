import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Header from "./Header";
import Footer from "./Footer";
import { createLoginModel } from "./Models/loginModel";
import { loginUser } from "./services/authService";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    pin: "",
  });

  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    // ✅ only PIN validation
    if (!formData.pin) {
      setMessage({ text: "Please enter PIN", type: "error" });
      return;
    }

    try {
      // ✅ create login payload
      const payload = createLoginModel(formData);

      // ✅ call login service
      const data = await loginUser(payload);

      console.log("Login API Response:", data);

      setMessage({ text: "Login Successful!", type: "success" });

      navigate("/home"); // redirect to home on success

    } catch (error) {
      console.error(error);

      // show error message
      setMessage({
        text: error.message || "Login Failed. Redirecting to Signup...",
        type: "error",
      });

      // ✅ redirect to signup after 2 seconds
      setTimeout(() => {
        navigate("/signup");
      }, 2000);
    }
  };

  return (
    <div>
       <Header />,
      
    
    <div className="signin-container">
     
      <h2>Sign In</h2>

      {message.text && (
        <div className={`message ${message.type}`}>{message.text}</div>
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
        <button type="submit" className="login-btn">
          Login
        </button>

        <button type="button" className="google-btn">
          <FaGoogle style={{ marginRight: "5px" }} /> Continue with Google
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
    <div>
      <Footer />
    </div>
    </div>
  );
}

export default Login;

