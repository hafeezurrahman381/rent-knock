import React, { useContext, useState } from "react";
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
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Drawer = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [showStoreOptions, setShowStoreOptions] = useState(false);

  const navigateAndClose = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout && logout();
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    setIsOpen(false);
    window.dispatchEvent(new Event("storage"));
    navigate("/login");
  };

  const handleStoreOption = (type) => {
    if (!user) {
      navigateAndClose("/login"); // agar login nahi hai to login page
    } else {
      // Save user type
      localStorage.setItem("userType", type);
      if (user) user.userType = type;

      if (type === "individual") {
        navigateAndClose("/individual");
      } else if (type === "shop") {
        navigateAndClose("/create-shop");
      }
    }
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
            {user?.userType && (
              <span className={`user-type ${user.userType}`}>
                {user.userType === "individual" ? "Individual" : "Shop Owner"}
              </span>
            )}
          </div>

          <FaTimes className="close-btn" onClick={() => setIsOpen(false)} />
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
          <li onClick={() => navigateAndClose("/dashboard")}>
            <FaBell /> Dashboard
          </li>
       

          {/* LOGOUT */}
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























