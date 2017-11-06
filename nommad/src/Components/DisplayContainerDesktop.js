import React, { Component } from 'react';
import Tile from './Tile';
import Map from './Map';
import Toggle from './Toggle';

class DisplayContainerDesktop extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="DisplayContainerDesktop">
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

export default DisplayContainerDesktop;
