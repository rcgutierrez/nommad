import React, { Component } from 'react';
import axios from 'axios';
import './css/default.css';
import Nav from './Components/Nav';
import DisplayContainerDesktop from './Components/DisplayContainerDesktop';

class Nommad extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFetchingTrucks: false,
      getRequestData: ''
    }
    this.getFoodTruck = this.getFoodTruck.bind(this);
    this.getZipCode = this.getZipCode.bind(this);
      }
        componentDidMount() {
          this.getFoodTruck('78701');
        }
        getFoodTruck(zip) {
          this.setState({
            isFetchingTrucks: true
          })
          const yelpApi = 'https://nommad-backend.herokuapp.com/api/' + zip;
          axios.get(yelpApi)
             .then((response) => {
               console.log(`response gathered `, response.data.businesses.length);
               let trucksArr = response.data.businesses;
               this.setState({
                 getRequestData: trucksArr
               })
               //Re render it in UI
             }).catch(error => {
               console.log(`Error, ${error}`);
          });
        }
        getZipCode(e) {
          e.preventDefault();
          this.setState({
            getRequestData: ''
          });
          let truckInfoArr = [];

          let zip = document.querySelector("input").value;
          this.getFoodTruck(zip);
          let data = this.state.getRequestData;
            console.log(zip, ' zip');
            data.forEach(obj => {
              // console.log(typeof obj.location.zip_code, ' objects')
              if(obj.location.zip_code === zip) {
                console.log(`Data match`)
                truckInfoArr.push(obj);
              }
            })
            console.log(truckInfoArr, ' data info')
            this.setState({
              getRequestData: truckInfoArr,
            });
          let message = document.querySelector(".nav-bar").append(`Displaying food trucks in area code ${zip}`)
        }

  render() {
    let truckInfo = this.state.getRequestData;
    let truckInfoArr = [];
    for (var i = 0; i < truckInfo.length; i++){
      truckInfoArr.push(truckInfo[i]);
    }


    return (
      <div className="App">
        <div className="nav-bar">
          <Nav />
          <div className="search">
            <form onSubmit={this.getZipCode}>
              <input type="text" placeholder="Search by Zip Code or City"></input>
              <button type="submit" onClick={this.getZipCode}>Search</button>
            </form>
          </div>
          <br />
          <br />

        </div>

        <DisplayContainerDesktop trucks={truckInfoArr} />


        <footer className="clearfix">
          <p>Made with <span className="heart">♥︎</span> at General Assembly by Karla, Natasha, Raul, and Sofia with Yelp Fusion API.</p>
          <div>
            <img src={require('./images/yelp-logo.png')} id="yelp-logo" alt="yelp logo" />
            <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_gray-128.png" id="github-logo" alt="github logo" />
          </div>
        </footer>
      </div>
    );
  }
}

export default Nommad;
