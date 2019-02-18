import React, { Component } from 'react';
import './Notes.scss';

export default class Notes extends Component {
  constructor() {
    super();
    this.state = {
        notes: []
    };
    this.fetchNotes = this.fetchNotes.bind(this); // This method will fetch and store notes inside the state.
    this.getTitle = this.getTitle.bind(this); // This method will return the title of the list element clicked.
  }
 

  getTitle (e) {
    let title = e.target.value;
    let url = "http://localhost:5000/api/notes/" + title;
    console.log(e.target);
  }

  // componentDidMount() {
  //   let url = "http://localhost:5000/api/notes/" + title;
  //   fetch()
  // }

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
      // this.fetchNotes();
      // if(this.state.notes.lenth < this.state.notes.length) {
      //   this.fetchNotes();
      // }
      let number = 0;
      console.log(`componentDidUpdate has ran ${number} amount of times`);
      number++;
    }
  

  render() {
    return (
      <div>
        <section id="notes">
          <ul>
            {this.state.notes.map((note) => {
              return <li key="{note.id}" onClick={this.getTitle}>{note.title}</li>;
            })}
          </ul>
        </section>
      </div>
    )
  }
}

