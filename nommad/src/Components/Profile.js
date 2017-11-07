import React, { Component } from 'react';



class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {
      truck: this.props.truck
    }
  }



  render() {

    return (
      <div className="profile">



        <section className="main-info">
            <h2>{this.state.truck.name}</h2>
            <img src={require('../images/nom.svg')} width='50px' height='50px' />
            <p>{this.state.truck.price}</p>
            <p>{this.state.truck.isClosed ? 'Closed' : 'Open'}</p>
        </section>

        <section className="bio">
          <h4>Bio</h4>
        </section>

        <section className="menu">
          <h4>Menu</h4>
        </section>

        <section className="locationMap">
          <p>this section will be a map</p>
        </section>

        <section className="ratings">
          <p>Yelp Rating: {this.state.truck.rating}</p>
        </section>

        <section className="userPics">
          <p>tiles of user pics</p>
        </section>

      </div>
    );
  }
}

export default Profile;

// <section className="picture-slides">
//   <img src={this.state.truck.image_url} width='50px' height='50px' />
// </section>
