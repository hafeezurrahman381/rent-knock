import { useState } from "react";
import "../Components/NavBar.css";
import logo from "../assets/logo.jpg";
import { FaSearch, FaUser, FaShoppingCart, FaSlidersH } from "react-icons/fa";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";
import categories from "../CategoriesData";

function NavBar({ currentUser }) {
  const [search, setSearch] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  // DARAZ STYLE FILTER
  const filteredCategories = categories
    .map(cat => {
      const matchedSubs = cat.subCategories.filter(sub =>
        sub.toLowerCase().includes(search.toLowerCase())
      );

      if (
        cat.name.toLowerCase().includes(search.toLowerCase()) ||
        matchedSubs.length > 0
      ) {
        return { ...cat, subCategories: matchedSubs };
      }
      return null;
    })
    .filter(Boolean);

  // category open / close
  const handleCategoryClick = (name) => {
    setOpenCategory(prev => (prev === name ? null : name));
  };

  // subcategory select
  const handleSubClick = (value) => {
    setSearch(value);
    setShowResults(false);
    setOpenCategory(null);
  };

  return (
    <>
      <div className="Navbar">

   <div
  className="icon-box-90"
  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
  >
  <span className="line"></span>
  <span className="line"></span>
  <span className="line short"></span>
  </div>



        <img src={logo} className="logo" alt="Logo" />

        {/* SEARCH BAR */}
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

          {/* DARAZ STYLE DROPDOWN */}
          {showResults && search && (
            <div className="search-results">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat, index) => (
                  <div key={index} className="search-category">

                    {/* CATEGORY CLICK */}
                    <strong
                      onClick={() => handleCategoryClick(cat.name)}
                      style={{ cursor: "pointer" }}
                    >
                      {cat.name}
                    </strong>

                    {/* SUBCATEGORIES OPEN */}
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

        {/* RIGHT SIDE */}
        <div className="nav-right">
          <div className="nav-icons">
            <FaUser className="nav-1" />
            <div className="auth-links">
              {!currentUser ? (
                <>
                  <Link to="/signup" className="signup-link">Sign Up</Link>
                  <span> / </span>
                  <Link to="/login" className="login-link">Login</Link>
                </>
              ) : (
                <span>Welcome, {currentUser.fullName}</span>
              )}
            </div>
            <span className="v-line">|</span>
          </div>

          <div className="nav-icons-2">
            <FaShoppingCart className="nav-2" /> Cart
          </div>
        </div>
      </div>

      {/* DRAWER */}
      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} user={currentUser} />
    </>
  );
}

export default NavBar;








