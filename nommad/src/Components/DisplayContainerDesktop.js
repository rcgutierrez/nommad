import React, { Component } from 'react';
import Tile from './Tile';
import Map from './Map';
import Profile from './Profile';

class DisplayContainerDesktop extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     showingTiles: true,
  //     trucksArr: this.props.trucks
  //   }
  // }
  render() {
    var truckComponents = this.props.trucks.map((truckData)=>
      <Tile key={truckData.id} truck={truckData}/>
    );
    return (
      <div className="displayContainerDesktop">
        <div className="resultTiles">
          { truckComponents }
        </div>
        <div className="resultMap">
          <Map />
        </div>
      </div>
    );
  }
}

export default DisplayContainerDesktop;
