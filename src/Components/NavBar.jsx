import React, { useState, useEffect } from "react";
import "../Components/NavBar.css";
import logo from "../assets/logo.jpg";
import { FaSearch, FaUser, FaShoppingCart, FaSlidersH, FaSignOutAlt } from "react-icons/fa";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";
import categories from "../CategoriesData";

function NavBar({ currentUser }) {
  const [search, setSearch] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [showLogout, setShowLogout] = useState(false);
  const [user, setUser] = useState(null);

  const updateUser = () => {
    try {
      const storedUser = localStorage.getItem("currentUser");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    updateUser();
    window.addEventListener("userLogin", updateUser);
    window.addEventListener("storage", updateUser);
    return () => {
      window.removeEventListener("userLogin", updateUser);
      window.removeEventListener("storage", updateUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setShowLogout(false);
    window.dispatchEvent(new Event("userLogin"));
  };

  const filteredCategories = categories
    .map((cat) => {
      const matchedSubs = cat.subCategories.filter((sub) =>
        sub.toLowerCase().includes(search.toLowerCase())
      );
      if (cat.name.toLowerCase().includes(search.toLowerCase()) || matchedSubs.length > 0) {
        return { ...cat, subCategories: matchedSubs };
      }
      return null;
    })
    .filter(Boolean);

  const handleCategoryClick = (name) => {
    setOpenCategory((prev) => (prev === name ? null : name));
  };

  const handleSubClick = (value) => {
    setSearch(value);
    setShowResults(false);
    setOpenCategory(null);
  };

  return (
    <>
      <div className="Navbar">
        <div className="icon-box-90" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line short"></span>
        </div>

        <img src={logo} className="logo" alt="Logo" />

        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search essentials, groceries and more..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowResults(true);
            }}
            onFocus={() => search && setShowResults(true)}
          />
          <FaSlidersH className="filter-icon" />

          {showResults && search && (
            <div className="search-results">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat, index) => (
                  <div key={index} className="search-category">
                    <strong
                      onClick={() => handleCategoryClick(cat.name)}
                      style={{ cursor: "pointer" }}
                    >
                      {cat.name}
                    </strong>
                    {openCategory === cat.name &&
                      cat.subCategories.map((sub, i) => (
                        <p
                          key={i}
                          className="search-sub"
                          onClick={() => handleSubClick(sub)}
                        >
                          {sub}
                        </p>
                      ))}
                  </div>
                ))
              ) : (
                <p className="no-result">No results found</p>
              )}
            </div>
          )}
        </div>

        <div className="nav-right">
          <div className="nav-icons">
            {user ? (
              <div style={{ position: "relative" }}>
                {/* ✅ UPDATED USER UI ONLY */}
                <span
                  className="user-info"
                  onClick={() => setShowLogout(!showLogout)}
                >
                  <span className="user-avatar">
                    <FaUser />
                  </span>
                  <span className="user-name">
                    {user.fullName}
                  </span>
                </span>

                {showLogout && (
                  <div
                    className="logout-dropdown"
                    onClick={handleLogout}
                    style={{
                      position: "absolute",
                      top: "100%",
                      right: 0,
                      background: "white",
                      padding: "10px",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                      cursor: "pointer",
                      zIndex: 100,
                      color: "black",
                    }}
                  >
                    <FaSignOutAlt /> Logout
                  </div>
                )}
              </div>
            ) : (
              <div className="auth-links">
                <Link to="/signup" className="signup-link">Sign Up</Link>
                <span> / </span>
                <Link to="/login" className="login-link">Login</Link>
              </div>
            )}
            <span className="v-line">|</span>
          </div>

          <div className="nav-icons-2">
            <FaShoppingCart className="nav-2" />
            Cart
          </div>
        </div>
      </div>

      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} user={user} />
    </>
  );
}

export default NavBar;



