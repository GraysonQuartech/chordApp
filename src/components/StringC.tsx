

/*
APP sends the tuning for a string
StringC receives tuning number
StringC rotates the chromatic scale array to that number
StringC displays each element of the array in a button
*/

import React from 'react';
import './StringC.css';


interface stringProps{
  stringTuning: number;
}

//index = the fret
//element = the note name
const stringArr: string[] = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

//receives an element and determines the fret number for it
const getFretNum = (noteName: string) => {
  return stringArr.indexOf(noteName);
}
const getNoteName = (fretNum: number) => {
  return stringArr[fretNum];
}

const noteSelected = (rotation: number) => {
  console.log('note selected');
  rotateStringArray(stringArr, rotation);
}

/*
* returns a rotated version of the original chromatic C scale array
* to be displayed. rotations determined by tuning set in parent componenet
*/
function rotateStringArray(stringArr: string[], rotations: number): string[] {
  const length = stringArr.length;
  const normalizedRotations = ((rotations % length) + length) % length;
  //console.log([...stringArr.slice(normalizedRotations), ...stringArr.slice(0, normalizedRotations)]);
  stringArr = [...stringArr.slice(normalizedRotations), ...stringArr.slice(0, normalizedRotations)];
  console.log(stringArr);
  return stringArr;
}


/*
* Retrieves note name to be displayed 
* Depending on guitar tuning determined 
* In parent componenet 
* notes selected from 
* C C# D Eb E F F# G Ab A Bb B
* standard tuning:  4, 9, 2, 7, 11, 4
*/

//selected property for each element in the array. object array val and selected. 
//display each element

function StringC(props: stringProps) {

  noteSelected(props.stringTuning);

  const handleClick = (noteName: string) => {
    console.log(`Clicked on ${noteName}`);
  };

  return (
    <div className="button-row">
      {stringArr.map((noteName) => (
        <button className="button" key={noteName} onClick={() => handleClick(noteName)}>
          {noteName}
        </button>
      ))}
    </div>
  );
}

export default StringC;











