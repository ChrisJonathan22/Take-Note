import React, { Component } from 'react';
import './Navbar.scss';

export default class Navbar extends Component {
  render() {
    return (
      <div>
          <section id="header">
              <nav>
                  <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                  </ul>
              </nav>
          </section>
      </div>    
    );
  }
}
