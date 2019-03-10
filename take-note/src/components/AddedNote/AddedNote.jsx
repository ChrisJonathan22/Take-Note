import React, { Component } from 'react';
import NotesItems from '../NotesItems/NotesItems';
import Notes from '../Notes/Notes';

export default class AddedNote extends Component {
    constructor(props) {
        super(props);
    }

    render() {
  console.log(this.props);
  return (
    <div>
      <h1>I'm a newly added note!</h1>
      {/* This line triggers an error though which I need to solve. */}
      <Notes note = {this.props.newNote} />
    </div>
  )
}
}
