import { Link, NavLink, useLocation } from "react-router-dom";
import { FaCartPlus, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import NBCLogo from "../assets/nbc-logo.png";
import "../styles/Navbar.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Navbar() {
  const count = useSelector((state) => state.cart.items.length);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return (
      localStorage.getItem("theme") ||
      (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "dark" : "light",
    );
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  // Automatically close dropdown on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand */}
        <div className="brand">
          <Link to="/" className="brand-link" onClick={() => setIsOpen(false)}>
            <img src={NBCLogo} alt="Nichole's Beauty Co. Logo" />
            <span className="brand-name">Nichole's Beauty Co.</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Shop
          </NavLink>
        </nav>

        {/* Desktop Controls */}
        <div className="desktop-controls">
          <button
            className="theme-button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <Link
            to="/cart"
            className="cart-link"
            aria-label="View shopping cart"
          >
            <FaCartPlus className="cart-icon" />
            <span className="cart-count">({count})</span>
          </Link>
        </div>

        {/* Mobile Actions: Cart + Hamburger */}
        <div className="mobile-actions">
          <Link
            to="/cart"
            className="cart-link"
            onClick={() => setIsOpen(false)}
            aria-label="View shopping cart"
          >
            <FaCartPlus className="cart-icon" />
            <span className="cart-count">({count})</span>
          </Link>

          <button
            className="menu-toggle-btn"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      <div className={`mobile-dropdown ${isOpen ? "open" : ""}`}>
        <nav className="mobile-nav-links">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "mobile-nav-item active" : "mobile-nav-item"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "mobile-nav-item active" : "mobile-nav-item"
            }
          >
            Shop
          </NavLink>
        </nav>

        <div className="mobile-dropdown-footer">
          <button
            className="mobile-theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode"
          >
            <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            <span className="theme-icon-badge">
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
