// src/components/TopCategories.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryService from "../services/categoryService";
import "../Pages/TopCategories.css";

export default function TopCategories() {
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const allCategories = await CategoryService.getAllCategories();
      setCategories(allCategories || []);
    } catch (error) {
      console.error("Category Error:", error);
    }
  };

  // 🔥 SIRF YE ADD KIYA
  const breakName = (name) => {
    if (name.includes("&")) {
      const parts = name.split("&");
      return (
        <>
          {parts[0].trim()}
          <br />
          & {parts[1].trim()}
        </>
      );
    }
    return name;
  };

  return (
    <div className="top-cat">
      <div className="top-head">
        <h3>
          Shop From <span>Top Categories</span>
        </h3>
        <p onClick={() => navigate("/categories")}>View All ›</p>
      </div>

      <div className="cat-row">
        {categories.slice(0, 9).map((cat, index) => (
          <div
            className="cat-item"
            key={cat._id || index}
            onClick={() => setActiveIndex(index)}
          >
            <div className={`cat-circle ${activeIndex === index ? "active" : ""}`}>
              <i className={cat.icon}></i>
            </div>

            {/* 🔥 NAME WITH LINE BREAK */}
            <span>{breakName(cat.name)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}











