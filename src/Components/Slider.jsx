import React, { useState, useEffect } from 'react';
import './Slider.css';

// 🔹 Local Images Import
import watch1 from '../assets/watch1.png';
import watch2 from '../assets/watch2.png';
import watch3 from '../assets/watch3.png';
import airpods from '../assets/airpods.png';
import iphone17 from '../assets/iphone17.png';

const slides = [
  {
    id: 1,
    title: "SMART WEARABLE.",
    subtitle: "Best Deal Online on smart watches",
    offer: "UP TO 80% OFF",
    image: watch1,
  },
  {
    id: 2,
    title: "NEW ARRIVALS.",
    subtitle: "Check out the latest tech",
    offer: "FLAT 50% OFF",
    image: watch2,
  },
   {
    id: 3,
    title: "NEW ARRIVALS.",
    subtitle: "Check out the latest tech",
    offer: "FLAT 50% OFF",
    image: watch3,
  },
  {
  id: 4,
  title: "AIRPODS COLLECTION.",
  subtitle: "Experience wireless freedom",
  offer: "FLAT 20% OFF",
  image: airpods, // Make sure aap ne 'airpods' image import kar li ho
},
{
  id: 5,
  title: "IPHONE 17",
  subtitle: "Next-Gen iPhone Experience",
  offer: "UP TO 15% OFF",
  image: iphone17,
}
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="main-container">
      <div className="carousel-wrapper">

        {/* Navigation Buttons */}
        <button className="nav-btn prev" onClick={prevSlide}>❮</button>
        <button className="nav-btn next" onClick={nextSlide}>❯</button>

        {/* Slide Content */}
        <div className="slide-content">
          <div className="text-section">
            <p className="subtitle">{slides[currentIndex].subtitle}</p>
            <h1 className="main-title">{slides[currentIndex].title}</h1>
            <p className="offer-text">{slides[currentIndex].offer}</p>

            {/* Dots Indicator */}
            <div className="dots-container">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                ></span>
              ))}
            </div>
          </div>

          <div className="image-section">
            
            <img
              src={slides[currentIndex].image}
              alt="Smart Watch"
              className="watch-img"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Slider;









