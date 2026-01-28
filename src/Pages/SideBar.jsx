import React, { useState } from "react";
import logo1 from "../assets/logo1.jpg";
import {
  FaHome,
  FaHeart,
  FaStore,
  FaHistory,
  FaQuestionCircle,
  FaHeadset,
  FaPhoneAlt,
  FaBoxOpen,
  FaCreditCard,
  FaUndoAlt,
} from "react-icons/fa";
import "./SideBar.css";
import { NavLink } from "react-router-dom";

function SideBar({ open, setOpen }) {
  const [helpHover, setHelpHover] = useState(false);

  return (
    <div className={`rk-sidebar ${open ? "rk-open" : ""}`}>
      
      {/* Header */}
      <div className="rk-header">
        <img src={logo1} alt="logo" className="rk-logo" />
        {open && <span className="rk-title">RentKnow</span>}
      </div>

      {/* Menu */}
      <ul className="rk-menu">

        <li className="rk-item">
          <NavLink to="/dashboard" className={({ isActive }) => `rk-link ${isActive ? "rk-active" : ""}`}>
            <FaHome />
            {open && <span>Dashboard</span>}
          </NavLink>
        </li>

        <li className="rk-item">
          <NavLink to="/favourite" className={({ isActive }) => `rk-link ${isActive ? "rk-active" : ""}`}>
            <FaHeart />
            {open && <span>Favourite</span>}
          </NavLink>
        </li>

        <li className="rk-item rk-create">
          <NavLink to="/createshop" className={({ isActive }) => `rk-link ${isActive ? "rk-active" : ""}`}>
            <FaStore />
            {open && <span>Create Shop</span>}
          </NavLink>
        </li>

        <li className="rk-item">
          <NavLink to="/history" className={({ isActive }) => `rk-link ${isActive ? "rk-active" : ""}`}>
            <FaHistory />
            {open && <span>History</span>}
          </NavLink>
        </li>

        {/* ===== HELP MENU WITH HOVER DROPDOWN ===== */}
        <li
          className="rk-item help-menu"
          onMouseEnter={() => setHelpHover(true)}
          onMouseLeave={() => setHelpHover(false)}
        >
          <NavLink to="/help" className={({ isActive }) => `rk-link ${isActive ? "rk-active" : ""}`}>
            <FaQuestionCircle />
            {open && <span>Help & Support</span>}
          </NavLink>

          {/* Dropdown Sub Menu */}
          <ul className={`help-dropdown ${helpHover ? "show" : ""}`}>
            <li>
              <NavLink to="/helpcenter">
                <FaHeadset />
                <span>Help Center</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/customer-care">
                <FaPhoneAlt />
                <span>Customer Care</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/orders">
                <FaBoxOpen />
                <span>Orders</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/payments">
                <FaCreditCard />
                <span>Payments</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/returns">
                <FaUndoAlt />
                <span>Returns & Refunds</span>
              </NavLink>
            </li>
          </ul>
        </li>

      </ul>
    </div>
  );
}

export default SideBar;








