import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import { BrowserRouter, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Navbar />
          <Route activeClassName = "active" exact path = '/' component = { Home } />
          <Route path = '/about' component = { About } />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
