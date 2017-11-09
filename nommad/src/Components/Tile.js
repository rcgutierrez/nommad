import React, { Component } from 'react';
import Profile from './Profile';

class Tile extends Component {
  constructor(props){
    super(props);

    this.state = {
      truck: this.props.truck,
      isProfileShowing: false,
    }
    this._showProfile = this._showProfile.bind(this);
  }

  _showProfile() {
    if(!this.state.isProfileShowing){
      this.setState({
        isProfileShowing: true
      })
    }else{
      this.setState({
        isProfileShowing: false
      })
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

        <div className="tile" style={ sectionStyle } onClick={this._showProfile}>
        
          <div className="iconContainer">
            <img src={require('../images/nom.svg')} className="nom" alt="" />
          </div>

          <h4 style={{display: this.state.isProfileShowing ? 'none' : 'block'}}>{this.state.truck.name} + </h4>

          <div className="profilePage" style={{display: this.state.isProfileShowing ? 'flex' : 'none'}}>
            <Profile truck={this.state.truck} />
          </div>
        </div>
    );
  }
}

export default Tile;
