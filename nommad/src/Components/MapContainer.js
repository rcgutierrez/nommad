import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import axios from 'axios';
import ReactDOM from 'react-dom';

class MapContainer extends Component {


  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      trucksArr: this.props.trucks,
    }

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  componentDidMount() {
    console.log("Component mounted!");
  }



  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onInfoWindowClose(){
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }



  componentWillMount(){
    console.log('component currently mounting');
  }


  componentWillUpdate(){
    console.log('component updated!');
  }

  componentDidUpdate(){
    console.log('component did update');
  }

  render() {
    console.log(this.props.trucks);

    var mapCenter = { // default to downtown Austin
          lat:30.267153,
          lng:-97.743061
        };
    if (this.props.trucks.length) {
      mapCenter = { // move to first truck position
        lat: this.props.trucks[0].coordinates.latitude,
        lng: this.props.trucks[0].coordinates.longitude
      };
    }
    var truckComponents = this.props.trucks.map((truckData) => <Marker key={truckData.id}
      name={truckData.name} info={this.props.trucks.name} onClick={this.onMarkerClick} position={{lat:truckData.coordinates.latitude, lng:truckData.coordinates.longitude }}  icon={{url: require('../images/truck.svg')}} />);


    const {props} = this, {mapStyles} = props;

    return (
     <Map google={this.props.google}
        onClick={this.onMapClicked}
        styles={mapStyles}
        center={mapCenter}
        zoom={12}>

        {truckComponents }

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
              <p>{this.state.selectedPlace.info}</p>
            </div>
        </InfoWindow>
      </Map>
    )
  }
};

MapContainer.defaultProps ={
  mapStyles: [{"elementType": 'geometry', "stylers": [{"color": '#242f3e'}]}, {"elementType": 'labels.text.stroke', "stylers": [{"color": '#242f3e'}]},
            {"elementType": 'labels.text.fill', "stylers": [{"color": '#746855'}]},
            {"featureType": 'administrative.locality', "elementType": 'labels.text.fill', "stylers": [{"color": '#d59563'}]},
            {"featureType": 'poi', "elementType": "labels.text.fill", "stylers": [{"color": '#d59563'}]},
            {"featureType": 'poi.park', "elementType": 'geometry', "stylers": [{"color": '#263c3f'}] },
            {"featureType": 'poi.park', "elementType": 'labels.text.fill', "stylers": [{"color": '#6b9a76'}]},
            {"featureType": 'road', "elementType": 'geometry', "stylers": [{"color": '#38414e'}]},
            {"featureType": 'road', "elementType": 'geometry.stroke', "stylers": [{"color": '#212a37'}]},
            {"featureType": 'road',"elementType": 'labels.text.fill',"stylers": [{"color": '#9ca5b3'}]},
            {"featureType": 'road.highway', "elementType": 'geometry', "stylers": [{"color": '#746855'}]},
            {"featureType": 'road.highway', "elementType": 'geometry.stroke', "stylers": [{"color": '#1f2835'}]},
            {"featureType": 'road.highway', "elementType": 'labels.text.fill', "stylers": [{"color": '#f3d19c'}]},
            {"featureType": 'transit', "elementType": 'geometry', "stylers": [{"color": '#2f3948'}]},
            {"featureType": 'transit.station', "elementType": 'labels.text.fill', "stylers": [{"color": '#d59563'}]},
            {"featureType": 'water', "elementType": 'geometry', "stylers": [{"color": '#17263c'}]},
            {"featureType": 'water', "elementType": 'labels.text.fill', "stylers": [{"color": '#515c6d'}]},
            {"featureType": 'water', "elementType": 'labels.text.stroke', "stylers": [{"color": '#17263c'}]}]
};


export default GoogleApiWrapper({
  apiKey: ("AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg")
})(MapContainer)
