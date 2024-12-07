import { useState } from "react";
import "../css/WhyFreestyle.css";
import Bullet from "./Bullet";

const benefits = [
  {
    id: 1,
    title: "Benefits",
    description:
      "Personalized training plans that adapt to your dog's unique personality and learning style, ensuring optimal results and progress.",
  },
  {
    id: 2,
    title: "Backed by Science",
    description:
      "Our methods are grounded in proven behavioral science and positive reinforcement techniques, validated by expert trainers and animal behaviorists.",
  },
  {
    id: 3,
    title: "In the Long Run",
    description:
      "Investment in proper training leads to lasting behavioral changes, preventing future issues and creating a well-adjusted, happy companion.",
  },
  {
    id: 4,
    title: "For Your Buddy",
    description:
      "Training provides mental stimulation, builds confidence, and helps your dog feel secure and understood in their environment.",
  },
];

export default function WhyFreestyle() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBenefitsNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === benefits.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBenefitsPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? benefits.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="why-freestyle-container">
      <div className="freestyle-left">
        <div className="freestyle-left-top">
          <Bullet>Training Benefits</Bullet>
          <span>
            {/* <Button onClick={handleBenefitsPrevious}>Previous</Button>
            <Button onClick={handleBenefitsNext}>Next</Button> */}
          </span>
          <h1>Why Choose Freestyle?</h1>
        </div>
        <div className="freestyle-left-bottom">
          <h5>{benefits[currentIndex].title}</h5>
          <p>{benefits[currentIndex].description}</p>
          <div className="carousel-btns">
            {benefits.map((benefit, index) => (
              <button
                key={index}
                className={`btn ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              >
                {benefit.title}
              </button>
            ))}
          </div>
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
