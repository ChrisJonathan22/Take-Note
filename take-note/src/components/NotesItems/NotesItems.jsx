import React, { Component } from 'react';
import './NotesItems.scss';




export default class NotesItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
          noteInfo: '',
          showCard: false
        }
        this.fetchNote = this.fetchNote.bind(this); // Request the information for the clicked item.
        this.togglecard = this.togglecard.bind(this); // Show card when a note is clicked.
        this.handleClick = this.handleClick.bind(this); // This method will trigger both fetchNote and toggle Card.
        this.deleteNote = this.deleteNote.bind(this); // This method will delete a note.
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
      .then(note => this.setState({ 
        noteInfo: note.item,
      }, () => console.log(note.item)
      ));
    }

    togglecard() {
      const { state, showCard } = this.state;
      if(showCard === false) {
        this.setState({ 
          ...state,
          showCard: true
         });
      }
      else {
        this.setState({ 
          ...state,
          showCard: false
         });
      }
      
       console.log(this.state.showCard);
    }



    handleClick(e) {
      this.fetchNote(e);
      this.togglecard();
    }

    deleteNote() {
      const { noteInfo } = this.state;
      console.log(noteInfo);
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
            {showCard ?
              noteInfo ?  
                <div id="note-card" onClick={this.togglecard}>
                  <h3 id="note-title">{noteInfo.title}</h3>
                  <p id="note-info">{noteInfo.info}</p>
                  <p id="note-timestamp">Timestamp: {noteInfo.timestamp}</p>
                  <p id="how-to-close">Click anywhere inside this card to hide it.</p>
                  <button id="delete-note" onClick={this.deleteNote}>Delete</button>
                </div>
              :
              null  
            :
            null
            }
            {
              console.log('Here is your note',noteInfo.item)
            }
        </section>
      </div>
    )
  }
}
