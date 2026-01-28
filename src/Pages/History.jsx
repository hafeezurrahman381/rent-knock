import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBoxOpen, FaCheckCircle, FaClock, FaSearch, FaChevronRight, FaFilter, FaCalendarAlt } from "react-icons/fa";
import "../Pages/History.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const historyList = [
  {
    id: 1,
    orderId: "RK-2026-10234",
    title: "Premium Wireless Headphones",
    date: "01 Jan 2026",
    price: "Rs. 8,499",
    status: "Delivered",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80",
  },
  {
    id: 2,
    orderId: "RK-2025-10211",
    title: "Luxury Smart Watch v2",
    date: "28 Dec 2025",
    price: "Rs. 12,999",
    status: "Pending",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&q=80",
  },
  {
    id: 3,
    orderId: "RK-2025-10198",
    title: "Mechanical Gaming Keyboard",
    date: "25 Dec 2025",
    price: "Rs. 6,999",
    status: "Delivered",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=100&q=80",
  },
  {
    id: 4,
    orderId: "RK-2025-10185",
    title: "Ergonomic Office Chair",
    date: "20 Dec 2025",
    price: "Rs. 15,499",
    status: "Shipped",
    image: "https://images.unsplash.com/photo-1505797149-43b0000ee40e?w=100&q=80",
  },
  {
    id: 5,
    orderId: "RK-2025-10172",
    title: "Modern Minimalist Lamp",
    date: "15 Dec 2025",
    price: "Rs. 2,499",
    status: "Delivered",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=100&q=80",
  },
];

const History = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredHistory = useMemo(() => {
    return historyList.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.orderId.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filterStatus === "All" || item.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filterStatus]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="history-page-wrapper">
      <Header />

      <main className="history-main">
        <div className="history-hero">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="history-hero-content"
          >
            <span className="history-badge">Track Records</span>
            <h1>Order History</h1>
            <p>Review all your past purchases and track current shipments.</p>
          </motion.div>
        </div>

        <div className="history-control-bar">
          <div className="search-box-modern">
            <FaSearch />
            <input
              type="text"
              placeholder="Search by Order ID or Product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-group-modern">
            <FaFilter className="filter-icon" />
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="All">All statuses</option>
              <option value="Delivered">Delivered</option>
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
            </select>
          </div>
        </div>

        <section className="history-list-container">
          <AnimatePresence mode="popLayout">
            {filteredHistory.length > 0 ? (
              <motion.div
                key="grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="history-card-grid"
              >
                {filteredHistory.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    layout
                    className="history-modern-grid-card"
                  >
                    <div className="history-card-top">
                      <div className="history-card-image">
                        <img src={item.image} alt={item.title} />
                        <div className={`status-badge-overlay ${item.status.toLowerCase()}`}>
                          {item.status}
                        </div>
                      </div>
                    </div>

                    <div className="history-card-body">
                      <div className="order-main-info">
                        <span className="order-serial">{item.orderId}</span>
                        <h3>{item.title}</h3>
                        <div className="order-date-item">
                          <FaCalendarAlt /> {item.date}
                        </div>
                      </div>

                      <div className="history-card-bottom">
                        <div className="order-price-bold">{item.price}</div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="order-details-btn"
                        >
                          View Details
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
                className="history-empty"
              >
                <div className="empty-history-icon"><FaBoxOpen /></div>
                <h3>No History Found</h3>
                <p>We couldn't find any orders matching your search or filters.</p>
                <button onClick={() => { setSearchQuery(""); setFilterStatus("All"); }} className="reset-history-btn">
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default History;

