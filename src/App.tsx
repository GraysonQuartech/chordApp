
import React from 'react';
import { useState } from 'react';

import './App.css';
import StringC from './components/StringC'
import Tuning from './components/Tuning'

import myImage from './images/fretboard.png';


function App() {

  const [tuningArr, setTuningArr] = useState<number[]>([4, 11, 7, 2, 9, 4]);
  //receives the tuning array from tuning component
  const handleTuningClick = (tuning: number[]) => {
    setTuningArr(tuning);
  };

  
  const [chordArr, setMyArray] = useState<string[]>(['','','','','','']);
  //receives the note clicked from string componenet
  const handleNoteClick = (note: string, stringNum: number) => {
    setMyArray(chordArr => {
      const newArray = [...chordArr];
      if(5-stringNum<5){
        newArray[5-stringNum] = note+', ';
      }
      else{
        newArray[5-stringNum] = note;
      }
      return newArray;
    });
  };

  return (
    <div className="body">
      <div className="final-chord">
        GUITAR CHORD FINDER
      </div>
      <div className="tuning-grid">
        <Tuning 
          onClick={(tuning: number[])=>handleTuningClick(tuning)} 
          tuningID={0}
        />
        <Tuning 
          onClick={(tuning: number[])=>handleTuningClick(tuning)} 
          tuningID={1}
        />
        <Tuning 
          onClick={(tuning: number[])=>handleTuningClick(tuning)} 
          tuningID={2}
        />
      </div>
      <div className="fretBoardContainer">
        <img className="fretImage" src={myImage} alt="Image" />
        <div className="string-grid">
          <StringC 
            tuningShift={tuningArr[0]}
            onClick={(note: string)=>handleNoteClick(note, 0)} 
          />
          <StringC 
            tuningShift={tuningArr[1]}  
            onClick={(note: string)=>handleNoteClick(note, 1)} 
          />
          <StringC 
            tuningShift={tuningArr[2]}  
            onClick={(note: string)=>handleNoteClick(note, 2)} 
          />
          <StringC 
            tuningShift={tuningArr[3]} 
            onClick={(note: string)=>handleNoteClick(note, 3)} 
          />
          <StringC 
            tuningShift={tuningArr[4]}  
            onClick={(note: string)=>handleNoteClick(note, 4)} 
          />
          <StringC 
            tuningShift={tuningArr[5]}  
            onClick={(note: string)=>handleNoteClick(note, 5)} 
          />
        </div>
      </div>
      <div className="displayNotes">
        {chordArr}
      </div>
    </div>
  );
}

export default App;
