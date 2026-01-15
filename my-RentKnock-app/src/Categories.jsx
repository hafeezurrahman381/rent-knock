import React, { useEffect, useState } from "react";
import "./Categories.css";
import { FaChevronDown } from "react-icons/fa";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // API CALL
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        // sirf 10 categories
        setCategories(data.slice(0, 8));
      })
      .catch((err) => console.log(err));
  }, []);

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










