
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

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

  //handler function for API/display
  
  const [chordArr, setMyArray] = useState<string[]>(['','','','','','']);
  //receives the note clicked from string componenet
  const handleNoteClick = (note: string, stringNum: number, fretNum: number) => {

    //1create an object type that controns note,string,fret 
       //create empty array 
    //when u click a note, add an object of that type, 
      //to an array in the parent componenet
    //1. pass chordArr and setMyarray to child Note component, and set state
    //OR
    //2. create a CONTEXT that wraps around child components that provides state of the chordArr object 

    //create helper function that takes a parameter of that object 
    //

    /*
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
    */
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
          {tuningArr.map((noteName, index)=>{
            return <StringC 
              tuningShift={noteName}
              onClick={(note: string, fretNum: number)=>handleNoteClick(note, index, fretNum)}  
            />
          })}
        </div>
      </div>
      <div className="displayNotes">
        {chordArr}
      </div>
    </div>
  );
}

export default App;
