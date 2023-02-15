

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



/*
*this function is called when a user clicks a note.
*/
const noteSelected = (rotation: number) => {
  const stringArr: string[] = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
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
  return [...stringArr.slice(normalizedRotations), ...stringArr.slice(0, normalizedRotations)];
}

/*
* Retrieves note name to be displayed 
* Depending on guitar tuning determined 
* In parent componenet 
* notes selected from 
* C C# D Eb E F F# G Ab A Bb B
* standard tuning:  4, 9, 2, 7, 11, 4
*/


function StringC(props: stringProps) {
  return (
    <div className="button-row">
      <button className="button"></button> 
      <button className="button" ></button>
      <button className="button" ></button>
      <button className="button" ></button>
      <button className="button" ></button>
      <button className="button" ></button>
      <button className="button" ></button>
      <button className="button" ></button>
      <button className="button" ></button>
      <button className="button" ></button>
      <button className="button" ></button>
      <button className="button" ></button>
    </div>
  );
}

export default StringC;











