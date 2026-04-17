import { FaCartPlus } from "react-icons/fa";
import NBCLogo from "../assets/nbc-logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-wrap">
      <ul className="navbar">
        <li className="brand">
          <img src={NBCLogo} alt="Nichole's Beauty Co. Logo" />
          <span>Nichole's Beauty Co.</span>
        </li>
        <li className="nav-item">Home</li>
        <li className="nav-item">Shop</li>
        <li className="nav-item cart">
          <FaCartPlus />
        </li>
      </ul>
    </nav>
  );
}
