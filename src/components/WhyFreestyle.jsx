import "../css/WhyFreestyle.css";
import Bullet from "./Bullet";
import Button from "./Button";

export default function WhyFreestyle() {
  return (
    <div className="why-freestyle-container">
      <div className="freestyle-left">
        <div className="freestyle-left-top">
          <Bullet>Training Benefits</Bullet>
          <span>
            <Button>Benefits</Button>
            <Button>Perks</Button>
            <Button>Advantages</Button>
            <Button>Extras</Button>
          </span>
          <h1>Why Choose Freestyle?</h1>
        </div>
        <div className="freestyle-left-bottom">
          <h5>Strengthens your Bond</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="freestyle-right">
        <div className="freestyle-right-image">
          <div className="freestyle-right-text">
            <h4>Services & Support</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
