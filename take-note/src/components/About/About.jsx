import React, { Component } from 'react';
import './About.scss';

export default class About extends Component {
  render() {
    return (
      <div>
        <h1 id="about-title">About</h1>
        <div id="about-para-container">
        <ul>
          <li>Take Note allows users to keep track of important things.</li>
          <li>For each note added a date and time is generated.</li>
        </ul>
        </div>
      </div>
    )
  }
}
