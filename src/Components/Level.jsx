import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import levelsData from "./LevelsData";  // Import levelsData

const Level = ({ levelNumber }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [shuffledChoices, setShuffledChoices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Shuffle image choices for each question
    const currentQuestionData = levelsData[levelNumber - 1].questions[currentQuestion];
    const shuffled = [...currentQuestionData.imageChoices];
    shuffled.sort(() => Math.random() - 0.5);  // Simple shuffle logic
    setShuffledChoices(shuffled);
  }, [currentQuestion, levelNumber]);

  const handleChoiceClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    
    const next = currentQuestion + 1;
    if (next < levelsData[levelNumber - 1].questions.length) {
      setCurrentQuestion(next);
    } else {
      const total = levelsData[levelNumber - 1].questions.length;
      const passed = score + 1 === total; // +1 for the current correct answer

      // Store the result of the current level
      localStorage.setItem(`level${levelNumber}`, passed ? "passed" : "failed");

      if (passed) {
        // Move to the next level if the user passes
        navigate(`/level/${levelNumber + 1}`);
      } else {
        // Show an alert and reset state or navigate to a failure page
        alert("You must get all answers correct to move on.");
        navigate("/"); // Or use a failure message/popup instead
      }
    }
  };

  return (
    <div className="level-container">
      <h2 className="level-title">{levelsData[levelNumber - 1].title}</h2>

      <p className="question-text">
        {levelsData[levelNumber - 1].questions[currentQuestion].question}
      </p>
      
      <div className="image-options">
        {shuffledChoices.map((choice, idx) => (
          <img
            key={idx}
            src={choice.src}
            alt={choice.answer}
            className="choice-image"
            onClick={() => handleChoiceClick(choice.isCorrect)}
          />
        ))}
      </div>
    </div>
  );
};

export default Level;
