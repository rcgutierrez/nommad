import React, { Component } from 'react';
import Profile from './Profile';

class Tile extends Component {
  constructor(props){
    super(props);

    this.state = {
      truck: this.props.truck
    }
  }

  render() {
    let sectionStyle = {
        width: "275px !important",
        minHeight: "200px",
        maxHeight: "200px",
        backgroundImage: `url(${this.state.truck.image_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };

    return (

        <div className="tile" style={ sectionStyle }>

          <div className="iconContainer">
            <img src={require('../images/nom.svg')} className="nom" alt="" />
          </div>
          <div className="profilePage">
            <Profile truck={this.state.truck} />
          </div>
        </div>
    );
  }
}

export default Tile;
