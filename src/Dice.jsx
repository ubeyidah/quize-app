import React from "react";

export default function Dice(props) {
  const ActiveDice = {
    background: props.isHeld ? "#59E391" : "white",
  };
  return (
    <>
      <button className="dice" style={ActiveDice} onClick={props.holdDice}>
        {props.value}
      </button>
    </>
  );
}
