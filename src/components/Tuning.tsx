//detects click and returns the correct array

//1. get the ID from props for which array to return to parent 
//2. return the array to parent 

import React from 'react';
import './Tuning.css';

interface tuningProps{
    tuningID: string;
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
    //const handleClick = () => {
    //    props.onArrayFromChild(tunings.standardTuning);
    //};

    return (
        <button className="tuning-option">{props.tuningID}</button>
    );
}
  
export default Tuning;