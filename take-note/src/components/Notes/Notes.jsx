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
    // this.checkNotes = this.checkNotes.bind(this);
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

    // componentWillReceiveProps(prevProp) {
    //   // if a prop is received fetch new data.
    //   // this.fetchNewData();
    //   this.fetchNotes();
    // }

    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.getData !== prevProps.getData) {
        this.fetchNotes();
      }
    }

    fetchNewData() {
      const { getData } = this.props;
      if(getData === true) {
        this.fetchNotes();
      }
      else {
        console.log("No need to fetch.");
      }
    }
  
  render() {
    const { notes } = this.state;  
    const { note } = this.props;  
    console.log(this.props);
    return (
      <div>
        {/* Render Notes along with the props from the state but only if the state isn't empty. */}
        {
            notes ?  <NotesItems notes={notes} note = {note} /> : console.log("There aren't any notes available.")
        }
      </div>
    )
  }
}

