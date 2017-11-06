import React, { Component } from 'react';

class Tile extends Component {
  constructor(props){
    super(props);

    this.state = {
      truck: this.props.truck[0]
    }
  }

  render() {
    let sectionStyle = {
        width: "100%",
        height: "100%",
        backgroundImage: `url(${this.state.truck.image_url})`
      };
    return (
      <div className="tile" style={ sectionStyle }>
        <h3>{this.state.truck.name}</h3>



      </div>
    );
  }
}

export default Tile;


// let tileImg = this.props.truck[0].image_url};
// let sectionStyle = {
//       backgroundImage: "url(" + {tileImg} + ")"
//     };
// console.log(this.props.truck);
