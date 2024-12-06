import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import "../css/Credentials.css";

export default function Credentials() {
  return (
    <footer className="credentials-container">
      <div className="credentials-content">
        <div className="credentials-left">
          <h3>Get in Touch!</h3>
          <p>
            Have questions? We'd love to hear from you! Reach out to us through
            any of these channels.
          </p>
          <button className="contact-btn">Contact Us</button>
        </div>

        <div className="credentials-right">
          <div className="contact-info">
            <div className="contact-item">
              <MdLocationOn className="contact-icon" />
              <p>123 Pup Street, San Francisco, CA 94105</p>
            </div>
            <div className="contact-item">
              <MdPhone className="contact-icon" />
              <p>(555) 123-4567</p>
            </div>
            <div className="contact-item">
              <MdEmail className="contact-icon" />
              <p>info@pupprogress.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="credentials-bottom">
        <div className="social-links">
          <a href="#" aria-label="Facebook">
            <FaFacebook className="social-icon" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="social-icon" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className="social-icon" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin className="social-icon" />
          </a>
        </div>

        <div className="legal-links">
          <a href="#">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="#">Terms of Service</a>
          <span className="separator">|</span>
          <a href="#">Cookie Policy</a>
        </div>

        <div className="company-info">
          <h4>Pup Progress</h4>
          <p>
            &copy; {new Date().getFullYear()} Pup Progress. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
