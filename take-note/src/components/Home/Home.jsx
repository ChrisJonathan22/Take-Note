import React, { Component } from 'react';
import './Home.scss';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      info: ""
    };

    this.sendData = this.sendData.bind(this); // Initialise a method to send data.
  }

  // Create a method called sendData to send notes to the database.
  sendData () {
    let title = document.getElementById('title').value; // Store the value of title.
    let info = document.getElementById('info').value; // Store the value of info.

    this.setState({
      title: title,   // Use the title value and the info value to populate the state.
      info: info
    });

    // Create an object which will store the title value and also the info value which will then be sent to the database.
    let note = {
      title: this.state.title,
      info: this.state.info
    };

    // Create a fetch 'post' request to send the object containing the note data to the database.
    fetch('http://localhost:5000/api/addNote', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)  // Turn the note object to json.
    })
    .then((res) => {
      console.log('Data send!');  // Log this message if the data has been sent successfully.
    })
    .then(() => {
      title.value = " ";
      info.value = " ";
    });
  }


  render() {
    return (
      <div>
        <h1 id="home-title">Take Note</h1>
        <section id="container">
        {/* This is the form. */}
        <form id="home-form">
            <label>Title<span>*</span></label>
            <br/>
            <input type="text" name="title" id="title" placeholder="Please enter a title..."/>
            <br/>
            <label>Info<span>*</span></label>
            <br/>
            <textarea name="info" id="info" cols="30" rows="10" placeholder="Please enter some info..."></textarea>
            <br/>
            <input type="button" value="Add" id="button" onClick = {this.sendData}/>
        </form>
         {/* This is where each note will be listed. */}
         <section id="notes">
          <ul>
            <li>Home work</li>
            <li>Shopping</li>
            <li>Ring Alice</li>
          </ul>
        </section>
        </section>
      </div>
    )
  }
}
