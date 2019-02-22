import React, { Component } from 'react';
import NotesItems from '../NotesItems/NotesItems';
import './Notes.scss';

export default class Notes extends Component {
  constructor() {
    super();
    this.state = {
        notes: []
    };
    this.fetchNotes = this.fetchNotes.bind(this); // This method will fetch and store notes inside the state.
  }

    // Create a method to fetch notes from the database.
   fetchNotes() {
      // This is requesting data from the api
      fetch('http://localhost:5000/api/notes')
      // I'm requesting data, turning the response which will be every found note to json and then I'm saving it to the state
      .then(res => res.json())
      .then(notesList => this.setState({ notes: notesList }, () => console.log('Notes fetched...')
      ));
    }

    // When the component mounts do this.
    componentDidMount() {
        // Run the fetchNotes method.
        this.fetchNotes();
    }

  
  render() {
    return (
      <div>
        {/* Render Notes along with the props from the state but only if the state isn't empty. */}
        {
            this.state.notes ?  <NotesItems notes={this.state.notes} /> : console.log("There aren't any notes available.")
        }
      </div>
    )
  }
}

