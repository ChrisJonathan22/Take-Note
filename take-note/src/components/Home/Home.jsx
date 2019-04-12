import React, { Component } from 'react';
import Form from '../Form/Form';
import './Home.scss';

export default class Home extends Component {

  render() {
    return (
      <div>
        <div id="push-down"></div>
        <h1 id="home-title">Take Note</h1>
        <section id="container">
          {/* This is the form. */}
            <Form />
          {/* This is where each note will be listed. */}
        </section>
      </div>
    )
  }
}
