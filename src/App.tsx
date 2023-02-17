
import React from 'react';
import { useState } from 'react';

import './App.css';
import StringC from './components/StringC'
import Tuning from './components/Tuning'


function App() {

  const [tuningArr, setTuningArr] = useState<number[]>([4, 9, 2, 7, 11, 4]);

  //receives the tuning array from tuning component
  const handleTuningClick = (tuning: number[]) => {
    setTuningArr(tuning);
  };

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
