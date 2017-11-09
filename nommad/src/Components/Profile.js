import React, { Component } from 'react';

class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {
      truck: this.props.truck,
      rating: []
    }
  }

  componentDidMount(){

  }


  render() {
    // console.log(this.state.truck);
    let rating = Math.round(this.state.truck.rating);
    let stars;
    switch(rating) {
    case 1:
        stars = <img src={'/yelp_stars/web_and_ios/small/small_1.png'} />
        break;
    case 2:
        stars = <img src={'/yelp_stars/web_and_ios/small/small_2.png'} />
        break;
    case 3:
        stars = <img src={'/yelp_stars/web_and_ios/small/small_3.png'} />
        break;
    case 4:
        stars = <img src={'/yelp_stars/web_and_ios/small/small_4.png'} />
        break;
    case 5:
        stars = <img src={'/yelp_stars/web_and_ios/small/small_5.png'} />
        break;
    default:
      stars = '¯\\_(ツ)_/¯'
}
    return (
      <div className="profile">



        <section className="main-info">
            <h2><a href={this.state.truck.url}>{this.state.truck.name}</a></h2>
            <h5>Price: {this.state.truck.price ? this.state.truck.price : '¯\\_(ツ)_/¯' }</h5>
            <p>{this.state.truck.isClosed ? 'Sorry, this truck is permantly closed' : ''}</p>
        </section>

        <section className="bio">
          <p><strong>{this.state.truck.location.address1}</strong></p>
          <p><strong>{this.state.truck.location.city}, {this.state.truck.location.state} {this.state.truck.location.zip_code}</strong></p>
        </section>


        <section className="ratings">
          <p>Yelp Rating:</p>
          <p>{stars}</p>
        </section>

        {/*<section className="userPics">
          <p>tiles of user pics</p>
        </section>*/}

      </div>
    );
  }
}

export default Profile;

// <section className="picture-slides">
//   <img src={this.state.truck.image_url} width='50px' height='50px' />
// </section>
