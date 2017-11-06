import React, { Component } from 'react';
import Tile from './Tile';
import Map from './Map';
import Toggle from './Toggle';

class DisplayContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="displayContainer">
        <button onClick="showTiles">
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
