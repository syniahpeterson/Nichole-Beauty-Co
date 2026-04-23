import { Link, NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import NBCLogo from "../assets/nbc-logo.png";
import "../styles/Navbar.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Navbar() {
  const count = useSelector((state) => state.cart.items.length);
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

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return (
    <nav className="navbar-wrap">
      <ul className="navbar">
        <li className="brand">
          <Link to="/" className="brand-link">
            <img src={NBCLogo} alt="Nichole's Beauty Co. Logo" />
            <span>Nichole's Beauty Co.</span>
          </Link>
        </li>

        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {"Home"}
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {"Shop"}
          </NavLink>
        </li>

        <li className="theme-toggle">
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
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </li>

        <li className="nav-item cart">
          <Link to="/cart" className="cart-link">
            <FaCartPlus />
            <span className="cart-count"> ({count})</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
