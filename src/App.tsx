
import React from 'react';
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
  return (
    <div className="body">
      <div className="final-chord">
        C MAJ 7
      </div>
      <div className="tuning-grid">
        <Tuning tuningID={0}/>
        <Tuning tuningID={1}/>
        <Tuning tuningID={2}/>
      </div>
      <div className="string-grid">
        <StringC tuningShift={0}/>
        <StringC tuningShift={4}/>
        <StringC tuningShift={5}/>
      </div>
    </div>
  );
}

export default App;
