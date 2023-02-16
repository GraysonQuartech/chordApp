
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


/*
*this function is called when a user clicks a note.
*/
//const noteSelected = () => {
//  console.log('note selected');
//}

//each string component is passed the tuning / rotation of the scale
function App() {

  const [arrayFromChild, setArrayFromChild] = useState<number[]>([]);
  const handleArrayFromChild = (numberArray: number[]) => {
    setArrayFromChild(numberArray);
  };

  return (
    <div className="body">
      <div className="final-chord">
        C MAJ 7
      </div>
      <div className="tuning-grid">
        <Tuning tuningID={"STANDARD"}/>
        <Tuning tuningID={"DROP D"}/>
        <Tuning tuningID={"OPEN C"}/>
      </div>
      <div className="string-grid">
        <StringC tuningShift={3}/>
        <StringC tuningShift={4}/>
        <StringC tuningShift={1}/>
        <StringC tuningShift={5}/>
        <StringC tuningShift={5}/>
      </div>
    </div>
  );
}

export default App;
