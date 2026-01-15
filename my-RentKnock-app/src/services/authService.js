// ✅ SIGNUP
export const signupUser = async (payload) => {
  const response = await fetch(
    "https://rentapi.msiddiquesteel.com/api/v1/auth/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Signup Failed");
  }

  return data;
};

// ✅ LOGIN
export const loginUser = async (payload) => {
  const response = await fetch(
    "https://rentapi.msiddiquesteel.com/api/v1/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login Failed");
  }

  return data;
};

// SEND OTP
export const forgotPin = async (payload) => {
  const response = await fetch(
    "https://rentapi.msiddiquesteel.com/api/v1/auth/forgot-pin",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to send OTP");
  }

  return data;
};

// RESET PIN
export const resetPin = async (payload) => {
  const response = await fetch(
    "https://rentapi.msiddiquesteel.com/api/v1/auth/reset-pin",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Reset PIN Failed");
  }

  return data;
};











