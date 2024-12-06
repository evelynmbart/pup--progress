import { useState } from "react";
import "../css/Testimonial.css";
import Bullet from "./Bullet";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    details: "Owner of Max, Golden Retriever",
    review:
      "The training methods taught here completely transformed my relationship with Max. The structured approach and positive reinforcement techniques made training enjoyable for both of us!",
    image:
      "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Mike Peterson",
    details: "Owner of Luna, German Shepherd",
    review:
      "I was struggling with Luna's leash reactivity, but the specialized training programs here helped us overcome it. Now our walks are peaceful and enjoyable!",
    image:
      "https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Emily Chen",
    details: "Owner of Bella, French Bulldog",
    review:
      "The puppy training program was exactly what we needed. Bella learned all the basics quickly, and the ongoing support from trainers was invaluable!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonial-container">
      <Bullet>Testimonials</Bullet>
      <h1>What Our Clients Have To Say</h1>

      <div className="testimonial-carousel">
        <div className="testimonial-card">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="client-image"
          />
          <div className="testimonial-content">
            <h3 className="client-name">{testimonials[currentIndex].name}</h3>
            <p className="client-details">
              {testimonials[currentIndex].details}
            </p>
            <p className="client-review">{testimonials[currentIndex].review}</p>
          </div>
        </div>

        <div className="carousel-buttons">
          <button className="carousel-button" onClick={handlePrevious}>
            Previous
          </button>
          <button className="carousel-button" onClick={handleNext}>
            Next
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
