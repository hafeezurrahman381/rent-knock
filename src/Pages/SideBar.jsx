import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaQuestionCircle,
  FaHeart,
  FaHistory,
  FaChartBar,
  FaBell,
  FaStore,
  FaBook,
  FaBookOpen,
} from "react-icons/fa";
import "./SideBar.css";


const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "Help", icon: <FaQuestionCircle />, path: "/help" },
    { name: "Favourite", icon: <FaHeart />, path: "/favourite" },
    { name: "History", icon: <FaHistory />, path: "/history" },
    { name: "Charts", icon: <FaChartBar />, path: "/charts" },
    { name: "Notification", icon: <FaBell />, path: "/notification" },
    { name: "Create Shop", icon: <FaStore />, path: "/create-shop", special: true },
  ];

  return (
    <div>
    
    
    <div className={isOpen ? "rk-sidebar rk-open" : "rk-sidebar"}>
      {/* Header */}
      <div className="rk-header">
        
        {isOpen && <h2 className="rk-title">Rentknow</h2>}

        {/* BOOK TOGGLE */}
        <button
          className={`rk-book-toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="rk-book-icon">
            {isOpen ? <FaBookOpen /> : <FaBook />}
          </span>
        </button>
      </div>

      {/* Menu */}
      <ul className="rk-menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`rk-item ${item.special ? "rk-create" : ""} ${
              activeItem === item.path ? "rk-active" : ""
            }`}
          >
            <Link
              to={item.path}
              onClick={() => setActiveItem(item.path)}
              className="rk-link"
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default SideBar;







