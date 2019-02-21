import React, { Component } from 'react';
import Home from '../Home/Home';
import './Notes.scss';

export default class Notes extends Component {
  constructor(props) {
    super(props);
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

    // Get the title then find out the id of the item.
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

    componentDidUpdate(prevProps, prevState) {
      // this.fetchNotes();
      // console.log("The component is updating");
      // if(!this.state.notes) {
      //   this.fetchNotes();
      // }
      // if(prevProps,prevState) {
      //   console.log("This is the previous " + prevProps + " and this is the current state " + prevState)
      // }
    }
  
    // shouldComponentUpdate() {
    //   // this.fetchNotes();
    //   // console.log("Should the component update?");
    //   // return true;
    // }


    // You can initial fetch on mount or in constructor. As for responding to add or delete,
    //  those fire events right? So I would put the fetch request in the event handler and 
    //  the state change in the callback

  render() {
    return (
      <div>
        <Home name={"Chris"} />
        <section id="notes">
          <ul>
            {this.state.notes.map((note) => {
              return <li key="{note.id}" onClick={this.getTitle}>{note.title}</li>;
            })}
          </ul>
        </section>
        {/* <Home name="Chris" /> */}
      </div>
    )
  }
}

