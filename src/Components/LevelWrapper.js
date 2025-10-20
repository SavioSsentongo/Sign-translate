import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import levels from "../data/levelsData";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-5px); }
  40%, 80% { transform: translateX(5px); }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Styled Components
const LevelContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.4s ease-out;
  position: relative;
`;

const LevelTitle = styled.h2`
  color: #3a3a3a;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
    border-radius: 2px;
  }
`;

const QuestionNumber = styled.div`
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 1rem;
  text-align: center;
`;

const QuestionText = styled.div`
  font-size: 1.2rem;
  color: #3a3a3a;
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.5;
  font-weight: 500;
`;

const ImageOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ChoiceImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  &.correct {
    box-shadow: 0 0 0 4px #4caf50;
    animation: ${pulse} 0.5s ease;
  }

  &.incorrect {
    box-shadow: 0 0 0 4px #f44336;
    animation: ${shake} 0.5s ease;
  }

  &.disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const FeedbackContainer = styled(motion.div)`
  background: rgba(76, 175, 80, 0.1);
  border-left: 4px solid #4caf50;
  padding: 1rem;
  border-radius: 0 8px 8px 0;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;

  p {
    margin: 0;
    color: #2e7d32;
    font-weight: 500;
  }

  svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
    color: #4caf50;
  }
`;

const ProgressIndicator = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  background: #f5f5f5;
  border-radius: 8px;
`;

const ProgressStep = styled.div`
  flex: 1;
  height: 6px;
  margin: 0 2px;
  background: ${(props) => (props.completed ? "#4caf50" : "#e0e0e0")};
  border-radius: 3px;
  transition: background 0.3s ease;
`;

const Button = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin: 0.5rem;
  transition: all 0.3s ease;

  &.primary {
    background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
    color: white;
  }

  &.secondary {
    background: #f1f1f1;
    color: #333;
  }

  &.danger {
    background: #ff5252;
    color: white;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
`;

const ResultsContainer = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ResultItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  padding: 0.75rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    margin-right: 0.75rem;
    font-size: 1.2rem;
    color: ${(props) => (props.correct ? "#4caf50" : "#f44336")};
  }
`;

const ResetButton = styled(Button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #ff5252;
  color: white;
  z-index: 100;
`;

// Certificate Components
const CertificateContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background: linear-gradient(145deg, #f9f9f9, #ffffff);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
  }

  h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 2rem;
  }
`;

const CelebrationIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  display: inline-block;
  animation: ${floatAnimation} 3s ease-in-out infinite;
`;

const ScoreMessage = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 1rem 0;
  padding: 0.75rem;
  border-radius: 8px;
  color: ${(props) => (props.passed ? "#2e7d32" : "#c62828")};
  background: ${(props) =>
    props.passed ? "rgba(76, 175, 80, 0.1)" : "rgba(244, 67, 54, 0.1)"};
`;

function LevelWrapper() {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const levelIndex = parseInt(levelId) - 1;
  const level = levels[levelIndex];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(0);
  const [questionStates, setQuestionStates] = useState([]);

  // Initialize or load progress from local storage
  const initializeProgress = () => {
    const savedProgress = localStorage.getItem("equilearnProgress");
    if (!savedProgress) {
      const initialProgress = {
        completedLevels: [],
        currentLevel: 1,
        lastQuestion: 0,
        scores: {},
      };
      localStorage.setItem(
        "equilearnProgress",
        JSON.stringify(initialProgress)
      );
      return initialProgress;
    }
    return JSON.parse(savedProgress);
  };

  // Update progress in local storage
  const updateProgress = (completedLevel = false) => {
    const progress = initializeProgress();

    if (completedLevel && !progress.completedLevels.includes(levelId)) {
      progress.completedLevels.push(levelId);
      progress.currentLevel = parseInt(levelId) + 1;
      progress.lastQuestion = 0;
      progress.scores[levelId] = score;
    } else {
      progress.lastQuestion = currentQuestion;
    }

    localStorage.setItem("equilearnProgress", JSON.stringify(progress));
  };

  // Reset state when the level changes
  useEffect(() => {
    const progress = initializeProgress();

    if (progress.completedLevels.includes(levelId)) {
      setCurrentQuestion(0);
    } else {
      if (parseInt(levelId) === progress.currentLevel) {
        setCurrentQuestion(progress.lastQuestion || 0);
      } else {
        setCurrentQuestion(0);
      }
    }

    setSelected(null);
    setShowFeedback(false);
    setShowResults(false);
    setShowCertificate(false);
    setAttempts(0);
    setScore(0);

    // Initialize question states
    setQuestionStates(
      level.questions.map(() => ({
        answered: false,
        correct: false,
        attempts: 0,
      }))
    );
  }, [levelId]);

  if (!level) return <h2>Invalid Level</h2>;

  const handleAnswer = (choice) => {
    if (selected) return; // Prevent multiple selections

    setSelected(choice);
    setAttempts((prev) => prev + 1);

    // Update question state
    setQuestionStates((prev) => {
      const newStates = [...prev];
      newStates[currentQuestion] = {
        ...newStates[currentQuestion],
        answered: true,
        correct: choice.isCorrect,
        attempts: newStates[currentQuestion].attempts + 1,
      };
      return newStates;
    });

    if (choice.isCorrect) {
      setScore((prev) => prev + 1);
      setShowFeedback(true);

      setTimeout(() => {
        if (currentQuestion + 1 < level.questions.length) {
          setCurrentQuestion((prev) => prev + 1);
          setSelected(null);
          setShowFeedback(false);
        } else {
          setShowResults(true);
        }
      }, 1500);
    } else {
      // Just mark it as incorrect without showing feedback
      setTimeout(() => {
        if (currentQuestion + 1 < level.questions.length) {
          setCurrentQuestion((prev) => prev + 1);
          setSelected(null);
        } else {
          setShowResults(true);
        }
      }, 800);
    }
  };

  // Calculate if the user passed the level (60% or higher)
  const calculatePassingScore = () => {
    const minimumRequired = Math.ceil(level.questions.length * 0.6);
    return score >= minimumRequired;
  };

  const handleNextLevel = () => {
    if (calculatePassingScore()) {
      updateProgress(true);

      if (parseInt(levelId) === levels.length) {
        setShowCertificate(true);
        setShowResults(false);
      } else {
        setShowResults(false);
        navigate(`/equilearn/level/${parseInt(levelId) + 1}`);
      }
    }
  };

  const handleRetryLevel = () => {
    setCurrentQuestion(0);
    setSelected(null);
    setShowFeedback(false);
    setShowResults(false);
    setAttempts(0);
    setScore(0);
    setQuestionStates(
      level.questions.map(() => ({
        answered: false,
        correct: false,
        attempts: 0,
      }))
    );
  };

  const handleResetAllProgress = () => {
    if (
      window.confirm(
        "Are you sure you want to reset all progress? This cannot be undone."
      )
    ) {
      localStorage.removeItem("equilearnProgress");
      navigate(`/equilearn/level/1`);
    }
  };

  const progress = initializeProgress();
  const isLevelCompleted = progress.completedLevels.includes(levelId);
  const currentQuestionData = level.questions[currentQuestion];
  const passingScore = Math.ceil(level.questions.length * 0.6);
  const hasPassed = calculatePassingScore();

  return (
    <LevelContainer>
      <ResetButton
        onClick={handleResetAllProgress}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="danger"
      >
        Reset All Progress
      </ResetButton>

      <LevelTitle>{level.title}</LevelTitle>

      <ProgressIndicator>
        {level.questions.map((_, index) => (
          <ProgressStep
            key={index}
            completed={
              isLevelCompleted ||
              index < currentQuestion ||
              (index === currentQuestion && selected?.isCorrect)
            }
          />
        ))}
      </ProgressIndicator>

      {!showCertificate && !showResults ? (
        <>
          <QuestionNumber>
            Question {currentQuestion + 1} of {level.questions.length}
            {attempts > 0 && ` • Attempt ${attempts}`}
          </QuestionNumber>

          <QuestionText>{currentQuestionData.question}</QuestionText>

          <AnimatePresence>
            {showFeedback && selected && selected.isCorrect && (
              <FeedbackContainer
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <p>Correct! Well done!</p>
              </FeedbackContainer>
            )}
          </AnimatePresence>

          <ImageOptions>
            {currentQuestionData.imageChoices.map((choice, index) => (
              <ChoiceImage
                key={index}
                src={choice.src}
                alt={choice.answer}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`
                  ${
                    selected
                      ? choice.isCorrect
                        ? "correct"
                        : selected === choice
                        ? "incorrect"
                        : "disabled"
                      : ""
                  }
                `}
                onClick={() => !selected && handleAnswer(choice)}
                whileHover={!selected ? { scale: 1.03 } : {}}
              />
            ))}
          </ImageOptions>
        </>
      ) : showResults ? (
        <ResultsContainer>
          <h3>Level {levelId} Results</h3>
          <p>
            You scored {score} out of {level.questions.length}
          </p>

          <ScoreMessage passed={hasPassed}>
            {hasPassed
              ? `Congratulations! You passed with ${Math.round(
                  (score / level.questions.length) * 100
                )}% (minimum required: 60%)`
              : `You need at least ${passingScore} correct answers (60%) to pass this level. Please try again.`}
          </ScoreMessage>

          {level.questions.map((q, idx) => (
            <ResultItem key={idx} correct={questionStates[idx]?.correct}>
              {questionStates[idx]?.correct ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
              )}
              <div>
                <p>
                  Question {idx + 1}: {q.question}
                </p>
                <small>
                  {questionStates[idx]?.correct
                    ? `Got it right in ${
                        questionStates[idx]?.attempts
                      } attempt${questionStates[idx]?.attempts > 1 ? "s" : ""}`
                    : `Incorrect`}
                </small>
              </div>
            </ResultItem>
          ))}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1.5rem",
            }}
          >
            <Button
              className="secondary"
              onClick={handleRetryLevel}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Retry Level
            </Button>
            {hasPassed && (
              <Button
                className="primary"
                onClick={handleNextLevel}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {parseInt(levelId) === levels.length
                  ? "View Certificate"
                  : "Next Level"}
              </Button>
            )}
          </div>
        </ResultsContainer>
      ) : (
        <CertificateContainer>
          <CelebrationIcon>🎓</CelebrationIcon>
          <motion.h3
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            🎉 Congratulations! You've completed all levels successfully! 🎉
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p>You've demonstrated mastery of all concepts in EquiLearn.</p>
            <p>
              Final Score: {score}/{level.questions.length}
            </p>
          </motion.div>
          <Button
            className="primary"
            onClick={() => navigate("/equilearn/certificate")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Certificate
          </Button>
        </CertificateContainer>
      )}
    </LevelContainer>
  );
}

export default LevelWrapper;
