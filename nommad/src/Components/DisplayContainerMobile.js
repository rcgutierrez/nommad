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
    console.log(this.state.trucksArr);
    let resultsArr = this.state.trucksArr.map((truck, index)=><Tile key={index} truck={truck} />);
    return (
      <div className="displayContainerMobile">
        <button onClick={this._displayChange}>TOGGLE</button>

        <div style={{display: this.state.showingTiles ? 'flex' : 'none'}} >
          {resultsArr}
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
