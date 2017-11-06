import React, { Component } from 'react';
import Tile from './Tile';
import Map from './Map';
<<<<<<< HEAD
=======


import Profile from './Profile';

>>>>>>> 973c33885d53bfc340de78034154edf80b043b60

class DisplayContainerDesktop extends Component {
  constructor(props){
    super(props);
    this.state = {
      showingTiles: true,
      trucksArr: this.props.trucks
    }
  }
  render() {
    let resultsArr = this.state.trucksArr.map((truck, index)=><Tile key={index} truck={truck} />);
    return (
      <div className="DisplayContainerDesktop">
        <div className="resultTiles">
          {resultsArr}
        </div>
        <div className="resultMap">
          <Map />
        </div>
      </div>
    );
  }
}

export default DisplayContainerDesktop;
