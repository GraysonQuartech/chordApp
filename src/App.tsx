
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
        <StringC tuningShift={4}/> 
        <StringC tuningShift={9}/>
        <StringC tuningShift={2}/>
        <StringC tuningShift={7}/>
        <StringC tuningShift={11}/>
        <StringC tuningShift={0}/>
      </div>
    </div>
  );
}

export default App;
