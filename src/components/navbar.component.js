import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    const style = { 
      color : '#333'
    }
    return (
      <nav className="navbar navbar-dark bg-light  navbar-expand-lg">
        <Link to="/" className="navbar-brand" style={style}>ExcerTracker</Link>
        
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
            <Link to="/" className="nav-link" style={style} active data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Exercises</Link>
            </li>
            <li class="nav-item">
            <Link to="/create" className="nav-link" style={style} data-toggle="tab" role="tab" aria-controls="Create Exercise Log" aria-selected="false">Create Exercise Log</Link> 
            </li>
            <li class="nav-item">
            <Link to="/user" className="nav-link" style={style} data-toggle="tab" role="tab" aria-controls="Create User" aria-selected="false">Create User</Link> 
            </li>
       </ul>
      </nav>
    );
   
  }

}
