import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      dropMenu: false
    };
    this.dropMenu = this.dropMenu.bind(this);
  }

  // When this function is triggered by the mobile menu button being clicked it will drop down the menu and reveal the menu items.
  dropMenu () {
    let header = document.getElementById('header'); // Store an element with an id of header (The header).
    let menuItems = document.getElementById('menu-items');  //Store an element with an id of menu-items (The list holder).

    if(this.state.dropMenu === false) { // If the value of dropMenu within the state is false do the following.
      this.setState({dropMenu: true});
      console.log(this.state.dropMenu);
      menuItems.style.paddingTop = "100px";
      menuItems.style.display = "block";
      menuItems.style.transition = "padding 100s";

      header.style.height = "200px";
      header.style.transition = "height 2s";
    }

    else {
      this.setState({dropMenu: false});
      console.log(this.state.dropMenu);
      menuItems.style.display = "none";
      header.style.height = "50px";
    }
  }
  render() {
    return (
      <div>
          <section id="header">
              <i className="fas fa-bars" id="mobile-menu-icon" onClick = {this.dropMenu}></i>
              <nav>
                  <ul id="menu-items">
                      <li>
                        <a><NavLink exact to ='/'>Home</NavLink></a>
                      </li>
                      <li>
                      <a><NavLink exact to ='/about'>About</NavLink></a>
                      </li>
                  </ul>
              </nav>
          </section>
      </div>    
    );
  }
}
