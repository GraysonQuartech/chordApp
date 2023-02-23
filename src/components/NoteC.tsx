import React from "react";
import "./Note.css";
import type { NoteType } from "./StringC";

interface noteProps {
  noteName: NoteType;
  color: string;
  setNoteCall: (noteName: NoteType) => void; //this is a setState within the parent comp
}

function NoteC(props: noteProps) {
  const handleButtonClick = () => {
    props.setNoteCall(props.noteName);
  };

  return (
    <button
      className="button"
      style={{ backgroundColor: props.color }}
      onClick={handleButtonClick}
    >
      {props.noteName}
    </button>
  );
}

export default NoteC;
