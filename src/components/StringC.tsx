import React from 'react';
import './StringC.css';

interface stringProps{
  tuningShift: number;
}

//index = the fret
//element = the note name   0    1     2    3     4    5    6     7    8     9    10    11
const fretArr: string[] = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

//receives a note name for the current sting and determines the fret number for it
const getFretNum = (noteName: string) => {
  return fretArr.indexOf(noteName);
}
//retrived the note name at a particular fret num for the current string
const getNoteName = (fretNum: number) => {
  return fretArr[fretNum];
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
  //console.log("here");
  //console.log(fretArr);

  const handleClick = (noteName: string) => {
    console.log(`Clicked on ${noteName}`);
  };

  return (
    <div className="button-row">
      {fretArrTuned.map((noteName) => (
        <button className="button" key={noteName} onClick={() => handleClick(noteName)}>
          {noteName}
        </button>
      ))}
    </div>
  );
}

export default StringC;











