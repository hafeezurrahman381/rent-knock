import React from "react";
import { FaShoppingCart, FaMoneyBillWave, FaUsers, FaStore } from "react-icons/fa";
import "./DashboardStats.css";

const stats = [
  {
    title: "Total Orders",
    value: "1,248",
    icon: <FaShoppingCart />,
  },
  {
    title: "Total Earnings",
    value: "Rs 245,000",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Customers",
    value: "860",
    icon: <FaUsers />,
  },
  {
    title: "Active Shops",
    value: "32",
    icon: <FaStore />,
  },
];

const DashboardStats = () => {
  return (
    <div className="rk-stats">
      {stats.map((item, index) => (
        <div className="rk-stat-card" key={index}>
          <div className="rk-stat-icon">{item.icon}</div>
          <div className="rk-stat-info">
            <h4>{item.title}</h4>
            <p>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
