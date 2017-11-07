import React, { Component } from 'react';
import axios from 'axios';
import './css/default.css';
import Nav from './Components/Nav';
import DisplayContainerMobile from './Components/DisplayContainerMobile';
import DisplayContainerDesktop from './Components/DisplayContainerDesktop';
import Profile from './Components/Profile';
import Map from './Components/Map';

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
             "review_count": 699,
             "categories": [
                 {
                     "alias": "korean",
                     "title": "Korean"
                 },
                 {
                     "alias": "foodtrucks",
                     "title": "Food Trucks"
                 },
                 {
                     "alias": "bbq",
                     "title": "Barbeque"
                 }
             ],
             "rating": 4,
             "coordinates": {
                 "latitude": 30.2706345638105,
                 "longitude": -97.7415420642792
             },
             "transactions": [],
             "price": "$",
             "location": {
                 "address1": "823 Congress Ave",
                 "address2": null,
                 "address3": "",
                 "city": "Austin",
                 "zip_code": "78701",
                 "country": "US",
                 "state": "TX",
                 "display_address": [
                     "823 Congress Ave",
                     "Austin, TX 78701"
                 ]
             },
             "phone": "+15128009098",
             "display_phone": "(512) 800-9098",
             "distance": 130.71968757099998
          }],
          [{
             "id": "chilantro-austin",
             "name": "Chi'Lantro2",
             "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/haq5ytA_xtpj9m-sVHzjyA/o.jpg",
             "is_closed": false,
             "url": "https://www.yelp.com/biz/chilantro-austin?adjust_creative=O5Q0Q2neGOLY6zUlCa3fKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=O5Q0Q2neGOLY6zUlCa3fKQ",
             "review_count": 699,
             "categories": [
                 {
                     "alias": "korean",
                     "title": "Korean"
                 },
                 {
                     "alias": "foodtrucks",
                     "title": "Food Trucks"
                 },
                 {
                     "alias": "bbq",
                     "title": "Barbeque"
                 }
             ],
             "rating": 4,
             "coordinates": {
                 "latitude": 30.2706345638105,
                 "longitude": -97.7415420642792
             },
             "transactions": [],
             "price": "$",
             "location": {
                 "address1": "823 Congress Ave",
                 "address2": null,
                 "address3": "",
                 "city": "Austin",
                 "zip_code": "78701",
                 "country": "US",
                 "state": "TX",
                 "display_address": [
                     "823 Congress Ave",
                     "Austin, TX 78701"
                 ]
             },
             "phone": "+15128009098",
             "display_phone": "(512) 800-9098",
             "distance": 130.71968757099998
          }],
           [{
              "id": "chilantro-austin",
              "name": "Chi'Lantro3",
              "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/haq5ytA_xtpj9m-sVHzjyA/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/chilantro-austin?adjust_creative=O5Q0Q2neGOLY6zUlCa3fKQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=O5Q0Q2neGOLY6zUlCa3fKQ",
              "review_count": 699,
              "categories": [
                  {
                      "alias": "korean",
                      "title": "Korean"
                  },
                  {
                      "alias": "foodtrucks",
                      "title": "Food Trucks"
                  },
                  {
                      "alias": "bbq",
                      "title": "Barbeque"
                  }
              ],
              "rating": 4,
              "coordinates": {
                  "latitude": 30.2706345638105,
                  "longitude": -97.7415420642792
              },
              "transactions": [],
              "price": "$",
              "location": {
                  "address1": "823 Congress Ave",
                  "address2": null,
                  "address3": "",
                  "city": "Austin",
                  "zip_code": "78701",
                  "country": "US",
                  "state": "TX",
                  "display_address": [
                      "823 Congress Ave",
                      "Austin, TX 78701"
                  ]
              },
              "phone": "+15128009098",
              "display_phone": "(512) 800-9098",
              "distance": 130.71968757099998
           }]
        ]

    }
  }



  render() {

    return (
      <div className="App">
        <Nav />
        <div className="search">
          <input type="text" placeholder="Search by Zip Code"></input>
          <button type="submit">Search</button>
        </div>

        <DisplayContainerMobile trucks={this.state.trucksArr} />
        <DisplayContainerDesktop trucks={this.state.trucksArr} />


      </div>
    );
  }
}

export default Nommad;
