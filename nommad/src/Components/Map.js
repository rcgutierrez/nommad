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


  render() {
    const style = {
      width: '100%',
      height: '100%'
    }

    return (
     <Map google={this.props.google}
      style={style}
      initialCenter={{
            lat: 30.267153,
            lng: -97.743061
          }}
      zoom={14}
      className={'mapstuff'}
      onClick={this.onMapClicked}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'}
                position={{lat:30.2706345638105, lng:-97.7415420642792}}
                icon={{
                  url: "../../public/images/foodtruck@2x.png",

                }}
                 />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg")
})(MapContainer)
