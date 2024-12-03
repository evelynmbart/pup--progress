import { useState } from "react";
import {
  CHAPTER_FIVE,
  CHAPTER_FOUR,
  CHAPTER_ONE,
  CHAPTER_THREE,
  CHAPTER_TWO,
} from "../chapters";
import "../css/Chapters.css";

export default function Chapters() {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedTrick, setSelectedTrick] = useState(null);

  const chapters = [
    { number: 1, title: "Basic Commands", data: CHAPTER_ONE, emoji: "🦮" },
    { number: 2, title: "Fun Tricks", data: CHAPTER_TWO, emoji: "🦴" },
    { number: 3, title: "Advanced Tricks", data: CHAPTER_THREE, emoji: "🐕" },
    { number: 4, title: "Show Stoppers", data: CHAPTER_FOUR, emoji: "🎾" },
    { number: 5, title: "Expert Level", data: CHAPTER_FIVE, emoji: "🏆" },
  ];

  return (
    <div className="chapters-container">
      <div className="chapters-content">
        <h1>
          <span className="paw">🐾</span> Training Guide
          <span className="paw">🐾</span>
        </h1>

        <div className="chapters-grid">
          {chapters.map((chapter) => (
            <div
              key={chapter.number}
              className={`chapter-card ${
                selectedChapter === chapter.number ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedChapter(chapter.number);
                setSelectedTrick(null);
              }}
            >
              <div className="chapter-emoji">{chapter.emoji}</div>
              <h2>Chapter {chapter.number}</h2>
              <h3>{chapter.title}</h3>
            </div>
          ))}
        </div>

        {selectedChapter && (
          <div className="tricks-container">
            <h2>
              Chapter {selectedChapter} - {chapters[selectedChapter - 1].title}
            </h2>
            <div className="tricks-grid">
              {chapters[selectedChapter - 1].data.map((trick) => (
                <div
                  key={trick.id}
                  className={`trick-card ${
                    selectedTrick?.id === trick.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedTrick(trick)}
                >
                  <h3>{trick.name}</h3>
                  <p>{trick.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTrick && (
          <div className="trick-details">
            <h2>{selectedTrick.name}</h2>
            <p className="trick-description">{selectedTrick.description}</p>
            <div className="instructions">
              <h3>How to train this trick:</h3>
              <ol>
                {selectedTrick.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
