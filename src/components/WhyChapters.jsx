import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { TiArrowLeftOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import "../css/WhyChapters.css";
import Arrow from "./Arrow";
import Bullet from "./Bullet";
export default function WhyChapters() {
  const [currentChapter, setCurrentChapter] = useState(1);

  return (
    <div className="why-chapters-container">
      <div className="top">
        <div className="top-left">
          <Bullet>Chapters</Bullet>
        </div>
        <h1>Step-by-Step Training Journey</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="left-image">
            <div className="left-image-text">
              <h1>Structured Training</h1>
              <p>
                Follow our proven training methodology designed to build strong
                foundations and progress at your dog's ideal pace.
              </p>
            </div>
          </div>

          <div className="left-bottom">
            <span>
              <button
                onClick={() => {
                  setCurrentChapter((prev) => (prev === 1 ? 6 : prev - 1));
                }}
              >
                <TiArrowLeftOutline className="arrow-icon" size={32} />
              </button>

              <p>
                {currentChapter === 1 && "Chapter 1: Basic Commands"}
                {currentChapter === 2 && "Chapter 2: Fun Tricks"}
                {currentChapter === 3 && "Chapter 3: Advanced Training"}
                {currentChapter === 4 && "Chapter 4: Show Stoppers"}
                {currentChapter === 5 && "Chapter 5: Expert Level"}
                {currentChapter === 6 && "Chapter 6: Out of this World"}
              </p>
              <button
                onClick={() => {
                  setCurrentChapter((prev) => (prev === 6 ? 1 : prev + 1));
                }}
              >
                <Arrow />
              </button>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="right-top">
            <div className="right-top-left">
              <Link id="first-link" to="/chapters">
                <CiCirclePlus className="circle-plus" id="circle-plus-1" />
                <h3 id="first-h3">Build Confidence</h3>
              </Link>
            </div>
            <div className="right-top-right">
              <Link id="first-link" to="/chapters">
                <CiCirclePlus className="circle-plus" />
                <h3 id="second-h3">Strengthen Bond</h3>
              </Link>
            </div>
          </div>
          <div className="right-bottom">
            <div className="right-bottom-text">
              <h4>
                Master essential skills through our structured chapters, each
                designed to build upon the last for a complete training
                experience.
              </h4>
              <Link id="first-link" to="/chapters">
                <Bullet>Explore Chapters</Bullet>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
