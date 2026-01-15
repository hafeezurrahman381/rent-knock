import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Privacy.css";

const Privacy = () => {
  const [privacyData, setPrivacyData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrivacy = async () => {
      try {
        const response = await axios.get("https://api.example.com/privacy"); // Replace with your API
        setPrivacyData(response.data.content); // assuming API returns { content: "..." }
      } catch (error) {
        console.error("Error fetching privacy data:", error);
        setPrivacyData("Unable to load privacy policy at the moment.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacy();
  }, []);

  return (
    <div className="privacy-page">
      <Header />
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div
            className="privacy-content"
            dangerouslySetInnerHTML={{ __html: privacyData }}
          ></div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
