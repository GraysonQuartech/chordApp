import React, { useEffect } from 'react';
import './StringC.css';
import { useState } from 'react';
import Note from './NoteC';

//1 note per string
//gather notes across all strings into an array
//need to hold the state of the selected note

//pass color from string to note


interface stringProps{
  tuningShift: number;
  onClick: (note: string, fretNum: number) => void; 
}

export type Note = 'C'|'C#'|'D'|'Eb'|'E'| 'F'| 'F#'| 'G'| 'Ab'| 'A'| 'Bb'| 'B' ; 
//const a: Note = 'C' example of how to set

//index = the fret
//element = the note name   0    1     2    3     4    5    6     7    8     9    10    11
const fretArr: Note[] = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
const noteButtonColor: string[] = ['black', 'green'];

/*
* returns a rotated version of the original chromatic C scale array
* to be displayed. rotations determined by tuning set in parent componenet
*/
function rotateStringArray(array: Note[], rotations: number): Note[] {
  return array.slice(rotations).concat(array.slice(0, rotations % array.length));
}

function StringC(props: stringProps) {
  
  const [note, setNote] = useState<Note|null>(null);
  useEffect(() => {
    console.log(note);
  }, [note])

  let fretArrTuned = fretArr;
  fretArrTuned = rotateStringArray(fretArrTuned, props.tuningShift);

  const getFretNum = (noteName: Note) => {
    return fretArrTuned.indexOf(noteName);
  }

//create a context 
//   alternative to passing props through all 
//   

  return (
    <div>
      <div className="button-row">
        {fretArrTuned.map((noteName)=>{
          return  <Note 
            noteName={noteName} 
            color= {note=== noteName ? "green" : "black"}
            setNote={setNote}
          />;
        })}
      </div>
    <p>{note}</p>
    </div>
  );
}

export default StringC;

/*
<Note
noteName={fretArrTuned[0]}
color = "black"
/>
<Note
noteName={fretArrTuned[1]}
color = "black"
/>
<Note
noteName={fretArrTuned[2]}
color = "black"
/>
<Note
noteName={fretArrTuned[3]}
color = "black"
/>
<Note
noteName={fretArrTuned[4]}
color = "black"
/>
<Note
noteName={fretArrTuned[5]}
color = "black"
/>
<Note
noteName={fretArrTuned[6]}
color = "black"
/>
<Note
noteName={fretArrTuned[7]}
color = "black"
/>
<Note
noteName={fretArrTuned[8]}
color = "black"
/>
<Note
noteName={fretArrTuned[9]}
color = "black"
/>
<Note
noteName={fretArrTuned[10]}
color = "black"
/>
<Note
noteName={fretArrTuned[11]}
color = "black"
/>  
*/







