import React, { useState } from "react";
import "../Components/Categories.css";
import { FaChevronDown } from "react-icons/fa";

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  // NORMAL (STATIC) DATA
  const categories = [
    { slug: "smartphones", name: "Smartphones" },
    { slug: "laptops", name: "Laptops" },
    { slug: "fragrances", name: "Fragrances" },
    { slug: "skincare", name: "Skincare" },
    { slug: "groceries", name: "Groceries" },
    { slug: "home-decoration", name: "Home Decoration" },
    { slug: "furniture", name: "Furniture" },
    { slug: "tops", name: "Tops" },
    { slug: "furniture", name: "Furniture" },
  ];

  return (
    <div>
      <div className="categories-wrapper">
        {categories.map((cat, index) => (
          <div className="category-box" key={cat.slug}>
            <button
              className={`category-btn ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {cat.name}
              <FaChevronDown className="icon" />
            </button>
          </div>
        ))}
      </div>

      <div className="line-78"></div>
    </div>
  );
}

export default Categories;











