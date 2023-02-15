
import React from 'react';
import './App.css';
import StringC from './components/StringC'

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
        <StringC stringTuning={4}></StringC> 
        <StringC stringTuning={11}></StringC>
        <StringC stringTuning={7}></StringC>
        <StringC stringTuning={2}></StringC>
        <StringC stringTuning={9}></StringC>
        <StringC stringTuning={4}></StringC>
      </div>
    </div>
  );
}

export default App;
