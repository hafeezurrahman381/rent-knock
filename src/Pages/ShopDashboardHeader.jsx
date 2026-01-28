import React, { useState, useEffect } from "react";
import {
  MdSearch,
  MdNotificationsNone,
  MdInfoOutline,
  MdColorLens,
  MdMenu
} from "react-icons/md";
import { useLocation } from "react-router-dom";
import "./ShopDashboardHeader.css";
import avatar from "../assets/avatar.png";

const ShopDashboardHeader = ({ sidebarOpen, setSidebarOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Page Title
  const getPageTitle = () => {
    const path = location.pathname.split("/").pop();
    if (!path || path === "dashboard") return "Shop Dashboard";
    return path.replace("-", " ").replace(/\b\w/g, c => c.toUpperCase());
  };

  return (
    <div className={`rk-shop-header ${scrolled ? "rk-scrolled" : ""}`}>

      {/* LEFT */}
      <div className="rk-shop-left">
        <button
          className="rk-shop-toggle-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <MdMenu />
        </button>

        <h2 className="rk-shop-title">{getPageTitle()}</h2>
      </div>

      {/* CENTER SEARCH */}
      <div className="rk-shop-search-box">
        <MdSearch className="rk-shop-search-icon" />
        <input
          type="text"
          placeholder="Search products, orders, customers..."
        />
      </div>

      {/* RIGHT */}
      <div className="rk-shop-right">
        <button className="rk-shop-btn" title="Notifications">
          <MdNotificationsNone />
          <span className="rk-shop-dot"></span>
        </button>

        <button className="rk-shop-btn" title="Info">
          <MdInfoOutline />
        </button>

        <button className="rk-shop-btn" title="Theme">
          <MdColorLens />
        </button>

        <button className="rk-shop-avatar-btn">
          <img src={avatar} alt="User" className="rk-shop-avatar" />
        </button>
      </div>

    </div>
  );
};

export default ShopDashboardHeader;

