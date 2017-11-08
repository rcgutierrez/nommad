import React, { Component } from 'react';
import Tile from './Tile';
import MapContainer from './MapContainer';
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
    var truckComponents = this.props.trucks.map((truckData)=>
      <Tile key={truckData.id} truck={truckData}/>);

    return (
      <div className="displayContainerMobile">
        <button onClick={this._displayTiles}>Tile</button>
        <button onClick={this._displayMap}>Map</button>

        <div style={{display: this.state.showingTiles ? 'flex' : 'none'}} >
          {truckComponents}
        </div>

        <div style={{display: this.state.showingTiles ? 'none' : 'block'}}>
           <MapContainer trucks={this.state.trucksArr} />
        </div>

      </div>
    );
  }
}

export default DisplayContainerMobile;


// {resultsArr}
