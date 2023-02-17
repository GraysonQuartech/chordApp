//detects click and returns the correct array

//1. get the ID from props for which array to return to parent
//2. return the array to parent

import React from "react";
import "./Tuning.css";

interface tuningProps {
  tuningID: number;
  onClick: (tuning: number[]) => void;
}

//takes ID and returns the tuning name
//that corresponds to that ID
const idToString = (tuningID: number) => {
  return tuningID === 0 ? "STANDARD" : tuningID === 1 ? "DROP D" : "OPEN C";
};

function Tuning(props: tuningProps) {
  return (
    <button className="tuning-option" onClick={() => props.onClick}>
      {idToString(props.tuningID)}
    </button>
  );
}

export default Tuning;
