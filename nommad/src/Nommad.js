import React, { Component } from 'react';
import axios from 'axios';
import './css/default.css';
import Nav from './Components/Nav';
import DisplayContainerMobile from './Components/DisplayContainerMobile';
import DisplayContainerDesktop from './Components/DisplayContainerDesktop';
import Profile from './Components/Profile';

class Nommad extends Component {
  constructor(props){
    super(props);
  }

    //I'm sorry 
  }



  render() {

    return (
      <div className="App">
        <Nav />
        <div className="search">
          <input type="text" placeholder="Search by Zip Code"></input>
          <button type="submit">Search</button>
        </div>

        //<DisplayContainerDesktop trucks={this.state.isFetchingTrucks ? 'Loading food trucks...' : this.state.foodTruckData } />
        <DisplayContainerDesktop trucks={this.state.trucksArr} />
        <div className="mobileView">
          <DisplayContainerMobile trucks={this.state.trucksArr} />
        </div>

        <DisplayContainerMobile trucks={this.state.trucksArr} />
        <DisplayContainerDesktop trucks={this.state.trucksArr} />


      </div>
    );
  }
}

export default Nommad;
