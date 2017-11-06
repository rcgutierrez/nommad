import React, { Component } from 'react';
import Tile from './Tile';
import Map from './Map';
import Toggle from './Toggle';

class DisplayContainerMobile extends Component {
  constructor(props){
    super(props);
    this.state = {
      showingTiles: true
    }

    this._displayChange = this._displayChange.bind(this);
  }

  _displayChange() {
    if(this.state.showingTiles){
      this.setState({
        showingTiles: false
      })
    }else{
      this.setState({
        showingTiles: true
      })
    }
  }


  render() {
    return (
      <div className="displayContainerMobile">
        <button onClick={this._displayChange} />
        <div style={{display: this.state.showingTiles ? 'block' : 'none'}} >
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
        </div>
        <div style={{display: this.state.showingTiles ? 'none' : 'block'}}>
          <Map />
        </div>

      </div>
    );
  }
}

export default DisplayContainerMobile;
