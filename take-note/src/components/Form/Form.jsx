import React, { Component } from 'react';
import Notes from '../Notes/Notes';

import './Form.scss';
export default class Form extends Component {
    constructor() {
        super();
        this.state = {
          newItem: {}
        };
    
        this.sendData = this.sendData.bind(this); // This method will post the data.
        this.clearInputValue = this.clearInputValue.bind(this); // This method will clear both the input fields.
        this.resetInputPlaceholder = this.resetInputPlaceholder.bind(this); // This method will reset both input placeholders.
        this.getDateAndTime = this.getDateAndTime.bind(this); // This method will save the current date and time.
        this.resetBorderColor = this.resetBorderColor.bind(this); // This method will be triggered when a user starts typing a title or some info and it will reset the border color to lightgrey.
      }
      // This method will save the current date and time.
  getDateAndTime () {
    let date = new Date(); // Create a new Date object.
    let day = date.getDate(); // Get the day.
    let month = date.getMonth() + 1;  // Get the month.
    let year = date.getFullYear();  // Get the year.
    let hours = date.getHours();  // Get the hours.
    if(hours < 10) hours = `0${hours}`; // If the hour is less than 10 add 0 before it.
    let minutes = date.getMinutes();  // Get the minutes.
    if(minutes < 10) minutes = `0${minutes}`; // If the minute is less than 10 add 0 before it.
    let dateAndTime = `${day}/${month}/${year} - ${hours}:${minutes}`;  // Concatenate the date and the time.
    return dateAndTime;
  }

  // This method will clear both the input fields.
  clearInputValue () {
    document.getElementById('title').value = "";  // Clear the title value.
    document.getElementById('info').value = ""; // Clear the info value.
  }

  // This method will reset both input placeholders.
  resetInputPlaceholder () {
    document.getElementById('title').placeholder = "Please enter a title..."; // Reset the title placeholder.
    document.getElementById('info').placeholder = "Please enter some info..."; // Reset the info placerholder.
  }

  // This method resets the title and textarea border color to lightgrey when a user starts typing.
  resetBorderColor (e) {
      // e.target represents the element which triggered the event and
      // the element responsible will have its borderColor changed to lightgrey.
      e.target.style.borderColor = "lightgrey"; 
  }

  // Create a method called sendData to send notes to the database.
  sendData () {

    if(document.getElementById('title').value === "" || document.getElementById('info').value === "") { // If the title or the info is empty do this.
      document.getElementById('title').style.borderColor = "red"; // Change the title's border color to red.
      document.getElementById('info').style.borderColor = "red";  // Change the info's border color to red.
    }
    else {  // If the title and info aren't empty do this.
        // Create an object which will store the title value, the info value and the date + time which will then be sent to the database.
    let note = {
      title: document.getElementById('title').value,  // Store the title value.
      info: document.getElementById('info').value,  // Store the info value.
      timestamp: this.getDateAndTime() // Store the date and the time.
    };
    
    this.setState({newItem: note}); // Replace the empty object inside the state with the newly created object.
    this.clearInputValue ();  // Clear the title & info values.
    this.resetInputPlaceholder(); // Reset the title and info placeholders.
    
    
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
      console.log('Data sent!');  // Log this message if the data has been sent successfully.
    });
    }
  }  

  render() {
    const { newItem } = this.state;
    return (
      <div>
        <form id="home-form">
            <label>Title<span>*</span></label>
            <br/>
            <input type="text" name="title" id="title" placeholder="Please enter a title..." onKeyDown = {this.resetBorderColor} autoComplete="off"/>
            <br/>
            <label>Info<span>*</span></label>
            <br/>
            <textarea name="info" id="info" cols="30" rows="10" placeholder="Please enter some info..." onKeyDown = {this.resetBorderColor}></textarea>
            <br/>
            <input type="button" value="Add" id="button" onClick = {this.sendData}/>
        </form>
        {/* Once I've added a new note pass it to Notes as a prop. */}
        <Notes newNote={newItem} />
      </div>
    )
  }
}
