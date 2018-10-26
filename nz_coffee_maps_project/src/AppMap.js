import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MyMarkers from './Markers'

var foursquare = require('react-foursquare')({
clientID: 'OVXN3KG3ITFHVC2XKVARXSTXTSHRLL0OVRIUQCQE53WMPOUO',
clientSecret: 'TQTIW2FA04GLWPHBWBCK20YFKRNZ0H25PRRCTRANBZWWUTTG'
});

var params = {
"near": "Auckland, NZ",
"query": 'pies'
};



class AppMap extends Component {

  state = {
    selectedPlace: {},
    showingInfoWindow: false,
    activeMarker: {},
    venues: [],
    center: [],
    markers: [],
    openMarker: {}
  }

  componentDidMount() {
    foursquare.venues.getVenues(params)
      .then(res=> {
        const {venues} = res.response
        const {center} = res.response.geocode.feature.geometry
        const markers = venues.map(venue => {
          return {
            name: venue.name,
            lat: venue.location.lat,
            lng: venue.location.lng,
            isOpen: false,
            isVisible: true,
            id: venue.id
          }
        })
        this.setState({venues, center, markers})
      });
  }

  handleMarkerClick = (marker) => {
    marker.isOpen = true;
    this.setState({ markers : Object.assign(this.state.markers, marker)})
    // console.log(marker)
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })
  };

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  setMarkerState = () => {

  }


  render() {

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }


    // console.log(this.state.markers)
    console.log(this.state.markers)

    return (

        <Map
        google={this.props.google}
        style={{width: '100%', height: '100%'}}
        className={'map'}
        zoom={14}
        initialCenter={{
          lat: -36.848461,
          lng: 174.763336
        }}
        onClick={this.onMapClicked}
        >
        {this.state.markers.filter(marker => (
          marker.isVisible === true )
        ).map((marker, index) => (
          <Marker
          key = {index}
          className = "markers"
          position={{lat: marker.lat, lng: marker.lng}}
          name={'Current Location'}
          location = {marker.id}
          onClick={this.onMarkerClick}
          >

          </Marker>


        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <p>{this.location}</p>
        </InfoWindow>

        </Map>


    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBJ39aLUnpQEi-Ewf6EIIKguFlX-z_SNbw")
})(AppMap)
