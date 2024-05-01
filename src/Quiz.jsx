import React from "react";

export default function Quiz(props) {
  const { userAnswer, correctAnswerIndex } = props.data;
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [answers, setAnswers] = React.useState(props.data.answers);
  React.useEffect(() => {
    if (userAnswer === correctAnswerIndex) {
      setIsCorrect(true);
    } else if (userAnswer !== correctAnswerIndex) {
      setIsCorrect(false);
    }
  }, []);

  const getStyle = (index) => {
    let style = "";
    if (!props.checked && userAnswer === index) {
      style = "active";
    } else if (props.checked && correctAnswerIndex === index) {
      style = "correct";
    } else if (props.checked && !isCorrect && userAnswer === index) {
      style = "error";
    }
    return style;
  };

  return (
    <div className="quiz">
      <h3>{props.data.quation}</h3>
      <div className="group-btns">
        {answers.map((answer) => {
          const index = answers.indexOf(answer);
          return (
            <button
              className={`choose-btn ${getStyle(index)}`}
              key={crypto.randomUUID()}
              onClick={() => props.setAnswer(props.data.id, index)}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
}
