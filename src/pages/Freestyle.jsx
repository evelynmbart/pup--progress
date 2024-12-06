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
import "../css/Freestyle.css";

export default function Freestyle() {
  const [selectedTrick, setSelectedTrick] = useState(null);
  const [completedTricks, setCompletedTricks] = useState(() => {
    const saved = localStorage.getItem("completedTricks");
    return saved ? JSON.parse(saved) : [];
  });
  const [isExploding, setIsExploding] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Combine all tricks from chapters
  const allTricks = [
    ...CHAPTER_ONE.map((trick) => ({ ...trick, chapter: 1 })),
    ...CHAPTER_TWO.map((trick) => ({ ...trick, chapter: 2 })),
    ...CHAPTER_THREE.map((trick) => ({ ...trick, chapter: 3 })),
    ...CHAPTER_FOUR.map((trick) => ({ ...trick, chapter: 4 })),
    ...CHAPTER_FIVE.map((trick) => ({ ...trick, chapter: 5 })),
    ...CHAPTER_SIX.map((trick) => ({ ...trick, chapter: 6 })),
  ];

  useEffect(() => {
    localStorage.setItem("completedTricks", JSON.stringify(completedTricks));
  }, [completedTricks]);

  const isCompleted = (chapterId, trickId) => {
    return completedTricks.includes(`${chapterId}-${trickId}`);
  };

  const filteredTricks = allTricks.filter((trick) =>
    trick.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="freestyle-container">
      <div className="freestyle-content">
        <h1>
          <span className="paw">🐾</span> Trick Library{" "}
          <span className="paw">🐾</span>
        </h1>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a trick..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="tricks-masonry">
          {filteredTricks.map((trick) => (
            <div
              key={`${trick.chapter}-${trick.id}`}
              className={`trick-card ${
                selectedTrick?.id === trick.id ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedTrick(trick);
                setShowModal(true);
              }}
            >
              <div className="trick-header">
                <h3>
                  {isCompleted(trick.chapter, trick.id)
                    ? `${trick.name} 🏆`
                    : trick.name}
                </h3>
                <span className="chapter-badge">Chapter {trick.chapter}</span>
              </div>
              <p>{trick.description}</p>
            </div>
          ))}
        </div>

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
                  const completionId = `${selectedTrick.chapter}-${selectedTrick.id}`;
                  if (isCompleted(selectedTrick.chapter, selectedTrick.id)) {
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
                {isCompleted(selectedTrick.chapter, selectedTrick.id)
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
