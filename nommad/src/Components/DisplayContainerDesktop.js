import React, { Component } from 'react';
import Tile from './Tile';
import MapContainer from './MapContainer';
// import Profile from './Profile';


class DisplayContainerDesktop extends Component {
  constructor(props){
    super(props);
    this.state = {
      showingTiles: true,
      trucksArr: this.props.trucks,
      message: ''
    }
  }

  componentDidMount(){
    this.getMsg();
  }

  getMsg(){
    setTimeout(() => {
      this.setState({
        message: ''
      })
    }, 1000);
    setTimeout(() => {
      this.setState({
        message: <div className="message"><p>There are no food trucks near that location.</p><img alt="sobbing emoji" src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/114/loudly-crying-face_1f62d.png"/></div>
      })
    }, 2500);
  }

  onSearch(){
    this.setState({
      message: ''
    })
    this.getMsg();
  }

  render() {

    var trucks;

    if(this.state.trucksArr)
      trucks = JSON.parse(JSON.stringify(this.props.trucks));
    console.log(trucks[0]);

    var truckComponents = this.props.trucks.map((truckData)=>
      <Tile key={truckData.id} truck={truckData}/>
    );

    return (
      <div className="displayContainerDesktop">
        <div className="resultTiles" >
          { this.state.message }
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
