import React, { Component } from 'react';
import './NotesItems.scss';

export default class NotesItems extends Component {
    constructor(props) {
        super(props);
        console.log(this);
        this.getTitle = this.getTitle.bind(this); // This method will return the title of the list element clicked.
    }

    getTitle (e) {
    // let title = e.target.value;
    // let url = "http://localhost:5000/api/notes/" + title;
    console.log(e.target);

    // Get the title then find out the id of the item.
    }

    
  render() {
    return (
      <div>
        <section id="notes">
            <ul>
                {this.props.notes.map((note) => {
                    return <li key={note.id} onClick={this.getTitle}>{note.title}</li>;
                })}
            </ul>
        </section>
      </div>
    )
  }
}
