import React from 'react';
import './Note.css';
import type {Note} from './StringC'

interface noteProps {
    noteName: Note;
    color: string;
    setNoteCall: React.Dispatch<React.SetStateAction<Note>>  //this is a setState within the parent comp
}

function NoteC(props: noteProps) {

    const handleButtonClick = () => {  
        props.setNoteCall(props.noteName);     
    }

    return (
        <button 
            className="button"
            style={{backgroundColor: props.color}}
            onClick = {handleButtonClick }
        >
            {props.noteName}
        </button>  
    );
}
  
export default NoteC;