import React, { Component } from 'react';
import Profile from './Profile';
import axios from 'axios';

class Tile extends Component {
  constructor(props){
    super(props);

    this.state = {
      truck: this.props.truck,
      isProfileShowing: false,
      nomCount: 0

    }
    this._showProfile = this._showProfile.bind(this);
    this._addNom = this._addNom.bind(this);
  }


  _addNom() {
    this.setState({
      nomCount: this.state.nomCount+=1
    })
    console.log(this.state.nomCount);
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
        width: "100%",
        height: "100%",
        backgroundImage: `url(${this.state.truck.image_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textShadow: "0px 0px 2px white"
      };

    return (
      <div className="tile" style={ sectionStyle } onClick={this._showProfile}>
         <h4 style={{display: this.state.isProfileShowing ? 'none' : 'block'}}>{this.state.truck.name}</h4>
        <div className="iconContainer" onClick={this._addNom}>
          <img src={require('../images/nom.svg')} className="nom" />
          <img src={require('../images/bubble.svg')} className="bubble" />
        </div>
        <div className="profilePage" style={{display: this.state.isProfileShowing ? 'flex' : 'none', height: '50vh'}}>
          <Profile truck={this.state.truck} />
        </div>
      </div>
    );
  }
}

export default Tile;
