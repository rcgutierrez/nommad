import React, { Component } from 'react';
import Tile from './Tile';
import Map from './Map';

class DisplayContainer extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="displayContainer">
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Map />

      </div>
    );
  }
}

export default DisplayContainer;
