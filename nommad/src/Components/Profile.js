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

            <h5>Price:{this.state.truck.price}</h5>
            <p>{this.state.truck.isClosed ? 'Closed' : 'Open'}</p>
        </section>

        <section className="bio">
          <h4>{this.state.truck.location.address1}</h4>
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
