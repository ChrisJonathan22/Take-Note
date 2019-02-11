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
    let title = document.getElementById('title');  // Store the title element.
    let info = document.getElementById('info'); // Store the info element.
    this.setState({
      title: title.value,   // Use the title value and the info value to populate the state.
      info: info.value
    });
    title.value = ""; // Reset the title value.
    info.value = "";  // Reset the info value.
    title.placeholder = "Please enter a title..."; // Reset the title placeholder.
    info.placeholder = "Please enter some info..."; // Reset the info placerholder.

    // Generate the date and time of when the note was created.
    let date = new Date(); // Create a new Date object.
    let day = date.getDate(); // Get the day.
    let month = date.getMonth() + 1;  // Get the month.
    let year = date.getFullYear();  // Get the year.
    let hours = date.getHours();  // Get the hours.
    let minutes = date.getMinutes();  // Get the minutes.
    let dateAndTime = `${day}/${month}/${year} - ${hours}:${minutes}`;  // Concatenate the date and the time.

    // Create an object which will store the title value, the info value and the date + time which will then be sent to the database.
    let note = {
      title: this.state.title,
      info: this.state.info,
      timestamp: dateAndTime
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
