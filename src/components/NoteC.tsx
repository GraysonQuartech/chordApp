import React from 'react';
import './Note.css';
import { useState } from 'react';
import type {Note} from './StringC'

interface noteProps {
    noteName: Note;
    color: string;
    setNote: React.Dispatch<React.SetStateAction<Note|null>> 
    //this is a setState within the parent comp
}

function NoteC(props: noteProps) {
    const { noteName, color, setNote} = props; 

   // const [buttonColor, setButtonColor] = useState(props.color);

    const handleButtonClick = () => {
   //     const btnColor = buttonColor===props.color ? "green" : props.color
    //    setButtonColor(btnColor);     
        setNote(noteName);     
    }

    return (
        <button 
            className="button"
            style={{backgroundColor: color}}
            onClick = {handleButtonClick }
        >
            {props.noteName}
        </button>  
    );
}
  
export default NoteC;