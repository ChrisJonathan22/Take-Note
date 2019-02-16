import React, { Component } from 'react';
import './Notes.scss';

export default class Notes extends Component {
  render() {
    return (
      <div>
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

