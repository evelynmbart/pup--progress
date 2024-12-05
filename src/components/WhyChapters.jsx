import { CiCirclePlus } from "react-icons/ci";
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

          <div className="left-bottom">
            <span>
              <Arrow />
              <p>01 / 12</p>
              <Arrow />
            </span>
          </div>
        </div>
        <div className="right">
          <div className="right-top">
            <div className="right-top-left">
              <CiCirclePlus className="circle-plus" id="circle-plus-1" />
              <h3>Learning Guide</h3>
            </div>
            <div className="right-top-right">
              <CiCirclePlus className="circle-plus" />
              <h3>Bonding</h3>
            </div>
          </div>
          <div className="right-bottom">
            <div className="right-bottom-text">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </h4>
              <Bullet>Read More</Bullet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
