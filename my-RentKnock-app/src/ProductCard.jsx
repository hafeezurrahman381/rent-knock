import { useState } from "react";
import "./ProductCard.css";

function ProductCard() {
  const products = [
    {
      id: 1,
      name: "Galaxy S23 Ultra",
      price: "₹32999",
      oldPrice: "₹74999",
      save: "₹42000",
      discount: "56% OFF",
      img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
    },
    {
      id: 2,
      name: "Galaxy M13 (4GB | 64GB)",
      price: "₹10499",
      oldPrice: "₹14999",
      save: "₹4500",
      discount: "30% OFF",
      img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg"
    },
    {
      id: 3,
      name: "Galaxy M33 5G",
      price: "₹15999",
      oldPrice: "₹24999",
      save: "₹9000",
      discount: "36% OFF",
      img: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg"
    },
    {
      id: 4,
      name: "Galaxy A14 5G",
      price: "₹13999",
      oldPrice: "₹18999",
      save: "₹5000",
      discount: "26% OFF",
      img: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg"
    },
    {
      id: 5,
      name: "Galaxy S22 Ultra",
      price: "₹67999",
      oldPrice: "₹85999",
      save: "₹18000",
      discount: "21% OFF",
      img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg"
    }
  ];

  // 🔥 First card default active
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="smartphones-box">
      {/* Header */}
      <div className="para-bar">
        <p>
          Grab the best deal on <span>Smartphones</span>
        </p>
        <a href="#">View All ›</a>
      </div>

      {/* Cards */}
      <div className="cards-row">
        {products.map((item, index) => (
          <div
            key={item.id}
            className={`card ${activeCard === index ? "active" : ""}`}
            onClick={() => setActiveCard(index)}
          >
            <div className="off-badge">{item.discount}</div>

            <img src={item.img} alt={item.name} />

            <h4>{item.name}</h4>

            <div className="price">
              {item.price}
              <span>{item.oldPrice}</span>
            </div>

            <p className="save">Save {item.save}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;


