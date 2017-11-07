import React, { Component } from 'react';
import Tile from './Tile';
import Map from './Map';


import Profile from './Profile';


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
      <div className="displayContainerDesktop">
        <div className="resultTiles">
          {resultsArr}
        </div>
        <div className="resultMap">
          <Map trucks={this.state.trucksArr} />
        </div>
      </div>
    );
  }
}

export default DisplayContainerDesktop;
