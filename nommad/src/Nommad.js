import React, { Component } from 'react';
import axios from 'axios';
import './css/default.css';
import Nav from './Components/Nav';
import DisplayContainerMobile from './Components/DisplayContainerMobile';
import DisplayContainerDesktop from './Components/DisplayContainerDesktop';
import Profile from './Components/Profile';
import MapContainer from './Components/MapContainer';


class Nommad extends Component {
  constructor(props){
    super(props);
  }




  render() {

    return (
      <div className="App">
        <Nav />
        <div className="search">
          <input type="text" placeholder="Search by Zip Code"></input>
          <button type="submit">Search</button>
        </div>

       {/* <DisplayContainerMobile trucks={truckInfoArr} />*/}
        <DisplayContainerDesktop trucks={truckInfoArr} />



      </div>
    );
  }
}

export default Nommad;
