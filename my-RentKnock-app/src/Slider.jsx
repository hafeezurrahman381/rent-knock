import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);

  // 🔹 API se data lana (GET ALL)
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        // sirf kuch products slider ke liye
        const sliderData = data.products.slice(0, 5).map(item => ({
          tagline: item.brand,
          title: item.title,
          discount: `UP to ${item.discountPercentage}% OFF`,
          img: item.thumbnail
        }));
        setSlides(sliderData);
      });
  }, []);

  // 🔹 Auto slide
  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides]);

  if (slides.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Loading Slider...</h2>;
  }

  return (
    <div className="banner-wrapper">
      <button className="nav-btn left-btn"
        onClick={() =>
          setIndex(index === 0 ? slides.length - 1 : index - 1)
        }
      >
        &#8249;
      </button>

      <div className="banner-content">
        <div className="text-container">
          <p className="top-tagline">{slides[index].tagline}</p>
          <h1 className="main-heading">{slides[index].title}</h1>
          <h3 className="discount-text">{slides[index].discount}</h3>

          <div className="pagination-dots">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              ></span>
            ))}
          </div>
        </div>

        <div className="image-container">
          <div className="circle-bg"></div>
          <img
            src={slides[index].img}
            alt="Product"
            className="product-img"
          />
        </div>
      </div>

      <button className="nav-btn right-btn"
        onClick={() => setIndex((index + 1) % slides.length)}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Slider;





