const BASE_URL = "https://rentapi.msiddiquesteel.com/api/v1/auth";

const request = async (url, payload) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};

export const signupUser = async (payload) => {
  // Debugging ke liye payload console
  console.log("Signup Payload:", payload);
  // Remove avatar if sending JSON
  delete payload.avatar;
  return await request(`${BASE_URL}/signup`, payload);
};

export const loginUser = async (payload) => request(`${BASE_URL}/login`, payload);
export const forgotPin = async (payload) => request(`${BASE_URL}/forgot-pin`, payload);
export const resetPin = async (payload) => request(`${BASE_URL}/reset-pin`, payload);













