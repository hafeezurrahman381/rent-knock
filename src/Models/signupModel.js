export const createSignupModel = (formData, activeTab) => {
  const baseModel = {
    fullName: formData.fullName,
    email: formData.email,
    phoneNo: formData.mobile,
    pin: formData.password,
    city: formData.city,
    address: formData.address,
  };

  if (activeTab === "shop") {
    return {
      ...baseModel,
      businessProfile: {
        businessType: "SHOP",
        shopName: formData.shopName,
        shopCategory: formData.shopCategory,
        registrationType: "REGISTERED",
      },
    };
  }

  // Individual
  return {
    ...baseModel,
    businessProfile: {
      businessType: "INDIVIDUAL",
    },
  };
};




