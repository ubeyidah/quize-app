import React from "react";

export default function WelcomePage({ toggle }) {
  return (
    <div className="welcome">
      <h1>Quizzical</h1>
      <p>programming quiz</p>
      <button className="btn" onClick={toggle}>
        Start Quiz
      </button>
    </div>
  );
}
