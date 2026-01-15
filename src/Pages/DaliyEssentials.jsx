import React, { useEffect, useState } from 'react';
import '../Pages/DailyEssentials.css';

const DaliyEssentials = () => {
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0); // first active on load

  useEffect(() => {
    setCategories([
      { id: 1, title: "Daily Essentials", discount: "50%", img: "https://vignette.wikia.nocookie.net/cookingmama/images/c/c2/I_shopping_basket.png" },
      { id: 2, title: "Vegetables", discount: "50%", img: "https://www.pngall.com/wp-content/uploads/12/Vegetable-Paper-Bag-PNG-Images.png" },
      { id: 3, title: "Fruits", discount: "50%", img: "https://www.pngall.com/wp-content/uploads/2016/03/Fruit-PNG-Image.png" },
      { id: 4, title: "Strawberry", discount: "50%", img: "https://www.pngall.com/wp-content/uploads/2016/05/Strawberry-PNG-Images.png" },
      { id: 5, title: "Mango", discount: "50%", img: "https://www.pngall.com/wp-content/uploads/2016/04/Mango-PNG-File.png" },
      { id: 6, title: "Cherry", discount: "50%", img: "https://www.pngall.com/wp-content/uploads/2016/05/Cherry-PNG-Image.png" },
    ]);
  }, []);

  return (
    <div className="essentials-container">
      <div className="essentials-header">
        <h2>Daily <span className="highlight">Essentials</span></h2>
        <a href="#" className="view-all-btn">View All ›</a>
      </div>

      <div className="essentials-grid">
        {categories.map((item, index) => (
          <div
            key={item.id}
            className={`essential-card ${activeIndex === index ? 'active-card' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="image-box">
              <img src={item.img} alt={item.title} />
            </div>
            <p className="category-name">{item.title}</p>
            <h4 className="discount-tag">UP to {item.discount} OFF</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaliyEssentials;


