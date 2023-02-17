import React from "react";
import { useState } from "react";
import "./FretBoard.css";

import StringC from "../components/StringC";
import Tuning from "../components/Tuning";

const FretBoard: React.FC = () => {
  const [tuningArr, setTuningArr] = useState<number[]>([0, 0, 0, 0, 0, 0]);

  const handleTuningClick = (tuning: number[]) => {
    setTuningArr(tuning);
    console.log(tuningArr);
  };

  return (
    <div className="body">
      <div className="final-chord">GUITAR CHORD FINDER</div>
      <div className="tuning-grid">
        <Tuning
          onClick={(tuning: number[]) => handleTuningClick(tuning)}
          tuningID={0}
        />
        <Tuning
          onClick={(tuning: number[]) => handleTuningClick(tuning)}
          tuningID={1}
        />
        <Tuning
          onClick={(tuning: number[]) => handleTuningClick(tuning)}
          tuningID={2}
        />
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
