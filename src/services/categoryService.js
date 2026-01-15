import CategoryModel from "../Models/CategoryModel";

const BASE_URL = 'https://rentapi.msiddiquesteel.com/api/v1/categories';

class CategoryService {
  
  // 1️⃣ Get all categories
  static async getAllCategories() {
    try {
      const response = await fetch(BASE_URL);

      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }

      const data = await response.json();

      // API se data["data"] array me aata hai, usko model me map karna
      const categories = data.data.map(item => new CategoryModel(item));

      return categories;

    } catch (error) {
      console.error('CategoryService Error:', error);
      return []; // agar error ho to empty array return kare
    }
  }

  // 2️⃣ (Optional) Get category by slug
  static async getCategoryBySlug(slug) {
    try {
      const categories = await this.getAllCategories();
      return categories.find(cat => cat.slug === slug);
    } catch (error) {
      console.error('CategoryService Error:', error);
      return null;
    }
  }
}

export default CategoryService;





