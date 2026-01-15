import { useEffect, useState } from "react";
import CategoryService from "../services/categoryService";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Pages/AllCategories.css";

export default function AllCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await CategoryService.getAllCategories();
      setCategories(res || []);
    } catch (error) {
      console.error("Category Error:", error);
    }
  };

  return (
    <div>
        <Header />
    
    <div className="all-categories">
      <h2>All Categories</h2>

      <div className="category-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat._id}>
            <div className="icon-box">
              <i className={cat.icon}></i>
            </div>
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
}
