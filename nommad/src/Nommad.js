import React, { Component } from 'react';
import axios from 'axios';
import './css/default.css';
import Nav from './Components/Nav';
import DisplayContainerMobile from './Components/DisplayContainerMobile';
import DisplayContainerDesktop from './Components/DisplayContainerDesktop';
import Profile from './Components/Profile';
import MapContainer from './Components/MapContainer';
//sophia delete this
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
      this.getFoodTruck();
    }

    getFoodTruck() {
      this.setState({
        isFetchingTrucks: true
      })

    getZipCode() {
      // console.log(this.state.getRequestData, ' request data');
      let truckInfoArr = [];
      let data = this.state.getRequestData;
      let zip = document.querySelector("input").value;
        console.log(zip, ' zip');
        data.forEach(obj => {
          // console.log(typeof obj.location.zip_code, ' objects')
          if(obj.location.zip_code === zip) {
            console.log(`Data match`)
            truckInfoArr.push(obj);
          }
        })
        console.log(truckInfoArr, ' data info')
      return truckInfoArr;
    }


    const yelpApi = 'https://nommad-backend.herokuapp.com/api';
    axios.get(yelpApi)
         .then((response) => {
           console.log(response);
           let trucksArr = response.data.businesses;
           this.setState({
             getRequestData: trucksArr
           })
           //Re render it in UI
         }).catch(error => {
           console.log(`Error, ${error}`);
         });
    }

  render() {
    let truckInfo = this.state.getRequestData;
    let truckInfoArr = [];
    for (var i = 0; i < truckInfo.length; i++){
      let truck = truckInfo[i];
      truckInfoArr.push(truckInfo[i]);
    }
    return (
      <div className="App">
        <div className="nav-bar">
          <Nav />
          <div className="search">
            <input type="text" placeholder="Search by Zip Code"></input>
            <button type="submit">Search</button>
          </div>
        </div>

       {/* <DisplayContainerMobile trucks={truckInfoArr} />*/}
        <DisplayContainerDesktop trucks={truckInfoArr} />


      </div>
    );
  }
}

export default Nommad;
