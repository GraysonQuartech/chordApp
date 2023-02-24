import React, { useEffect } from "react";
import "./StringC.css";
import { useState } from "react";
import Note from "./NoteC";
import type { noteFretString } from "../App";

//1 note per string
//gather notes across all strings into an array
//need to hold the state of the selected note
//pass color from string to note

interface stringProps {
  tuningShift: number;
  stringNum: number;
  setNFSCall: (nfs: noteFretString) => void; //this is a setState within the parent comp
}

export type NoteType =
  | ""
  | "C"
  | "C#"
  | "D"
  | "Eb"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "Ab"
  | "A"
  | "Bb"
  | "B";
//element = the note name   0    1     2    3     4    5    6     7    8     9    10    11
const fretArr: NoteType[] = [
  "C",
  "C#",
  "D",
  "Eb",
  "E",
  "F",
  "F#",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];

/*returns a rotated version of the original chromatic C scale array
  to be displayed. rotations determined by tuning set in parent componenet*/
function rotateStringArray(array: NoteType[], rotations: number): NoteType[] {
  return array
    .slice(rotations)
    .concat(array.slice(0, rotations % array.length));
}

function StringC(props: stringProps) {
  //let myNoteFretString: noteFretString = {
  //  noteName: 'C',
  //  fretNum: -1,
  //  stringNum: -1,
  //};

  let fretArrTuned = fretArr;
  fretArrTuned = rotateStringArray(fretArrTuned, props.tuningShift);

  const getFretNum = (noteName: NoteType) => {
    return fretArrTuned.indexOf(noteName);
  };

  //this useState gets triggered from NoteC on click.
  const [note, setNote] = useState<NoteType>();
  const setReceivedNote = (receivedNote: NoteType) => {
    setNote(receivedNote);
  };

  //gets triggered when note updated, and passes data up to useState in APP
  useEffect(() => {
    // if check here prevents error on NULL
    if (note) {
      props.setNFSCall({
        noteName: note,
        fretNum: getFretNum(note),
        stringNum: props.stringNum,
      });
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [note, props.stringNum]);

  return (
    <div>
      <div className="button-row">
        {fretArrTuned.map((noteName, index) => {
          return (
            <Note
              key={index}
              noteName={noteName}
              color={note === noteName ? "green" : "black"}
              setNoteCall={setReceivedNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StringC;
