
import React from 'react';
import { useState } from 'react';

import './App.css';
import StringC from './components/StringC'
import Tuning from './components/Tuning'

let tuningArr: number[] = [0,0,0,0,0,0];

//receives the tuning array from tuning component
const handleTuningClick = (tuning: number[]) => {
  tuningArr = tuning;
  console.log(tuningArr);
};


function App() {

  return (
    <div className="body">
      <div className="final-chord">
        GUITAR CHORD FINDER
      </div>
      <div className="tuning-grid">
        <Tuning onClick={(tuning: number[])=>handleTuningClick(tuning)} tuningID={0}/>
        <Tuning onClick={(tuning: number[])=>handleTuningClick(tuning)} tuningID={1}/>
        <Tuning onClick={(tuning: number[])=>handleTuningClick(tuning)} tuningID={2}/>
      </div>
      <div className="string-grid">
        <StringC tuningShift={tuningArr[0]}/>
        <StringC tuningShift={tuningArr[1]}/>
        <StringC tuningShift={tuningArr[2]}/>
        <StringC tuningShift={tuningArr[3]}/>
        <StringC tuningShift={tuningArr[4]}/>
        <StringC tuningShift={tuningArr[5]}/>
      </div>
    </div>
  );
}

export default App;
