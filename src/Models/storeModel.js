export default class StoreModel {
  constructor({
    storeName = "",
    categoryId = "",
    description = "",
    address = "",
    city = "",
    geoLocation = { type: "Point", coordinates: [0, 0] },
    logo = null,
    coverImage = null,
  } = {}) {
    this.storeName = storeName;
    this.categoryId = categoryId;
    this.description = description;
    this.address = address;
    this.city = city;
    this.geoLocation = geoLocation;
    this.logo = logo;
    this.coverImage = coverImage;
  }
}


