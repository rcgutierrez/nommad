import React, { Component } from 'react';
import Tile from './Tile';
import Map from './Map';

class DisplayContainerDesktop extends Component {
  constructor(props){
    super(props);
    this.state = {
      trucksArr: ["this is tile one", "this is tile two"]
    }
  }
  render() {
    let resultsArr = this.state.trucksArr.map((truck, index)=><Tile key={index} truck={truck} />);
    return (
      <div className="DisplayContainerDesktop">
        {resultsArr}
        <Map />

      </div>
    );
  }
}

export default DisplayContainerDesktop;
