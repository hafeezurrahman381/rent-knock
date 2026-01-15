// src/TermsAndConditions.jsx
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { fetchTerms } from "../services/termsService";
import { TermsModel } from "../Models/TermsModel";
import "../Pages/TermsAndConditions.css";

function TermsAndConditions() {
  const [terms, setTerms] = useState(new TermsModel());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getTerms = async () => {
      try {
        const data = await fetchTerms();
        const model = new TermsModel(data);
        setTerms(model);
      } catch (err) {
        setError("Failed to load Terms & Conditions.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getTerms();
  }, []);

  return (
    <div>
      <Header />
      <div className="terms-container">
        {loading ? (
          <p className="loader">Loading Terms & Conditions...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <>
            <h1 className="terms-title">{terms.title}</h1>
            <div
              className="terms-content"
              dangerouslySetInnerHTML={{ __html: terms.content }}
            ></div>
            {terms.updatedAt && (
              <p className="terms-date">Last updated: {terms.updatedAt}</p>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default TermsAndConditions;

