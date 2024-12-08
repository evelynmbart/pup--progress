import { Link } from "react-router-dom";
import "../css/Overview.css";
import Navbar from "./Navbar";
export default function Overview() {
  return (
    <div className="overview-container">
      <Navbar />
      <div className="overview-content">
        <h1 className="overview-title">
          Transform Your Puppy into a Well-Behaved Buddy!
        </h1>
        <p className="overview-subtitle">
          Expert-led training programs designed to build confidence, obedience,
          and lasting bonds. Join thousands of happy pet parents who've
          discovered the joy of raising a perfectly trained puppy.
        </p>
        <Link to="/chapters" className="overview-cta">
          Start Your Journey Today
        </Link>
      </div>
    </div>
  );
}
