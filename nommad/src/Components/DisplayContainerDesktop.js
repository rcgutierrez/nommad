import React, { Component } from 'react';
import Tile from './Tile';
import MapContainer from './MapContainer';
// import Profile from './Profile';

class DisplayContainerDesktop extends Component {
  constructor(props){
    super(props);
    this.state = {
      showingTiles: true,
      trucksArr: this.props.trucks
    }
  }
  render() {


    // var trucks;

    //if(this.state.trucksArr)
      //trucks = JSON.parse(JSON.stringify(this.props.trucks));

    var truckComponents = this.props.trucks.map((truckData)=>
      <Tile key={truckData.id} truck={truckData}/>
    );


    return (
      <div className="displayContainerDesktop">
        <div className="resultTiles">
          { truckComponents }
        </div>
        <div className="resultMap">
          <MapContainer trucks={this.props.trucks} />
        </div>
      </div>
    );
  }
}

export default DisplayContainerDesktop;
