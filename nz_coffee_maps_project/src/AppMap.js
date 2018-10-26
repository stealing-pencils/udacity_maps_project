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
    selectedPlace: [],
    venues: [],
    center: [],
    markers: [],
    showingInfoWindow : false,
    activeMarker: {}
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
            isVisible: true,
            isOpen: false
          }
        })
        this.setState({venues, center, markers})
      });
  }


  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }



  render() {

    const style = {
      height: '100%',
      width: '100%'
    }

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    console.log(this.state.markers)


    return (

        <Map
        google={this.props.google}
        style={style}
        className = {'map'}
        initialCenter={{
          lat: -36.848461,
          lng: 174.763336
        }}
        zoom={14}
        >
          {this.state.markers.map((marker, index) => (
            <Marker
            key = {index}
            className = "markers"
            position={{lat: marker.lat, lng: marker.lng}}
            onClick = {this.onMarkerClick}
            />


          ))}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <p>Hello</p>
              </div>
          </InfoWindow>
        </Map>


    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBJ39aLUnpQEi-Ewf6EIIKguFlX-z_SNbw")
})(AppMap)
