import { useState } from "react";
import { TiArrowRightOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <img
          className="logo"
          src="./pup-progress-logo.png"
          alt="pup progress logo"
        />
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <Link className="link" to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link
            className="link"
            to="/chapters"
            onClick={() => setIsMenuOpen(false)}
          >
            Chapters
          </Link>
          <Link
            className="link"
            to="/freestyle"
            onClick={() => setIsMenuOpen(false)}
          >
            Freestyle
          </Link>
        </div>
      </div>
      <div className="navbar-right">
        <button className="navbar-btn">Contact Us</button>
        <TiArrowRightOutline className="arrow-icon" size={32} />
      </div>
      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
    </nav>
  );
}
