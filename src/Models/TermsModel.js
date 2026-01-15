// src/Models/TermsModel.js

export class TermsModel {
  constructor(data = {}) {
    this.id = data.id || "";
    this.title = data.title || "Terms & Conditions";
    this.content = data.content || "";
    this.updatedAt = data.updatedAt || "";
  }
}
