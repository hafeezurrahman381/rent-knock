// src/services/termsService.js
import axios from "axios";

// Use Vite proxy or full API URL
const API_URL = "/api/terms"; // If using proxy in vite.config.js

export const fetchTerms = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // adjust if your API returns { content: "..." }
  } catch (error) {
    console.error("Error fetching terms:", error);
    throw error;
  }
};
