import React, { useEffect } from 'react';
import './StringC.css';
import { useState } from 'react';
import Note from './NoteC';
import type {noteFretString} from '../App';

//1 note per string
//gather notes across all strings into an array
//need to hold the state of the selected note
//pass color from string to note

interface stringProps{
  tuningShift: number;
  stringNum: number;
  setNFSCall: React.Dispatch<React.SetStateAction<noteFretString>>;  //this is a setState within the parent comp
}

export type Note = 'C'|'C#'|'D'|'Eb'|'E'| 'F'| 'F#'| 'G'| 'Ab'| 'A'| 'Bb'| 'B' ;  
//element = the note name   0    1     2    3     4    5    6     7    8     9    10    11
const fretArr: Note[] = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];


/*returns a rotated version of the original chromatic C scale array
  to be displayed. rotations determined by tuning set in parent componenet*/
function rotateStringArray(array: Note[], rotations: number): Note[] {
  return array.slice(rotations).concat(array.slice(0, rotations % array.length));
}


function StringC(props: stringProps) {  

  //let myNoteFretString: noteFretString = {
  //  noteName: 'C',
  //  fretNum: -1,
  //  stringNum: -1,
  //};

  let fretArrTuned = fretArr;
  fretArrTuned = rotateStringArray(fretArrTuned, props.tuningShift);

  const getFretNum = (noteName: Note) => {
    return fretArrTuned.indexOf(noteName);
  }


  //this useState gets triggered from NoteC on click. 
  const [note, setNote] = useState<Note>();
  
  //gets triggered when note updated, and passes data up to useState in APP
  useEffect(() => {
    props.setNFSCall({noteName: note ? note :'C', fretNum: getFretNum(note), stringNum: props.stringNum});
  }, [note])

  return (
    <div>
      <div className="button-row">
        {fretArrTuned.map((noteName, index)=>{
          return  <Note 
            noteName={noteName} 
            color= {((note === noteName)) ? "green" : "black"}
            setNoteCall={setNote}
          />;
        })}
      </div>
    </div>
  );
}

export default StringC;









