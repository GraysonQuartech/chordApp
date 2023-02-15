
import React from 'react';
import './App.css';
import StringC from './components/StringC'


const standardTuning: number[] = [4, 9, 2, 7, 11, 4];
const dropDTuning: number[] = [2, 9, 2, 7, 11, 4];
const openCTuning: number[] = [0, 7, 0, 7, 0, 4];

/*
*this function is called when a user clicks a note.
*/
const noteSelected = () => {
  console.log('note selected');
}

//each string component is passed the tuning / rotation of the scale
function App() {
  return (
    <div className="body">
      <div className="final-chord">
        C MAJ 7
      </div>
      <div>
        TUNING: Standard
      </div>
      <div className="string-grid">
        <StringC tuningShift={4}/> 
        <StringC tuningShift={9}/>
        <StringC tuningShift={2}/>
        <StringC tuningShift={7}/>
        <StringC tuningShift={11}/>
        <StringC tuningShift={4}/>
      </div>
    </div>
  );
}

export default App;
