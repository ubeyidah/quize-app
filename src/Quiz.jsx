import React from "react";

export default function Quiz(props) {
  const { userAnswer, correctAnswerIndex } = props.data;
  const [isCorrect, setIsCorrect] = React.useState(false);
  React.useEffect(() => {
    if (userAnswer === correctAnswerIndex) {
      setIsCorrect(true);
    } else if (userAnswer !== correctAnswerIndex) {
      setIsCorrect(false);
    }
  }, []);
  return (
    <div className="quiz">
      <h3>{props.data.quation}</h3>
      <div className="group-btns">
        <button
          className={`choose-btn ${
            !props.checked && props.data.userAnswer === 0 && "active"
          } ${props.checked && correctAnswerIndex === 0 && "correct"} ${
            props.checked && !isCorrect && userAnswer === 0 && "error"
          }`}
          onClick={() => props.setAnswer(props.data.id, 0)}
        >
          {props.data.answers[0]}
        </button>
        <button
          className={`choose-btn ${
            !props.checked && props.data.userAnswer === 1 && "active"
          } ${props.checked && correctAnswerIndex === 1 && "correct"} ${
            props.checked && !isCorrect && userAnswer === 1 && "error"
          }`}
          onClick={() => props.setAnswer(props.data.id, 1)}
        >
          {props.data.answers[1]}
        </button>
        <button
          className={`choose-btn ${
            !props.checked && props.data.userAnswer === 2 && "active"
          } ${props.checked && correctAnswerIndex === 2 && "correct"} ${
            props.checked && !isCorrect && userAnswer === 2 && "error"
          }`}
          onClick={() => props.setAnswer(props.data.id, 2)}
        >
          {props.data.answers[2]}
        </button>
        <button
          className={`choose-btn ${
            !props.checked && props.data.userAnswer === 3 && "active"
          } ${props.checked && correctAnswerIndex === 3 && "correct"} ${
            props.checked && !isCorrect && userAnswer === 3 && "error"
          }`}
          onClick={() => props.setAnswer(props.data.id, 3)}
        >
          {props.data.answers[3]}
        </button>
      </div>
    </div>
  );
}
