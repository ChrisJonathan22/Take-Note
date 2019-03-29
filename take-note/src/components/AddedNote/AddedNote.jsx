import React from 'react';
import NotesItems from '../NotesItems/NotesItems';
import Notes from '../Notes/Notes';

const  AddedNote = props => {
 
console.log(props);
  return (
    <div>
      <h1>I'm a newly added note!</h1>
      {/* This line triggers an error though which I need to solve. */}
      <Notes note = {props.newNote} />
    </div>
  )
}

export default AddedNote;
