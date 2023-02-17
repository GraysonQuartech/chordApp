import React from "react";
import { useState } from "react";
import "./FretBoard.css";

import StringC from "../components/StringC";
import Tuning from "../components/Tuning";
import { tunings } from "../constants/constants";

const FretBoard: React.FC = () => {
  const [tuningArr, setTuningArr] = useState<number[]>([0, 0, 0, 0, 0, 0]);

  //takes an ID and returns the array that
  //holds all the string tunings
  const idToTuningArr = (tuningID: number) => {
    return tuningID === 0
      ? tunings.standardTuning
      : tuningID === 1
      ? tunings.dropDTuning
      : tunings.openCTuning;
  };

  const handleTuningClick = (tuningId: number) => {
    console.log(tuningArr);
    const tuningFromId = idToTuningArr(tuningId);
    setTuningArr(tuningFromId);
  };

  return (
    <div className="body">
      <div className="final-chord">GUITAR CHORD FINDER</div>
      <div className="tuning-grid">
        {[0, 1, 2].map((tuningID: number) => {
          return (
            <Tuning
              tuningID={tuningID}
              onClick={() => handleTuningClick(tuningID)}
            />
          );
        })}
      </div>
      <div className="string-grid">
        {tuningArr.map((tuning: number, index: number) => {
          return <StringC key={index} tuningShift={tuning} />;
        })}
      </div>
    </div>
  );
};

export default FretBoard;
