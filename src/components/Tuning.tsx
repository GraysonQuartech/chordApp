//detects click and returns the correct array

//1. get the ID from props for which array to return to parent 
//2. return the array to parent 

import React from 'react';
import './Tuning.css';

interface tuningProps{
    tuningID: number;
    onClick: (tuning :number[])=> void; 
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

//takes ID and returns the tuning name
//that corresponds to that ID  
const idToString = (tuningID: number) => {
    if(tuningID===0){
        return "STANDARD";
    }
    else if (tuningID === 1){
        return "DROP D";
    }
    else{
        return "OPEN C";
    }
}

//takes an ID and returns the array that 
//holds all the string tunings
const idToTuningArr = (tuningID: number) => {
    if(tuningID===0){
        return tunings.standardTuning;
    }
    else if (tuningID === 1){
        return tunings.dropDTuning;
    }
    else{
        return tunings.openCTuning;
    } 
}

//gets called when a tuning is clicked
//should send the correct arry values back to parent
const handleTuningClick = (tuningID: number) => {

    console.log(tuningID);
};

function Tuning(props: tuningProps) {

    return (
        <button 
            className="tuning-option" 
            onClick={()=>props.onClick(idToTuningArr(props.tuningID))}
        >
            {idToString(props.tuningID)}
        </button>
    );
}
  
export default Tuning;