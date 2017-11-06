import React, { Component } from 'react';
import Tile from './Tile';
import Map from './Map';
import Toggle from './Toggle';

class DisplayContainer extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="displayContainer">
        <Toggle />
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
