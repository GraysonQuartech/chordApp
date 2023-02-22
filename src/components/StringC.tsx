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
const noteButtonColor: string[] = ['black', 'green'];

//receives a note name for the current sting and determines the fret number for it
const getFretNum = (noteName: string) => {
  return fretArr.indexOf(noteName);
}


//gets called when a note button is clicked
//is responsible to toggling off the last note
//on the same string, and toggling on the new note
const swapSelectedNote = (noteName: string) => {
  const fretNum = getFretNum(noteName);
 // selected=1;
}


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

  const [selected, setSelected] = useState(false);

  return (
    <div className="button-row">
      {fretArrTuned.map((noteName) => (
        <button 
          style = {selected ? { backgroundColor: 'green' } : { backgroundColor: 'black' }}
          className="button" 
          key={noteName} 
          onClick={() => {
            props.onClick(noteName)
           // swapSelectedNote(noteName);
            setSelected(!selected);
          }}
          
        >
          {noteName}
        </button>
      ))}
    </div>
  );
}

export default StringC;











