import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import logo from "./assets/logo.jpg";
import { FaSearch, FaUser, FaShoppingCart, FaSlidersH } from "react-icons/fa";
import categories from "./CategoriesData";

function NavBar({ currentUser }) {
  const [search, setSearch] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="Navbar">
        <div className="icon-box" onClick={() => setIsDrawerOpen(true)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line short"></span>
        </div>

        <img src={logo} alt="Logo" className="logo" />

        <div className="nav-right">
          <div className="nav-icons">
            <FaUser className="nav-1" />
            <div className="auth-links">
              {!currentUser ? (
                <>
                  <Link to="/signup">Sign Up</Link> / <Link to="/login">Login</Link>
                </>
              ) : (
                <span>Welcome, {currentUser.fullName}</span>
              )}
            </div>
          </div>

          <div className="nav-icons-2">
            <FaShoppingCart className="nav-2" /> Cart
          </div>
        </div>
      </div>

      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} user={currentUser} />
    </>
  );
}

export default NavBar;



