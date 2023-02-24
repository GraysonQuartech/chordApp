import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import StringC from "./components/StringC";
import Tuning from "./components/Tuning";
import type { NoteType } from "./components/StringC";
import myImage from "./images/fretboard.png";

//Creates object type noteFretString template
export type noteFretString = {
  noteName: NoteType;
  fretNum: number;
  stringNum: number;
};

const nFSArr: noteFretString[] = new Array(6).fill({
  noteName: "",
  fretNum: 0,
  stringNum: 0,
});

//main component function
function App() {
  const [tuningArr, setTuningArr] = useState<number[]>([4, 11, 7, 2, 9, 4]);
  const [noteFretString, setNFS] = useState<noteFretString>();

  //receives the tuning array from tuning component
  const handleTuningClick = (tuning: number[]) => {
    setTuningArr(tuning);
  };

  //receives the note fret and string, from string
  const nfsReceived = (nfs: noteFretString) => {
    nFSArr[nfs.stringNum] = nfs;
    setNFS(nfs);
  };

  const displayNotes = (arr: noteFretString[]) => {
    let noteString = "";
    for (let i = 0; i < arr.length; i++) {
      noteString += arr[i].noteName;
      if (i < arr.length - 1 && arr[i].noteName != "") {
        noteString += "   ";
      }
    }
    console.log(noteString);
    return noteString;
  };

  return (
    <div className="body">
      <div className="final-chord">GUITAR CHORD FINDER</div>
      <div className="tuning-grid">
        <Tuning
          onClick={(tuning: number[]) => handleTuningClick(tuning)}
          tuningID={0}
        />
        <Tuning
          onClick={(tuning: number[]) => handleTuningClick(tuning)}
          tuningID={1}
        />
        <Tuning
          onClick={(tuning: number[]) => handleTuningClick(tuning)}
          tuningID={2}
        />
      </div>
      <div className="fretBoardContainer">
        <img className="fretImage" src={myImage} alt="" />
        <div className="string-grid">
          {tuningArr.map((noteName, index) => {
            return (
              <StringC
                tuningShift={noteName}
                stringNum={index}
                setNFSCall={nfsReceived}
              />
            );
          })}
        </div>
      </div>
      <div className="displayNotes">{displayNotes(nFSArr)}</div>
    </div>
  );
}

export default App;
