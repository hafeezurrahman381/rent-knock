import { useState } from "react";
import "./TopCategories.css";

const categories = [
  {
    name: "Mobile",
    img: "https://cdn-icons-png.flaticon.com/512/15/15874.png",
  },
  {
    name: "Cosmetics",
    img: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
  },
  {
    name: "Electronics",
    img: "https://cdn-icons-png.flaticon.com/512/3659/3659899.png",
  },
  {
    name: "Furniture",
    img: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
  },
  {
    name: "Watches",
    img: "https://cdn-icons-png.flaticon.com/512/833/833593.png",
  },
  {
    name: "Decor",
    img: "https://cdn-icons-png.flaticon.com/512/2926/2926747.png",
  },
  {
    name: "Accessories",
    img: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
  },
  {
    name: "Watches",
    img: "https://cdn-icons-png.flaticon.com/512/833/833593.png",
  },
  {
    name: "Decor",
    img: "https://cdn-icons-png.flaticon.com/512/2926/2926747.png",
  },
];

export default function TopCategories() {
  // Default active index = 0 (Mobile)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="top-cat">
      <div className="top-head">
        <h3>
          Shop From <span>Top Categories</span>
        </h3>
        <p>View All ›</p>
      </div>

      <div className="cat-row">
        {categories.map((item, index) => (
          <div
            className="cat-item"
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            <div className={`cat-circle ${activeIndex === index ? "active" : ""}`}>
              <img src={item.img} alt={item.name} />
            </div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

