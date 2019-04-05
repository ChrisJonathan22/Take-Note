import React, { Component } from 'react';
import NotesItems from '../NotesItems/NotesItems';
import './Notes.scss';

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notes: []
    };
    this.fetchNotes = this.fetchNotes.bind(this); // This method will fetch and store notes inside the state.
  }

    // Create a method to fetch notes from the database.
   fetchNotes() {
      // This is requesting data from the api
      fetch('http://localhost:5000/api/notes')
      // I'm requesting data, turning the response which will be every found note to json.
      .then(res => res.json())
      // I'm saving the response to the state.
      .then(notesList => this.setState({ notes: notesList }, () => console.log('Notes fetched...')
      ));
    }

    // When the component mounts do this.
    componentDidMount() {
      // Run the fetchNotes method.
      this.fetchNotes();
        
    }

    // Whent the component updates do this.
    componentDidUpdate(prevProps) {
      let state = this.state;
      let upDatedNotes;
      const { notes } = this.state;
      const { newNote } = this.props;
      // If the previous prop is different to the new prop do this.
      if(prevProps.newNote !== this.props.newNote) {
        // Add the array of notes from the state to upDatedNotes.
        upDatedNotes = [...notes];
        // Push the newNote to upDateNotes.
        upDatedNotes.push(newNote);
        // Update the state with the upDatedNotes array which contains all previous notes and also the newly added note.
        this.setState({ 
          ...state,
          notes: upDatedNotes });
      }
    }

  
  render() {
    const { notes } = this.state;  
    return (
      <div>
        {/* Render Notes along with the updates list of notes passed in as a prop from Form which is then passed on to NotesItem
          which in return print each item as a list item and then it's of course displayed within Notes itself.
        */}
        {
            notes ?  <NotesItems notes={notes} /> : console.log("There aren't any notes available.")
        }
      </div>
    )
  }
}

