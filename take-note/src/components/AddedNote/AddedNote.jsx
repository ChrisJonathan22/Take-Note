import React, { Component } from 'react';
import NotesItems from '../NotesItems/NotesItems';

export default class AddedNote extends Component {
    constructor(props) {
        super(props);
    }

    render() {

  return (
    <div>
      <h1>I'm a newly added note!</h1>
      {/* This line triggers an error though which I need to solve. */}
      {/* <NotesItems name = {this.props.newNote} /> */}
    </div>
  )
}
}
