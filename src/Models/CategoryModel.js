// src/models/CategoryModel.js

export default class CategoryModel {
  constructor({_id, name, icon, slug}) {
    this.id = _id;   // API ka _id ko class me id me map kar diya
    this.name = name; // API ka name
    this.icon = icon; // API ka icon
    this.slug = slug; // API ka slug
  }
}

