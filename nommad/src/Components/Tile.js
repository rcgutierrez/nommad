import React, { Component } from 'react';

class Tile extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="tile">
      <p>{this.props.truck}</p>


      </div>
    );
  }
}

export default Tile;
