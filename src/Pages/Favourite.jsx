import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import "../Pages/Favourite.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Favourite = () => {
  const [items, setItems] = useState([]);
  const [favourites, setFavourites] = useState([]);

  // API se data fetch karna
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  // Favourite toggle karna
  const toggleFavourite = (item) => {
    if (favourites.includes(item.id)) {
      setFavourites(favourites.filter((id) => id !== item.id));
    } else {
      setFavourites([...favourites, item.id]);
    }
  };

  return (
    <div>
        <Header />
    <div className="favourite-screen">
      <h1>Favourite Items ❤️</h1>
      <div className="items-container">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button
              className={`fav-btn ${favourites.includes(item.id) ? "active" : ""}`}
              onClick={() => toggleFavourite(item)}
            >
              <FaHeart />
            </button>
          </div>
        ))}
      </div>
    </div>
    <div>
        <Footer />
    </div>
    </div>
  );
};

export default Favourite;
