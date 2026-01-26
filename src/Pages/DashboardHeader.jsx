import React from "react";
import "./DashboardHeader.css";
import { FaSearch, FaBell } from "react-icons/fa";

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">

      {/* LEFT TITLE */}
      <h2 className="dashboard-title">Dashboard</h2>

      {/* RIGHT SECTION */}
      <div className="dashboard-right">

        {/* Search */}
   <div className="search-wrapper">
    <input type="text" placeholder="Search..." className="search-input" />
    <FaSearch className="search-icon" />
  </div>

  <div className="notification-wrapper">
    <FaBell className="notification-icon" />
    <span className="notification-badge">5</span>
  </div>

        {/* User Profile */}
        <div className="user-profile">
          <img
            src="https://i.pravatar.cc/50"
            alt="user"
            className="user-avatar"
          />
          <span className="user-name">Rafael Williams</span>
        </div>

      </div>
    </div>
  );
};

export default DashboardHeader;

