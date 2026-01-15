import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaUser } from "react-icons/fa";
import "../Pages/PostIndividual.css";

const PostIndividual = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // 🔐 Login check
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login", {
        state: { redirectTo: "/post-individual" },
      });
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // 🟢 Fake API success (replace with real API)
    setTimeout(() => {
      // drawer ke liye flag
      localStorage.setItem("userType", "individual");

      setLoading(false);
      setSuccess(true);

      // 2 sec baad home
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }, 1500);
  };

  return (
    <div>
      <Header />

      <div className="individual-container">
        <h2>
          <FaUser className="individual-icon" /> Post as Individual
        </h2>

        <form className="individual-form" onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Product Title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <input
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            required
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Posting..." : "Post Now"}
          </button>
        </form>

        {success && (
          <p className="success-msg">
            ✅ Posted Successfully! Redirecting to Home...
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default PostIndividual;

