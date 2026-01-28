import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaTrash, FaShoppingCart, FaArrowRight, FaStore, FaSearch } from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Favourite.css";

const productsData = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: "Rs. 8,499",
    category: "Electronics",
    description: "High-fidelity sound with noise cancellation technology.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  },
  {
    id: 2,
    name: "Luxury Smart Watch v2",
    price: "Rs. 12,999",
    category: "Wearables",
    description: "Track your fitness and stay connected in style.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
  },
  {
    id: 3,
    name: "Modern Home Speaker",
    price: "Rs. 4,799",
    category: "Audio",
    description: "Fill your room with crystal clear 360-degree sound.",
    image: "https://images.unsplash.com/photo-1589003020619-47a69bc4348a?w=500&q=80",
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    price: "Rs. 15,499",
    category: "Furniture",
    description: "Work in comfort with lumbar support and breathable mesh.",
    image: "https://images.unsplash.com/photo-1505797149-43b0000ee40e?w=500&q=80",
  },
  {
    id: 5,
    name: "Mechanical Gaming Keyboard",
    price: "Rs. 6,999",
    category: "Gaming",
    description: "RGB lighting and tactile switches for a superior edge.",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80",
  },
  {
    id: 6,
    name: "Professional DSLR Camera",
    price: "Rs. 85,999",
    category: "Photography",
    description: "Capture stunning moments with ultra-sharp resolution.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
  },
  {
    id: 7,
    name: "Modern Minimalist Lamp",
    price: "Rs. 2,499",
    category: "Decor",
    description: "Warm lighting to match your cozy workspace or bedroom.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
  },
  {
    id: 8,
    name: "Compact Coffee Maker",
    price: "Rs. 9,499",
    category: "Kitchen",
    description: "Freshly brewed espresso in minutes, every single morning.",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&q=80",
  },
  {
    id: 9,
    name: "Leather Laptop Sleeve",
    price: "Rs. 1,999",
    category: "Accessories",
    description: "Elegant protection for your most used work companion.",
    image: "https://images.unsplash.com/photo-1512496011981-d6b0cece7e7a?w=500&q=80",
  },
  {
    id: 10,
    name: "Ultra-thin Power Bank",
    price: "Rs. 3,299",
    category: "Tech",
    description: "Charge on the go with high-capacity 20000mAh battery.",
    image: "https://images.unsplash.com/photo-1609091839311-d536819bc148?w=500&q=80",
  },
];

const Favourite = () => {
  // Initializing with mock data to show the design
  const [favouriteItems, setFavouriteItems] = useState(productsData);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return favouriteItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [favouriteItems, searchQuery]);

  const removeItem = (id) => {
    setFavouriteItems(favouriteItems.filter(item => item.id !== id));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
  };

  return (
    <div className="fav-page-wrapper">
      <Header />

      <main className="fav-main-content">
        <div className="fav-hero-section">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fav-header-info"
          >
            <div className="fav-badge">My Collection</div>
            <h1>Your Favourites</h1>
            <p>A curated list of products you loved the most.</p>

            {/* SEARCH BAR */}
            <div className="fav-search-container">
              <div className="fav-search-wrapper">
                <FaSearch className="fav-search-icon" />
                <input
                  type="text"
                  placeholder="Search your favourites..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="fav-search-input"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="fav-section-container">
          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              <motion.div
                key="grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="fav-premium-grid"
              >
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={cardVariants}
                    layout
                    className="fav-modern-card"
                  >
                    <div className="fav-card-image-box">
                      <img src={item.image} alt={item.name} />
                      <div className="fav-card-overlay">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="fav-action-btn remove"
                          onClick={() => removeItem(item.id)}
                          title="Remove from favourites"
                        >
                          <FaTrash />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="fav-action-btn add"
                        >
                          <FaShoppingCart />
                        </motion.button>
                      </div>
                      <div className="fav-category-tag">{item.category}</div>
                    </div>

                    <div className="fav-card-details">
                      <h3>{item.name}</h3>
                      <p className="fav-card-desc">{item.description}</p>
                      <div className="fav-card-footer">
                        <span className="fav-price-tag">{item.price}</span>
                        <motion.button
                          className="fav-view-btn"
                          whileHover={{ x: 5 }}
                        >
                          View Details <FaArrowRight />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fav-empty-state"
              >
                <div className="empty-icon-box">
                  <FaHeart className="empty-heart-icon" />
                </div>
                <h2>{searchQuery ? "No matches found" : "Your wishlist is empty"}</h2>
                <p>
                  {searchQuery
                    ? "Try searching for something else or clear the search bar."
                    : "Start exploring our latest products and save them for later!"}
                </p>
                {!searchQuery && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="start-shopping-btn"
                  >
                    <FaStore /> Start Shopping
                  </motion.button>
                )}
                {searchQuery && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="clear-search-btn"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear Search
                  </motion.button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Favourite;

