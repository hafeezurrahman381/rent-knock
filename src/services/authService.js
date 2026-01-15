const BASE_URL = "https://rentapi.msiddiquesteel.com/api/v1/auth";

// COMMON FETCH FUNCTION
const request = async (url, payload) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Agar server response hi na de
    if (!response) {
      throw new Error("Server not responding");
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// ================= SIGNUP =================
export const signupUser = async (payload) => {
  return await request(`${BASE_URL}/signup`, payload);
};

// ================= LOGIN =================
export const loginUser = async (payload) => {
  return await request(`${BASE_URL}/login`, payload);
};

// ================= FORGOT PIN (SEND OTP) =================
export const forgotPin = async (payload) => {
  return await request(`${BASE_URL}/forgot-pin`, payload);
};

// ================= RESET PIN =================
export const resetPin = async (payload) => {
  return await request(`${BASE_URL}/reset-pin`, payload);
};












