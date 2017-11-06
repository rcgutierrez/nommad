import React, { Component } from 'react';
import './css/default.css';
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
    const results = "the search results are here";
    console.log(results);
    let result = "ok will this?";
    return (
      <div className="App">
        <Nav />
        <div className="search">
          <input type="text" placeholder="Search by Zip Code"></input>
          <button type="submit">Search</button>
        </div>

        <DisplayContainerDesktop results={results} />
        <DisplayContainerMobile results={result} />


      </div>
    );
  }
}

export default Nommad;
