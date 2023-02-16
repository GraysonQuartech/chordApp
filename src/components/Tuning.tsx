//detects click and returns the correct array

import React from 'react';
import './Tuning.css';

interface tuningProps{
    tuningID: number;
}

interface tunings {
    standardTuning: number[];
    dropDTuning: number[];
    openCTuning: number[];
}
const tunings: tunings = {
    standardTuning: [4, 9, 2, 7, 11, 4],
    dropDTuning: [2, 9, 2, 7, 11, 4],
    openCTuning: [0, 7, 0, 7, 0, 4]
};
  

function Tuning(props: tuningProps) {
    return (
        <button className="tuning-option">STANDARD</button>
    );
  }
  
  export default Tuning;