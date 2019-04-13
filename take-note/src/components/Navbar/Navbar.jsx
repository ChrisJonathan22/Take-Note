import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      dropMenuStatus: false
    };
    this.dropMenu = this.dropMenu.bind(this);
  }

  // When this function is triggered by the mobile menu button being clicked it will drop down the menu and reveal the menu items.
  dropMenu () {
    let header = document.getElementById('header'); // Store an element with an id of header (The header).
    let menuItems = document.getElementById('menu-items');  //Store an element with an id of menu-items (The list holder).

    if(this.state.dropMenuStatus === false) { // If the value of dropMenu within the state is false do the following.
      this.setState({dropMenuStatus: true});
      menuItems.className = 'showMenuItems';
      header.className = 'showDropDownMenu';
    }

    else {
      this.setState({dropMenuStatus: false});
      console.log(this.state.dropMenuStatus);
      menuItems.className = 'hideMenuItems';
      header.className = 'hideDropDownMenu';
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
                        <NavLink exact to ='/'>Home</NavLink>
                      </li>
                      <li>
                        <NavLink exact to ='/about'>About</NavLink>
                      </li>
                  </ul>
              </nav>
          </section>
      </div>    
    );
  }
}
