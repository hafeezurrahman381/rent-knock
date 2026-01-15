import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../Components/ElectronicSlider.css';

const ElectronicSlider = () => {
  const [brands] = useState([
    {
      id: 1,
      name: 'Samsung',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
      productImage: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
      discount: '70%'
    },
    {
      id: 2,
      name: 'Apple',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      productImage: 'https://images.pexels.com/photos/5082586/pexels-photo-5082586.jpeg',
      discount: '60%'
    },
    {
      id: 3,
      name: 'Sony',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.svg',
      productImage: 'https://images.pexels.com/photos/276916/pexels-photo-276916.jpeg',
      discount: '50%'
    },
    {
      id: 4,
      name: 'LG',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/LG_logo_%282015%29.svg',
      productImage: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
      discount: '65%'
    },
    {
      id: 5,
      name: 'Huawei',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Huawei_logo.svg',
      productImage: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
      discount: '55%'
    },
    {
      id: 6,
      name: 'Xiaomi',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg',
      productImage: 'https://images.pexels.com/photos/5077043/pexels-photo-5077043.jpeg',
      discount: '50%'
    },
    {
      id: 7,
      name: 'OnePlus',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/OnePlus_logo.svg',
      productImage: 'https://images.pexels.com/photos/4042806/pexels-photo-4042806.jpeg',
      discount: '45%'
    },
    {
      id: 8,
      name: 'Realme',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Realme_logo.svg',
      productImage: 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg',
      discount: '55%'
    },
    {
      id: 9,
      name: 'Motorola',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Motorola_2021_logo.svg',
      productImage: 'https://images.pexels.com/photos/5077049/pexels-photo-5077049.jpeg',
      discount: '40%'
    },
  ]);

  return (
    <div className="slider-container">
      <div className="slider-header">
        <h2>Top <span>Electronics Brands</span></h2>
        <a href="#view-all" className="view-all">View All ›</a>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="brand-card transparent-card">
              <div className="card-content">
                <span className="brand-tag">{brand.name}</span>
                <div className="brand-logo">
                  <img src={brand.logoUrl} alt={brand.name} />
                </div>
                <h3 className="discount-text">UP to {brand.discount} OFF</h3>
              </div>
              <div className="product-image">
                <img src={brand.productImage} alt="Product" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ElectronicSlider;
