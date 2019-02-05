import React, { Component } from 'react';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 id="home-title">Welcome to my homepage.</h1>
        <form id="home-form" action="http://localhost:5000" method="POST">
            <label>Title</label>
            <br/>
            <input type="text" name="title" id="title" placeholder="Enter a title..."/>
            <br/>
            <label>Info</label>
            <br/>
            <textarea name="info" id="info" cols="30" rows="10" placeholder="Please enter some info..."></textarea>
        </form>
      </div>
    )
  }
}
