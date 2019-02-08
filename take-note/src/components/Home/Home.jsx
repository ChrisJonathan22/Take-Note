import React, { Component } from 'react';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 id="home-title">Welcome to my homepage.</h1>
        {/* This is the form. */}
        <form id="home-form" action="http://localhost:5000" method="POST">
            <label>Title<span>*</span></label>
            <br/>
            <input type="text" name="title" id="title" placeholder="Please enter a title..."/>
            <br/>
            <label>Info<span>*</span></label>
            <br/>
            <textarea name="info" id="info" cols="30" rows="10" placeholder="Please enter some info..."></textarea>
            <br/>
            <input type="submit" value="Add" id="button"/>
        </form>
        {/* This is where each note will be listed. */}
        <section id="notes">
          <ul>
            <li>Home work</li>
            <li>Shopping</li>
            <li>Ring Alice</li>
          </ul>
        </section>
      </div>
    )
  }
}
