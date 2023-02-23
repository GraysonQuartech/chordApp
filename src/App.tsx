
import React, { useEffect } from 'react';
import { useState} from 'react';
import './App.css';
import StringC from './components/StringC'
import Tuning from './components/Tuning'
import type {Note} from './components/StringC'
import myImage from './images/fretboard.png';

//Creates object type noteFretString template
export type noteFretString = {
  noteName: Note;
  fretNum: number;
  stringNum: number;   
}



//main component function
function App() {

  const [noteFretString, setNFS] = useState<noteFretString>();
  const [tuningArr, setTuningArr] = useState<number[]>([4, 11, 7, 2, 9, 4]);
     
  // const [nFSArray, setString] = useState<null>(null); //this useState gets triggered from stringupdate

  //receives the tuning array from tuning component
  const handleTuningClick = (tuning: number[]) => {
    setTuningArr(tuning);
  };

  //storing each string in an array here, and update the array every time a string/note is updated
  //display that
  //call an API with that data, and display the return
  //useEffect()


  //receives the note clicked from string componenet. ie this function called when note clicked
  //creates and pushes new instance of stringFretNum object to the arr at string
  //const handleNFSArray = (noteName: Note, stringNum: number, fretNum: number) => {
    
    //nFSArray[stringNum] = {noteName, stringNum, fretNum}; 

    //1. pass chordArr and setMyarray to child Note component, and set state
  //};


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
              stringNum={index}
              setNFSCall={setNFS}
            />
          })}
        </div>
      </div>
      <div className="displayNotes">
        'spell chord here..'
      </div>
    </div>
  );
}

export default App;
