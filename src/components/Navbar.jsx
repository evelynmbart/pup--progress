import { useState } from "react";
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
        <Link to="/" className="logo-link">
          <img
            className="logo"
            src="./pup-progress-logo.png"
            alt="pup progress logo"
          />
        </Link>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <Link
          className="link"
          to="/"
          onClick={() => setIsMenuOpen(false)}
          title="Home"
        >
          Home
        </Link>
        <Link
          className="link"
          to="/chapters"
          onClick={() => setIsMenuOpen(false)}
          title="Chapters"
        >
          Chapters
        </Link>
        <Link
          className="link"
          to="/freestyle"
          onClick={() => setIsMenuOpen(false)}
          title="Freestyle"
        >
          Freestyle
        </Link>
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
