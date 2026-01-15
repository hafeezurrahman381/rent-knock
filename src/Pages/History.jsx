import React from "react";
import { FaBoxOpen, FaCheckCircle, FaClock } from "react-icons/fa";
import "../Pages/History.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const historyList = [
  {
    id: 1,
    orderId: "#ORD-10234",
    title: "Wireless Headphones",
    date: "01 Jan 2026",
    price: "Rs. 4,500",
    status: "Delivered",
  },
  {
    id: 2,
    orderId: "#ORD-10211",
    title: "Smart Watch",
    date: "28 Dec 2025",
    price: "Rs. 7,200",
    status: "Pending",
  },
  {
    id: 3,
    orderId: "#ORD-10198",
    title: "Mobile Cover",
    date: "25 Dec 2025",
    price: "Rs. 850",
    status: "Delivered",
  },
];

const History = () => {
  return (
    <div>
      <Header />
    
    <div className="history-page">
      <h2 className="page-title">My Orders</h2>

      {historyList.map((item) => (
        <div className="order-card" key={item.id}>
          <div className="order-left">
            <div className="icon-box">
              <FaBoxOpen />
            </div>
            <div>
              <p className="order-id">{item.orderId}</p>
              <h4 className="order-title">{item.title}</h4>
              <p className="order-date">{item.date}</p>
            </div>
          </div>

          <div className="order-right">
            <p className="order-price">{item.price}</p>

            {item.status === "Delivered" ? (
              <span className="status delivered">
                <FaCheckCircle /> Delivered
              </span>
            ) : (
              <span className="status pending">
                <FaClock /> Pending
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
    <div>
        <Footer />
    </div>
    </div>
  );
};

export default History;
