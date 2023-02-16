
import React from 'react';
import { useState } from 'react';

import './App.css';
import StringC from './components/StringC'
import Tuning from './components/Tuning'

interface tunings {
  standardTuning: number[];
  dropDTuning: number[];
  openCTuning: number[];
}


//gets called when a tuning is clicked
//should send the correct arry values back to parent
const handleTuningClick = (tuning: number[]) => {
  console.log("event handler callled");
  //set the tuning mode
  console.log(tuning);
};

//each string component is passed the tuning / rotation of the scale
function App() {

  return (
    <div className="body">
      <div className="final-chord">
        C MAJ 7
      </div>
      <div className="tuning-grid">
        <Tuning onClick={(tuning: number[])=>handleTuningClick(tuning)} tuningID={0}/>
        <Tuning onClick={(tuning: number[])=>handleTuningClick(tuning)} tuningID={1}/>
        <Tuning onClick={(tuning: number[])=>handleTuningClick(tuning)} tuningID={2}/>
      </div>
      <div className="string-grid">
        <StringC tuningShift={3}/>
      </div>
    </div>
  );
}

export default App;
