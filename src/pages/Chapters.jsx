import { useEffect, useState } from "react";
import Confetti from "react-confetti";

import {
  CHAPTER_FIVE,
  CHAPTER_FOUR,
  CHAPTER_ONE,
  CHAPTER_SIX,
  CHAPTER_THREE,
  CHAPTER_TWO,
} from "../chapters";
import "../css/Chapters.css";

export default function Chapters() {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedTrick, setSelectedTrick] = useState(null);
  const [isLocked, setIsLocked] = useState(true);
  const [completedTricks, setCompletedTricks] = useState(() => {
    const saved = localStorage.getItem("completedTricks");
    return saved ? JSON.parse(saved) : [];
  });
  const [isExploding, setIsExploding] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("completedTricks", JSON.stringify(completedTricks));
  }, [completedTricks]);

  const chapters = [
    { number: 1, title: "Basic Commands", data: CHAPTER_ONE, emoji: "🦮" },
    { number: 2, title: "Fun Tricks", data: CHAPTER_TWO, emoji: "🦴" },
    { number: 3, title: "Advanced Tricks", data: CHAPTER_THREE, emoji: "🐕" },
    { number: 4, title: "Show Stoppers", data: CHAPTER_FOUR, emoji: "🎾" },
    { number: 5, title: "Expert Level", data: CHAPTER_FIVE, emoji: "🏆" },
    { number: 6, title: "Out of this World", data: CHAPTER_SIX, emoji: "🌟" },
  ];

  const isCompleted = (chapterId, trickId) => {
    return completedTricks.includes(`${chapterId}-${trickId}`);
  };

  const isChapterLocked = (chapterNumber) => {
    if (chapterNumber === 1) return false;

    const previousChapter = chapters[chapterNumber - 2];
    const previousChapterTricks = previousChapter.data;

    return !previousChapterTricks.every((trick) =>
      isCompleted(chapterNumber - 1, trick.id)
    );
  };

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
              } ${isChapterLocked(chapter.number) ? "locked" : ""}`}
              onClick={() => {
                if (!isChapterLocked(chapter.number)) {
                  setSelectedChapter(chapter.number);
                  setSelectedTrick(null);
                }
              }}
            >
              <div className="chapter-emoji">
                {isChapterLocked(chapter.number) ? "🔒" : chapter.emoji}
              </div>
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
                  onClick={() => {
                    setSelectedTrick(trick);
                    setShowModal(true);
                  }}
                >
                  <h3>
                    {isCompleted(selectedChapter, trick.id)
                      ? `${trick.name} 🏆`
                      : trick.name}
                  </h3>
                  <p>{trick.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {showModal && selectedTrick && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="close-button"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
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
                  const completionId = `${selectedChapter}-${selectedTrick.id}`;
                  if (isCompleted(selectedChapter, selectedTrick.id)) {
                    setCompletedTricks(
                      completedTricks.filter((id) => id !== completionId)
                    );
                  } else {
                    setIsExploding(true);
                    setCompletedTricks([...completedTricks, completionId]);
                    setTimeout(() => {
                      setIsExploding(false);
                    }, 5900);
                  }
                }}
              >
                {isExploding && <Confetti width={2600} height={1186} />}
                {isCompleted(selectedChapter, selectedTrick.id)
                  ? "Mark as incomplete"
                  : "Mark as completed"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
