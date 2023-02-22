import React from 'react';
import './StringC.css';
import { useState } from 'react';

interface stringProps{
  tuningShift: number;
  onClick: (note: string) => void; 
}

//index = the fret
//element = the note name   0    1     2    3     4    5    6     7    8     9    10    11
const fretArr: string[] = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
const fretArrSel: number[] = [0, 0,    0,    0,   0,   0,   0,    0,   0,    0,    0,   0];
const noteButtonColor: string[] = ['black', 'green'];

/*
* returns a rotated version of the original chromatic C scale array
* to be displayed. rotations determined by tuning set in parent componenet
*/
function rotateStringArray(array: string[], rotations: number): string[] {
  return array.slice(rotations).concat(array.slice(0, rotations % array.length));
}

function StringC(props: stringProps) {
  
  let fretArrTuned = fretArr;
  fretArrTuned = rotateStringArray(fretArrTuned, props.tuningShift);

  //receives a note name for the current sting 
  //and determines the fret number for it
  const getFretNum = (noteName: string) => {
    return fretArrTuned.indexOf(noteName);
  }

  const [selected, setSelected] = useState(fretArrSel);
  //is responsible to toggling off the last note
  //on the same string, and toggling on the new note
  const swapSelectedNote = (noteName: string) => {
    const fretNum = getFretNum(noteName);
    //loop through and reset all to 0
    for(let i=0; i<fretArrTuned.length; i++){
      fretArrSel[i]=0;
    }
    fretArrSel[fretNum]=1;
    setSelected(fretArrSel);
  }

  return (
    <div className="button-row">
      {fretArrTuned.map((noteName) => (
        <button 
          style = {selected[getFretNum(noteName)] ? { backgroundColor: 'green' } : { backgroundColor: 'black' }}
          className="button" 
          key={noteName} 
          onClick={() => {
            props.onClick(noteName)
            swapSelectedNote(noteName);
          }}
          
        >
          {noteName}
        </button>
      ))}
    </div>
  );
}

export default StringC;











