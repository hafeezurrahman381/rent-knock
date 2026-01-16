import React, { useState } from "react";
import "../Pages/CreateShop.css";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const CreateShop = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    shopName: "",
    ownerName: "",
    phone: "",
    email: "",
    category: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🏪 SAVE SHOP DATA
    localStorage.setItem("myShop", JSON.stringify(formData));

    // 🔑 SET USER TYPE AS STORE
    localStorage.setItem("userType", "store");

    alert("Shop Created Successfully!");

    // 🔁 Redirect to Home
    navigate("/shopverify");
  };

  return (
    <div>
      <Header />

      <div className="create-shop-container">
        <div className="create-shop-card">
          <h2>Create Your Shop</h2>
          <p>Fill the form below to start selling</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Shop Name</label>
              <input
                type="text"
                name="shopName"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Owner Name</label>
              <input
                type="text"
                name="ownerName"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select name="category" onChange={handleChange} required>
                <option value="">Select Category</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Grocery</option>
                <option>Beauty</option>
              </select>
            </div>

            <div className="form-group">
              <label>City</label>
              <input type="text" name="city" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Shop Address</label>
              <textarea
                name="address"
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Create Shop
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateShop;


