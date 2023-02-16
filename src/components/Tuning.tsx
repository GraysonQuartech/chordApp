//detects click and returns the correct array

//1. get the ID from props for which array to return to parent 
//2. return the array to parent 

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

//takes ID and returns the tuning name
//that corresponds to that ID  
const idToString = (id: number) => {
    if(id===0){
        return "STANDARD";
    }
    else if (id === 1){
        return "DROP D";
    }
    else{
        return "OPEN C";
    }
}


function Tuning(props: tuningProps) {
    //const handleClick = () => {
    //    props.onArrayFromChild(tunings.standardTuning);
    //};

    return (
        <button className="tuning-option">{idToString(props.tuningID)}</button>
    );
}
  
export default Tuning;