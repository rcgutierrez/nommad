import React, { Component } from 'react';
import Tile from './Tile';
import Map from './Map';
import Profile from './Profile';


class DisplayContainerMobile extends Component {
  constructor(props){
    super(props);
    this.state = {
      showingTiles: true,
      trucksArr: this.props.trucks
    }

    this._displayMap = this._displayMap.bind(this);
    this._displayTiles = this._displayTiles.bind(this);
  }

  _displayMap() {
    this.setState({
      showingTiles: false
    })
  }

  _displayTiles() {
    this.setState({
      showingTiles: true
    })
  }


  render() {
    let resultsArr = this.state.trucksArr.map((truck, index)=><Tile key={index} truck={truck} />);
    let profileArr = this.state.trucksArr.map((truck, index)=><Profile key={index} truck={truck}/>)

    return (
      <div className="displayContainerMobile">
        <button onClick={this._displayTiles}>Tile</button>
        <button onClick={this._displayMap}>Map</button>

        <div style={{display: this.state.showingTiles ? 'flex' : 'none'}} >
        </div>

        <div style={{display: this.state.showingTiles ? 'none' : 'block'}}>
          <Map />
        </div>

      </div>
    );
  }
}

export default DisplayContainerMobile;


// {resultsArr}
