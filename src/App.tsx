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

  //returns a string with the correct format for the API
  /*
  To get the chords and scales for the notes:
  A F# Eb
  urlencode() your notes so they become:
  A+F%23+Eb
  */
  const formatAPIreq = (NFSarr: noteFretString[]) => {
    const arr = NFSarr.slice().reverse();
    let apiString = "";
    //loop through and update characters and assign them to string
    for (let i = 0; i < arr.length; i++) {
      apiString += arr[i].noteName;
      if (arr[i].noteName != "" && i < arr.length - 1) {
        apiString += "+";
      }
    }
    //replace all instances of '#' with '%23'
    apiString = apiString.replace(/#/g, "%23");
    console.log(apiString);
    return apiString;
  };

  /*
  Displays a reverse string of the noteNames
  Within an NFS array passed to it
  */
  const displayNotes = (NFSarr: noteFretString[]) => {
    const arr = NFSarr.slice().reverse();
    let noteString = "";
    for (let i = 0; i < arr.length; i++) {
      noteString += arr[i].noteName;
      if (i < arr.length - 1 && arr[i].noteName != "") {
        noteString += ", ";
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
      <div className="displayNotes">{formatAPIreq(nFSArr)}</div>
    </div>
  );
}

export default App;
