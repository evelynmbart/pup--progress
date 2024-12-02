import { TiArrowRightOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <img
          className="logo"
          src="./pup-progress-logo.png"
          alt="pup progress logo"
        />
        <div className="navbar-links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/chapters">
            Chapters
          </Link>
          <Link className="link" to="/freestyle">
            Freestyle
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
        </div>
      </div>
      <div className="navbar-right">
        <button className="navbar-btn">
          Contact Us <TiArrowRightOutline />
        </button>
      </div>
    </nav>
  );
}
