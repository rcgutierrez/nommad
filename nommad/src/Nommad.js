import React, { Component } from 'react';
import './App.css';
import Toggle from './Components/Toggle';
import Nav from './Components/Nav';
import DisplayContainer from './Components/DisplayContainer';

class Nommad extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <div className="seach">
          <input type="text" placeholder="Search by Zip Code"></input>
          <button type="submit">Search</button>
        </div>
        <Toggle />
        <DisplayContainer />


      </div>
    );
  }
}

export default Nommad;
