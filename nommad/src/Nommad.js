import React, { Component } from 'react';
import './css/default.css';
import Toggle from './Components/Toggle';
import Nav from './Components/Nav';
import DisplayContainerMobile from './Components/DisplayContainerMobile';
import DisplayContainerDesktop from './Components/DisplayContainerDesktop';

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

        <DisplayContainerDesktop />


      </div>
    );
  }
}

export default Nommad;
