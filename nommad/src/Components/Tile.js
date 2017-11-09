import React, { Component } from 'react';
import Profile from './Profile';

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
      // nomCount: this.state.nomCount+=1
      nomCount: this.state.nomCount+=1,
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
        width: "275px",
        minHeight: "200px",
        maxHeight: "200px",
        backgroundImage: `url(${this.state.truck.image_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    // var {number} = this.props;

    return (

        <div className="tile" style={ sectionStyle } onClick={this._showProfile}>
          <div className="iconContainer" onClick={this._addNom}>
            <div className="score">{this.state.nomCount}</div>
            <img src={require('../images/nom.svg')} className="nom" alt="" />
            <img src={require('../images/bubble.svg')} className="bubble" alt=""/>
          </div>
          <h4 style={{display: this.state.isProfileShowing ? 'none' : 'block'}}>{this.state.truck.name}</h4>

          <div className="profilePage" style={{display: this.state.isProfileShowing ? 'flex' : 'none'}}>
            <Profile truck={this.state.truck} />
          </div>
        </div>
    );
  }
}

export default Tile;
