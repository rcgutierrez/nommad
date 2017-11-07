import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
 constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }


  fetchPlaces(mapProps, map) {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
    // ...
  }

  render() {
    const {props, state} = this,
          {mapStyles} = props;

    const style = {
      padding: 5,
      width: '100%',
      height: '100%'
    };

    return (
     <Map google={this.props.google}
      styles={mapStyles}
      initialCenter={{
            lat: 30.267153,
            lng: -97.743061
          }}
      zoom={14}
      className={'map'}
      onClick={this.onMapClicked}>

        <Marker
          name={'Current location'}
          position={{lat:30.2706345638105, lng:-97.7415420642792}}
          icon={{
            url: "./images/truck.svg",
          }}
           />


        {/*<InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>*/}
      </Map>
    );
  }
}

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
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg")
})(MapContainer)
