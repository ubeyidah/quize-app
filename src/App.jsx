import { useState, useEffect } from "react";
import WelcomePage from "./WelcomePage";
import quations from "./quation.js";
import Quiz from "./Quiz";
import "./index.css";

export default function App() {
  const [isWelcomePage, setIsWelcomePage] = useState(true);
  const [quizs, setQuizs] = useState(quations);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const toggleWelcomePage = () => {
    setIsWelcomePage((prevIsWelcomePage) => !prevIsWelcomePage);
  };

  const setAnswer = (id, index) => {
    !checked &&
      setQuizs((prevQuizs) =>
        prevQuizs.map((quiz) =>
          quiz.id === id ? { ...quiz, userAnswer: index } : quiz
        )
      );
  };

  const checkAnswers = () => {
    if (!checked) {
      let ans = [];
      quizs.forEach((quiz) => (ans = [...ans, quiz.userAnswer]));
      const allFilled = ans.every((item) => typeof item === "number");
      if (allFilled) {
        setChecked(true);
        quizs.forEach((quiz) => {
          const { userAnswer, correctAnswerIndex } = quiz;
          if (userAnswer === correctAnswerIndex) {
            setScore((prevScore) => prevScore + 1);
          }
        });
      }
    } else if (checked) {
      setQuizs(quations);
      setChecked(false);
      setScore(0);
    }
  };

  return (
    <main>
      {isWelcomePage ? (
        <WelcomePage toggle={toggleWelcomePage} />
      ) : (
        <div className="container">
          {quizs.map((quiz) => (
            <Quiz
              key={quiz.id}
              data={quiz}
              setAnswer={setAnswer}
              checked={checked}
            />
          ))}
          <div className="button">
            {checked && (
              <h4>
                You scored {score}/{quizs.length} correct answers{" "}
              </h4>
            )}
            <button className="btn" onClick={checkAnswers}>
              {!checked ? "Check answers" : "Play again"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
