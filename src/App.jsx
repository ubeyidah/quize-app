import React from "react";
import "./index.css";
import Dice from "./Dice";

export default function App() {
  const [dice, setDice] = React.useState(allDice());
  const [tenzies, setTenzies] = React.useState(false);

  // generate Random value
  function getRandomValue() {
    const randomNumber = Math.ceil(Math.random() * 6);
    return {
      value: randomNumber,
      id: crypto.randomUUID(),
      isHeld: false,
    };
  }
  // create new array with 10 random numbers
  function allDice() {
    const dice = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6);
      dice.push(getRandomValue());
    }
    return dice;
  }

  // flip dice
  function holdDice(id) {
    !tenzies &&
      setDice((oldDice) =>
        oldDice.map((item) =>
          item.id === id ? { ...item, isHeld: !item.isHeld } : item
        )
      );
  }

  // roll
  function roll() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((item) => (item.isHeld ? item : getRandomValue()))
      );
    } else {
      setTenzies(false);
      setDice(allDice());
    }
  }

  // sync with dice state
  React.useEffect(() => {
    const isAllHeld = dice.every((item) => item.isHeld);
    const initalValue = dice[0].value;
    const isAllSameNumbers = dice.every((item) => item.value === initalValue);

    if (isAllHeld && isAllSameNumbers) {
      setTenzies(true);
    }
  }, [dice]);

  return (
    <main>
      <div className="bord">
        <div className="header">
          <h1>Tenzies</h1>
          <p>
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>
        <div className="dice-container">
          {dice.map((item) => (
            <Dice
              value={item.value}
              key={item.id}
              isHeld={item.isHeld}
              holdDice={() => holdDice(item.id)}
            />
          ))}
        </div>
        <div className="button">
          <button className="roll-btn" onClick={roll}>
            {tenzies ? "New Game" : "Roll"}
          </button>
        </div>
      </div>
    </main>
  );
}
