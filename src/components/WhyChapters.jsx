import "../css/WhyChapters.css";
import Arrow from "./Arrow";
import Bullet from "./Bullet";
export default function WhyChapters() {
  return (
    <div className="why-chapters-container">
      <div className="top">
        <div className="top-left">
          <Bullet>Chapters</Bullet>
          <p>Explore Tricks, Training, and more with Us</p>
        </div>
        <h1>Why Chapters?</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="left-image">
            <div className="left-image-text">
              <h1>Training</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </div>
            <div className="left-arrow">
              <Arrow />
            </div>
          </div>

          <div className="left-bottom"></div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
