import "../css/WhyFreestyle.css";
import Bullet from "./Bullet";
import Button from "./Button";

export default function WhyFreestyle() {
  return (
    <div className="why-freestyle-container">
      <div className="freestyle-left">
        <Bullet>Training Benefits</Bullet>
        <span>
          <Button>Benefits</Button>
          <Button>Perks</Button>
          <Button>Advantages</Button>
          <Button>Extras</Button>
        </span>
      </div>
      <div className="freestyle-right"></div>
    </div>
  );
}
