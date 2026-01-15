import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/business-stores";

export const createStore = async (storeData) => {
  const formData = new FormData();

  formData.append("storeName", storeData.storeName);
  formData.append("categoryId", storeData.categoryId);
  formData.append("description", storeData.description);
  formData.append("address", storeData.address);
  formData.append("city", storeData.city);

  formData.append("geoLocation[type]", "Point");
  formData.append("geoLocation[coordinates][]", storeData.geoLocation.coordinates[0]);
  formData.append("geoLocation[coordinates][]", storeData.geoLocation.coordinates[1]);

  formData.append("logo", storeData.logo);
  formData.append("coverImage", storeData.coverImage);

  const response = await axios.post(API_URL, formData);
  return response.data;
};


