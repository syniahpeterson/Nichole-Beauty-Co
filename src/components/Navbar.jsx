import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import NBCLogo from "../assets/nbc-logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-wrap">
      <ul className="navbar">
        <Link to={"/"}>
          <li className="brand">
            <img src={NBCLogo} alt="Nichole's Beauty Co. Logo" />
            <span>Nichole's Beauty Co.</span>
          </li>
        </Link>
        <li className="nav-item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li className="nav-item cart">
          <Link to={"/cart"}>
            <FaCartPlus />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
