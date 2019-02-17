import React, { Component } from 'react';
import './Notes.scss';

export default class Notes extends Component {
  constructor() {
    super();
    this.state = {
        notes: []
    };
    this.fetchNotes = this.fetchNotes.bind(this);
  }
 
  fetchNotes() {
      // This is requesting data from the api
      fetch('http://localhost:5000/api/notes')
      // I'm requesting data, turning the response which will be every found note to json and then I'm saving it to the state
      .then(res => res.json())
      .then(notesList => this.setState({ notes: notesList }, () => console.log('Notes fetched...')
      ));
  }
    componentDidMount() {
      this.fetchNotes();
  }

    componentDidUpdate() {
      this.fetchNotes();
    }
  

  render() {
    return (
      <div>
        <section id="notes">
          <ul>
            {this.state.notes.map((note) => {
              return <li key="{note.id}">{note.title}</li>;
            })}
          </ul>
        </section>
      </div>
    )
  }
}

