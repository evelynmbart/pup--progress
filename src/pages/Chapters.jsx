import { useState } from "react";
import Confetti from "react-confetti";

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
  const [completedTricks, setCompletedTricks] = useState([]);
  const [isExploding, setIsExploding] = useState(false);

  const chapters = [
    { number: 1, title: "Basic Commands", data: CHAPTER_ONE, emoji: "🦮" },
    { number: 2, title: "Fun Tricks", data: CHAPTER_TWO, emoji: "🦴" },
    { number: 3, title: "Advanced Tricks", data: CHAPTER_THREE, emoji: "🐕" },
    { number: 4, title: "Show Stoppers", data: CHAPTER_FOUR, emoji: "🎾" },
    { number: 5, title: "Expert Level", data: CHAPTER_FIVE, emoji: "🏆" },
  ];

  //  i want to make the chapters be locked until user has completed the previous chapter
  //  i need a button on each trick that will allow the user to mark the trick as completed
  //  i need to store the completed tricks in local storage
  //  i need to make the trick instructions be locked until the user has completed the previous chapter

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
                  <h3>
                    {completedTricks.includes(trick.id)
                      ? `${trick.name} 🏆`
                      : trick.name}
                  </h3>
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
            <button
              className="complete-btn"
              onClick={() => {
                if (completedTricks.includes(selectedTrick.id)) {
                  setCompletedTricks(
                    completedTricks.filter((id) => id !== selectedTrick.id)
                  );
                } else {
                  setIsExploding(true);
                  setCompletedTricks([...completedTricks, selectedTrick.id]);
                  setTimeout(() => {
                    setIsExploding(false);
                  }, 7300);
                }
              }}
            >
              {isExploding && <Confetti width={2600} height={2600} />}
              {completedTricks.includes(selectedTrick.id)
                ? "Mark as incomplete"
                : "Mark as completed"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
