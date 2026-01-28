import React from "react";
import { FaBars, FaSearch, FaBell, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./DashboardHeader.css";
import avatar from "../assets/avatar.png"; // <-- add your avatar image here

const DashboardHeader = ({ open, setOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="rk-top-header">
      {/* LEFT */}
      <div className="rk-header-left">
        <button className="rk-toggle-btn" onClick={() => setOpen(!open)}>
          <FaBars />
        </button>
        <div className="rk-search-box">
          <FaSearch className="rk-search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      {/* RIGHT */}
      <div className="rk-header-right">
        <button
          className="rk-header-btn"
          onClick={() => navigate("/messages")}
          title="Messages"
        >
          <FaEnvelope />
          <span className="rk-dot"></span>
        </button>

        <button
          className="rk-header-btn"
          onClick={() => navigate("/notifications")}
          title="Notifications"
        >
          <FaBell />
          <span className="rk-dot"></span>
        </button>

        <button
          className="rk-header-btn rk-avatar-btn"
          onClick={() => navigate("/profile")}
          title="Profile"
        >
          <img src={avatar} alt="User Avatar" className="rk-avatar" />
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
