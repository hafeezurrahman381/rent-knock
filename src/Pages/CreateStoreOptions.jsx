import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Pages/CreateStoreOptions.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const CreateStoreOptions = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingLogin, setCheckingLogin] = useState(true); // To avoid flash

  // 🔐 Login check
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
    setCheckingLogin(false);
  }, []);

  if (checkingLogin) return null; // optional: show loader while checking

  return (
    <div>
      <Header />

      <div className="options-container">
        {isLoggedIn ? (
          <>
            <h2>What do you want to do?</h2>
            <div className="options-box">
              <button
                className="option-btn"
                onClick={() => navigate("/individual")}
              >
                Post as Individual
              </button>

              <button
                className="option-btn"
                onClick={() => navigate("/createshop")}
              >
                Create Shop Listing
              </button>
            </div>
          </>
        ) : (
          <>
            <h2>Please Login or Signup to continue</h2>
            <div className="options-box">
              <button
                className="option-btn"
                onClick={() => navigate("/login", { state: { redirectTo: "/create-store-options" } })}
              >
                Login
              </button>

              <button
                className="option-btn"
                onClick={() => navigate("/signup", { state: { redirectTo: "/create-store-options" } })}
              >
                Signup
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CreateStoreOptions;







