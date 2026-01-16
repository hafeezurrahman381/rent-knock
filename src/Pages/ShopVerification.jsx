import React, { useState } from "react";
import "../Pages/ShopVerification.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const ShopVerification = () => {
  const [shopPhoto, setShopPhoto] = useState(null);
  const [cnicFront, setCnicFront] = useState(null);
  const [cnicBack, setCnicBack] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!shopPhoto || !cnicFront || !cnicBack) {
      alert("Please upload all required photos before submitting!");
      return;
    }

    // 🔑 Save images in localStorage for demo (in real app: API)
    localStorage.setItem("shopPhoto", shopPhoto);
    localStorage.setItem("cnicFront", cnicFront);
    localStorage.setItem("cnicBack", cnicBack);

    alert("Shop verification submitted successfully!");
  };

  return (
    <div>
      <Header />
      <div className="verification-container">
        <div className="verification-card">
          <h2>Shop Verification</h2>
          <p>Please upload the required photos for verification</p>

          <form onSubmit={handleSubmit} className="verification-form">

            <div className="form-group">
              <label>Shop Front Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setShopPhoto(URL.createObjectURL(e.target.files[0]))}
                required
              />
              {shopPhoto && (
                <img src={shopPhoto} alt="Shop Preview" className="preview-image" />
              )}
            </div>

            <div className="form-group">
              <label>CNIC Front</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setCnicFront(URL.createObjectURL(e.target.files[0]))}
                required
              />
              {cnicFront && (
                <img src={cnicFront} alt="CNIC Front Preview" className="preview-image" />
              )}
            </div>

            <div className="form-group">
              <label>CNIC Back</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setCnicBack(URL.createObjectURL(e.target.files[0]))}
                required
              />
              {cnicBack && (
                <img src={cnicBack} alt="CNIC Back Preview" className="preview-image" />
              )}
            </div>

            <button type="submit" className="submit-btn">
              Submit for Verification
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopVerification;
