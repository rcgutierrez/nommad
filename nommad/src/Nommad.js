import React, { Component } from 'react';
import './css/default.css';
import Nav from './Components/Nav';
import DisplayContainerMobile from './Components/DisplayContainerMobile';
import DisplayContainerDesktop from './Components/DisplayContainerDesktop';
import Profile from './Components/Profile';

class Nommad extends Component {
  constructor(props){
    super(props);

    this.state = {
      trucksArr: [
        [{
           "id": "chilantro-austin",
           "name": "Chi'Lantro1",
           "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/haq5ytA_xtpj9m-sVHzjyA/o.jpg",
           "is_closed": false,
           "url": "https://www.yelp.com/biz/chilantro-austin?adjust_creative=O5Q0Q2neGOLY6zUlCa3fKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=O5Q0Q2neGOLY6zUlCa3fKQ",
           "review_count": 699
         }],
        [{
           "id": "chilantro-austin",
           "name": "Chi'Lantro2",
           "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/haq5ytA_xtpj9m-sVHzjyA/o.jpg",
           "is_closed": false,
           "url": "https://www.yelp.com/biz/chilantro-austin?adjust_creative=O5Q0Q2neGOLY6zUlCa3fKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=O5Q0Q2neGOLY6zUlCa3fKQ",
           "review_count": 699
         }],
         [{
            "id": "chilantro-austin",
            "name": "Chi'Lantro3",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/haq5ytA_xtpj9m-sVHzjyA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/chilantro-austin?adjust_creative=O5Q0Q2neGOLY6zUlCa3fKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=O5Q0Q2neGOLY6zUlCa3fKQ",
            "review_count": 699
          }],
          [{
             "id": "chilantro-austin",
             "name": "Chi'Lantro4",
             "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/haq5ytA_xtpj9m-sVHzjyA/o.jpg",
             "is_closed": false,
             "url": "https://www.yelp.com/biz/chilantro-austin?adjust_creative=O5Q0Q2neGOLY6zUlCa3fKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=O5Q0Q2neGOLY6zUlCa3fKQ",
             "review_count": 699
           }],
           [{
              "id": "chilantro-austin",
              "name": "Chi'Lantro5",
              "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/haq5ytA_xtpj9m-sVHzjyA/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/chilantro-austin?adjust_creative=O5Q0Q2neGOLY6zUlCa3fKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=O5Q0Q2neGOLY6zUlCa3fKQ",
              "review_count": 699
            }],
            [{
               "id": "chilantro-austin",
               "name": "Chi'Lantro6",
               "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/haq5ytA_xtpj9m-sVHzjyA/o.jpg",
               "is_closed": false,
               "url": "https://www.yelp.com/biz/chilantro-austin?adjust_creative=O5Q0Q2neGOLY6zUlCa3fKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=O5Q0Q2neGOLY6zUlCa3fKQ",
               "review_count": 699
             }]
        ]
      }
  }



  render() {

    return (
      <div className="App">
        <Nav />
        <div className="seach">
          <input type="text" placeholder="Search by Zip Code"></input>
          <button type="submit">Search</button>
        </div>

        <DisplayContainerDesktop trucks={this.state.trucksArr} />
        <div className="mobileView">
          <DisplayContainerMobile trucks={this.state.trucksArr} />
        </div>
      </div>
    );
  }
}

export default Nommad;
