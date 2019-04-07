import React, { Component } from 'react';
import './NotesItems.scss';




export default class NotesItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
          noteInfo: '',
          showCard: 0
        }
        this.fetchNote = this.fetchNote.bind(this); // Request the information for the clicked item.
        this.togglecard = this.togglecard.bind(this); // Show card when a note is clicked.
        this.handleClick = this.handleClick.bind(this); // This method will trigger both fetchNote and toggle Card.
    }


    fetchNote(e) {
      // Store the clicked title and remove the bullet point.
      const noteTitle = e.target.innerText.replace(/[^a-zA-Z ]/g, "");
      const state = this.state;

      console.log(noteTitle);
      // This is requesting data from the api
      fetch(`http://localhost:5000/api/notes/${noteTitle}`)
      // I'm requesting data, turning the response which will be every found note to json.
      .then(res => res.json())
      // I'm saving the response to the state.
      .then(note => this.setState({ 
        ...state,
        noteInfo: note,
      }, () => console.log(note)
      ));
    }

    togglecard() {
      const state = this.state;
      this.setState({ 
        ...state,
        showCard: 1
       });
    }

    handleClick(e) {
      this.fetchNote(e);
      this.togglecard();
      console.log(this.state.showCard);
    }
   
  render() {
    const { showCard, noteInfo } = this.state;
    const { notes, note } = this.props;
    return (
      <div>
        <section id="notes">
            <ul>
                {notes.map((note) => {
                    return <li key={note.id} onClick={this.handleClick}>&bull;{note.title}</li>;
                })}
                {note ? <li key={note} onClick={this.handleClick}>{note.title}</li> : null}
            </ul>
            {showCard !== 0 ? 
            <div id="noteCard">
              <h3>{noteInfo.title}</h3>
              <p>{noteInfo.info}</p>
            </div>
            :
            null
            }
            {
              1 < 0 ? <h1>1 is bigger than 0</h1> : <h1>Wrong! wrong! wrong!</h1>
            }
        </section>
      </div>
    )
  }
}
