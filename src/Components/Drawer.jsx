import React, { useContext, useEffect, useState } from "react";
import "../Components/Drawer.css";
import {
  FaHome,
  FaSearch,
  FaStar,
  FaQuestionCircle,
  FaClock,
  FaBell,
  FaTimes,
  FaUserCircle,
  FaStore,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Drawer = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const userType = localStorage.getItem("userType"); // individual | store
  const [shop, setShop] = useState(null);

  // 🔁 Drawer open hone par fresh data
  useEffect(() => {
    const storedShop = localStorage.getItem("myShop");
    if (storedShop) {
      setShop(JSON.parse(storedShop));
    } else {
      setShop(null);
    }
  }, [isOpen, userType]);

  const navigateAndClose = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("userType");
    localStorage.removeItem("myShop");
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <div className={`drawer-wrapper ${isOpen ? "open" : ""}`}>
      <nav className="sidebar">

        {/* PROFILE SECTION */}
        <div className="profile-section">
          {user?.photoURL ? (
            <img src={user.photoURL} alt="Profile" className="profile-image" />
          ) : (
            <FaUserCircle className="profile-icon" />
          )}

          <div className="profile-info">
            <h3>{user ? user.fullName : "Guest User"}</h3>
            <p>{user ? user.email : "No email"}</p>

            {/* 🏪 STORE MODE */}
            {userType === "store" && shop && (
              <div className="individual-badge">
                <FaStore className="badge-icon" />
                {shop.shopName}
              </div>
            )}

            {/* 👤 INDIVIDUAL MODE */}
            {userType === "individual" && (
              <div className="individual-badge">
                <FaUser className="badge-icon" />
                Individual User
              </div>
            )}
          </div>

          <FaTimes
            className="close-btn"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* MENU */}
        <ul className="menu">
          <li onClick={() => navigateAndClose("/")}>
            <FaHome /> Home
          </li>
          <li onClick={() => navigateAndClose("/search")}>
            <FaSearch /> Chart
          </li>
          <li onClick={() => navigateAndClose("/favorites")}>
            <FaStar /> Favorites
          </li>
          <li onClick={() => navigateAndClose("/help")}>
            <FaQuestionCircle /> Help
          </li>
          <li onClick={() => navigateAndClose("/history")}>
            <FaClock /> History
          </li>
          <li onClick={() => navigateAndClose("/notifications")}>
            <FaBell /> Notifications
          </li>

          {/* CREATE STORE (sirf individual me) */}
          {userType === "individual" && (
            <li onClick={() => navigateAndClose("/create-store")}>
              <FaStore /> Create Store
            </li>
          )}

          {/* MY STORE (sirf store me) */}
          {userType === "store" && (
            <li onClick={() => navigateAndClose("/my-store")}>
              <FaStore /> My Store
            </li>
          )}

          {user && (
            <li onClick={handleLogout}>
              <FaUserCircle /> Logout
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Drawer;



















