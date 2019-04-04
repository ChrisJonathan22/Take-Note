import React, { Component } from 'react';
import './NotesItems.scss';

export default class NotesItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
          noteInfo: ''
        }
        this.getTitle = this.getTitle.bind(this); // This method will return the title of the list element clicked.
        this.fetchNote = this.fetchNote.bind(this); // Request the information for the clicked item.
    }

    getTitle (e) {
    // let title = e.target.value;
    // let url = "http://localhost:5000/api/notes/" + title;
    console.log(e.target);

    // Get the title then find out the id of the item.
    }

    fetchNote(e) {
      // Store the clicked title and remove the bullet point.
      const noteTitle = e.target.innerText.replace(/[^a-zA-Z ]/g, "");

      console.log(noteTitle);
      // This is requesting data from the api
      fetch(`http://localhost:5000/api/notes/${noteTitle}`)
      // I'm requesting data, turning the response which will be every found note to json.
      .then(res => res.json())
      // I'm saving the response to the state.
      .then(note => this.setState({ noteInfo: note }, () => console.log(note)
      ));
    }

  render() {
    return (
      <div>
        <section id="notes">
            <ul>
                {this.props.notes.map((note) => {
                    return <li key={note.id} onClick={this.fetchNote}>&bull;{note.title}</li>;
                })}
                {this.props.note ? <li key={this.props.note}>{this.props.note.title}</li> : null}
            </ul>
        </section>
      </div>
    )
  }
}
