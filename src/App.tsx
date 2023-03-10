import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import StringC from "./components/StringC";
import Tuning from "./components/Tuning";
import type { NoteType } from "./components/StringC";
import myImage from "./images/fretboard.png";
import axios from "axios";

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

let finalChord = " ";

//main component function
function App() {
  const [tuningArr, setTuningArr] = useState<number[]>([4, 11, 7, 2, 9, 4]);
  const [noteFretString, setNFS] = useState<noteFretString>();
  const [updatedFinalChord, setUpdatedFinalChord] = useState<string>("");

  //receives the tuning array from tuning component
  const handleTuningClick = (tuning: number[]) => {
    setTuningArr(tuning);
  };

  //receives the note fret and string, from string
  const nfsReceived = (nfs: noteFretString) => {
    nFSArr[nfs.stringNum] = nfs;
    setNFS(nfs);
  };

  /*
   *rotates a string and returns true if a rotation of it matches the other string
   */
  function areRotationsEqual(str1: string, str2: string): boolean {
    const str1Substrings = str1.split(" ").sort();
    const str2Substrings = str2.split(" ").sort();

    if (str1Substrings.length !== str2Substrings.length) {
      return false;
    }

    for (let i = 0; i < str1Substrings.length; i++) {
      if (!str2Substrings.includes(str1Substrings[i])) {
        return false;
      }
    }

    return true;
  }

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
      if (arr[i].noteName !== "" && i < arr.length - 1) {
        apiString += "+";
      }
    }
    //replace all instances of '#' with '%23'
    apiString = apiString.replace(/#/g, "%23");
    return apiString;
  };

  /*
   *Sends the API the chord notes and receives all the chords that contain those notes
   */
  const getChordsScales = () => {
    let parsedResponse = [];

    axios
      .get(
        "http://www.tofret.com/reverse-chord-finder.php?return-type=json&notes=" +
          formatAPIreq(nFSArr)
      )
      .then((response) => {
        parsedResponse = JSON.parse(response.request.responseText);

        for (const [chordName, chordData] of Object.entries(
          parsedResponse.chords
        )) {
          Object.entries(chordData as Record<string, string>).map(
            ([voicingName, voicingNotes]) => {
              if (
                areRotationsEqual(
                  voicingNotes,
                  removeDuplicates(convertNotesToString(nFSArr))
                )
              ) {
                console.log(" ");
                console.log("YOUR CHORD: " + chordName + " " + voicingName);
                finalChord = chordName + " " + voicingName;
              } else {
                console.log("its not: " + chordName + " " + voicingName);
                console.log(
                  "comparing " +
                    voicingNotes +
                    " TO " +
                    removeDuplicates(convertNotesToString(nFSArr))
                );
              }
            }
          );
        }
        setUpdatedFinalChord(finalChord);
      });
  };

  //receives a string and removes duplicates from it
  //maintains initial order.. LOL becomes LO
  const removeDuplicates = (str: string): string => {
    const uniqueChars = new Set<string>();
    let result = "";
    let index = 0;
    for (const char of str) {
      if (!uniqueChars.has(char)) {
        uniqueChars.add(char);
        result += char;
        result = result.trimEnd();
        if (char !== "#" && char != "b") {
          result += " ";
        }
        if (str[index + 1] === "#" || str[index + 1] === "b") {
          result = result.trimEnd();
        }
      }
      index++;
    }
    return result.trimEnd();
  };

  //converts to notes to string.
  const convertNotesToString = (NFSarr: noteFretString[]) => {
    const arr = NFSarr.slice().reverse();
    let noteString = "";
    for (let i = 0; i < arr.length; i++) {
      noteString += arr[i].noteName;
      if (arr[i].noteName != "") {
        noteString.trimEnd();
        noteString += " ";
      }
    }
    return noteString.trimEnd();
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
      if (i < arr.length - 1 && arr[i].noteName !== "") {
        noteString += ", ";
      }
    }
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
      <div className="displayNotes">{updatedFinalChord}</div>
      <button onClick={getChordsScales}>GET CHORD</button>
      <div className="displayNotes"></div>
    </div>
  );
}

export default App;
