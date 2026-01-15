export const createSignupModel = (formData, activeTab) => {
  return {
    fullName: formData.fullName,
    email: formData.email,
    phoneNo: formData.mobile, // backend ke liye correct field
    pin: formData.password,   // backend ke liye correct field
    city: formData.city,
    address: formData.address,
    businessProfile: {
      businessType: activeTab === "individual" ? "INDIVIDUAL" : "BUSINESS",
    },
  };
};




