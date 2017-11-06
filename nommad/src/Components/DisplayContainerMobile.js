import React, { Component } from 'react';
import Tile from './Tile';
import Map from './Map';

class DisplayContainerMobile extends Component {
  constructor(props){
    super(props);
    this.state = {
      showingTiles: true,
      trucksArr: ["this is tile one", "this is tile two", "this is tile three"]
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
    let resultsArr = this.state.trucksArr.map((truck, index)=><Tile key={index} truck={truck} />);
    return (
      <div className="displayContainerMobile">
        <button onClick={this._displayChange} />
        <div style={{display: this.state.showingTiles ? 'block' : 'none'}} >
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
